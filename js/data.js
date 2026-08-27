window.ISE_DATA = (function () {

  var L = {
    en: {
      appName: "ISE", tagline: "Interactive Skills Enhancer",
      heroTitleA: "Practice real life.", heroTitleB: "Grow real skills.",
      heroSub: "A safe, AI-powered space to rehearse everyday challenges — see, hear, think, decide, respond, and learn from every choice.",
      start: "Start My Journey", guest: "Preview",
      continueL: "Continue Learning",
      launch: "Launch prototype",
      badgeVersion: "Prototype v1",
      onboardTitle: "Let's set up your experience",
      qLanguage: "What language do you prefer?",
      qAge: "Which age group are you learning for?",
      qSupport: "Support Mode",
      supportTitle: "ASD & ID Support Mode",
      supportDesc: "Simplified screens, bigger buttons, calmer visuals and one decision at a time.",
      supportOn: "Enabled", supportOff: "Not enabled",
      nameQ: "What should we call you?",
      namePh: "Your name or nickname",
      nameSkip: "Skip — practice as a guest",
      begin: "Start Learning",
      back: "Back", next: "Next", done: "Finish",
      stepOf: "Step {x} of {n}",
      homeTitle: "Your learning home",
      chooseSkill: "Pick a skill to practice",
      startScenario: "Begin",
      realWorld: "Real World Mode",
      realWorldDesc: "A mystery scenario — the skill stays hidden until you finish.",
      progress: "Your progress",
      scenariosDone: "Scenarios completed",
      avgScore: "Average score",
      replay: "Replay", listen: "Listen",
      beginScenario: "Begin scenario",
      sceneOf: "Scene", says: "says",
      respondPrompt: "What would you say or do?",
      thinkPrompt: "Think first. Then choose or type your answer.",
      typeHere: "Type your response here…",
      respondCta: "Respond",
      actionYes: "Yes", actionNo: "No", actionUnsure: "Not sure",
      micHint: "Speak your answer",
      micActive: "Listening… tap to stop",
      micUnsupported: "Voice input isn't supported in this browser",
      orDiv: "or type your own",
      analyzing: "Thinking about your choice…",
      analysisTitle: "What happened next",
      yourChoice: "Your choice",
      consequence: "Consequence",
      strengths: "Strengths",
      improvement: "To improve",
      betterResponse: "A better response",
      scores: "Skill scores",
      verdictGood: "Great decision", verdictRisky: "A tricky choice", verdictUnsure: "Let's think together",
      tryAgain: "Try again", nextScenario: "Practice another",
      realWorldReveal: "Skill revealed", wasSkill: "You were practicing:",
      mirrorTitle: "Reality Mirror",
      mirrorIntro: "Your Choice → What Happened → Strengths → Drawback → Better Response → Grow",
      mirrorChoice: "Your Choice", mirrorOutcome: "What Happened", mirrorStrength: "Strengths", mirrorBetter: "Better Response",
      growthTitle: "Growth Dashboard",
      level: "Level", levelNames: ["Beginning", "Developing", "Growing", "Strong"],
      totalDone: "Total scenarios", percentile: "Your strength",
      recommendFor: "What to focus on",
      recText: "You're doing great with {strong}. To grow even more, practice a few {weak} scenarios next. You've got this!",
      settingsTitle: "Settings",
      aFont: "Font size", aFontHint: "Make all text bigger or smaller",
      aSpeech: "Speech speed", aSpeechHint: "How fast the voice reads aloud",
      aAudio: "Sound & voice", aAudioHint: "Play voice narration for scenarios",
      aCaptions: "Captions", aCaptionsHint: "Show the dialogue text on screen",
      aRead: "High readability", aReadHint: "Extra contrast, clearer focus",
      aSupport: "Support mode", aSupportHint: "Simpler screens, one decision at a time",
      aLang: "Language",
      langSettings: "Your interface language",
      decision: "Decision",
      aReset: "Reset all progress", aResetHint: "Clear your history and start fresh",
      confirmReset: "This will clear all your progress. Continue?",
      resetDone: "Progress cleared.",
      saved: "Saved", home: "Home", backHome: "Back to Home",
      close: "Close", hi: "Hi",
      guestName: "Learner",
      skillsLabel: "Skills",
      skillNames: { safety: "Safety", boundaries: "Boundaries", communication: "Communication", emotional: "Emotional", peer: "Peer & Social", digital: "Digital Safety" },
      ageNames: { child: "Child", teen: "Teen", youngadult: "Young Adult", adult: "Adult" },
      introSpeak: "Tap Begin scenario, then listen. Imagine you are really there.",
      nowRespond: "You heard {who}. What do you say or do?"
    },
    ta: {
      appName: "ISE", tagline: "ஊடாடும் திறன் மேம்படுத்தி",
      heroTitleA: "நிஜ வாழ்க்கையைப் பயிற்சி செய்யுங்கள்.", heroTitleB: "நிஜத் திறன்களை வளருங்கள்.",
      heroSub: "அன்றாட சவால்களைப் பாதுகாப்பாகப் பயிற்சி செய்வதற்கான இடம் — பாருங்கள், கேளுங்கள், யோசியுங்கள், முடிவு எடுங்கள், ஒவ்வொரு தேர்விலிருந்தும் கற்றுக்கொள்ளுங்கள்.",
      start: "பயணத்தைத் தொடங்குங்கள்", guest: "முன்னோட்டம்",
      continueL: "தொடர்ந்து பயிலுங்கள்",
      launch: "முன்மாதிரியைத் தொடங்குங்கள்",
      badgeVersion: "முன்மாதிரி v1",
      onboardTitle: "உங்கள் அனுபவத்தை அமைக்கலாம்",
      qLanguage: "எந்த மொழியை விரும்புகிறீர்கள்?",
      qAge: "எந்த வயதுப் பிரிவுக்காகப் பயில்கிறீர்கள்?",
      qSupport: "ஆதரவு முறை",
      supportTitle: "ASD & ID ஆதரவு முறை",
      supportDesc: "எளிய திரைகள், பெரிய பொத்தான்கள், அமைதியான காட்சிகள், ஒரே நேரத்தில் ஒரு முடிவு.",
      supportOn: "இயக்கப்பட்டது", supportOff: "இயக்கப்படவில்லை",
      nameQ: "உங்களை என்ன என்று அழைக்கலாம்?",
      namePh: "உங்கள் பெயர் (அல்லது பட்டப்பெயர்)",
      nameSkip: "தவிர்க்கவும் — விருந்தினராகப் பயிலுங்கள்",
      begin: "கற்றலைத் தொடங்குங்கள்",
      back: "பின்", next: "அடுத்து", done: "முடிந்தது",
      stepOf: "படி {x} / {n}",
      homeTitle: "உங்கள் கற்றல் இடம்",
      chooseSkill: "பயிற்சி செய்ய ஒரு திறனைத் தேர்ந்தெடுங்கள்",
      startScenario: "தொடங்கு",
      realWorld: "நிஜ உலக முறை",
      realWorldDesc: "ஒரு மர்மக் காட்சி — முடியும் வரை திறன் மறைக்கப்படும்.",
      progress: "உங்கள் முன்னேற்றம்",
      scenariosDone: "முடிக்கப்பட்ட காட்சிகள்",
      avgScore: "சராசரி மதிப்பெண்",
      replay: "மீண்டும்", listen: "கேளுங்கள்",
      beginScenario: "காட்சியைத் தொடங்குங்கள்",
      sceneOf: "காட்சி", says: "சொல்கிறார்",
      respondPrompt: "நீங்கள் என்ன சொல்வீர்கள் / செய்வீர்கள்?",
      thinkPrompt: "முதலில் யோசியுங்கள். பிறகு பதிலைத் தேர்ந்தெடுக்கவும் அல்லது எழுதவும்.",
      typeHere: "உங்கள் பதிலை இங்கே எழுதுங்கள்…",
      respondCta: "பதில் அளிக்க",
      actionYes: "ஆம்", actionNo: "இல்லை", actionUnsure: "உறுதியில்லை",
      micHint: "பதிலைப் பேசுங்கள்",
      micActive: "கேட்கிறேன்… நிறுத்தத் தொடவும்",
      micUnsupported: "இந்த உலாவியில் குரல் உள்ளீடு இல்லை",
      orDiv: "அல்லது உங்கள் பதிலை எழுதுங்கள்",
      analyzing: "உங்கள் தேர்வு பற்றி யோசிக்கிறேன்…",
      analysisTitle: "அடுத்து என்ன நடந்தது",
      yourChoice: "உங்கள் தேர்வு",
      consequence: "விளைவுகள்",
      strengths: "பலங்கள்",
      improvement: "மேம்படுத்த",
      betterResponse: "சிறந்த பதில்",
      scores: "திறன் மதிப்பெண்கள்",
      verdictGood: "சிறந்த முடிவு", verdictRisky: "கடினமான தேர்வு", verdictUnsure: "ஒன்றாகச் சிந்திப்போம்",
      tryAgain: "மீண்டும் முயல்க", nextScenario: "மற்றொரு காட்சி",
      realWorldReveal: "திறன் வெளிப்பட்டது", wasSkill: "நீங்கள் பயிற்சி செய்தது:",
      mirrorTitle: "நிஜக் கண்ணாடி",
      mirrorIntro: "உங்கள் தேர்வு → என்ன நடந்தது → பலங்கள் → மேம்பாடு → சிறந்த பதில் → வளர்ச்சி",
      mirrorChoice: "உங்கள் தேர்வு", mirrorOutcome: "என்ன நடந்தது", mirrorStrength: "பலங்கள்", mirrorBetter: "சிறந்த பதில்",
      growthTitle: "வளர்ச்சி கட்டுப்பாட்டகம்",
      level: "நிலை", levelNames: ["தொடக்கம்", "வளர்ச்சி", "முன்னேற்றம்", "வலுவான"],
      totalDone: "மொத்த காட்சிகள்", percentile: "உங்கள் பலம்",
      recommendFor: "எதில் கவனம் செலுத்துவது",
      recText: "{strong} இல் நீங்கள் சிறப்பாகச் செய்கிறீர்கள். மேலும் வளர, அடுத்து சில {weak} காட்சிகளைப் பயிற்சி செய்யுங்கள். உங்களால் முடியும்!",
      settingsTitle: "அமைப்புகள்",
      aFont: "எழுத்து அளவு", aFontHint: "அனைத்து உரையையும் பெரியதாகவோ சிறியதாகவோ",
      aSpeech: "பேச்சு வேகம்", aSpeechHint: "குரல் எவ்வளவு வேகமாக படிக்கிறது",
      aAudio: "ஒலி & குரல்", aAudioHint: "காட்சிகளுக்கு குரல் விவரிப்பை இயக்கவும்",
      aCaptions: "வசன வரிகள்", aCaptionsHint: "திரையில் உரையாடலைக் காட்டவும்",
      aRead: "உயர் படிப்புத்திறன்", aReadHint: "கூடுதல் மாறுபாடு, தெளிவான கவனம்",
      aSupport: "ஆதரவு முறை", aSupportHint: "எளிய திரைகள், ஒரே நேரத்தில் ஒரு முடிவு",
      aLang: "மொழி",
      langSettings: "உங்கள் இடைமுக மொழி",
      decision: "முடிவு",
      aReset: "அனைத்து முன்னேற்றத்தையும் மீட்டமை", aResetHint: "வரலாற்றை அழித்து புதிதாகத் தொடங்குங்கள்",
      confirmReset: "இது உங்கள் முன்னேற்றத்தை அழிக்கும். தொடரவா?",
      resetDone: "முன்னேற்றம் அழிக்கப்பட்டது.",
      saved: "சேமிக்கப்பட்டது", home: "முகப்பு", backHome: "முகப்புக்குத் திரும்பு",
      close: "மூடு", hi: "வணக்கம்",
      guestName: "கற்பவர்",
      skillsLabel: "திறன்கள்",
      skillNames: { safety: "பாதுகாப்பு", boundaries: "எல்லைகள்", communication: "தொடர்பு", emotional: "உணர்ச்சி", peer: "நண்பர்கள் & சமூகம்", digital: "டிஜிட்டல் பாதுகாப்பு" },
      ageNames: { child: "குழந்தை", teen: "இளம்பருவம்", youngadult: "இளம் வயது", adult: "வயது வந்தோர்" },
      introSpeak: "காட்சியைத் தொடங்குங்கள், பின்னர் கேளுங்கள். நீங்கள் உண்மையில் அங்கு இருப்பதாக கற்பனை செய்யுங்கள்.",
      nowRespond: "{who} சொன்னதைக் கேட்டீர்கள். என்ன சொல்கிறீர்கள்?"
    },
    hi: {
      appName: "ISE", tagline: "इंटरैक्टिव स्किल्स एन्हांसर",
      heroTitleA: "असल ज़िंदगी का अभ्यास करें.", heroTitleB: "असली कौशल सीखें.",
      heroSub: "रोज़मर्रा की चुनौतियों का सुरक्षित अभ्यास — देखें, सुनें, सोचें, निर्णय लें, जवाब दें, और हर चुनाव से सीखें.",
      start: "सफर शुरू करें", guest: "झलक देखें",
      continueL: "सीखना जारी रखें",
      launch: "प्रोटोटाइप लॉन्च करें",
      badgeVersion: "प्रोटोटाइप v1",
      onboardTitle: "अपना अनुभव सेट करें",
      qLanguage: "आप कौन-सी भाषा पसंद करते हैं?",
      qAge: "आप किस आयु वर्ग के लिए सीख रहे हैं?",
      qSupport: "सपोर्ट मोड",
      supportTitle: "ASD और ID सपोर्ट मोड",
      supportDesc: "सरल स्क्रीन, बड़े बटन, शांत दृश्य, और एक समय में एक निर्णय।",
      supportOn: "चालू", supportOff: "बंद",
      nameQ: "हम आपको क्या बुलाएँ?",
      namePh: "आपका नाम (या उपनाम)",
      nameSkip: "छोड़ें — अतिथि के रूप में अभ्यास करें",
      begin: "सीखना शुरू करें",
      back: "वापस", next: "आगे", done: "पूरा करें",
      stepOf: "चरण {x} / {n}",
      homeTitle: "आपका सीखने का घर",
      chooseSkill: "अभ्यास के लिए एक कौशल चुनें",
      startScenario: "शुरू करें",
      realWorld: "रियल वर्ल्ड मोड",
      realWorldDesc: "एक रहस्यमयी स्थिति — पूरी होने तक कौशल छिपा रहता है।",
      progress: "आपकी प्रगति",
      scenariosDone: "पूरी की गई स्थितियाँ",
      avgScore: "औसत स्कोर",
      replay: "फिर से", listen: "सुनें",
      beginScenario: "स्थिति शुरू करें",
      sceneOf: "दृश्य", says: "कहता/कहती है",
      respondPrompt: "आप क्या कहेंगे या करेंगे?",
      thinkPrompt: "पहले सोचें। फिर जवाब चुनें या लिखें।",
      typeHere: "अपना जवाब यहाँ लिखें…",
      respondCta: "जवाब दें",
      actionYes: "हाँ", actionNo: "नहीं", actionUnsure: "पक्का नहीं",
      micHint: "जवाब बोलें",
      micActive: "सुन रहा हूँ… रोकने के लिए दबाएँ",
      micUnsupported: "इस ब्राउज़र में वॉइस इनपुट समर्थित नहीं है",
      orDiv: "या अपना जवाब लिखें",
      analyzing: "आपके चुनाव के बारे में सोच रहा हूँ…",
      analysisTitle: "आगे क्या हुआ",
      yourChoice: "आपका चुनाव",
      consequence: "परिणाम",
      strengths: "ताकतें",
      improvement: "सुधार के लिए",
      betterResponse: "बेहतर जवाब",
      scores: "कौशल स्कोर",
      verdictGood: "बेहतरीन निर्णय", verdictRisky: "मुश्किल चुनाव", verdictUnsure: "साथ में सोचते हैं",
      tryAgain: "फिर कोशिश करें", nextScenario: "एक और स्थिति",
      realWorldReveal: "कौशल खुल गया", wasSkill: "आप अभ्यास कर रहे थे:",
      mirrorTitle: "रियलिटी मिरर",
      mirrorIntro: "आपका चुनाव → क्या हुआ → ताकतें → सुधार → बेहतर जवाब → विकास",
      mirrorChoice: "आपका चुनाव", mirrorOutcome: "क्या हुआ", mirrorStrength: "ताकतें", mirrorBetter: "बेहतर जवाब",
      growthTitle: "ग्रोथ डैशबोर्ड",
      level: "स्तर", levelNames: ["शुरुआत", "विकास", "उन्नत", "मज़बूत"],
      totalDone: "कुल स्थितियाँ", percentile: "आपकी ताकत",
      recommendFor: "किस पर ध्यान दें",
      recText: "{strong} में आप कमाल कर रहे हैं। और बढ़ने के लिए अगली कुछ {weak} स्थितियाँ आज़माएँ। आप कर सकते हैं!",
      settingsTitle: "सेटिंग्स",
      aFont: "फ़ॉन्ट आकार", aFontHint: "सारा टेक्स्ट बड़ा या छोटा करें",
      aSpeech: "बोलने की गति", aSpeechHint: "आवाज़ कितनी तेज़ पढ़े",
      aAudio: "आवाज़", aAudioHint: "स्थितियों के लिए आवाज़ सुनाई दें",
      aCaptions: "कैप्शन", aCaptionsHint: "स्क्रीन पर बातचीत दिखाएँ",
      aRead: "उच्च पठनीयता", aReadHint: "बेहतर कंट्रास्ट, साफ़ फोकस",
      aSupport: "सपोर्ट मोड", aSupportHint: "सरल स्क्रीन, एक समय एक निर्णय",
      aLang: "भाषा",
      langSettings: "आपकी इंटरफ़ेस भाषा",
      decision: "निर्णय",
      aReset: "सारी प्रगति रीसेट करें", aResetHint: "इतिहास हटाएँ और नई शुरुआत करें",
      confirmReset: "यह आपकी सारी प्रगति मिटा देगा। जारी रखें?",
      resetDone: "प्रगति मिटा दी गई।",
      saved: "सेव हुआ", home: "होम", backHome: "होम लौटें",
      close: "बंद करें", hi: "नमस्ते",
      guestName: "सीखने वाला",
      skillsLabel: "कौशल",
      skillNames: { safety: "सुरक्षा", boundaries: "सीमाएँ", communication: "संवाद", emotional: "भावनात्मक", peer: "दोस्ती", digital: "डिजिटल सुरक्षा" },
      ageNames: { child: "बच्चा", teen: "किशोर", youngadult: "युवा", adult: "वयस्क" },
      introSpeak: "स्थिति शुरू करें और सुनें। सोचिए जैसे आप वाकई वहाँ हैं।",
      nowRespond: "आपने {who} की बात सुनी। आप क्या कहते हैं?"
    }
  };

  var TTS_LANG = { en: "en-US", ta: "ta-IN", hi: "hi-IN" };
  var STT_LANG = { en: "en-US", ta: "ta-IN", hi: "hi-IN" };

  var SKILL_META = {
    safety: { icon: "\u{1F512}", color: "#2563eb", soft: "#e8f0fe" },
    boundaries: { icon: "\u{1F6E1}\uFE0F", color: "#d97706", soft: "#fdf1df" },
    communication: { icon: "\u{1F4AC}", color: "#0d9488", soft: "#e2f7f4" },
    emotional: { icon: "\u{1F9D8}", color: "#db2777", soft: "#fde8f2" },
    peer: { icon: "\u{1F91D}", color: "#7c3aed", soft: "#f2eaff" },
    digital: { icon: "\u{1F4F1}", color: "#dc2626", soft: "#fde9e9" }
  };

  var SKILLS = ["safety", "boundaries", "communication", "emotional", "peer", "digital"];
  var AGE_GROUPS = ["child", "teen", "youngadult", "adult"];

  var SCENARIOS = [
    { id: "sa-ch-1", skill: "safety", age: "child", title: { en: "The kind stranger", ta: "அன்பாகப் பேசும் அந்நியர்", hi: "दयालु अजनबी" }, character: { en: "A stranger", ta: "அந்நியர்", hi: "एक अजनबी" }, relation: { en: "Unknown person", ta: "தெரியாத நபர்", hi: "अनजान व्यक्ति" }, env: { en: "School gate", ta: "பள்ளி வாயில்", hi: "स्कूल गेट" }, icon: "\u{1F6B6}", dialogue: { en: "Your mother asked me to pick you up. Come with me, I have a car.", ta: "உங்கள் அம்மா உன்னை அழைத்து வரச் சொன்னார்கள். வா, என்னிடம் கார் இருக்கிறது.", hi: "तुम्हारी माँ ने मुझे तुम्हें लेने भेजा है। चलो, मेरी गाड़ी खड़ी है।" }, difficulty: 1 },
    { id: "sa-ch-2", skill: "safety", age: "child", title: { en: "Colorful pills", ta: "வண்ண மாத்திரைகள்", hi: "रंग-बिरंगी गोलियाँ" }, character: { en: "The playground", ta: "விளையாட்டு மைதானம்", hi: "खेल का मैदान" }, relation: { en: "Your surroundings", ta: "சுற்றுப்புறம்", hi: "आस-पास" }, env: { en: "Playground", ta: "விளையாட்டு மைதானம்", hi: "खेल का मैदान" }, icon: "\u{1F3C0}", dialogue: { en: "You spot colorful pills lying on the ground. A friend says: Don't tell anyone, let's try one.", ta: "தரையில் வண்ண மாத்திரைகள் கிடக்கின்றன. நண்பர் சொல்கிறார்: யாரிடமும் சொல்லாதே, ஒன்றை முயற்சிப்போம்.", hi: "ज़मीन पर रंगीन गोलियाँ पड़ी हैं। एक दोस्त कहता है: किसी को मत बताना, चल एक गोली आज़माते हैं।" }, difficulty: 2 },
    { id: "bo-ch-1", skill: "boundaries", age: "child", title: { en: "The unwanted hug", ta: "விருப்பமில்லாத கட்டிப்பிடிப்பு", hi: "अनचाहा गले लगाना" }, character: { en: "A grown-up relative", ta: "பெரியவர் உறவினர்", hi: "एक बड़ा रिश्तेदार" }, relation: { en: "Family", ta: "குடும்பம்", hi: "परिवार" }, env: { en: "Family gathering", ta: "குடும்ப விழா", hi: "पारिवारिक मिलन" }, icon: "\u{1F347}", dialogue: { en: "Give me a big hug before you go! Don't say no — I'm family.", ta: "போகும் முன் பெரிய கட்டிப்பிடிப்பு கொடு! வேண்டாம் என்று சொல்லாதே — நான் உறவு.", hi: "जाने से पहले मुझे बड़ा गले लगाओ! ना मत बोलना — मैं अपना हूँ।" }, difficulty: 1 },
    { id: "bo-ch-2", skill: "boundaries", age: "child", title: { en: "The quiet secret", ta: "இரகசியம்", hi: "चुप्पी का राज़" }, character: { en: "A neighbor", ta: "அக்கம் பக்கத்தினர்", hi: "पड़ोसी" }, relation: { en: "Acquaintance", ta: "அறிமுகம்", hi: "परिचित" }, env: { en: "Near your home", ta: "வீட்டின் அருகில்", hi: "घर के पास" }, icon: "\u{1F3E0}", dialogue: { en: "I gave you a sweet, so now keep my secret from your parents. You must not tell them.", ta: "நான் உனக்கு மிட்டாய் கொடுத்தேன், ஆகவே என் ரகசியத்தை அம்மா அப்பாவிடம் சொல்லக் கூடாது.", hi: "मैंने तुम्हें मिठाई दी है, तो अब मेरा राज़ माँ-पापा से मत बताना। ज़रा भी नहीं।" }, difficulty: 2 },
    { id: "co-ch-1", skill: "communication", age: "child", title: { en: "Lost in the store", ta: "கடையில் தொலைந்தது", hi: "दुकान में खो गए" }, character: { en: "A store worker", ta: "கடை ஊழியர்", hi: "दुकान का कर्मचारी" }, relation: { en: "Helper", ta: "உதவியாளர்", hi: "मददगार" }, env: { en: "Supermarket", ta: "பெரிய கடை", hi: "सुपरमार्केट" }, icon: "\u{1F6D2}", dialogue: { en: "You can't find your parent anywhere. What do you say to ask for help?", ta: "உங்கள் அம்மாவை எங்கும் காணவில்லை. உதவி கேட்க என்ன சொல்கிறீர்கள்?", hi: "आपको अपने माता-पिता कहीं नहीं दिख रहे। मदद माँगने के लिए क्या कहेंगे?" }, difficulty: 1 },
    { id: "co-ch-2", skill: "communication", age: "child", title: { en: "Food I don't like", ta: "பிடிக்காத உணவு", hi: "नापसंद खाना" }, character: { en: "A friend's parent", ta: "நண்பரின் பெற்றோர்", hi: "दोस्त के माता-पिता" }, relation: { en: "Kind adult", ta: "அன்பான பெரியவர்", hi: "दयालु बड़े" }, env: { en: "A friend's house", ta: "நண்பர் வீடு", hi: "दोस्त का घर" }, icon: "\u{1F371}", dialogue: { en: "Here you go, eat everything! You don't like it, but you don't want to be rude. What do you say?", ta: "இந்தாங்க, எல்லாவற்றையும் சாப்பிடுங்க! உங்களுக்கு பிடிக்கவில்லை, ஆனால் மரியாதையாக இருக்க வேண்டும். என்ன சொல்கிறீர்கள்?", hi: "लो, सब कुछ खा लो! आपको यह पसंद नहीं, पर रूखा भी नहीं लगना। क्या कहेंगे?" }, difficulty: 2 },
    { id: "em-ch-1", skill: "emotional", age: "child", title: { en: "The crushed tower", ta: "இடிந்த கோபுரம்", hi: "बिखरा हुआ महल" }, character: { en: "A classmate", ta: "வகுப்புத் தோழன்", hi: "सहपाठी" }, relation: { en: "School friend", ta: "பள்ளி நண்பர்", hi: "स्कूल दोस्त" }, env: { en: "Play corner", ta: "விளையாட்டு மூலை", hi: "खेल का कोना" }, icon: "\u{1F3D6}", dialogue: { en: "Your tower of blocks was knocked down and everyone laughed. You feel ready to scream. What helps you?", ta: "உங்கள் கட்டைக் கோபுரம் இடிந்தது, எல்லோரும் சிரித்தனர். கத்த வேண்டும் போல இருக்கிறது. என்ன செய்வீர்கள்?", hi: "आपका ब्लॉकों का महल गिर गया और सब हँस दिए। चीखने का मन कर रहा है। क्या मदद करेगा?" }, difficulty: 1 },
    { id: "em-ch-2", skill: "emotional", age: "child", title: { en: "First-day nerves", ta: "முதல் நாள் பதற்றம்", hi: "पहले दिन की घबराहट" }, character: { en: "Your thoughts", ta: "உங்கள் எண்ணங்கள்", hi: "आपके विचार" }, relation: { en: "Inside you", ta: "உங்களுக்குள்", hi: "आपके अंदर" }, env: { en: "New classroom", ta: "புதிய வகுப்பறை", hi: "नई कक्षा" }, icon: "\u{1F3EB}", dialogue: { en: "It's the first day of a new class. Your tummy hurts from nervousness. What do you do to feel calm?", ta: "புதிய வகுப்பின் முதல் நாள். பதற்றத்தில் வயிறு வலிக்கிறது. அமைதியாக என்ன செய்வீர்கள்?", hi: "नई कक्षा का पहला दिन है। घबराहट से पेट दर्द कर रहा है। शांत होने के लिए क्या करेंगे?" }, difficulty: 2 },
    { id: "pe-ch-1", skill: "peer", age: "child", title: { en: "The saved seat", ta: "ஒதுக்கப்பட்ட இருக்கை", hi: "रखी हुई सीट" }, character: { en: "A friend", ta: "நண்பர்", hi: "दोस्त" }, relation: { en: "Classmate", ta: "வகுப்புத் தோழர்", hi: "सहपाठी" }, env: { en: "Lunch table", ta: "மதிய உணவு மேசை", hi: "खाने की मेज़" }, icon: "\u{1F37D}", dialogue: { en: "Sorry, we saved this seat. You can't sit here. Everyone is watching. What do you do?", ta: "மன்னிக்கவும், இந்த இருக்கையை ஒதுக்கியுள்ளோம். நீ உட்கார முடியாது. எல்லோரும் பார்க்கிறார்கள். என்ன செய்வீர்கள்?", hi: "माफ़ करना, यह सीट हमने रखी है। तुम यहाँ नहीं बैठ सकते। सब देख रहे हैं। क्या करेंगे?" }, difficulty: 1 },
    { id: "pe-ch-2", skill: "peer", age: "child", title: { en: "The playground circle", ta: "விளையாட்டு வட்டம்", hi: "खेल का घेरा" }, character: { en: "Two children", ta: "இரண்டு குழந்தைகள்", hi: "दो बच्चे" }, relation: { en: "Group of kids", ta: "குழந்தைகள் கூட்டம்", hi: "बच्चों का समूह" }, env: { en: "Playtime", ta: "விளையாட்டு நேரம்", hi: "खेल का समय" }, icon: "\u{1F3AE}", dialogue: { en: "We are playing a game, but we decided you can't join. You really want to play. What do you say?", ta: "நாங்கள் ஒரு விளையாட்டு விளையாடுகிறோம், ஆனால் உன்னைச் சேர்க்க வேண்டாம் என முடிவு செய்தோம். உங்களுக்கு விளையாட வேண்டும். என்ன சொல்கிறீர்கள்?", hi: "हम एक खेल खेल रहे हैं, पर हमने तय किया है तुमको शामिल नहीं करेंगे। आपको खेलना है। क्या कहेंगे?" }, difficulty: 2 },
    { id: "di-ch-1", skill: "digital", age: "child", title: { en: "The gamer asks", ta: "விளையாட்டாளர் கேட்பது", hi: "गेमर का सवाल" }, character: { en: "An unknown gamer", ta: "தெரியாத விளையாட்டாளர்", hi: "अनजान गेमर" }, relation: { en: "Online stranger", ta: "நிகர்நிலை அந்நியர்", hi: "ऑनलाइन अजनबी" }, env: { en: "Gaming chat", ta: "கேமிங் அரட்டை", hi: "गेमिंग चैट" }, icon: "\u{1F3AE}", dialogue: { en: "You play with me every day! Now be my good friend — send me a photo of yourself and your address.", ta: "தினமும் என்னுடன் விளையாடுகிறாய்! இப்போது என் நல்ல நண்பன் — உன் புகைப்படமும் விலாசமும் அனுப்பு.", hi: "तुम रोज़ मेरे साथ खेलते हो! अब मेरे अच्छे दोस्त बनो — अपनी फोटो और पता भेज दो।" }, difficulty: 1 },
    { id: "di-ch-2", skill: "digital", age: "child", title: { en: "The photo request", ta: "புகைப்படக் கோரிக்கை", hi: "फोटो की माँग" }, character: { en: "A classmate", ta: "வகுப்புத் தோழர்", hi: "सहपाठी" }, relation: { en: "School friend", ta: "பள்ளி நண்பர்", hi: "स्कूल दोस्त" }, env: { en: "Video call", ta: "காணொளி அழைப்பு", hi: "वीडियो कॉल" }, icon: "\u{1F4F9}", dialogue: { en: "Show me your room on the video call! It's a secret between us, don't tell your mom.", ta: "காணொளியில் உன் அறையைக் காட்டு! இது நமக்குள் இரகசியம், அம்மாவிடம் சொல்லாதே.", hi: "वीडियो कॉल पर अपना कमरा दिखाओ! यह हमारा राज़ है, माँ को मत बताना।" }, difficulty: 2 },

    { id: "sa-te-1", skill: "safety", age: "teen", title: { en: "Ride pressure", ta: "ஏறிச் செல்லும் அழுத்தம்", hi: "सवारी का दबाव" }, character: { en: "A friend's older friend", ta: "நண்பரின் பெரிய நண்பர்", hi: "दोस्त का बड़ा दोस्त" }, relation: { en: "Almost a stranger", ta: "கிட்டத்தட்ட அந்நியர்", hi: "लगभग अजनबी" }, env: { en: "After school", ta: "பள்ளி முடிந்த பின்", hi: "स्कूल के बाद" }, icon: "\u{1F697}", dialogue: { en: "Come on, jump in! The party's almost over, no one will know. Don't be scared.", ta: "வா, ஏறி உட்கார்! விருந்து முடியப்போகிறது, யாருக்கும் தெரியாது. பயப்படாதே.", hi: "चलो, बैठ जाओ! पार्टी ख़त्म होने वाली है, किसी को पता नहीं चलेगा। डरो मत।" }, difficulty: 2 },
    { id: "bo-te-1", skill: "boundaries", age: "teen", title: { en: "The borrowed answers", ta: "பகரமாக எடுத்த பதில்கள்", hi: "उधार के जवाब" }, character: { en: "A popular student", ta: "பிரபல மாணவர்", hi: "लोकप्रिय छात्र" }, relation: { en: "Schoolmate", ta: "பள்ளி சக", hi: "साथी" }, env: { en: "School corridor", ta: "பள்ளி நடைபாதை", hi: "स्कूल का गलियारा" }, icon: "\u{1F4DD}", dialogue: { en: "Copy your friend's test answers for me. No one has to know — just don't be a baby about it.", ta: "உன் நண்பரின் தேர்வு பதில்களை எனக்காக நகலெடு. யாருக்கும் தெரிய வேண்டாம் — குழந்தை மாதிரி நடந்து கொள்ளாதே.", hi: "मेरे लिए अपने दोस्त के परीक्षा के जवाब नकल कर लो। किसी को पता नहीं चलेगा — बच्चे जैसा मत बनो।" }, difficulty: 2 },
    { id: "co-te-1", skill: "communication", age: "teen", title: { en: "The wrong order", ta: "தவறான ஆர்டர்", hi: "गलत ऑर्डर" }, character: { en: "A server", ta: "பணியாளர்", hi: "परोसने वाला" }, relation: { en: "Restaurant staff", ta: "உணவக ஊழியர்", hi: "रेस्तराँ का स्टाफ़" }, env: { en: "A restaurant", ta: "உணவகம்", hi: "रेस्तराँ" }, icon: "\u{1F35D}", dialogue: { en: "You ordered food without spice, but it arrived covered in it. You hate wasting food. What do you say?", ta: "மசாலா இல்லாத உணவை ஆர்டர் செய்தீர்கள், ஆனால் முழுவதுமாக மசாலாவுடன் வந்தது. உணவை வீணாக்க விரும்பவில்லை. என்ன சொல்கிறீர்கள்?", hi: "आपने बिना मसाले का खाना मँगाया था, पर वह मसाले से भरा आया। खाना बर्बाद करना पसंद नहीं। क्या कहेंगे?" }, difficulty: 1 },
    { id: "em-te-1", skill: "emotional", age: "teen", title: { en: "Test stress", ta: "தேர்வு அழுத்தம்", hi: "परीक्षा का तनाव" }, character: { en: "Your mind", ta: "உங்கள் மனம்", hi: "आपका मन" }, relation: { en: "Inside you", ta: "உங்களுக்குள்", hi: "आपके अंदर" }, env: { en: "After an exam", ta: "தேர்வுக்குப் பின்", hi: "परीक्षा के बाद" }, icon: "\u{1F4DA}", dialogue: { en: "The exam went badly and your phone buzzes with classmates comparing scores. You feel hot and shaky. What helps?", ta: "தேர்வு மோசமாக முடிந்தது, மதிப்பெண் ஒப்பிடும் செய்திகள் வருகின்றன. உடல் சூடாக நடுங்குகிறது. எது உதவும்?", hi: "परीक्षा बिगड़ गई और फोन पर सहपाठी स्कोर बँट रहे हैं। शरीर गर्म और काँप रहा है। किस चीज़ से मदद मिलेगी?" }, difficulty: 2 },
    { id: "pe-te-1", skill: "peer", age: "teen", title: { en: "The group chat", ta: "குழு அரட்டை", hi: "ग्रुप चैट" }, character: { en: "Classmates", ta: "வகுப்புத் தோழர்கள்", hi: "सहपाठी" }, relation: { en: "Friends + everyone", ta: "நண்பர்கள் + எல்லோரும்", hi: "दोस्त + सब" }, env: { en: "Your phone", ta: "உங்கள் தொலைபேசி", hi: "आपका फ़ोन" }, icon: "\u{1F4F1}", dialogue: { en: "Everyone is laughing at a rumor about your best friend. They want you to add the next joke. What do you do?", ta: "உங்கள் நெருங்கிய நண்பரைப் பற்றிய வதந்திக்கு எல்லோரும் சிரிக்கிறார்கள். அடுத்த ஜோக்கை நீங்கள் சேர்க்க வேண்டும். என்ன செய்வீர்கள்?", hi: "सब आपके सबसे अच्छे दोस्त की अफ़वाह पर हँस रहे हैं। वे चाहते हैं आप अगला मज़ाक़ जोड़ें। क्या करेंगे?" }, difficulty: 2 },
    { id: "di-te-1", skill: "digital", age: "teen", title: { en: "The viral photo", ta: "வைரலான புகைப்படம்", hi: "वायरल फोटो" }, character: { en: "An acquaintance", ta: "அறிமுகம்", hi: "एक परिचित" }, relation: { en: "Not a close friend", ta: "நெருங்கிய நண்பர் அல்ல", hi: "करीबी दोस्त नहीं" }, env: { en: "Social media", ta: "சமூக ஊடகம்", hi: "सोशल मीडिया" }, icon: "\u{1F4F8}", dialogue: { en: "I posted an embarrassing photo of you to my story and tagged you. Give it a like and share it for more followers!", ta: "உங்கள் வெட்கப்படத்தை என் ஸ்டோரியில் பதிவிட்டு டேக் செய்துள்ளேன். லைக் கொடுத்து பகிருங்கள்!", hi: "मैंने आपकी शर्मनाक फोटो स्टोरी पर डालकर टैग किया है। लाइक दो और फॉलोअर्स के लिए शेयर करो!" }, difficulty: 1 },

    { id: "sa-ya-1", skill: "safety", age: "youngadult", title: { en: "Night ride offer", ta: "இரவு சவாரி வழங்கல்", hi: "रात की सवारी का ऑफ़र" }, character: { en: "A ride-share driver", ta: "சவாரி ஓட்டுநர்", hi: "सवारी ड्राइवर" }, relation: { en: "Stranger", ta: "அந்நியர்", hi: "अजनबी" }, env: { en: "City street, night", ta: "நகர வீதி, இரவு", hi: "शहर की सड़क, रात" }, icon: "\u{1F69B}", dialogue: { en: "That's not the car you booked, but hop in anyway — I'll charge half the price. Fast, no record of you.", ta: "நீங்கள் பதிவு செய்த கார் அது அல்ல, ஆனால் ஏறுங்கள் — பாதி கட்டணம். வேகமாக, உங்கள் பதிவேடு இல்லை.", hi: "यह आपकी बुक की गई गाड़ी नहीं है, फिर भी बैठ जाइए — आधा भाड़ा लूँगा। तेज़ और कोई रिकॉर्ड नहीं।" }, difficulty: 2 },
    { id: "bo-ya-1", skill: "boundaries", age: "youngadult", title: { en: "The office ask", ta: "அலுவலக வேண்டுகோள்", hi: "ऑफ़िस की माँग" }, character: { en: "A senior colleague", ta: "மூத்த சக", hi: "वरिष्ठ सहकर्मी" }, relation: { en: "Workplace", ta: "பணியிடம்", hi: "कार्यालय" }, env: { en: "Office", ta: "அலுவலகம்", hi: "ऑफ़िस" }, icon: "\u{1F4CB}", dialogue: { en: "Fixing all my reports tonight is your job. I have plans, so you'll stay late — that's how it works here.", ta: "இன்றிரவு என் அனைத்து அறிக்கைகளையும் சரிசெய்வது உங்கள் வேலை. எனக்கு திட்டம் உள்ளது, நீங்கள் தாமதமாக இருப்பீர்கள்.", hi: "आज रात मेरी सारी रिपोर्ट ठीक करना तुम्हारा काम है। मेरा प्लान है, तुम देर तक रुकोगे — यहीं नियम है।" }, difficulty: 3 },
    { id: "co-ya-1", skill: "communication", age: "youngadult", title: { en: "The late deposit", ta: "தாமதமான வைப்புத் தொகை", hi: "देर से मिला डिपॉज़िट" }, character: { en: "Your landlord", ta: "வீட்டு உரிமையாளர்", hi: "मकान मालिक" }, relation: { en: "Tenant agreement", ta: "குத்தகை ஒப்பந்தம்", hi: "किरायेदारी" }, env: { en: "Your apartment", ta: "உங்கள் வீடு", hi: "आपका फ्लैट" }, icon: "\u{1F3E2}", dialogue: { en: "The deposit return keeps getting delayed. You need the money now, but you don't want to sound rude. What do you say?", ta: "வைப்புத் தொகை திரும்பப் பெறுவது தாமதமாகிறது. பணம் வேண்டும், ஆனால் மரியாதையாக பேச வேண்டும். என்ன சொல்கிறீர்கள்?", hi: "डिपॉज़िट वापसी में देरी हो रही है। पैसे चाहिए, पर रूखा भी नहीं लगना। क्या कहेंगे?" }, difficulty: 2 },
    { id: "em-ya-1", skill: "emotional", age: "youngadult", title: { en: "Midnight spiral", ta: "நள்ளிரவு சுழற்சி", hi: "रात के विचारों का चक्कर" }, character: { en: "Your thoughts", ta: "உங்கள் எண்ணங்கள்", hi: "आपके विचार" }, relation: { en: "Inside you", ta: "உங்களுக்குள்", hi: "आपके अंदर" }, env: { en: "Your room at night", ta: "இரவில் உங்கள் அறை", hi: "रात में आपका कमरा" }, icon: "\u{1F319}", dialogue: { en: "Everything piles up — work, friends, money. Every worry gets louder as you lie awake. What helps you right now?", ta: "வேலை, நண்பர்கள், பணம் — எல்லாம் குவிகிறது. ஒவ்வொரு கவலையும் பெரிதாகிறது. இப்போது எது உதவும்?", hi: "काम, दोस्त, पैसे — सब जमा हो रहा है। हर चिंता और बड़ी होती जा रही है। अभी क्या मदद करेगा?" }, difficulty: 2 },
    { id: "pe-ya-1", skill: "peer", age: "youngadult", title: { en: "The borrowed money", ta: "கடன் வாங்கிய பணம்", hi: "उधार लिए पैसे" }, character: { en: "A good friend", ta: "நெருங்கிய நண்பர்", hi: "करीबी दोस्त" }, relation: { en: "Long friendship", ta: "நீண்ட நட்பு", hi: "पुरानी दोस्ती" }, env: { en: "Coffee shop", ta: "காபி கடை", hi: "कॉफ़ी शॉप" }, icon: "\u{1F375}", dialogue: { en: "I need $200 more. You said the last time was the last time. When you say no, what exactly do you say?", ta: "மேலும் 200 டாலர் வேண்டும். கடைசி முறை என்று சொன்னீர்கள். மறுப்பதை எப்படி சொல்கிறீர்கள்?", hi: "मुझे 200 डॉलर और चाहिए। आपने कहा था पिछली बार आख़िरी थी। ना कहते हुए आप क्या कहेंगे?" }, difficulty: 2 },
    { id: "di-ya-1", skill: "digital", age: "youngadult", title: { en: "The mystery link", ta: "மர்ம இணைப்பு", hi: "रहस्यमयी लिंक" }, character: { en: "An unknown sender", ta: "தெரியாத அனுப்புநர்", hi: "अनजान भेजने वाला" }, relation: { en: "Not a contact", ta: "தொடர்பு இல்லை", hi: "परिचित नहीं" }, env: { en: "Your inbox", ta: "உங்கள் அஞ்சல்", hi: "आपका इनबॉक्स" }, icon: "\u{1F4E7}", dialogue: { en: "Your parcel is waiting! Click this link and enter your bank PIN to receive it immediately. Urgent!", ta: "உங்கள் பொட்டலம் காத்திருக்கிறது! இணைப்பைக் கிளிக் செய்து வங்கி PIN உள்ளிடவும். அவசரம்!", hi: "आपका पार्सल इंतज़ार कर रहा है! लिंक पर क्लिक करके बैंक पिन डालें और तुरंत पाएँ। तुरंत!" }, difficulty: 1 },

    { id: "sa-ad-1", skill: "safety", age: "adult", title: { en: "The door collector", ta: "கதவு வசூலிப்பாளர்", hi: "दरवाज़े पर कलेक्टर" }, character: { en: "A stranger in uniform", ta: "சீருடையில் அந்நியர்", hi: "वर्दी में अजनबी" }, relation: { en: "No ID shown", ta: "அடையாளம் இல்லை", hi: "पहचान नहीं दिखाई" }, env: { en: "Your front door", ta: "உங்கள் வீட்டுக் கதவு", hi: "आपका दरवाज़ा" }, icon: "\u{1F6AA}", dialogue: { en: "I'm from the power company. Pay the due bill right now or your electricity gets cut tonight. Cash only.", ta: "நான் மின் நிறுவனம். இப்போதே கட்டணம் செலுத்துங்கள், இல்லையெனில் இன்றே மின்சாரம் துண்டிக்கப்படும். பணமாக மட்டுமே.", hi: "मैं बिजली कंपनी से हूँ। अभी बिल चुकाइए वरना आज रात बिजली कट जाएगी। सिर्फ़ नकद।" }, difficulty: 2 },
    { id: "bo-ad-1", skill: "boundaries", age: "adult", title: { en: "The favor chain", ta: "உதவி சங்கிலி", hi: "एहसानों की ज़ंजीर" }, character: { en: "A family member", ta: "குடும்ப உறுப்பினர்", hi: "परिवार का सदस्य" }, relation: { en: "Extended family", ta: "அத்தை மாமா குடும்பம்", hi: "नातेदार" }, env: { en: "A family dinner", ta: "குடும்ப விருந்து", hi: "पारिवारिक खाना" }, icon: "\u{1F468}\u{200D}\u{1F469}\u{200D}\u{1F467}", dialogue: { en: "Lend me your savings for my business. I promise it's a short-term loan — just don't keep asking about it.", ta: "என் தொழிலுக்கு உங்கள் சேமிப்பைக் கொடுங்கள். குறுகிய கால கடன் — அதைப் பற்றி மீண்டும் கேட்க வேண்டாம்.", hi: "मेरे काम के लिए अपनी बचत उधार दो। वादा है अल्पकालिक क़र्ज़ है — बार-बार मत पूछना।" }, difficulty: 3 },
    { id: "co-ad-1", skill: "communication", age: "adult", title: { en: "The midnight music", ta: "நள்ளிரவு இசை", hi: "रात का संगीत" }, character: { en: "Your neighbor", ta: "அண்டை வீட்டார்", hi: "पड़ोसी" }, relation: { en: "Neighbor", ta: "அண்டை", hi: "पड़ोसी" }, env: { en: "Apartment building", ta: "குடியிருப்பு", hi: "अपार्टमेंट" }, icon: "\u{1F3B5}", dialogue: { en: "Music is blasting at midnight again. You need sleep before work. Stand at the door — what do you say?", ta: "நள்ளிரவில் மீண்டும் இசை இரைச்சல். வேலைக்கு முன் தூக்கமும் வேண்டும். கதவின் எதிரில் — என்ன சொல்கிறீர்கள்?", hi: "आधी रात को फिर संगीत तेज़ है। काम से पहले नींद चाहिए। दरवाज़े पर जाइए — क्या कहेंगे?" }, difficulty: 1 },
    { id: "em-ad-1", skill: "emotional", age: "adult", title: { en: "Caregiver burn", ta: "பராமரிப்பாளர் அழுத்தம்", hi: "देखभाल करने वाले की थकान" }, character: { en: "Your situation", ta: "உங்கள் நிலைமை", hi: "आपकी स्थिति" }, relation: { en: "Yourself", ta: "நீங்களே", hi: "आप" }, env: { en: "Hospital waiting room", ta: "மருத்துவமனை காத்திருப்பு அறை", hi: "अस्पताल का इंतज़ार कक्ष" }, icon: "\u{1F3E5}", dialogue: { en: "You care for everyone and said 'I'm fine' again. Sleep, food and patience are running out. What is one honest step?", ta: "எல்லோரையும் கவனித்து 'நான் நன்றாக இருக்கிறேன்' என்கிறீர்கள். தூக்கம், உணவு, பொறுமை குறைகின்றன. ஒரே ஒரு நேர்மையான படி என்ன?", hi: "आप सबका ख्याल रखते हैं और फिर कहा 'मैं ठीक हूँ'। नींद, खाना, सब्र — सब कम हो रहा है। एक ईमानदार क़दम क्या होगा?" }, difficulty: 2 },
    { id: "pe-ad-1", skill: "peer", age: "adult", title: { en: "The gossip circle", ta: "வதந்தி வட்டம்", hi: "गपशप का घेरा" }, character: { en: "A coworker", ta: "சக ஊழியர்", hi: "सहकर्मी" }, relation: { en: "Workplace", ta: "பணியிடம்", hi: "कार्यालय" }, env: { en: "Office break room", ta: "அலுவலக ஓய்வு அறை", hi: "ऑफ़िस ब्रेक रूम" }, icon: "\u{2615}", dialogue: { en: "Everyone's making fun of the new hire's accent. Come on, it's just a joke. What do you do?", ta: "எல்லோரும் புதிய ஆளின் உச்சரிப்பைப் பார்த்து சிரிக்கிறார்கள். வேடிக்கைதான். என்ன செய்வீர்கள்?", hi: "सब नए कर्मचारी के बोलने के तरीके पर हँस रहे हैं। चलो, बस मज़ाक़ है। आप क्या करेंगे?" }, difficulty: 2 },
    { id: "di-ad-1", skill: "digital", age: "adult", title: { en: "The bank 'agent'", ta: "வங்கி 'முகவர்'", hi: "बैंक 'कर्मचारी'" }, character: { en: "Caller from your 'bank'", ta: "உங்கள் 'வங்கி' அழைப்பு", hi: "आपके 'बैंक' से कॉल" }, relation: { en: "Not a real agent", ta: "உண்மையான முகவர் அல்ல", hi: "असली कर्मचारी नहीं" }, env: { en: "Your phone", ta: "உங்கள் தொலைபேசி", hi: "आपका फ़ोन" }, icon: "\u{1F3E6}", dialogue: { en: "Your account is locked! Share all details and the OTP now to unlock it, or your money will be gone by morning.", ta: "உங்கள் கணக்கு பூட்டப்பட்டுள்ளது! அனைத்து விவரங்களையும் OTP-ஐயும் அனுப்புங்கள், இல்லையெனில் பணம் போய்விடும்.", hi: "आपका खाता लॉक है! अभी सारे विवरण और OTP दें, वरना सुबह तक पैसा जा सकता है।" }, difficulty: 1 }
  ];

  var FEEDBACK = {
    safety: {
      en: {
        good: { consequence: "You stayed safe. The adult checked and confirmed the person was not who they claimed to be.", strength: "You chose a trusted adult over a stranger.", improve: "Practice saying 'No' loudly and clearly, and moving toward people.", better: "I don't need help from strangers. I will call my family or a teacher." },
        risky: { consequence: "Going along with the person created real danger. A trusted adult helped you get back safe.", strength: "You heard them out before deciding.", improve: "Never leave with someone you do not fully trust, even if they seem kind.", better: "Stop, do not go. Call a trusted adult and stay where other people are." },
        unsure: { consequence: "You paused — nothing happened yet. Pausing is the perfect time to ask for help.", strength: "Stopping to think is a real skill.", improve: "When unsure, always check with a trusted adult first.", better: "I am not sure. I will ask my parent or teacher first." }
      },
      ta: {
        good: { consequence: "நீங்கள் பாதுகாப்பாக இருந்தீர்கள். பெரியவர் சரிபார்த்து அந்த நபர் வேறொருவர் என உறுதி செய்தார்.", strength: "அந்நியரை விட நம்பகமான பெரியவரைத் தேர்ந்தெடுத்தீர்கள்.", improve: "'வேண்டாம்' என்று உரக்கவும் தெளிவாகவும் சொல்லப் பயிற்சி செய்யலாம்.", better: "அந்நியர் உதவி எனக்குத் தேவையில்லை. நான் என் குடும்பத்தை அழைப்பேன்." },
        risky: { consequence: "அந்த நபருடன் சென்றது ஆபத்தை உருவாக்கியது. நம்பகமான பெரியவர் உதவி செய்து பாதுகாப்பாகக் கொண்டு வந்தார்.", strength: "முடிவு எடுப்பதற்கு முன் கேட்டீர்கள்.", improve: "அன்பாகத் தோன்றினாலும், முழுமையாக நம்பாதவர்களுடன் ஒருபோதும் செல்ல வேண்டாம்.", better: "நில், செல்ல வேண்டாம். நம்பகமான பெரியவரை அழைத்து மக்கள் இருக்குமிடத்தில் இருங்கள்." },
        unsure: { consequence: "நீங்கள் நிறுத்தினீர்கள் — இன்னும் எதுவும் நடக்கவில்லை. உதவி கேட்க இதுவே சரியான நேரம்.", strength: "யோசித்து நிற்பது ஒரு நிஜத் திறன்.", improve: "உறுதியில்லாத போது, முதலில் நம்பகமான பெரியவரிடம் கேளுங்கள்.", better: "எனக்கு உறுதியில்லை. முதலில் அம்மா/ஆசிரியரிடம் கேட்பேன்." }
      },
      hi: {
        good: { consequence: "आप सुरक्षित रहे। बड़ों ने जाँच की और पाया कि वह व्यक्ति वैसा नहीं था जैसा उसने बताया।", strength: "आपने अजनबी की जगह किसी भरोसेमंद बड़े को चुना।", improve: "'नहीं' ज़ोर से और साफ़ कहने का अभ्यास करें।", better: "मुझे अजनबियों से मदद नहीं चाहिए। मैं अपने परिवार या शिक्षक को बताऊँगा।" },
        risky: { consequence: "उस व्यक्ति के साथ जाना ख़तरनाक साबित हुआ। एक भरोसेमंद बड़े ने आपको सुरक्षित वापस लाया।", strength: "फ़ैसले से पहले आपने सुना।", improve: "भले वह दयालु लगे, किसी अजनबी के साथ कभी न जाएँ।", better: "रुको, मत जाओ। भरोसेमंद बड़े को बुलाओ और भीड़ वाली जगह रहो।" },
        unsure: { consequence: "आप रुके — अभी कुछ नहीं हुआ। रुकना ही मदद माँगने का सही समय है।", strength: "सोचकर रुकना एक असली कौशल है।", improve: "अनिश्चितता में पहले किसी भरोसेमंद बड़े से पूछें।", better: "मुझे यक़ीन नहीं है। पहले मैं अपने माता-पिता या शिक्षक से पूछूँगा।" }
      }
    },
    boundaries: {
      en: {
        good: { consequence: "You protected your boundary, and the person backed off. A small stand keeps your confidence growing.", strength: "You said 'no' clearly and calmly.", improve: "In support mode, one firm sentence is enough.", better: "No, I do not want to. Please respect my answer." },
        risky: { consequence: "Because you agreed, the boundary was crossed and you felt bad afterwards.", strength: "You noticed the discomfort early.", improve: "Your boundary is yours even with family, friends and work.", better: "I'm not comfortable with this. I will not do it." },
        unsure: { consequence: "You paused, so nothing was crossed yet — a great moment to decide.", strength: "Feeling discomfort is the first step.", improve: "Practice one clear 'no' out loud.", better: "No, and I do not need to explain why." }
      },
      ta: {
        good: { consequence: "உங்கள் எல்லையைப் பாதுகாத்தீர்கள், மற்றவர் பின்வாங்கினார். உங்கள் நம்பிக்கை வளர்ந்தது.", strength: "'வேண்டாம்' எனத் தெளிவாகவும் அமைதியாகவும் சொன்னீர்கள்.", improve: "ஒரு உறுதியான வாக்கியம் போதும்.", better: "இல்லை, எனக்கு வேண்டாம். என் பதிலை மதியுங்கள்." },
        risky: { consequence: "நீங்கள் ஒப்புக்கொண்டதால் எல்லை கடக்கப்பட்டது, பிறகு நீங்கள் வருத்தப்பட்டீர்கள்.", strength: "அசௌகரியத்தை முன்னரே உணர்ந்தீர்கள்.", improve: "குடும்பம், நண்பர்கள், வேலை என எங்கும் உங்கள் எல்லை உங்களுடையது.", better: "இது எனக்கு வசதியாக இல்லை. நான் இதைச் செய்ய மாட்டேன்." },
        unsure: { consequence: "நீங்கள் நிறுத்தினீர்கள் — எதுவும் கடக்கப்படவில்லை. முடிவு செய்ய சிறந்த தருணம்.", strength: "அசௌகரியத்தை உணர்வதே முதல் படி.", improve: "ஒரு தெளிவான 'வேண்டாம்' உரக்கச் சொல்லிப் பயிற்சி செய்யுங்கள்.", better: "இல்லை, ஏன் என்று விளக்கத் தேவையில்லை." }
      },
      hi: {
        good: { consequence: "आपने अपनी सीमा बचाई और सामने वाला पीछे हट गया। आत्मविश्वास बढ़ा।", strength: "आपने साफ़ और शांति से 'नहीं' कहा।", improve: "एक दृढ़ वाक्य काफ़ी है।", better: "नहीं, मुझे यह नहीं करना। कृपया मेरे जवाब का सम्मान करें।" },
        risky: { consequence: "हाँ कहने की वजह से सीमा टूट गई और बाद में बुरा लगा।", strength: "आपने असहजता जल्दी पहचान ली।", improve: "परिवार, दोस्त, ऑफ़िस — हर जगह आपकी सीमा आपकी है।", better: "मैं सहज नहीं हूँ। मैं यह नहीं करूँगा।" },
        unsure: { consequence: "आप रुके — अभी कुछ नहीं टूटा। निर्णय का अच्छा समय है।", strength: "असहजता महसूस करना पहला क़दम है।", improve: "एक साफ़ 'नहीं' ज़ोर से बोलकर अभ्यास करें।", better: "नहीं, और मुझे कारण बताने की ज़रूरत नहीं।" }
      }
    },
    communication: {
      en: {
        good: { consequence: "Clear, calm words worked. The other person understood you and helped without delay.", strength: "You were clear and respectful.", improve: "Add a 'please' or 'thanks' to feel even smoother.", better: "Excuse me, could you please help me find my mom?" },
        risky: { consequence: "Angry or blurry words made the situation harder for everyone.", strength: "You did communicate — that matters.", improve: "Try one slow, honest sentence.", better: "I need help. Could you please help me?" },
        unsure: { consequence: "People half-understood you, so the message got muddled.", strength: "You started speaking — great first move.", improve: "One short clear sentence beats a long jumble.", better: "Please help me, I can't find my parent." }
      },
      ta: {
        good: { consequence: "தெளிவான, அமைதியான வார்த்தைகள் வேலை செய்தன. மற்றவர் புரிந்து கொண்டு உடனே உதவினார்.", strength: "தெளிவாகவும் மரியாதையாகவும் பேசினீர்கள்.", improve: "'தயவுசெய்து' அல்லது 'நன்றி' சேர்த்தால் மேலும் சிறப்பாக.", better: "மன்னிக்கவும், என் அம்மாவைக் கண்டுபிடிக்க உதவ முடியுமா?" },
        risky: { consequence: "கோபமான அல்லது தெளிவற்ற வார்த்தைகள் நிலைமையை கடினமாக்கின.", strength: "நீங்கள் பேசினீர்கள் — அது முக்கியம்.", improve: "ஒரு மெதுவான, நேர்மையான வாக்கியத்தை முயலுங்கள்.", better: "எனக்கு உதவி வேண்டும். தயவுசெய்து உதவுங்கள்." },
        unsure: { consequence: "மக்கள் பாதி புரிந்து கொண்டனர், செய்தி குழப்பமானது.", strength: "பேசத் தொடங்கினீர்கள் — அருமையான முதல் படி.", improve: "நீண்ட குழப்பத்தை விட ஒரு சிறிய தெளிவான வாக்கியம்.", better: "தயவுசெய்து உதவுங்கள், என் அம்மாவைக் காணவில்லை." }
      },
      hi: {
        good: { consequence: "साफ़ और शांत शब्दों ने काम किया। सामने वाले ने समझा और तुरंत मदद की।", strength: "आप स्पष्ट और विनम्र थे।", improve: "एक 'कृपया' या 'धन्यवाद' और भी अच्छा लगेगा।", better: "माफ़ कीजिए, क्या आप मेरी माँ को ढूँढने में मदद कर सकते हैं?" },
        risky: { consequence: "गुस्से या धुंधले शब्दों ने हालात सबके लिए मुश्किल किए।", strength: "आपने बात तो की — यही मायने रखता है।", improve: "एक धीमा और ईमानदार वाक्य आज़माएँ।", better: "मुझे मदद चाहिए। कृपया मेरी मदद करें।" },
        unsure: { consequence: "लोगों ने आधा समझा, बात उलझ गई।", strength: "आपने बोलना शुरू किया — बढ़िया पहला क़दम।", improve: "लंबी उलझन से एक छोटा साफ़ वाक्य बेहतर है।", better: "कृपया मदद करें, मुझे मेरी माँ नहीं मिल रही।" }
      }
    },
    emotional: {
      en: {
        good: { consequence: "You calmed yourself, thought, and the big feeling lost its grip.", strength: "You used a real coping strategy.", improve: "Name your feeling to tame it even faster.", better: "I feel angry. I'll take slow breaths, then ask a grown-up for help." },
        risky: { consequence: "Acting fast on the big feeling made things worse, and you felt regret after.", strength: "Your feelings are real — the action is what we can change.", improve: "Pause and breathe before you react.", better: "I need a minute. Three slow breaths, then I'll ask for help." },
        unsure: { consequence: "The feeling is big and you gave it time. Now try to name what it is.", strength: "Noticing the feeling is step one.", improve: "Try one calming tool: slow breaths, water, or a quiet space.", better: "I'm overwhelmed. I will breathe slowly and talk to someone I trust." }
      },
      ta: {
        good: { consequence: "நீங்கள் அமைதியடைந்து, யோசித்து, பெரிய உணர்வு தளர்ந்தது.", strength: "உண்மையான சமாளிப்பு உத்தியைப் பயன்படுத்தினீர்கள்.", improve: "உணர்வைப் பெயரிட்டால் வேகமாக அடங்கும்.", better: "எனக்கு கோபமாக இருக்கிறது. மெதுவாக மூச்சு விட்டு, பிறகு பெரியவரிடம் உதவி கேட்பேன்." },
        risky: { consequence: "பெரிய உணர்வில் விரைவாக செயல்பட்டது நிலைமையை மோசமாக்கியது, பிறகு வருத்தமாய் இருந்தது.", strength: "உங்கள் உணர்வுகள் உண்மையானவை — செயலைத்தான் மாற்றலாம்.", improve: "எதிர்வினைக்கு முன் நிறுத்தி மூச்சு விடுங்கள்.", better: "எனக்கு ஒரு நிமிடம் வேண்டும். மூன்று மெதுவான மூச்சு, பிறகு உதவி கேட்பேன்." },
        unsure: { consequence: "உணர்வு பெரியது, நீங்கள் நேரம் கொடுத்தீர்கள். இப்போது அது என்ன எனப் பெயரிடுங்கள்.", strength: "உணர்வைக் கவனிப்பது முதல் படி.", improve: "ஒரு அமைதிப்படுத்தும் விஷயம்: மெதுவாக மூச்சு, தண்ணீர், அல்லது அமைதியான இடம்.", better: "நான் மிகவும் அழுத்தத்தில் உள்ளேன். மெதுவாக மூச்சு விட்டு நம்பும் ஒருவரிடம் பேசுவேன்." }
      },
      hi: {
        good: { consequence: "आपने खुद को शांत किया, सोचा, और बड़ी भावना कमज़ोर पड़ गई।", strength: "आपने एक असली मुकाबला तरीका अपनाया।", improve: "भावना को नाम दें — जल्दी काबू होगी।", better: "मुझे गुस्सा आ रहा है। धीरे साँस लूँगा, फिर किसी बड़े से मदद माँगूँगा।" },
        risky: { consequence: "बड़ी भावना पर तुरंत कार्य करने से बात बिगड़ गई और बाद में पछतावा हुआ।", strength: "आपकी भावनाएँ असली हैं — कार्य हम बदल सकते हैं।", improve: "प्रतिक्रिया से पहले रुकें और साँस लें।", better: "मुझे एक मिनट चाहिए। तीन धीमी साँसें, फिर मदद माँगूँगा।" },
        unsure: { consequence: "भावना बड़ी है और आपने उसे समय दिया। अब उसका नाम बताने की कोशिश करें।", strength: "भावना पहचानना पहला क़दम है।", improve: "एक शांत करने वाला तरीका: धीमी साँस, पानी, या शांत जगह।", better: "मैं दबाव में हूँ। धीरे साँस लूँगा और किसी भरोसेमंद से बात करूँगा।" }
      }
    },
    peer: {
      en: {
        good: { consequence: "Your response kept the day fair and calm. People actually respected you a bit more.", strength: "You stood up without shouting.", improve: "You can also invite the other person into the conversation.", better: "Please don't say that. Include us in the plan." },
        risky: { consequence: "Going along made the moment feel unfair, and you lost a little trust in yourself.", strength: "You knew it felt off.", improve: "Kind courage: you can disagree without cruelty.", better: "I don't agree with that joke, and I won't join it." },
        unsure: { consequence: "You stayed quiet — safe for now, but discomfort can pile up silently.", strength: "Reading the room is smart.", improve: "Prepare one gentle sentence you can say.", better: "I'd rather not. Let's do something else." }
      },
      ta: {
        good: { consequence: "உங்கள் பதில் நாளை நியாயமாகவும் அமைதியாகவும் வைத்தது. மக்கள் உங்களை மேலும் மதித்தனர்.", strength: "கத்தாமல் நிலைபெற்றீர்கள்.", improve: "மற்றவரை உரையாடலில் சேர்க்கவும் முடியும்.", better: "தயவுசெய்து அவ்வாறு சொல்லாதீர்கள். எங்களையும் சேர்த்துக்கொள்ளுங்கள்." },
        risky: { consequence: "சேர்ந்து கொண்டதால் அந்தத் தருணம் நியாயமற்றது போல் இருந்தது, உங்கள் மீதே நம்பிக்கை குறைந்தது.", strength: "தவறாக இருக்கிறது என நீங்கள் உணர்ந்தீர்கள்.", improve: "கருணையான துணிச்சல்: காயப்படுத்தாமல் மறுக்கலாம்.", better: "அந்த ஜோக்குடன் நான் உடன்படவில்லை, சேரவும் மாட்டேன்." },
        unsure: { consequence: "நீங்கள் அமைதியாக இருந்தீர்கள் — இப்போது சரி, ஆனால் அசௌகரியம் அமைதியாக குவிந்துவிடும்.", strength: "சூழலைப் படிப்பது அறிவு.", improve: "ஒரு மென்மையான வாக்கியத்தை முன்னே தயார் செய்யுங்கள்.", better: "எனக்கு வேண்டாம். வேறு ஏதாவது செய்வோம்." }
      },
      hi: {
        good: { consequence: "आपके जवाब ने दिन निष्पक्ष और शांत रखा। लोगों ने आपका सम्मान और बढ़ाया।", strength: "आप बिना चिल्लाए डटे रहे।", improve: "सामने वाले को बातचीत में शामिल भी कर सकते हैं।", better: "कृपया ऐसा मत कहिए। हमें भी शामिल कीजिए।" },
        risky: { consequence: "साथ चलने से वह पल अनुचित लगा और अपने लिए भरोसा थोड़ा घटा।", strength: "आपने महसूस किया कि कुछ ठीक नहीं है।", improve: "दयालु साहस: बिना क्रूरता के असहमत हो सकते हैं।", better: "मैं उस मज़ाक़ से सहमत नहीं, और इसमें शामिल नहीं होऊँगा।" },
        unsure: { consequence: "आप चुप रहे — अभी सुरक्षित, पर असहजता चुपचाप जम सकती है।", strength: "माहौल समझना अच्छा है।", improve: "एक विनम्र वाक्य पहले से तैयार करें।", better: "मुझे नहीं चाहिए। चलो कुछ और करते हैं।" }
      }
    },
    digital: {
      en: {
        good: { consequence: "You protected your information. Your device, money and identity stayed safe.", strength: "You refused to share private data.", improve: "Passwords and one-time codes are for you alone — always.", better: "I don't share my address or photos online. I'll tell a trusted adult." },
        risky: { consequence: "Sharing private details put you at risk — lucky this was a practice space.", strength: "It's normal to feel curious about a reply.", improve: "Private information stays private. Always.", better: "I won't send photos, pins or addresses to anyone online." },
        unsure: { consequence: "You felt curious — a perfect moment to stop and ask.", strength: "Spotting the red flag is a skill.", improve: "When unsure, lock your screen and ask a trusted adult.", better: "I'm not sure, so I will not share. Let me ask my parent first." }
      },
      ta: {
        good: { consequence: "உங்கள் தகவலைப் பாதுகாத்தீர்கள். உங்கள் சாதனம், பணம், அடையாளம் பாதுகாப்பாக இருந்தன.", strength: "தனிப்பட்ட தகவலைப் பகிர மறுத்தீர்கள்.", improve: "கடவுச்சொற்கள் மற்றும் OTP எப்போதும் உங்களுடையவை மட்டுமே.", better: "நான் என் முகவரி மற்றும் புகைப்படங்களை நிகர்நிலையில் பகிர மாட்டேன். பெரியவரிடம் சொல்வேன்." },
        risky: { consequence: "தனிப்பட்ட விவரங்களைப் பகிர்ந்தது ஆபத்து — இது பயிற்சி இடம் என்பதால் தப்பியது.", strength: "பதிலைப் பற்றி ஆர்வம் இருப்பது இயல்பு.", improve: "தனிப்பட்ட தகவல் எப்போதும் தனிப்பட்டதே.", better: "நான் படங்கள், PIN, முகவரி யாருக்கும் நிகர்நிலையில் அனுப்ப மாட்டேன்." },
        unsure: { consequence: "ஆர்வம் வந்தது — நிறுத்திக் கேட்க சிறந்த தருணம்.", strength: "ஆபத்து சின்னத்தைக் கண்டறிவது ஒரு திறன்.", improve: "உறுதியில்லாத போது, திரையைப் பூட்டி பெரியவரிடம் கேளுங்கள்.", better: "எனக்கு உறுதியில்லை, ஆகவே பகிர மாட்டேன். முதலில் அம்மாவிடம் கேட்பேன்." }
      },
      hi: {
        good: { consequence: "आपने अपनी जानकारी बचाई। डिवाइस, पैसा और पहचान सुरक्षित रहे।", strength: "आपने निजी डेटा साझा करने से मना कर दिया।", improve: "पासवर्ड और OTP हमेशा सिर्फ़ आपके लिए हैं।", better: "मैं अपना पता या फोटो ऑनलाइन साझा नहीं करता/करती। किसी बड़े को बताऊँगा।" },
        risky: { consequence: "निजी जानकारी देने से ख़तरा बना — अच्छा हुआ यह सिर्फ़ अभ्यास था।", strength: "जवाब पर कौतूहल होना सामान्य है।", improve: "निजी जानकारी हमेशा निजी रहती है।", better: "मैं किसी को ऑनलाइन फोटो, पिन या पता नहीं भेजूँगा।" },
        unsure: { consequence: "आपको उत्सुकता हुई — यही रुककर पूछने का सही समय है।", strength: "ख़तरे की निशानी पहचानना एक कौशल है।", improve: "संदेह में स्क्रीन लॉक करें और किसी बड़े से पूछें।", better: "मुझे यक़ीन नहीं, इसलिए साझा नहीं करूँगा। पहले माता-पिता से पूछूँगा।" }
      }
    }
  };

  var KW = {
    en: {
      safety: { good: ["no", "won't", "won’t", "don't want", "not going", "refuse", "call my", "call mom", "call dad", "call my mom", "teacher", "police", "trusted adult", "my parent", "mother", "father", "ask my", "tell my", "stay", "won't go", "not going with", "no,", "no thank"], bad: ["ok", "okay", "sure", "yes", "come with", "go with", "get in", "hop in", "jump in", "follow", "i'll go", "i will go", "give me a ride", "join him", "go with him"] },
      boundaries: { good: ["no", "won't", "won’t", "don't want", "don't want to", "refuse", "stop", "respect", "not comfortable", "i won't", "i will not", "can't do", "not okay", "not ok", "please don't", "my answer", "i don't want"], bad: ["yes", "ok", "okay", "sure", "fine", "i will do it", "i'll do", "do it", "go along", "agree", "let them", "i'll give", "i will give"] },
      communication: { good: ["please", "help", "excuse", "sorry", "thanks", "thank you", "can you", "would you", "could you", "ask", "need", "lost", "kindly", "excuse me"], bad: ["now", "hey you", "shut", "stupid", "give me", "give it", "yell", "scream", "rude", "fast"] },
      emotional: { good: ["calm", "breathe", "breath", "deep", "count", "walk away", "walk", "tell", "talk", "teacher", "parent", "help", "pause", "think", "quiet", "music", "friend", "drink", "water", "safe"], bad: ["hit", "push", "scream", "shout", "cry", "throw", "break", "hurt", "yell", "fight", "kick", "bite"] },
      peer: { good: ["please don't", "don't say", "stop", "not okay", "not fair", "unfair", "include", "join", "talk", "respect", "friend", "kind", "i don't agree", "no", "so don't", "don't join", "that's not", "not right"], bad: ["joke", "laugh", "agree", "go along", "make fun", "bully", "mock", "join them", "ha ha", "gossip", "share it", "i'll add"] },
      digital: { good: ["no", "won't", "won’t", "don't share", "not share", "private", "report", "block", "tell my", "ask my", "parent", "password", "passwords", "otp", "delete", "stop", "don't send", "won't send", "not sending", "don't tell", "not give", "no address"], bad: ["send", "share", "give", "ok", "sure", "click", "enter", "type", "tell", "reply", "otp is", "here it is", "my pin", "my address", "here's my"] }
    },
    ta: {
      safety: { good: ["வேண்டாம்", "இல்லை", "நான் செல்ல", "செல்ல மாட்டேன்", "அழைப்பேன்", "அம்மா", "அப்பா", "ஆசிரியர்", "போலீஸ்", "நம்பகமான", "கேட்பேன்", "சொல்வேன்", "நில்", "நிற்கிறேன்", "தேவையில்லை"], bad: ["சரி", "வா", "செல்கிறேன்", "சேர்ந்து செல்வேன்", "பின் செல்வேன்", "ஏறுவேன்", "ஓகே"] },
      boundaries: { good: ["வேண்டாம்", "இல்லை", "முடியாது", "செய்ய மாட்டேன்", "வசதியாக இல்லை", "மதியுங்கள்", "நிறுத்துங்கள்", "வேலையில்லை", "அனுமதி"], bad: ["சரி", "ஓகே", "செய்வேன்", "செய்கிறேன்", "ஒப்புக்கொள்கிறேன்", "சரி செய்யலாம்"] },
      communication: { good: ["தயவு", "உதவி", "மன்னிக்கவும்", "நன்றி", "முடியுமா", "கேட்கலாம்", "தொலைந்தேன்", "தேவை", "தயவுசெய்து", "உதவுங்கள்"], bad: ["இப்போதே", "ஏய்", "சொல்", "கத்த", "முட்டாள்"] },
      emotional: { good: ["அமைதி", "மூச்சு", "மூச்சுவிட", "எண்ணுவேன்", "நடப்பேன்", "சொல்வேன்", "பேசுவேன்", "ஆசிரியர்", "பெற்றோர்", "கேட்பேன்", "யோசிப்பேன்", "நீர்", "தண்ணீர்", "இசை"], bad: ["அடிப்பேன்", "தள்ளுவேன்", "கத்துவேன்", "அழுவேன்", "எறிவேன்", "உடைப்பேன்", "காயப்படுத்த"] },
      peer: { good: ["சொல்லாதீர்கள்", "நிறுத்துங்கள்", "நியாயமில்லை", "சேர்த்துக்கொள்ளுங்கள்", "மதியுங்கள்", "நண்பர்", "சரியில்லை", "வேண்டாம்", "உடன்படவில்லை"], bad: ["ஜோக்", "சிரிக்க", "கேலி", "சேர்வேன்", "சொல்லுகிறேன்", "பரப்புவேன்"] },
      digital: { good: ["மாட்டேன்", "வேண்டாம்", "பகிர", "சொல்ல மாட்டேன்", "தனிப்பட்ட", "ரிப்போர்ட்", "பிளாக்", "சொல்வேன்", "கடவுச்சொல்", "otp", "நிறுத்து", "அனுப்ப மாட்டேன்"], bad: ["அனுப்பு", "பகிருங்கள்", "சொல்கிறேன்", "அனுப்புகிறேன்", "கொடுக்கிறேன்", "சரி", "கிளிக்", "otp"] }
    },
    hi: {
      safety: { good: ["नहीं", "ना", "नहीं जाऊँगा", "नहीं जाना", "बुलाऊँगा", "बुलाऊँगी", "मम्मी", "पापा", "शिक्षक", "पुलिस", "रुकूँगा", "रुकूँगी", "भरोसेमंद", "पूछूँगा", "ज़रूरत नहीं", "मना"], bad: ["हाँ", "ठीक", "ओके", "चलो", "चला जाऊँगा", "साथ चलूँगा", "बैठ जाऊँगा", "जा रहा"] },
      boundaries: { good: ["नहीं", "ना", "मना", "नहीं चाहिए", "सहज नहीं", "नहीं करूँगा", "सम्मान", "रुको", "मुश्किल है", "नहीं करूँगी", "इजाज़त"], bad: ["हाँ", "ठीक", "ओके", "कर दूँगा", "कर देता हूँ", "मान लिया", "चलो ठीक", "दे दूँगा"] },
      communication: { good: ["कृपया", "मदद", "माफ़", "धन्यवाद", "क्या आप", "पूछना", "खो गया", "खो गई", "चाहिए", "मदद करें", "सुनिए"], bad: ["अभी", "चुप", "बेवकूफ", "चिल्ला", "दे दो", "दे दे"] },
      emotional: { good: ["शांत", "साँस", "गहरी", "गिनूँगा", "चलूँगा", "बताऊँगा", "बात", "शिक्षक", "पूछूँगा", "सोचूँगा", "पानी", "संगीत", "दोस्त", "मदद"], bad: ["मारूँगा", "धक्का", "चिल्लाऊँगा", "रोऊँगा", "फेंक", "तोड़", "चोट", "लड़ाई"] },
      peer: { good: ["मत बोलो", "रुको", "गलत है", "न्याय", "शामिल", "सम्मान", "दोस्त", "सहमत नहीं", "नहीं", "नहीं चाहिए"], bad: ["मज़ाक", "हँस", "कहूँगा", "साथ चलूँगा", "चुगली", "जोड़ूँगा", "बताऊँगा", "शेयर"] },
      digital: { good: ["नहीं", "ना", "साझा नहीं", "नहीं भेजूँगा", "नहीं दूँगा", "निजी", "ब्लॉक", "रिपोर्ट", "बताऊँगा", "पूछूँगा", "पासवर्ड", "otp", "रुको", "मना"], bad: ["भेजो", "भेजूँगा", "शेयर", "दे देता", "दूँगा", "क्लिक", "बताता", "otp है", "हाँ"] }
    }
  };

  var POLITE = {
    en: ["please", "thank", "thanks", "sorry", "excuse"],
    ta: ["தயவு", "நன்றி", "மன்னிக்க"],
    hi: ["कृपया", "धन्यवाद", "माफ़"]
  };

  return {
    L: L,
    TTS_LANG: TTS_LANG,
    STT_LANG: STT_LANG,
    SKILLS: SKILLS,
    SKILL_META: SKILL_META,
    AGE_GROUPS: AGE_GROUPS,
    SCENARIOS: SCENARIOS,
    AGE_NAMES: { en: { child: "Child", teen: "Teen", youngadult: "Young Adult", adult: "Adult" }, ta: { child: "குழந்தை", teen: "இளம்பருவம்", youngadult: "இளம் வயது", adult: "வயது வந்தோர்" }, hi: { child: "बच्चा", teen: "किशोर", youngadult: "युवा", adult: "वयस्क" } },
    FEEDBACK: FEEDBACK,
    KW: KW,
    POLITE: POLITE
  };
})();