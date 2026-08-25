const translations = {
  en: {
    lawBadge: "BNS updated · 1 Jul 2024", language: "Language",
    eyebrow: "Voice-first · Multilingual · Legal awareness",
    title: "Understand the possible law behind an incident.",
    subtitle: "Describe what happened in English, Hindi, or Telugu. NyayaAI predicts a crime category and shows a current legal reference in seconds.",
    featureVoice: "Voice input", featureLanguages: "3 languages", featureBns: "BNS references", startAnalysis: "Start analysis",
    analyzerEyebrow: "AI incident analyzer", analyzerTitle: "Tell us what happened",
    analyzerIntro: "Include actions, threats, property involved, injury, online activity, and other useful facts. Do not enter names or private identifiers.",
    descriptionLabel: "Incident description", privacy: "Avoid personal information",
    placeholder: "Example: A person threatened me with a knife and took my phone.",
    speak: "Speak", stop: "Stop", listening: "Listening… speak now.",
    unsupported: "Voice input is not supported in this browser. Try Chrome or Edge.",
    microphoneError: "Microphone access failed. Check browser permission and try again.",
    tryExample: "Try an example:", exampleRobbery: "Robbery", exampleCyber: "Cyber fraud", exampleStalking: "Stalking",
    analyze: "Analyze incident", analyzing: "Analyzing the description…", needDetails: "More details needed",
    prediction: "Possible category", confidence: "confidence", currentLaw: "Current legal reference", legacyLaw: "Legacy IPC reference",
    punishment: "Possible statutory punishment", bailable: "Indicative bailable status", cognizable: "Indicative cognizable status",
    meaning: "What this category means", consequences: "Possible consequences & considerations", officialSource: "View official source",
    howEyebrow: "Simple and transparent", howTitle: "How it works", stepOneTitle: "Describe the incident",
    stepOneText: "Type or use the microphone in your preferred language.", stepTwoTitle: "AI predicts a category",
    stepTwoText: "A multilingual classifier compares the description with learned examples.", stepThreeTitle: "Review verified references",
    stepThreeText: "Structured law data shows possible sections and consequences—not a final legal decision.",
    important: "Important:", notice: "This educational tool cannot file a complaint, replace police assistance, or provide legal advice. Contact emergency services if anyone is in immediate danger.",
    footerText: "Built for multilingual legal awareness", genericError: "The request could not be completed. Please try again."
  },
  hi: {
    lawBadge: "BNS अपडेट · 1 जुलाई 2024", language: "भाषा",
    eyebrow: "वॉइस-फर्स्ट · बहुभाषी · कानूनी जागरूकता", title: "किसी घटना के पीछे संभावित कानून को समझें।",
    subtitle: "अंग्रेज़ी, हिन्दी या तेलुगु में बताएं कि क्या हुआ। NyayaAI अपराध श्रेणी का अनुमान लगाकर वर्तमान कानूनी संदर्भ दिखाता है।",
    featureVoice: "वॉइस इनपुट", featureLanguages: "3 भाषाएँ", featureBns: "BNS संदर्भ", startAnalysis: "विश्लेषण शुरू करें",
    analyzerEyebrow: "AI घटना विश्लेषक", analyzerTitle: "बताएं कि क्या हुआ",
    analyzerIntro: "कार्रवाई, धमकी, संपत्ति, चोट, ऑनलाइन गतिविधि और उपयोगी तथ्य शामिल करें। नाम या निजी पहचान दर्ज न करें।",
    descriptionLabel: "घटना का विवरण", privacy: "निजी जानकारी न दें",
    placeholder: "उदाहरण: एक व्यक्ति ने चाकू दिखाकर मेरा फोन ले लिया।",
    speak: "बोलें", stop: "रोकें", listening: "सुन रहा है… अब बोलें।",
    unsupported: "इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है। Chrome या Edge आज़माएँ।",
    microphoneError: "माइक्रोफ़ोन अनुमति नहीं मिली। ब्राउज़र अनुमति जाँचें।",
    tryExample: "उदाहरण आज़माएँ:", exampleRobbery: "लूट", exampleCyber: "साइबर धोखाधड़ी", exampleStalking: "पीछा करना",
    analyze: "घटना का विश्लेषण करें", analyzing: "विवरण का विश्लेषण हो रहा है…", needDetails: "अधिक जानकारी चाहिए",
    prediction: "संभावित श्रेणी", confidence: "विश्वास", currentLaw: "वर्तमान कानूनी संदर्भ", legacyLaw: "पुराना IPC संदर्भ",
    punishment: "संभावित वैधानिक सजा", bailable: "संकेतात्मक जमानत स्थिति", cognizable: "संकेतात्मक संज्ञेय स्थिति",
    meaning: "इस श्रेणी का अर्थ", consequences: "संभावित परिणाम और विचार", officialSource: "आधिकारिक स्रोत देखें",
    howEyebrow: "सरल और पारदर्शी", howTitle: "यह कैसे काम करता है", stepOneTitle: "घटना का वर्णन करें",
    stepOneText: "अपनी भाषा में लिखें या माइक्रोफ़ोन का उपयोग करें।", stepTwoTitle: "AI श्रेणी का अनुमान लगाता है",
    stepTwoText: "बहुभाषी क्लासिफायर विवरण की तुलना सीखे हुए उदाहरणों से करता है।", stepThreeTitle: "सत्यापित संदर्भ देखें",
    stepThreeText: "संरचित कानूनी डेटा संभावित धाराएँ और परिणाम दिखाता है—अंतिम कानूनी निर्णय नहीं।",
    important: "महत्वपूर्ण:", notice: "यह शैक्षणिक टूल शिकायत दर्ज नहीं कर सकता, पुलिस सहायता की जगह नहीं लेता और कानूनी सलाह नहीं देता। तत्काल खतरे में आपातकालीन सेवा से संपर्क करें।",
    footerText: "बहुभाषी कानूनी जागरूकता के लिए बनाया गया", genericError: "अनुरोध पूरा नहीं हुआ। कृपया फिर कोशिश करें।"
  },
  te: {
    lawBadge: "BNS నవీకరణ · 1 జూలై 2024", language: "భాష",
    eyebrow: "వాయిస్-ఫస్ట్ · బహుభాషా · చట్ట అవగాహన", title: "ఒక సంఘటన వెనుక ఉండగల చట్టాన్ని అర్థం చేసుకోండి.",
    subtitle: "ఏమి జరిగిందో ఇంగ్లీష్, హిందీ లేదా తెలుగులో చెప్పండి. NyayaAI నేర వర్గాన్ని అంచనా వేసి ప్రస్తుత చట్ట సూచనను చూపిస్తుంది.",
    featureVoice: "వాయిస్ ఇన్‌పుట్", featureLanguages: "3 భాషలు", featureBns: "BNS సూచనలు", startAnalysis: "విశ్లేషణ ప్రారంభించండి",
    analyzerEyebrow: "AI సంఘటన విశ్లేషణ", analyzerTitle: "ఏమి జరిగిందో చెప్పండి",
    analyzerIntro: "చర్యలు, బెదిరింపులు, ఆస్తి, గాయం, ఆన్‌లైన్ కార్యకలాపం మరియు ఉపయోగకరమైన విషయాలను చేర్చండి. పేర్లు లేదా వ్యక్తిగత వివరాలు నమోదు చేయవద్దు.",
    descriptionLabel: "సంఘటన వివరణ", privacy: "వ్యక్తిగత సమాచారం వద్దు",
    placeholder: "ఉదాహరణ: ఒక వ్యక్తి కత్తితో బెదిరించి నా ఫోన్ తీసుకున్నాడు.",
    speak: "మాట్లాడండి", stop: "ఆపండి", listening: "వింటోంది… ఇప్పుడు మాట్లాడండి.",
    unsupported: "ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్ అందుబాటులో లేదు. Chrome లేదా Edge ప్రయత్నించండి.",
    microphoneError: "మైక్రోఫోన్ అనుమతి విఫలమైంది. బ్రౌజర్ అనుమతిని తనిఖీ చేయండి.",
    tryExample: "ఉదాహరణ:", exampleRobbery: "దోపిడీ", exampleCyber: "సైబర్ మోసం", exampleStalking: "వెంటాడటం",
    analyze: "సంఘటనను విశ్లేషించండి", analyzing: "వివరణను విశ్లేషిస్తోంది…", needDetails: "మరిన్ని వివరాలు అవసరం",
    prediction: "సంభావ్య వర్గం", confidence: "నమ్మకం", currentLaw: "ప్రస్తుత చట్ట సూచన", legacyLaw: "పాత IPC సూచన",
    punishment: "సంభావ్య చట్టబద్ధ శిక్ష", bailable: "సూచనాత్మక బెయిల్ స్థితి", cognizable: "సూచనాత్మక కాగ్నిజబుల్ స్థితి",
    meaning: "ఈ వర్గం అర్థం", consequences: "సంభావ్య పరిణామాలు మరియు అంశాలు", officialSource: "అధికారిక మూలాన్ని చూడండి",
    howEyebrow: "సులభం మరియు పారదర్శకం", howTitle: "ఇది ఎలా పనిచేస్తుంది", stepOneTitle: "సంఘటనను వివరించండి",
    stepOneText: "మీ భాషలో టైప్ చేయండి లేదా మైక్రోఫోన్ ఉపయోగించండి.", stepTwoTitle: "AI వర్గాన్ని అంచనా వేస్తుంది",
    stepTwoText: "బహుభాషా క్లాసిఫైయర్ వివరణను నేర్చుకున్న ఉదాహరణలతో పోలుస్తుంది.", stepThreeTitle: "ధృవీకరించిన సూచనలను చూడండి",
    stepThreeText: "నిర్మిత చట్ట డేటా సంభావ్య సెక్షన్లు మరియు పరిణామాలను చూపిస్తుంది—ఇది తుది చట్ట నిర్ణయం కాదు.",
    important: "ముఖ్యమైనది:", notice: "ఈ విద్యా సాధనం ఫిర్యాదు దాఖలు చేయదు, పోలీసు సహాయానికి ప్రత్యామ్నాయం కాదు, చట్ట సలహా ఇవ్వదు. తక్షణ ప్రమాదంలో అత్యవసర సేవలను సంప్రదించండి.",
    footerText: "బహుభాషా చట్ట అవగాహన కోసం రూపొందించబడింది", genericError: "అభ్యర్థన పూర్తి కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి."
  }
};

