window.App = (function () {

  var D = window.ISE_DATA;
  var A = window.ISE_ANALYSIS;
  var LS_KEY = "ise_state_v1";

  var state = {
    user: { name: "", age: "child", lang: "en", support: true, onboarded: false },
    settings: { fontSize: 1, speechSpeed: 1, audioOn: true, captions: true, readability: false, support: true },
    history: []
  };

  var cur = { scenario: null, response: null, result: null, realWorld: false };

  var onboard = { step: 0, lang: state.user.lang, age: state.user.age, support: state.user.support };

  var rec = null;
  var recActive = false;
  var lang = function () { return state.user.lang; };
  var tr = function (k) { return (D.L[lang()] && D.L[lang()][k]) || D.L.en[k] || k; };

  var LANGS = [
    { id: "en", name: "English" },
    { id: "ta", name: "தமிழ்" },
    { id: "hi", name: "हिन्दी" }
  ];

  var UI = document.getElementById("app");
  var toastEl = document.getElementById("toast");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function load() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) {
        var s = JSON.parse(raw);
        if (s.user) state.user = s.user;
        if (s.settings) state.settings = s.settings;
        if (s.history) state.history = s.history;
      }
    } catch (e) {}
  }

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }

  function applySettings() {
    var s = state.settings;
    document.documentElement.style.setProperty("--fs-scale", s.fontSize);
    document.documentElement.style.setProperty("--speed", s.speechSpeed);
    document.body.classList.toggle("readability", !!s.readability);
    document.body.classList.toggle("support-mode", !!s.support);
    document.body.classList.toggle("captions-off", !s.captions);
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("reduce-motion");
    }
  }

  function show(name) {
    window.scrollTo(0, 0);
    UI.innerHTML = screens[name] ? screens[name]() : "";
    var olds = UI.querySelectorAll(".screen");
    for (var i = 0; i < olds.length; i++) olds[i].classList.remove("active");
    UI.firstElementChild && UI.firstElementChild.classList.add("active");
  }

  function pickElse(skill) {
    var age = state.user.age;
    var ex = cur.scenario ? cur.scenario.id : null;
    var s = A.pickScenario(skill, age, ex);
    if (!s) s = A.pickScenario(skill, age, null);
    return s;
  }

  function skillProgress(skill) {
    var items = state.history.filter(function (h) { return h.scenario.skill === skill; });
    if (!items.length) return 0;
    var num = 0, den = 0;
    items.forEach(function (h) { num += h.result.scores.overall * h.scenario.difficulty; den += h.scenario.difficulty; });
    return Math.round(num / Math.max(1, den));
  }

  function allStats() {
    var n = state.history.length;
    var sum = 0, wsum = 0, wden = 0;
    state.history.forEach(function (h) { sum += h.result.scores.overall; wsum += h.result.scores.overall * h.scenario.difficulty; wden += h.scenario.difficulty; });
    var avg = n ? Math.round(sum / n) : 0;
    var weighted = wden ? wsum / wden : 0;
    var cl = A.levelForScore(weighted);
    return { total: n, avg: avg, level: cl + 1, levelName: D.L[lang()].levelNames[cl], progress: Math.round(weighted) };
  }

  function skillLevelName(skill) {
    return D.L[lang()].levelNames[A.levelForScore(skillProgress(skill))];
  }

  function skillName(sid) { return D.L[lang()].skillNames[sid]; }

  function startSkill(skill) {
    cur.scenario = pickElse(skill);
    cur.realWorld = !skill;
    cur.response = null;
    cur.result = null;
    show("scenario");
    autoSpeak();
  }

  function autoSpeak() {
    if (state.settings.audioOn && cur.scenario && "speechSynthesis" in window) {
      setTimeout(function () {
        speak(cur.scenario.dialogue[lang()] || cur.scenario.dialogue.en);
      }, 80);
    }
  }

  function submitResponse(raw) {
    var text = String(raw || "").trim();
    if (!text) { toast(tr("typeHere")); return; }
    cur.response = text;
    var res = A.analyze(cur.scenario, text, lang());
    if (!res) return;
    cur.result = res;
    state.history.push({ scenario: cur.scenario, response: text, result: res, ts: Date.now() });
    if (state.history.length > 300) state.history.shift();
    save();
    show("think");
    setTimeout(function () { show("analysis"); }, 1100);
  }

  function speak(text, done) {
    if (!("speechSynthesis" in window)) { done && done(); return; }
    stopSpeak();
    var u = new SpeechSynthesisUtterance(text);
    var want = D.TTS_LANG[lang()];
    var voices = speechSynthesis.getVoices();
    var v = null;
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang && voices[i].lang.toLowerCase() === want.toLowerCase()) { v = voices[i]; break; }
    }
    if (v) u.voice = v;
    u.lang = want;
    u.rate = state.settings.speechSpeed;
    u.onstart = function () {
      var ind = document.getElementById("speaking");
      if (ind) ind.style.display = "flex";
    };
    u.onend = u.onerror = function () {
      var ind = document.getElementById("speaking");
      if (ind) ind.style.display = "none";
      done && done();
    };
    speechSynthesis.speak(u);
  }

  function stopSpeak() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    var ind = document.getElementById("speaking");
    if (ind) ind.style.display = "none";
  }

  function hasSTT() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  function toggleVoice() {
    if (!hasSTT()) { toast(tr("micUnsupported")); return; }
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    var btn = document.getElementById("voiceBtn");
    if (recActive) { stopVoice(); return; }
    rec = new SR();
    rec.lang = D.STT_LANG[lang()];
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    recActive = true;
    if (btn) { btn.classList.add("recording"); btn.textContent = tr("micActive"); }
    rec.onresult = function (e) {
      var tx = e.results[0][0].transcript;
      var ta = document.getElementById("resp");
      if (ta) ta.value = tx;
    };
    rec.onerror = function () {
      if (recActive && btn) { btn.classList.remove("recording"); btn.textContent = tr("micHint"); }
      recActive = false;
    };
    rec.onend = function () {
      if (recActive && btn) { btn.classList.remove("recording"); btn.textContent = tr("micHint"); }
      recActive = false;
    };
    rec.start();
  }

  function stopVoice() {
    recActive = false;
    if (rec) { try { rec.stop(); } catch (e) {} }
    var btn = document.getElementById("voiceBtn");
    if (btn) { btn.classList.remove("recording"); btn.textContent = tr("micHint"); }
  }

  function reset() {
    if (!window.confirm(tr("confirmReset"))) return;
    state.history = [];
    save();
    toast(tr("resetDone"));
    show("home");
  }

  function genRecommendation() {
    var progress = {};
    var max = { s: null, v: -1 }, min = { s: null, v: 1000 };
    D.SKILLS.forEach(function (s) {
      progress[s] = skillProgress(s);
      if (progress[s] >= max.v) { max.s = s; max.v = progress[s]; }
      if (progress[s] <= min.v) { min.s = s; min.v = progress[s]; }
    });
    if (state.history.length === 0) return "—";
    return tr("recText")
      .replace("{strong}", skillName(max.s))
      .replace("{weak}", skillName(min.s));
  }

  function words() {
    return {
      safety: skillName("safety"),
      boundary: skillName("boundaries"),
      communication: skillName("communication"),
      decision: tr("decision")
    };
  }

  var screens = {};

  screens.landing = function () {
    var i = tr("heroTitleA"), b = tr("heroTitleB");
    var loop = ["👀 See", "👂 Hear", "🧠 Think", "⚖️ Decide", "🗣️ Respond", "🌱 Grow"];
    var loopChips = loop.map(function (c, idx) {
      var cols = ["#2563eb", "#0d9488", "#7c3aed", "#d97706", "#db2777", "#159455"];
      return '<div class="loop-card"><span class="dot" style="background:' + cols[idx] + '"></span>' + c + "</div>";
    }).join("");
    var chips = D.SKILLS.map(function (s) {
      return '<span class="chip">' + D.SKILL_META[s].icon + " " + skillName(s) + "</span>";
    }).join("") + '<span class="chip">🌐 English · தமிழ் · हिन्दी</span><span class="chip">🎙️ Voice</span><span class="chip">♿ Support mode</span>';
    var cont = state.user.onboarded
      ? '<button class="btn btn-ghost" data-action="home">' + tr("continueL") + "</button>"
      : '<button class="btn btn-ghost" data-action="guestStart">' + tr("guest") + "</button>";
    return (
      '<div class="screen landing"><nav class="navbar">' +
        '<div class="logo"><span class="logo-badge">✦</span><span>ISE <span style="color:var(--muted);font-weight:700">· ' + tr("tagline") + "</span></span></div>" +
        '<span class="pill">' + tr("badgeVersion") + "</span>" +
      "</nav>" +
      '<div class="hero">' +
        '<div><h1>' + i + '<br><span class="grad">' + b + "</span></h1>" +
        '<p class="sub">' + tr("heroSub") + "</p>" +
        '<div class="hero-actions">' +
          '<button class="btn btn-primary" data-action="onboard">' + tr("start") + "</button>" + cont +
        "</div>" +
        '<div class="chips">' + chips + "</div></div>" +
        '<div class="hero-visual">' + loopChips + "</div>" +
      "</div></div>"
    );
  };

  screens.onboard = function () {
    var step = onboard.step;
    var steps = [tr("qLanguage"), tr("qAge"), tr("qSupport"), tr("nameQ")];
    var dots = "";
    for (var i = 0; i < 4; i++) dots += "<i class=\"" + (i <= step ? "on" : "") + "\"></i>";
    var progressHtml = '<div class="steps">' + dots + "</div>";
    var body = "";
    var foot = "";

    if (step === 0) {
      var langOpts = LANGS.map(function (l) {
        return '<button class="opt ' + (onboard.lang === l.id ? "sel" : "") + '" data-action="pickLang" data-x="' + l.id + '"><span class="big">' + (l.id === "en" ? "🇬🇧" : l.id === "ta" ? "🌺" : "🪔") + "</span>" + l.name + "</button>";
      }).join("");
      body = "<h2>" + tr("qLanguage") + "</h2><div class=\"opt-grid cols-3\">" + langOpts + "</div>";
      foot = '<button class="btn btn-primary" data-action="nextStep">' + tr("next") + "</button>";
    } else if (step === 1) {
      var ageOpts = D.AGE_GROUPS.map(function (a) {
        return '<button class="opt ' + (onboard.age === a ? "sel" : "") + '" data-action="pickAge" data-x="' + a + '"><span class="big">' + ({ child: "🧒", teen: "🧑‍🎓", youngadult: "🧑‍💻", adult: "🧑‍🏫" }[a]) + "</span>" + D.AGE_NAMES[lang()][a] + "</button>";
      }).join("");
      body = "<h2>" + tr("qAge") + "</h2><div class=\"opt-grid cols-2\">" + ageOpts + "</div>";
      foot = '<div class="row2"><button class="btn btn-ghost" data-action="prevStep">' + tr("back") + "</button><button class=\"btn btn-primary\" data-action=\"nextStep\">" + tr("next") + "</button></div>";
    } else if (step === 2) {
      body =
        '<h2>' + tr("qSupport") + "</h2>" +
        '<div class="card toggle-row">' +
          '<div><div style="font-weight:900;font-size:1.05rem">' + tr("supportTitle") + "</div>" +
          '<div class="hint" style="color:var(--muted);font-weight:700;font-size:.9rem;margin-top:4px">' + tr("supportDesc") + "</div></div>" +
          '<label class="switch"><input type="checkbox" data-bind="support" ' + (onboard.support ? "checked" : "") + "><span class=\"slider\"></span></label>" +
        "</div>";
      foot = '<div class="row2"><button class="btn btn-ghost" data-action="prevStep">' + tr("back") + "</button><button class=\"btn btn-primary\" data-action=\"nextStep\">" + tr("next") + "</button></div>";
    } else {
      body =
        '<h2>' + tr("nameQ") + "</h2>" +
        '<div class="field"><input type="text" id="oname" placeholder="' + esc(tr("namePh")) + '" value="' + esc(state.user.name && !state.user.onboarded ? "" : state.user.name) + '"></div>' +
        '<button class="btn btn-ghost" data-action="skipName">' + tr("nameSkip") + "</button>";
      foot = '<div class="row2"><button class="btn btn-ghost" data-action="prevStep">' + tr("back") + "</button><button class=\"btn btn-primary\" data-action=\"finishOnboard\">" + tr("begin") + "</button></div>";
    }

    return '<div class="screen onboard"><div class="navbar"><div class="logo"><span class="logo-badge">✦</span><span>ISE</span></div><span class="pill">' + tr("stepOf").replace("{x}", step + 1).replace("{n}", 4) + "</span></div>" +
      progressHtml + body + "<div style=\"margin-top:22px;display:flex;align-items:center;justify-content:space-between\">" + foot + "</div></div>";
  };

  screens.home = function () {
    var stats = allStats();
    var usp = state.user.support;
    var skillCards = D.SKILLS.map(function (s) {
      var p = skillProgress(s);
      var meta = D.SKILL_META[s];
      var lvl = skillLevelName(s);
      return (
        '<button class="skill-card" data-action="startSkill" data-x="' + s + '">' +
          '<div class="s-top"><span class="s-icon" style="background:' + meta.color + '">' + meta.icon + "</span>" +
          '<span class="lvl" style="background:' + meta.soft + ";color:" + meta.color + '">' + lvl + "</span></div>" +
          '<h3>' + skillName(s) + "</h3><p>" + (usp ? skillName(s) + " — " + lvl : skillName(s)) + "</p>" +
          '<div class="bar"><i style="width:' + p + "%;background:" + meta.color + '"></i></div>' +
          '<span style="color:var(--primary);font-weight:900;font-size:.9rem">' + tr("startScenario") + " →</span>" +
        "</button>"
      );
    }).join("");

    return (
      '<div class="screen home"><div class="home-head">' +
        '<div><h1>' + tr("hi") + ", " + esc(state.user.name || tr("guestName")) + " 👋</h1>" +
        '<div class="sub">' + D.AGE_NAMES[lang()][state.user.age] + " · " + LANGS.filter(function (l) { return l.id === lang(); })[0].name + (usp ? " · ♿ " + tr("supportOn") : "") + "</div></div>" +
        '<div style="display:flex;gap:10px;align-items:center"><span class="pill">' + tr("level") + " " + stats.level + " · " + stats.levelName + '</span><button class="icon-btn" data-action="settings" aria-label="' + tr("settingsTitle") + '">⚙️</button></div>' +
      "</div>" +
      '<div class="card" style="margin-bottom:6px"><strong style="font-weight:900">' + tr("progress") + "</strong>" +
        '<div class="stat-row">' +
          '<div class="stat"><b>' + stats.total + '</b><span>' + tr("scenariosDone") + "</span></div>" +
          '<div class="stat"><b>' + stats.avg + '%</b><span>' + tr("avgScore") + "</span></div>" +
          '<div class="stat"><b>' + stats.levelName + '</b><span>' + tr("level") + " " + stats.level + "</span></div>" +
        "</div></div>" +
      '<button class="realworld" data-action="startSkill" data-x=""><div class="rw-icon">🔎</div><div><h3>' + tr("realWorld") + "</h3><p>" + tr("realWorldDesc") + "</p></div><span class=\"btn\">" + tr("beginScenario") + " →</span></button>" +
      '<div class="skills-title">' + tr("chooseSkill") + "</div>" +
      '<div class="skill-grid">' + skillCards + "</div></div>"
    );
  };

  screens.scenario = function () {
    var s = cur.scenario;
    var rw = cur.realWorld;
    var dialog = s.dialogue[lang()] || s.dialogue.en;
    var who = s.character[lang()] || s.character.en;
    var rel = s.relation[lang()] || s.relation.en;
    var env = s.env[lang()] || s.env.en;
    var title = s.title[lang()] || s.title.en;
    var sup = state.settings.support;

    var responseArea = sup
      ? '<div class="respond-methods"><div class="act-3">' +
          '<button class="act-yes" data-action="resp" data-x="' + esc(tr("actionYes")) + '">' + tr("actionYes") + "</button>" +
          '<button class="act-no" data-action="resp" data-x="' + esc(tr("actionNo")) + '">' + tr("actionNo") + "</button>" +
          '<button class="act-unsure" data-action="resp" data-x="' + esc(tr("actionUnsure")) + '">' + tr("actionUnsure") + "</button>" +
        "</div>" +
        '<div class="row2"><textarea id="resp" placeholder="' + esc(tr("typeHere")) + '" aria-label="' + esc(tr("respondPrompt")) + '"></textarea><button class="btn btn-primary" data-action="submitText" style="flex:1;min-width:160px">' + tr("respondCta") + "</button></div></div>"
      : '<div class="respond"><textarea id="resp" placeholder="' + esc(tr("typeHere")) + '" aria-label="' + esc(tr("respondPrompt")) + '"></textarea>' +
        '<div class="row2"><button class="btn btn-primary" data-action="submitText">' + tr("respondCta") + "</button>" +
        (hasSTT() ? '<button class="voice-btn" id="voiceBtn" data-action="voice">🎙️ ' + tr("micHint") + "</button>" : "") + "</div>" +
        '<div class="or">' + tr("orDiv") + "</div>" +
        '<div class="act-3">' +
          '<button class="act-yes" data-action="resp" data-x="' + esc(tr("actionYes")) + '">' + tr("actionYes") + "</button>" +
          '<button class="act-no" data-action="resp" data-x="' + esc(tr("actionNo")) + '">' + tr("actionNo") + "</button>" +
          '<button class="act-unsure" data-action="resp" data-x="' + esc(tr("actionUnsure")) + '">' + tr("actionUnsure") + "</button>" +
        "</div></div>";

    return (
      '<div class="screen scenario"><div class="navbar"><div class="logo"><span class="logo-badge">✦</span><span>ISE</span></div>' +
        '<div style="display:flex;gap:10px;align-items:center">' +
        (rw ? '<span class="pill">' + tr("realWorld") + "</span>" : '<span class="pill" style="color:' + D.SKILL_META[s.skill].color + ';border-color:' + D.SKILL_META[s.skill].color + "55\">" + D.SKILL_META[s.skill].icon + " " + skillName(s.skill) + "</span>") +
        '<button class="icon-btn" data-action="home" aria-label="' + tr("close") + '">✕</button></div></div>' +
      '<h2 style="font-weight:900;margin:18px 0 10px">' + esc(title) + "</h2>" +
      '<div class="scene"><div class="scene-emoji">' + s.icon + "</div>" +
        '<div class="env-tag">📍 ' + tr("sceneOf") + " — " + esc(env) + "</div>" +
        '<div class="dialogue-card"><div class="who">' +
          '<span>👤 ' + esc(who) + "</span><span>· " + esc(rel) + "</span>" +
        "</div><div class=\"say\" id=\"dialogue\">“" + esc(dialog) + "”</div></div>" +
        '<div class="ctrl">' +
          '<button class="play-btn" data-action="play">🔊 ' + tr("listen") + "</button>" +
          '<span class="speak-widget" id="speaking" style="display:none"><span class="wave"></span><span class="wave"></span><span class="wave"></span> ' + tr("listen") + "…</span>" +
        "</div></div>" +
      '<div class="respond"><h3 style="font-weight:900;font-size:1.2rem">' + tr("respondPrompt") + "</h3>" +
        '<p style="color:var(--muted);font-weight:700;margin:4px 0 12px">' + tr("thinkPrompt") + "</p>" +
        responseArea + "</div></div>"
    );
  };

  screens.think = function () {
    return '<div class="screen"><div class="thinking"><span class="spin"></span>' + tr("analyzing") + "</div></div>";
  };

  screens.analysis = function () {
    var r = cur.result;
    var s = cur.scenario;
    var verdictTitle = tr("verdict" + r.category.charAt(0).toUpperCase() + r.category.slice(1));
    var verdictIcon = r.category === "good" ? "🎉" : r.category === "risky" ? "⚠️" : "🤔";
    var ringColor = r.category === "good" ? "var(--ok)" : r.category === "risky" ? "var(--risk)" : "#b45309";
    var w = words();
    var dims = [
      { k: "safety", label: w.safety }, { k: "boundary", label: w.boundary },
      { k: "communication", label: w.communication }, { k: "decision", label: w.decision }
    ].map(function (d) {
      return '<div class="dim-row"><span>' + d.label + '</span><div class="bar"><i style="width:' + r.scores[d.k] + "%;background:" + D.SKILL_META[s.skill].color + '"></i></div><span>' + r.scores[d.k] + "</span></div>";
    }).join("");

    var reveal = cur.realWorld
      ? '<div class="pill" style="margin:14px 0;display:inline-flex">' + tr("realWorldReveal") + ": " + D.SKILL_META[s.skill].icon + " " + skillName(s.skill) + "</div>"
      : "";

    return (
      '<div class="screen analysis"><div class="navbar"><div class="logo"><span class="logo-badge">✦</span><span>ISE</span></div><span class="pill">' + tr("analysisTitle") + "</span></div>" +
        reveal +
        '<div class="verdict ' + r.category + '"><h3>' + verdictIcon + " " + verdictTitle + "</h3><p>" + esc(r.feedback.consequence) + "</p></div>" +
        '<div class="result-grid">' +
          '<div class="card"><h4 style="font-weight:900;margin-bottom:14px">' + tr("scores") + "</h4>" +
            '<div class="score-ring"><div class="ring" style="--val:' + r.scores.overall + ";--col:" + ringColor + '"><b>' + r.scores.overall + '%</b></div>' +
            '<div class="dim">' + dims + "</div></div>" +
            '<div class="result-block" style="margin-top:16px"><h4>' + tr("yourChoice") + "</h4><p style=\"font-weight:800\">“" + esc(cur.response) + "”</p></div></div>" +
          '<div class="card"><h4 style="font-weight:900;margin-bottom:14px">' + tr("consequence") + "</h4>" +
            '<div class="result-block"><p>“' + esc(r.feedback.consequence) + "”</p></div>" +
            '<div class="result-block" style="margin-top:14px"><h4>✅ ' + tr("strengths") + "</h4><p>" + esc(r.feedback.strength) + "</p></div>" +
            '<div class="result-block" style="margin-top:14px"><h4>📈 ' + tr("improvement") + "</h4><p>" + esc(r.feedback.improve) + "</p></div>" +
            '<div class="result-block" style="margin-top:14px;background:#eef7ff;border-color:#bfdbfe"><h4>💡 ' + tr("betterResponse") + "</h4><p style=\"font-weight:800\">“" + esc(r.feedback.better) + "”</p></div></div>" +
        "</div>" +
      '<div class="analysis-actions">' +
        '<button class="btn btn-primary" data-action="mirror">🪞 ' + tr("mirrorTitle") + "</button>" +
        '<button class="btn btn-ghost" data-action="retry">↻ ' + tr("tryAgain") + "</button>" +
        '<button class="btn btn-ghost" data-action="home">' + tr("nextScenario") + "</button>" +
      "</div></div>"
    );
  };

  screens.mirror = function () {
    var r = cur.result;
    var steps = [
      { icon: "🎯", cls: "", t: tr("mirrorChoice"), txt: cur.response },
      { icon: "🌸", cls: "ok", t: tr("mirrorOutcome"), txt: r.feedback.consequence },
      { icon: "💪", cls: "ok", t: tr("mirrorStrength"), txt: r.feedback.strength },
      { icon: "📈", cls: "hot", t: tr("improvement"), txt: r.feedback.improve },
      { icon: "💡", cls: "strong", t: tr("mirrorBetter"), txt: r.feedback.better }
    ];
    var list = steps.map(function (st) {
      return '<div class="mirror-step"><div class="mirror-ico ' + st.cls + '">' + st.icon + "</div><div><h4>" + esc(st.t) + "</h4><p>“" + esc(st.txt) + "”</p></div></div>";
    }).join("");
    return (
      '<div class="screen mirror"><div class="navbar"><div class="logo"><span class="logo-badge">✦</span><span>ISE</span></div><span class="pill">🪞</span></div>' +
      '<h2 style="font-weight:900;margin:18px 0 4px">' + tr("mirrorTitle") + "</h2>" +
      '<p style="color:var(--muted);font-weight:700;margin-bottom:18px">' + tr("mirrorIntro") + "</p>" +
      '<div class="card" style="display:grid;gap:18px">' + list + "</div>" +
      '<div class="analysis-actions">' +
        '<button class="btn btn-primary" data-action="retry">↻ ' + tr("tryAgain") + "</button>" +
        '<button class="btn btn-ghost" data-action="home">' + tr("nextScenario") + "</button>" +
      "</div></div>"
    );
  };

  screens.growth = function () {
    var stats = allStats();
    var rows = D.SKILLS.map(function (s) {
      var p = skillProgress(s);
      var meta = D.SKILL_META[s];
      return '<div class="grow-skill"><div class="g-line"><span class="lbl"><span class="s-icon" style="background:' + meta.color + ';border-radius:10px;width:36px;height:36px;display:grid;place-items:center">' + meta.icon + "</span>" + skillName(s) + "</span><span>" + skillLevelName(s) + " · " + p + "%</span></div><div class=\"bar\"><i style=\"width:" + p + "%;background:" + meta.color + "\"></i></div></div>";
    }).join("");
    var rec = genRecommendation();
    return (
      '<div class="screen growth"><div class="navbar"><div class="logo"><span class="logo-badge">✦</span><span>ISE</span></div><button class="icon-btn" data-action="home" aria-label="' + tr("close") + '">✕</button></div>' +
      '<h2 style="font-weight:900;margin:18px 0">' + tr("growthTitle") + "</h2>" +
      '<div class="stat-row">' +
        '<div class="stat card"><b>' + stats.total + '</b><span>' + tr("totalDone") + "</span></div>" +
        '<div class="stat card"><b>' + stats.avg + '%</b><span>' + tr("avgScore") + "</span></div>" +
        '<div class="stat card"><b>' + stats.level + '</b><span>' + stats.levelName + "</span></div>" +
      "</div>" +
      '<div class="card">' + rows + "</div>" +
      '<div class="rec-box"><h4>🧭 ' + tr("recommendFor") + "</h4><p>" + esc(rec) + "</p></div>" +
      '<div style="margin-top:20px"><button class="btn btn-primary" data-action="home">' + tr("backHome") + "</button></div></div>"
    );
  };

  screens.settings = function () {
    var s = state.settings;
    function sw(k, on, label, hint) {
      return '<div class="set-row"><div><div class="lbl">' + label + '</div><div class="hint">' + hint + "</div></div>" +
        '<label class="switch"><input type="checkbox" data-bind="' + k + '" ' + (on ? "checked" : "") + '><span class="slider"></span></label></div>';
    }
    var langOpts = LANGS.map(function (l) {
      return '<option value="' + l.id + '"' + (l.id === lang() ? " selected" : "") + ">" + l.name + "</option>";
    }).join("");
    return (
      '<div class="screen settings"><div class="navbar"><div class="logo"><span class="logo-badge">✦</span><span>ISE</span></div><button class="icon-btn" data-action="home" aria-label="' + tr("close") + '">✕</button></div>' +
      '<h2 style="font-weight:900;margin:18px 0">' + tr("settingsTitle") + "</h2>" +
      '<div class="card">' +
        '<div class="set-row"><div><div class="lbl">' + tr("aFont") + '</div><div class="hint">' + tr("aFontHint") + "</div></div><input type=\"range\" data-bind=\"fontSize\" min=\"0.8\" max=\"1.5\" step=\"0.05\" value=\"" + s.fontSize + '" aria-label="' + tr("aFont") + '"></div>' +
        '<div class="set-row"><div><div class="lbl">' + tr("aSpeech") + '</div><div class="hint">' + tr("aSpeechHint") + "</div></div><input type=\"range\" data-bind=\"speechSpeed\" min=\"0.5\" max=\"2\" step=\"0.25\" value=\"" + s.speechSpeed + '" aria-label="' + tr("aSpeech") + '"></div>' +
        sw("audioOn", s.audioOn, tr("aAudio"), tr("aAudioHint")) +
        sw("captions", s.captions, tr("aCaptions"), tr("aCaptionsHint")) +
        sw("readability", s.readability, tr("aRead"), tr("aReadHint")) +
        sw("support", s.support, tr("aSupport"), tr("aSupportHint")) +
        '<div class="set-row"><div><div class="lbl">' + tr("aLang") + '</div><div class="hint">' + tr("langSettings") + "</div></div><select data-bind=\"lang\" aria-label=\"" + tr("aLang") + "\" style=\"padding:10px 14px;border-radius:12px;border:2px solid var(--line);font-family:inherit;font-weight:700;background:var(--surface)\">" + langOpts + "</select></div>" +
        '<div class="set-row"><div><div class="lbl">' + tr("aReset") + '</div><div class="hint">' + tr("aResetHint") + "</div></div><button class=\"btn btn-warn\" data-action=\"reset\">🗑</button></div>" +
      "</div>" +
      '<div style="margin-top:20px"><button class="btn btn-primary" data-action="home">' + tr("backHome") + "</button></div></div>"
    );
  };

  function finishOnboard() {
    var inp = document.getElementById("oname");
    var name = inp && inp.value.trim() ? inp.value.trim() : tr("guestName");
    state.user.name = name;
    state.user.age = onboard.age;
    state.user.lang = onboard.lang;
    state.user.support = onboard.support;
    state.settings.support = onboard.support;
    state.user.onboarded = true;
    save();
    show("home");
  }

  function onboardHome() {
    var opts = document.querySelectorAll("#app [data-bind]");
    for (var i = 0; i < opts.length; i++) {
      var b = opts[i].getAttribute("data-bind");
      if (b === "support") onboard.support = opts[i].checked;
    }
  }

  var handler = function (e) {
    var t = e.target;
    var bind = t.getAttribute && t.getAttribute("data-bind");
    if (bind) {
      if (bind === "lang") { state.user.lang = t.value; save(); applySettings(); toast(tr("saved")); show("settings"); }
      else if (bind === "support" || bind === "audioOn" || bind === "captions" || bind === "readability") {
        state.settings[bind] = t.checked;
        if (bind === "support") { state.user.support = t.checked; state.settings.support = t.checked; }
        save(); applySettings();
      } else if (bind === "fontSize" || bind === "speechSpeed") {
        state.settings[bind] = parseFloat(t.value);
        applySettings();
      }
      return;
    }
    var el = t.closest ? t.closest("[data-action]") : null;
    if (!el) return;
    var a = el.getAttribute("data-action");
    var x = el.getAttribute("data-x");
    switch (a) {
      case "onboard": onboard.step = 0; onboard.lang = state.user.lang; onboard.age = state.user.age; onboard.support = state.user.support; show("onboard"); break;
      case "guestStart": state.user = { name: tr("guestName"), age: "child", lang: "en", support: true, onboarded: true }; state.settings.support = true; save(); applySettings(); show("home"); break;
      case "home": stopSpeak(); show("home"); break;
      case "settings": stopSpeak(); show("settings"); break;
      case "growth": show("growth"); break;
      case "pickLang": onboard.lang = x; show("onboard"); break;
      case "pickAge": onboard.age = x; show("onboard"); break;
      case "nextStep": onboardHome(); onboard.step = Math.min(3, onboard.step + 1); show("onboard"); break;
      case "prevStep": onboard.step = Math.max(0, onboard.step - 1); show("onboard"); break;
      case "skipName": onboardHome(); state.user.name = tr("guestName"); finishOnboard(); break;
      case "finishOnboard": onboardHome(); finishOnboard(); break;
      case "startSkill": startSkill(x); break;
      case "play": if (cur.scenario) speak(cur.scenario.dialogue[lang()] || cur.scenario.dialogue.en); break;
      case "submitText": submitResponse(document.getElementById("resp").value); break;
      case "resp": submitResponse(x); break;
      case "voice": toggleVoice(); break;
      case "mirror": show("mirror"); break;
      case "retry": show("scenario"); autoSpeak(); break;
      case "reset": reset(); break;
    }
  };

  UI.addEventListener("click", handler);
  UI.addEventListener("change", handler);

  if ("speechSynthesis" in window) {
    var preload = function () { speechSynthesis.getVoices(); };
    preload();
    if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = preload;
  }

  load();
  applySettings();

  show(state.user.onboarded ? "home" : "landing");

  return {
    go: show,
    state: state
  };
})();