window.ISE_ANALYSIS = (function () {

  var WEIGHTS = {
    safety: { safety: 0.35, boundary: 0.2, communication: 0.15, decision: 0.3 },
    boundaries: { safety: 0.15, boundary: 0.4, communication: 0.15, decision: 0.3 },
    communication: { safety: 0.1, boundary: 0.1, communication: 0.5, decision: 0.3 },
    emotional: { safety: 0.15, boundary: 0.1, communication: 0.3, decision: 0.45 },
    peer: { safety: 0.1, boundary: 0.25, communication: 0.35, decision: 0.3 },
    digital: { safety: 0.4, boundary: 0.15, communication: 0.15, decision: 0.3 }
  };

  var GOOD_BOOST = 46;
  var BAD_DROP = 48;
  var UNSURE_DROP = 6;

  var FOCUS = {
    safety: "safety", boundaries: "boundary", communication: "communication", emotional: "decision", peer: "communication", digital: "safety"
  };

  var UNSURE_PHRASES = {
    en: ["not sure", "don't know", "don’t know", "dunno", "unsure", "confused", "i don't know", "not know", "what do i do", "don't get it"],
    ta: ["உறுதியாக இல்லை", "உறுதியில்லை", "தெரியவில்லை", "தெரியாது", "சந்தேகம்", "குழப்பம்", "என்ன செய்ய"],
    hi: ["पक्का नहीं", "पता नहीं", "मालूम नहीं", "समझ नहीं", "कन्फ्यूज़", "संदेह", "क्या करूँ", "क्या करूँगा"]
  };

  function hits(resp, list) {
    var n = 0;
    for (var i = 0; i < list.length; i++) {
      if (wordMatch(resp, list[i])) n++;
    }
    return n;
  }

  function wordMatch(resp, kw) {
    var esc = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var re = new RegExp("(^|[\\s.,!?;:'\"“”‘’]+)" + esc + "($|[\\s.,!?;:'\"“”‘’])");
    return re.test(resp);
  }

  function analyze(scenario, response, lang) {
    var skill = scenario.skill;
    var resp = " " + String(response || "").toLowerCase().trim() + " ";
    if (!resp.trim()) return null;

    var unsure = hits(resp, UNSURE_PHRASES[lang]) > 0;

    var kw = window.ISE_DATA.KW[lang][skill];
    var good = hits(resp, kw.good);
    var bad = unsure ? 0 : hits(resp, kw.bad);

    var dims = { safety: 50, boundary: 50, communication: 50, decision: 50 };
    var w = WEIGHTS[skill];

    if (good > 0) {
      dims.safety += GOOD_BOOST * w.safety;
      dims.boundary += GOOD_BOOST * w.boundary;
      dims.communication += GOOD_BOOST * w.communication;
      dims.decision += GOOD_BOOST * w.decision;
      dims[FOCUS[skill]] += 16;
    }
    if (bad > 0) {
      dims.safety -= BAD_DROP * w.safety;
      dims.boundary -= BAD_DROP * w.boundary;
      dims.communication -= BAD_DROP * w.communication;
      dims.decision -= BAD_DROP * w.decision;
    }
    if (good === 0 && bad === 0) {
      dims.safety -= UNSURE_DROP;
      dims.boundary -= UNSURE_DROP;
      dims.communication -= UNSURE_DROP;
      dims.decision -= UNSURE_DROP;
    }

    var polite = window.ISE_DATA.POLITE[lang];
    var pcount = hits(resp, polite);
    dims.communication += pcount * 4;

    if (resp.trim().split(/\s+/).length >= 6) dims.communication += 3;

    function clamp(n) { return Math.max(4, Math.min(100, Math.round(n))); }
    dims.safety = clamp(dims.safety);
    dims.boundary = clamp(dims.boundary);
    dims.communication = clamp(dims.communication);
    dims.decision = clamp(dims.decision);

    var overall = Math.round(dims.safety * w.safety + dims.boundary * w.boundary + dims.communication * w.communication + dims.decision * w.decision);

    var category;
    if (unsure) category = "unsure";
    else if (bad > 0 && bad >= good) category = "risky";
    else if (good > 0) category = "good";
    else category = "unsure";

    var fb = window.ISE_DATA.FEEDBACK[skill][lang][category];

    return {
      skill: skill,
      scores: { safety: dims.safety, boundary: dims.boundary, communication: dims.communication, decision: dims.decision, overall: overall },
      category: category,
      feedback: fb,
      counts: { good: good, bad: bad }
    };
  }

  function pickScenario(skill, age, excludeId) {
    var all = window.ISE_DATA.SCENARIOS;
    var pool = all.filter(function (s) {
      if (s.age !== age) return false;
      if (skill && s.skill !== skill) return false;
      if (excludeId && s.id === excludeId) return false;
      return true;
    });
    if (pool.length === 0) return null;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function levelForScore(progress) {
    if (progress >= 75) return 3;
    if (progress >= 50) return 2;
    if (progress >= 25) return 1;
    return 0;
  }

  return {
    analyze: analyze,
    pickScenario: pickScenario,
    levelForScore: levelForScore
  };
})();