const examples = {
  robbery: {
    en: "A person threatened me with a knife and forcefully took my wallet.",
    hi: "एक व्यक्ति ने चाकू दिखाकर मेरा बटुआ जबरदस्ती ले लिया।",
    te: "ఒక వ్యక్తి కత్తితో బెదిరించి నా పర్సును బలవంతంగా తీసుకున్నాడు."
  },
  cyber: {
    en: "Someone asked for my OTP online and money was fraudulently taken from my bank account.",
    hi: "किसी ने ऑनलाइन मेरा OTP लेकर बैंक खाते से धोखे से पैसे निकाल लिए।",
    te: "ఎవరో ఆన్‌లైన్‌లో నా OTP తీసుకుని బ్యాంకు ఖాతా నుంచి మోసంగా డబ్బు తీసుకున్నారు."
  },
  stalking: {
    en: "A person repeatedly follows me and sends unwanted messages despite being asked to stop.",
    hi: "मना करने के बाद भी एक व्यक्ति बार-बार मेरा पीछा करता है और अनचाहे संदेश भेजता है।",
    te: "ఆపమని చెప్పినా ఒక వ్యక్తి పదేపదే నన్ను వెంటాడుతూ అవాంఛిత సందేశాలు పంపుతున్నాడు."
  }
};

