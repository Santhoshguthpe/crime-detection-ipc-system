const translations = {
  en: {
    title: "Crime Classification Assistant",
    subtitle: "Describe an incident by typing or speaking in English, Hindi, or Telugu.",
    language: "Language",
    descriptionLabel: "Incident description",
    placeholder: "Example: A person threatened me with a knife and took my phone.",
    speak: "Speak",
    stop: "Stop",
    listening: "Listening… speak now.",
    unsupported: "Voice input is not supported in this browser. Try Chrome or Edge.",
    microphoneError: "Microphone access failed. Check browser permission and try again.",
    analyze: "Analyze incident",
    analyzing: "Analyzing the description…",
    needDetails: "More details needed",
    prediction: "Model prediction",
    confidence: "confidence",
    section: "Legal section",
    punishment: "Punishment",
    bailable: "Bailable",
    cognizable: "Cognizable",
    meaning: "Reference description",
    important: "Important:",
    notice: "This is an academic prototype. India’s BNS/BNSS laws came into force on 1 July 2024; always verify current law.",
    genericError: "The request could not be completed. Please try again."
  },
  hi: {
    title: "अपराध वर्गीकरण सहायक",
    subtitle: "घटना को अंग्रेज़ी, हिन्दी या तेलुगु में लिखें या बोलें।",
    language: "भाषा",
    descriptionLabel: "घटना का विवरण",
    placeholder: "उदाहरण: एक व्यक्ति ने चाकू दिखाकर मेरा फोन ले लिया।",
    speak: "बोलें",
    stop: "रोकें",
    listening: "सुन रहा है… अब बोलें।",
    unsupported: "इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है। Chrome या Edge आज़माएँ।",
    microphoneError: "माइक्रोफ़ोन अनुमति नहीं मिली। ब्राउज़र अनुमति जाँचें।",
    analyze: "घटना का विश्लेषण करें",
    analyzing: "विवरण का विश्लेषण हो रहा है…",
    needDetails: "अधिक जानकारी चाहिए",
    prediction: "मॉडल का अनुमान",
    confidence: "विश्वास",
    section: "कानूनी धारा",
    punishment: "सजा",
    bailable: "जमानती",
    cognizable: "संज्ञेय",
    meaning: "संदर्भ विवरण",
    important: "महत्वपूर्ण:",
    notice: "यह एक शैक्षणिक प्रोटोटाइप है। भारत में BNS/BNSS कानून 1 जुलाई 2024 से लागू हैं; वर्तमान कानून की पुष्टि करें।",
    genericError: "अनुरोध पूरा नहीं हुआ। कृपया फिर कोशिश करें।"
  },
  te: {
    title: "నేర వర్గీకరణ సహాయకుడు",
    subtitle: "సంఘటనను ఇంగ్లీష్, హిందీ లేదా తెలుగులో టైప్ చేయండి లేదా మాట్లాడండి.",
    language: "భాష",
    descriptionLabel: "సంఘటన వివరణ",
    placeholder: "ఉదాహరణ: ఒక వ్యక్తి కత్తితో బెదిరించి నా ఫోన్ తీసుకున్నాడు.",
    speak: "మాట్లాడండి",
    stop: "ఆపండి",
    listening: "వింటోంది… ఇప్పుడు మాట్లాడండి.",
    unsupported: "ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్ అందుబాటులో లేదు. Chrome లేదా Edge ప్రయత్నించండి.",
    microphoneError: "మైక్రోఫోన్ అనుమతి విఫలమైంది. బ్రౌజర్ అనుమతిని తనిఖీ చేయండి.",
    analyze: "సంఘటనను విశ్లేషించండి",
    analyzing: "వివరణను విశ్లేషిస్తోంది…",
    needDetails: "మరిన్ని వివరాలు అవసరం",
    prediction: "మోడల్ అంచనా",
    confidence: "నమ్మకం",
    section: "చట్టపరమైన సెక్షన్",
    punishment: "శిక్ష",
    bailable: "బెయిల్ వర్తిస్తుందా",
    cognizable: "కాగ్నిజబుల్",
    meaning: "రిఫరెన్స్ వివరణ",
    important: "ముఖ్యమైనది:",
    notice: "ఇది విద్యాపరమైన నమూనా. భారతదేశంలో BNS/BNSS చట్టాలు 1 జూలై 2024 నుండి అమలులో ఉన్నాయి; ప్రస్తుత చట్టాన్ని నిర్ధారించండి.",
    genericError: "అభ్యర్థన పూర్తి కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి."
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

function t(key) {
  return translations[languageSelect.value]?.[key] || translations.en[key] || key;
}

function applyLanguage(language) {
  const selected = translations[language] ? language : "en";
  languageSelect.value = selected;
  document.documentElement.lang = selected;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[selected][element.dataset.i18n];
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

  errorCard.hidden = true;
  resultCard.hidden = false;
  document.querySelector("#crime-name").textContent = data.prediction.label;
  document.querySelector("#confidence").textContent = `${Math.round(data.prediction.confidence * 100)}% ${t("confidence")}`;
  document.querySelector("#section").textContent = data.legal_reference.section || "N/A";
  document.querySelector("#punishment").textContent = data.legal_reference.punishment || "N/A";
  document.querySelector("#bailable").textContent = data.legal_reference.bailable || "N/A";
  document.querySelector("#cognizable").textContent = data.legal_reference.cognizable || "N/A";
  document.querySelector("#reference-description").textContent = data.legal_reference.description || "N/A";
  document.querySelector("#disclaimer").textContent = data.disclaimer;
  resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.interimResults = false;
  recognition.continuous = false;

  recognition.onstart = () => {
    listening = true;
    voiceButton.classList.add("listening");
    voiceLabel.textContent = t("stop");
    voiceStatus.textContent = t("listening");
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results).map((result) => result[0].transcript).join(" ");
    description.value = `${description.value} ${transcript}`.trim();
    description.focus();
  };

  recognition.onerror = () => {
    voiceStatus.textContent = t("microphoneError");
  };

  recognition.onend = () => {
    listening = false;
    voiceButton.classList.remove("listening");
    voiceLabel.textContent = t("speak");
  };

  voiceButton.addEventListener("click", () => {
    if (listening) {
      recognition.stop();
      return;
    }
    recognition.lang = speechLanguages[languageSelect.value];
    recognition.start();
  });
} else {
  voiceButton.disabled = true;
  voiceStatus.textContent = translations.en.unsupported;
}

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
if (window.serverResult) showResult(window.serverResult);