const speechLanguages = { en: "en-IN", hi: "hi-IN", te: "te-IN" };
const languageSelect = document.querySelector("#language");
const form = document.querySelector("#analysis-form");
const description = document.querySelector("#description");
const voiceButton = document.querySelector("#voice-button");
const voiceLabel = document.querySelector("#voice-label");
const voiceStatus = document.querySelector("#voice-status");
const loading = document.querySelector("#loading");
const resultCard = document.querySelector("#result-card");
const errorCard = document.querySelector("#error-card");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let listening = false;
let startPending = false;
let sessionTranscripts = new Set();

function t(key) {
  return translations[languageSelect.value]?.[key] || translations.en[key] || key;
}

function applyLanguage(language) {
  const selected = translations[language] ? language : "en";
  languageSelect.value = selected;
  document.documentElement.lang = selected;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[selected][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translations[selected][element.dataset.i18nPlaceholder];
  });
  voiceButton.setAttribute("aria-label", t("speak"));
  voiceButton.title = t("speak");
}

function showError(message) {
  resultCard.hidden = true;
  errorCard.hidden = false;
  document.querySelector("#error-message").textContent = message;
}

function showResult(data) {
  if (!data.matched) {
    showError(data.message || t("genericError"));
    return;
  }

  const legal = data.legal_reference;
  errorCard.hidden = true;
  resultCard.hidden = false;
  document.querySelector("#crime-name").textContent = data.prediction.label;
  document.querySelector("#confidence").textContent = `${Math.round(data.prediction.confidence * 100)}% ${t("confidence")}`;
  document.querySelector("#section").textContent = legal.section || "N/A";
  document.querySelector("#law-name").textContent = legal.law || "";
  document.querySelector("#punishment").textContent = legal.punishment || "N/A";
  document.querySelector("#bailable").textContent = legal.bailable || "N/A";
  document.querySelector("#cognizable").textContent = legal.cognizable || "N/A";
  document.querySelector("#reference-description").textContent = legal.description || "N/A";
  document.querySelector("#law-notice").textContent = legal.law_notice || "";
  document.querySelector("#classification-note").textContent = legal.classification_note || "";
  document.querySelector("#disclaimer").textContent = data.disclaimer;

  const legacyRow = document.querySelector("#legacy-row");
  legacyRow.hidden = !legal.legacy_section;
  document.querySelector("#legacy-section").textContent = legal.legacy_section || "";

  const list = document.querySelector("#consequences-list");
  list.replaceChildren();
  (legal.consequences || []).forEach((consequence) => {
    const item = document.createElement("li");
    item.textContent = consequence;
    list.appendChild(item);
  });

  const sourceLink = document.querySelector("#source-link");
  sourceLink.hidden = !legal.source_url;
  if (legal.source_url) {
    sourceLink.href = legal.source_url;
    sourceLink.title = legal.source_title || t("officialSource");
  }
  resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.interimResults = false;
  recognition.continuous = false;

  recognition.onstart = () => {
    startPending = false;
    listening = true;
    sessionTranscripts = new Set();
    voiceButton.classList.add("listening");
    voiceLabel.textContent = t("stop");
    voiceStatus.textContent = t("listening");
  };

  recognition.onresult = (event) => {
    const freshTranscripts = [];
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const result = event.results[index];
      if (!result.isFinal) continue;

      const transcript = result[0].transcript.trim().replace(/\s+/g, " ");
      const transcriptKey = transcript.toLocaleLowerCase();
      if (!transcript || sessionTranscripts.has(transcriptKey)) continue;

      sessionTranscripts.add(transcriptKey);
      freshTranscripts.push(transcript);
    }

    if (freshTranscripts.length > 0) {
      const addition = freshTranscripts.join(" ");
      const currentText = description.value.trim();
      if (!currentText.toLocaleLowerCase().endsWith(addition.toLocaleLowerCase())) {
        description.value = [currentText, addition].filter(Boolean).join(" ");
      }
      description.focus();
    }
  };

  recognition.onerror = () => {
    startPending = false;
    voiceStatus.textContent = t("microphoneError");
  };

  recognition.onend = () => {
    listening = false;
    startPending = false;
    voiceButton.classList.remove("listening");
    voiceLabel.textContent = t("speak");
  };

  voiceButton.addEventListener("click", () => {
    if (listening) {
      recognition.stop();
      return;
    }
    if (startPending) return;

    recognition.lang = speechLanguages[languageSelect.value];
    startPending = true;
    try {
      recognition.start();
    } catch (_error) {
      startPending = false;
      voiceStatus.textContent = t("microphoneError");
    }
  });
} else {
  voiceButton.disabled = true;
}

document.querySelectorAll(".example-chip").forEach((button) => {
  button.addEventListener("click", () => {
    description.value = examples[button.dataset.example][languageSelect.value];
    description.focus();
  });
});

languageSelect.addEventListener("change", () => {
  applyLanguage(languageSelect.value);
  voiceStatus.textContent = SpeechRecognition ? "" : t("unsupported");
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  resultCard.hidden = true;
  errorCard.hidden = true;
  loading.hidden = false;

  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: description.value, language: languageSelect.value })
    });
    const data = await response.json();
    if (!response.ok) {
      const message = typeof data.detail === "string" ? data.detail : t("genericError");
      throw new Error(message);
    }
    showResult(data);
  } catch (error) {
    showError(error.message || t("genericError"));
  } finally {
    loading.hidden = true;
  }
});

applyLanguage(window.submittedLanguage || "en");
if (!SpeechRecognition) voiceStatus.textContent = t("unsupported");
if (window.serverResult) showResult(window.serverResult);
