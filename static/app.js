const translations = {
  en: {
    dangerText: "Someone in immediate danger?", callEmergency: "Call emergency services", navAnalyze: "Analyze", navHow: "How it works", navSafety: "Safety", lawBadge: "Current BNS reference layer", language: "Language",
    eyebrow: "Responsible AI for legal awareness", title: "Describe an incident. Understand the possible legal direction.", subtitle: "Speak or type in English, Hindi, or Telugu. Get a clear preliminary category, date-aware legal reference, and practical next steps.", startAnalysis: "Start private analysis", notStored: "Incident text is not stored", proofLanguages: "Supported languages", proofBns: "BNS-mapped categories", proofTests: "Automated checks passing",
    analyzerEyebrow: "Private incident assessment", analyzerTitle: "Start with the facts", analyzerIntro: "Describe actions and circumstances without entering names, phone numbers, account numbers, or other private identifiers.", incidentDate: "Incident date", dateHelp: "Used only to show BNS or legacy IPC context", dangerCheck: "The situation may involve immediate danger", dangerHelp: "The result will prioritise emergency guidance.", descriptionLabel: "What happened?", placeholder: "Example: A person threatened me with a knife and forcefully took my wallet.", speak: "Speak description", stop: "Stop listening", voiceHint: "Tap once and speak naturally", listening: "Listening… speak now.", unsupported: "Voice input is unavailable in this browser. Try current Chrome or Edge.", microphoneError: "Microphone access failed. Check browser permission and try again.", tryExample: "Try a safe example", exampleRobbery: "Robbery", exampleCyber: "Cyber fraud", exampleStalking: "Stalking", analyze: "Analyze incident",
    privacyEyebrow: "Privacy by design", privacyTitle: "Your description stays temporary", privacyText: "This version has no account, incident database, or history page. The server processes the description in memory for the current response.", trustOne: "No sign-up required", trustTwo: "No incident history stored", trustThree: "Official sources linked", trustFour: "AI cannot create punishment text", statuteLanguage: "Legal section and punishment text remains in English to avoid changing the meaning through automatic translation.", analyzing: "Reviewing the description…", analyzingHelp: "Classifying the incident and checking structured legal references.", needDetails: "More details needed",
    urgentTitle: "Safety comes first.", urgentText: "If danger is immediate, stop using this tool and call 112.", assessmentResult: "Preliminary assessment", signalsLabel: "Wording that supported this match:", copySummary: "Copy summary", saveReport: "Print / save PDF", newAnalysis: "New analysis", legalDirection: "Possible legal direction", lawReference: "Structured law reference", sectionLabel: "Reference section", legacyLaw: "Legacy IPC reference", currentEquivalent: "Current BNS equivalent", punishment: "Possible statutory punishment", bailable: "Bailable status", cognizable: "Cognizable status", meaning: "What this category means", consequences: "Possible consequences and considerations", officialSource: "Open official law source",
    actionEyebrow: "Practical guidance", nextSteps: "Recommended next steps", evidenceTitle: "Information worth preserving", alternativesEyebrow: "Model transparency", alternativesTitle: "Other categories considered", alternativesText: "These are possibilities, not additional charges.", boundaryTitle: "What this result cannot decide", boundaryOne: "Whether an offence legally occurred", boundaryTwo: "Which exact subsection applies", boundaryThree: "Guilt, bail, or the final sentence", boundaryFour: "Whether evidence is legally admissible", important: "Important",
    howEyebrow: "Clear by design", howTitle: "How NyayaAI reaches a result", stepOneTitle: "You provide the facts", stepOneText: "Voice is converted to text in the browser, or you can type directly.", stepTwoTitle: "The model finds a category", stepTwoText: "A multilingual text classifier compares wording with learned incident examples.", stepThreeTitle: "Structured records add context", stepThreeText: "The category retrieves date-aware law data and practical guidance. AI does not invent the punishment.", responsibleEyebrow: "Responsible AI boundary", responsibleTitle: "Useful guidance without pretending to be a lawyer.", responsibleOneTitle: "Category prediction", responsibleOneText: "The model provides a preliminary category and alternatives.", responsibleTwoTitle: "Verified legal layer", responsibleTwoText: "Sections and punishments come from maintained records linked to official sources.", responsibleThreeTitle: "Human decision required", responsibleThreeText: "Police, lawyers and courts determine the actual legal outcome.", footerText: "A final-year engineering project for accessible and responsible legal awareness.",
    matchStrong: "Strong text match", matchModerate: "Moderate text match", matchPreliminary: "Preliminary text match", strongExplain: "The description closely matches examples learned for this category.", moderateExplain: "Several details support this category, but alternatives should also be reviewed.", preliminaryExplain: "This is a weak early match. Add more facts or ask a professional to review it.", regimeBns: "BNS · current", regimeIpc: "IPC · incident date", regimeCurrent: "BNS · date not supplied", regimeSpecial: "Special law", copied: "Summary copied", copyFailed: "Could not copy the summary", genericError: "The analysis could not be completed. Please try again."
  },
  hi: {
    dangerText: "क्या किसी को तत्काल खतरा है?", callEmergency: "आपातकालीन सेवा को कॉल करें", navAnalyze: "विश्लेषण", navHow: "कैसे काम करता है", navSafety: "सुरक्षा", lawBadge: "वर्तमान BNS संदर्भ परत", language: "भाषा",
    eyebrow: "कानूनी जागरूकता के लिए जिम्मेदार AI", title: "घटना बताएं। संभावित कानूनी दिशा समझें।", subtitle: "अंग्रेज़ी, हिन्दी या तेलुगु में बोलें या लिखें। प्रारंभिक श्रेणी, तारीख के अनुसार कानूनी संदर्भ और अगले कदम जानें।", startAnalysis: "निजी विश्लेषण शुरू करें", notStored: "घटना का विवरण संग्रहित नहीं होता", proofLanguages: "समर्थित भाषाएँ", proofBns: "BNS से जुड़ी श्रेणियाँ", proofTests: "स्वचालित जाँच सफल",
    analyzerEyebrow: "निजी घटना मूल्यांकन", analyzerTitle: "तथ्यों से शुरुआत करें", analyzerIntro: "नाम, फोन नंबर, खाता नंबर या निजी पहचान दिए बिना कार्रवाई और परिस्थितियाँ बताएं।", incidentDate: "घटना की तारीख", dateHelp: "केवल BNS या पुराने IPC संदर्भ के लिए", dangerCheck: "स्थिति में तत्काल खतरा हो सकता है", dangerHelp: "परिणाम आपातकालीन मार्गदर्शन को प्राथमिकता देगा।", descriptionLabel: "क्या हुआ?", placeholder: "उदाहरण: एक व्यक्ति ने चाकू दिखाकर मेरा बटुआ जबरदस्ती ले लिया।", speak: "विवरण बोलें", stop: "सुनना रोकें", voiceHint: "एक बार दबाकर स्वाभाविक रूप से बोलें", listening: "सुन रहा है… अब बोलें।", unsupported: "इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है। Chrome या Edge आज़माएँ।", microphoneError: "माइक्रोफ़ोन अनुमति विफल हुई। ब्राउज़र अनुमति जाँचें।", tryExample: "सुरक्षित उदाहरण आज़माएँ", exampleRobbery: "लूट", exampleCyber: "साइबर धोखाधड़ी", exampleStalking: "पीछा करना", analyze: "घटना का विश्लेषण करें",
    privacyEyebrow: "गोपनीयता प्राथमिकता", privacyTitle: "आपका विवरण अस्थायी रहता है", privacyText: "इस संस्करण में खाता, घटना डेटाबेस या इतिहास पृष्ठ नहीं है। सर्वर केवल वर्तमान उत्तर के लिए विवरण को मेमोरी में संसाधित करता है।", trustOne: "साइन-अप की आवश्यकता नहीं", trustTwo: "घटना इतिहास संग्रहित नहीं", trustThree: "आधिकारिक स्रोत जुड़े हैं", trustFour: "AI सजा का पाठ नहीं बनाता", statuteLanguage: "स्वचालित अनुवाद से अर्थ बदलने से बचाने के लिए कानूनी धारा और सजा का पाठ अंग्रेज़ी में रहता है।", analyzing: "विवरण की समीक्षा हो रही है…", analyzingHelp: "घटना को वर्गीकृत कर संरचित कानूनी संदर्भ जाँचा जा रहा है।", needDetails: "अधिक जानकारी चाहिए",
    urgentTitle: "सुरक्षा सबसे पहले।", urgentText: "तत्काल खतरा हो तो इस टूल को छोड़कर 112 पर कॉल करें।", assessmentResult: "प्रारंभिक मूल्यांकन", signalsLabel: "इस मिलान का समर्थन करने वाले शब्द:", copySummary: "सारांश कॉपी करें", saveReport: "प्रिंट / PDF सेव करें", newAnalysis: "नया विश्लेषण", legalDirection: "संभावित कानूनी दिशा", lawReference: "संरचित कानूनी संदर्भ", sectionLabel: "संदर्भ धारा", legacyLaw: "पुराना IPC संदर्भ", currentEquivalent: "वर्तमान BNS समकक्ष", punishment: "संभावित वैधानिक सजा", bailable: "जमानत स्थिति", cognizable: "संज्ञेय स्थिति", meaning: "इस श्रेणी का अर्थ", consequences: "संभावित परिणाम और विचार", officialSource: "आधिकारिक कानून स्रोत खोलें",
    actionEyebrow: "व्यावहारिक मार्गदर्शन", nextSteps: "सुझाए गए अगले कदम", evidenceTitle: "सुरक्षित रखने योग्य जानकारी", alternativesEyebrow: "मॉडल पारदर्शिता", alternativesTitle: "अन्य विचार की गई श्रेणियाँ", alternativesText: "ये संभावनाएँ हैं, अतिरिक्त आरोप नहीं।", boundaryTitle: "यह परिणाम क्या तय नहीं कर सकता", boundaryOne: "कानूनी रूप से अपराध हुआ या नहीं", boundaryTwo: "कौन-सी सटीक उपधारा लागू होती है", boundaryThree: "दोष, जमानत या अंतिम सजा", boundaryFour: "सबूत कानूनी रूप से स्वीकार्य है या नहीं", important: "महत्वपूर्ण",
    howEyebrow: "स्पष्ट प्रक्रिया", howTitle: "NyayaAI परिणाम तक कैसे पहुँचता है", stepOneTitle: "आप तथ्य बताते हैं", stepOneText: "वॉइस ब्राउज़र में टेक्स्ट में बदलती है या आप सीधे लिख सकते हैं।", stepTwoTitle: "मॉडल श्रेणी ढूँढता है", stepTwoText: "बहुभाषी टेक्स्ट मॉडल विवरण की तुलना सीखे हुए घटना उदाहरणों से करता है।", stepThreeTitle: "संरचित रिकॉर्ड संदर्भ जोड़ते हैं", stepThreeText: "श्रेणी से तारीख-आधारित कानून और व्यावहारिक मार्गदर्शन मिलता है। AI सजा नहीं बनाता।", responsibleEyebrow: "जिम्मेदार AI सीमा", responsibleTitle: "वकील होने का दावा किए बिना उपयोगी मार्गदर्शन।", responsibleOneTitle: "श्रेणी अनुमान", responsibleOneText: "मॉडल प्रारंभिक श्रेणी और विकल्प देता है।", responsibleTwoTitle: "सत्यापित कानूनी परत", responsibleTwoText: "धाराएँ और सजाएँ आधिकारिक स्रोतों से जुड़े रिकॉर्ड से आती हैं।", responsibleThreeTitle: "मानवीय निर्णय आवश्यक", responsibleThreeText: "पुलिस, वकील और अदालत वास्तविक कानूनी परिणाम तय करते हैं।", footerText: "सुलभ और जिम्मेदार कानूनी जागरूकता के लिए अंतिम-वर्ष इंजीनियरिंग परियोजना।",
    matchStrong: "मजबूत टेक्स्ट मिलान", matchModerate: "मध्यम टेक्स्ट मिलान", matchPreliminary: "प्रारंभिक टेक्स्ट मिलान", strongExplain: "विवरण इस श्रेणी के सीखे हुए उदाहरणों से बहुत मिलता है।", moderateExplain: "कई विवरण इस श्रेणी का समर्थन करते हैं, लेकिन विकल्प भी देखें।", preliminaryExplain: "यह कमजोर प्रारंभिक मिलान है। अधिक तथ्य जोड़ें या विशेषज्ञ से समीक्षा कराएँ।", regimeBns: "BNS · वर्तमान", regimeIpc: "IPC · घटना तारीख", regimeCurrent: "BNS · तारीख नहीं दी", regimeSpecial: "विशेष कानून", copied: "सारांश कॉपी हुआ", copyFailed: "सारांश कॉपी नहीं हुआ", genericError: "विश्लेषण पूरा नहीं हुआ। कृपया फिर कोशिश करें।"
  },
  te: {
    dangerText: "ఎవరికైనా తక్షణ ప్రమాదం ఉందా?", callEmergency: "అత్యవసర సేవలకు కాల్ చేయండి", navAnalyze: "విశ్లేషణ", navHow: "ఎలా పనిచేస్తుంది", navSafety: "భద్రత", lawBadge: "ప్రస్తుత BNS సూచన పొర", language: "భాష",
    eyebrow: "చట్ట అవగాహన కోసం బాధ్యతాయుత AI", title: "సంఘటనను వివరించండి. సంభావ్య చట్ట దిశను అర్థం చేసుకోండి.", subtitle: "ఇంగ్లీష్, హిందీ లేదా తెలుగులో మాట్లాడండి లేదా టైప్ చేయండి. ప్రాథమిక వర్గం, తేదీ ఆధారిత చట్ట సూచన మరియు తదుపరి చర్యలను పొందండి.", startAnalysis: "ప్రైవేట్ విశ్లేషణ ప్రారంభించండి", notStored: "సంఘటన వివరణ నిల్వ చేయబడదు", proofLanguages: "మద్దతు ఉన్న భాషలు", proofBns: "BNSతో అనుసంధానించిన వర్గాలు", proofTests: "ఆటోమేటెడ్ తనిఖీలు విజయవంతం",
    analyzerEyebrow: "ప్రైవేట్ సంఘటన అంచనా", analyzerTitle: "వాస్తవాలతో ప్రారంభించండి", analyzerIntro: "పేర్లు, ఫోన్ నంబర్లు, ఖాతా నంబర్లు లేదా వ్యక్తిగత గుర్తింపులు ఇవ్వకుండా చర్యలు మరియు పరిస్థితులను వివరించండి.", incidentDate: "సంఘటన తేదీ", dateHelp: "BNS లేదా పాత IPC సందర్భం చూపడానికి మాత్రమే", dangerCheck: "పరిస్థితిలో తక్షణ ప్రమాదం ఉండవచ్చు", dangerHelp: "ఫలితం అత్యవసర మార్గదర్శనానికి ప్రాధాన్యం ఇస్తుంది.", descriptionLabel: "ఏమి జరిగింది?", placeholder: "ఉదాహరణ: ఒక వ్యక్తి కత్తితో బెదిరించి నా పర్సును బలవంతంగా తీసుకున్నాడు.", speak: "వివరణ మాట్లాడండి", stop: "వినడం ఆపండి", voiceHint: "ఒకసారి నొక్కి సహజంగా మాట్లాడండి", listening: "వింటోంది… ఇప్పుడు మాట్లాడండి.", unsupported: "ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్ లేదు. Chrome లేదా Edge ప్రయత్నించండి.", microphoneError: "మైక్రోఫోన్ అనుమతి విఫలమైంది. బ్రౌజర్ అనుమతిని తనిఖీ చేయండి.", tryExample: "సురక్షిత ఉదాహరణ ప్రయత్నించండి", exampleRobbery: "దోపిడీ", exampleCyber: "సైబర్ మోసం", exampleStalking: "వెంటాడటం", analyze: "సంఘటనను విశ్లేషించండి",
    privacyEyebrow: "గోప్యతకు ప్రాధాన్యం", privacyTitle: "మీ వివరణ తాత్కాలికంగా ఉంటుంది", privacyText: "ఈ వెర్షన్‌లో ఖాతా, సంఘటన డేటాబేస్ లేదా చరిత్ర పేజీ లేదు. ప్రస్తుత సమాధానం కోసం మాత్రమే సర్వర్ వివరణను మెమరీలో ప్రాసెస్ చేస్తుంది.", trustOne: "సైన్-అప్ అవసరం లేదు", trustTwo: "సంఘటన చరిత్ర నిల్వ కాదు", trustThree: "అధికారిక మూలాలు అనుసంధానం", trustFour: "AI శిక్ష వివరాన్ని సృష్టించదు", statuteLanguage: "ఆటోమేటిక్ అనువాదంతో అర్థం మారకుండా చట్ట సెక్షన్ మరియు శిక్ష వివరాలు ఇంగ్లీష్‌లోనే ఉంటాయి.", analyzing: "వివరణను సమీక్షిస్తోంది…", analyzingHelp: "సంఘటనను వర్గీకరించి నిర్మిత చట్ట సూచనలను తనిఖీ చేస్తోంది.", needDetails: "మరిన్ని వివరాలు అవసరం",
    urgentTitle: "భద్రత ముందుగా.", urgentText: "తక్షణ ప్రమాదం ఉంటే ఈ సాధనాన్ని ఆపి 112కు కాల్ చేయండి.", assessmentResult: "ప్రాథమిక అంచనా", signalsLabel: "ఈ సరిపోలికకు మద్దతిచ్చిన పదాలు:", copySummary: "సారాంశం కాపీ", saveReport: "ప్రింట్ / PDF సేవ్", newAnalysis: "కొత్త విశ్లేషణ", legalDirection: "సంభావ్య చట్ట దిశ", lawReference: "నిర్మిత చట్ట సూచన", sectionLabel: "సూచన సెక్షన్", legacyLaw: "పాత IPC సూచన", currentEquivalent: "ప్రస్తుత BNS సమానం", punishment: "సంభావ్య చట్టబద్ధ శిక్ష", bailable: "బెయిల్ స్థితి", cognizable: "కాగ్నిజబుల్ స్థితి", meaning: "ఈ వర్గం అర్థం", consequences: "సంభావ్య పరిణామాలు మరియు అంశాలు", officialSource: "అధికారిక చట్ట మూలాన్ని తెరవండి",
    actionEyebrow: "ఆచరణాత్మక మార్గదర్శనం", nextSteps: "సిఫార్సు చేసిన తదుపరి చర్యలు", evidenceTitle: "భద్రపరచాల్సిన సమాచారం", alternativesEyebrow: "మోడల్ పారదర్శకత", alternativesTitle: "పరిగణించిన ఇతర వర్గాలు", alternativesText: "ఇవి అవకాశాలు మాత్రమే, అదనపు ఆరోపణలు కావు.", boundaryTitle: "ఈ ఫలితం నిర్ణయించలేనివి", boundaryOne: "చట్టపరంగా నేరం జరిగిందా", boundaryTwo: "ఏ ఖచ్చితమైన ఉపవిభాగం వర్తిస్తుంది", boundaryThree: "దోషం, బెయిల్ లేదా తుది శిక్ష", boundaryFour: "సాక్ష్యం చట్టపరంగా అంగీకారయోగ్యమా", important: "ముఖ్యమైనది",
    howEyebrow: "స్పష్టమైన ప్రక్రియ", howTitle: "NyayaAI ఫలితాన్ని ఎలా చేరుకుంటుంది", stepOneTitle: "మీరు వాస్తవాలు చెబుతారు", stepOneText: "వాయిస్ బ్రౌజర్‌లో టెక్స్ట్‌గా మారుతుంది లేదా నేరుగా టైప్ చేయవచ్చు.", stepTwoTitle: "మోడల్ వర్గాన్ని కనుగొంటుంది", stepTwoText: "బహుభాషా టెక్స్ట్ మోడల్ వివరణను నేర్చుకున్న సంఘటన ఉదాహరణలతో పోలుస్తుంది.", stepThreeTitle: "నిర్మిత రికార్డులు సందర్భం ఇస్తాయి", stepThreeText: "వర్గం తేదీ ఆధారిత చట్ట డేటా మరియు మార్గదర్శనాన్ని తెస్తుంది. AI శిక్షను సృష్టించదు.", responsibleEyebrow: "బాధ్యతాయుత AI పరిమితి", responsibleTitle: "న్యాయవాదిగా నటించకుండా ఉపయోగకరమైన మార్గదర్శనం.", responsibleOneTitle: "వర్గ అంచనా", responsibleOneText: "మోడల్ ప్రాథమిక వర్గం మరియు ప్రత్యామ్నాయాలను ఇస్తుంది.", responsibleTwoTitle: "ధృవీకరించిన చట్ట పొర", responsibleTwoText: "సెక్షన్లు మరియు శిక్షలు అధికారిక మూలాలకు అనుసంధానించిన రికార్డుల నుంచి వస్తాయి.", responsibleThreeTitle: "మానవ నిర్ణయం అవసరం", responsibleThreeText: "పోలీసులు, న్యాయవాదులు మరియు కోర్టులు అసలు చట్ట ఫలితాన్ని నిర్ణయిస్తారు.", footerText: "అందుబాటులో ఉండే బాధ్యతాయుత చట్ట అవగాహన కోసం చివరి సంవత్సరం ఇంజనీరింగ్ ప్రాజెక్ట్.",
    matchStrong: "బలమైన టెక్స్ట్ సరిపోలిక", matchModerate: "మధ్యస్థ టెక్స్ట్ సరిపోలిక", matchPreliminary: "ప్రాథమిక టెక్స్ట్ సరిపోలిక", strongExplain: "వివరణ ఈ వర్గానికి నేర్చుకున్న ఉదాహరణలతో బాగా సరిపోతుంది.", moderateExplain: "అనేక వివరాలు ఈ వర్గానికి మద్దతిస్తాయి, కానీ ప్రత్యామ్నాయాలను కూడా చూడండి.", preliminaryExplain: "ఇది బలహీనమైన ప్రారంభ సరిపోలిక. మరిన్ని వాస్తవాలు జోడించండి లేదా నిపుణుడితో సమీక్షించండి.", regimeBns: "BNS · ప్రస్తుత", regimeIpc: "IPC · సంఘటన తేదీ", regimeCurrent: "BNS · తేదీ ఇవ్వలేదు", regimeSpecial: "ప్రత్యేక చట్టం", copied: "సారాంశం కాపీ అయింది", copyFailed: "సారాంశం కాపీ కాలేదు", genericError: "విశ్లేషణ పూర్తి కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి."
  }
};

const examples = {
  robbery: { en: "Threatened me with a weapon and took my phone", hi: "चाकू दिखाकर पैसे लूट लिए", te: "కత్తితో బెదిరించి డబ్బు దోచుకున్నారు" },
  cyber: { en: "I shared an OTP and money disappeared from my bank", hi: "ओटीपी लेकर पैसे निकाल लिए", te: "ఓటీపీ తీసుకుని బ్యాంకు డబ్బు పోయింది" },
  stalking: { en: "Repeatedly followed me and sent unwanted messages", hi: "लगातार पीछा कर रहा है", te: "నిరంతరం వెంటాడుతున్నాడు" }
};

const speechLanguages = { en: "en-IN", hi: "hi-IN", te: "te-IN" };
const $ = (selector) => document.querySelector(selector);
const languageSelect = $("#language");
const form = $("#analysis-form");
const description = $("#description");
const incidentDate = $("#incident-date");
const immediateDanger = $("#immediate-danger");
const voiceButton = $("#voice-button");
const voiceLabel = $("#voice-label");
const voiceStatus = $("#voice-status");
const loading = $("#loading");
const resultCard = $("#result-card");
const errorCard = $("#error-card");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let listening = false;
let startPending = false;
let sessionTranscripts = new Set();
let latestResult = null;

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

function updateCharacterCount() {
  $("#character-count").textContent = description.value.length;
}

function replaceList(selector, items, ordered = false) {
  const list = $(selector);
  list.replaceChildren();
  items.forEach((value, index) => {
    const item = document.createElement("li");
    if (ordered) {
      const number = document.createElement("span");
      number.textContent = String(index + 1).padStart(2, "0");
      item.append(number);
      const text = document.createElement("p");
      text.textContent = value;
      item.append(text);
    } else {
      item.textContent = value;
    }
    list.appendChild(item);
  });
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.hidden = false;
  window.setTimeout(() => { toast.hidden = true; }, 2600);
}

function showError(message) {
  resultCard.hidden = true;
  errorCard.hidden = false;
  $("#error-message").textContent = message;
  errorCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

function strengthContent(band) {
  if (band === "strong") return { label: t("matchStrong"), explanation: t("strongExplain") };
  if (band === "moderate") return { label: t("matchModerate"), explanation: t("moderateExplain") };
  return { label: t("matchPreliminary"), explanation: t("preliminaryExplain") };
}

function regimeLabel(regime) {
  if (regime === "BNS") return t("regimeBns");
  if (regime === "IPC") return t("regimeIpc");
  if (regime === "SPECIAL_LAW") return t("regimeSpecial");
  return t("regimeCurrent");
}

function renderAlternatives(alternatives, topScore) {
  const container = $("#alternatives-list");
  container.replaceChildren();
  alternatives.forEach((alternative) => {
    const row = document.createElement("div");
    row.className = "alternative-row";
    const heading = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = alternative.label;
    const relative = Math.max(8, Math.round((alternative.confidence / Math.max(topScore, 0.0001)) * 100));
    const score = document.createElement("span");
    score.textContent = `${relative}% relative`;
    heading.append(name, score);
    const track = document.createElement("div");
    const bar = document.createElement("i");
    bar.style.width = `${Math.min(relative, 100)}%`;
    track.appendChild(bar);
    row.append(heading, track);
    container.appendChild(row);
  });
  $(".alternatives-card").hidden = alternatives.length === 0;
}

function renderResources(resources) {
  const container = $("#resources-list");
  container.replaceChildren();
  resources.forEach((resource) => {
    const link = document.createElement("a");
    link.href = resource.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const icon = document.createElement("span");
    icon.textContent = resource.id === "emergency" ? "112" : resource.id === "cyber" ? "1930" : "§";
    const label = document.createElement("strong");
    label.textContent = resource.label;
    const arrow = document.createElement("i");
    arrow.textContent = "↗";
    link.append(icon, label, arrow);
    container.appendChild(link);
  });
}

function showResult(data) {
  if (!data.matched) {
    showError(data.message || t("genericError"));
    return;
  }

  latestResult = data;
  const legal = data.legal_reference;
  const strength = strengthContent(data.prediction.match_strength);
  errorCard.hidden = true;
  resultCard.hidden = false;
  $("#danger-result").hidden = !data.immediate_danger;
  $("#analysis-id").textContent = data.analysis_id;
  $("#crime-name").textContent = data.prediction.label;
  $("#match-strength").textContent = strength.label;
  $("#match-strength").dataset.strength = data.prediction.match_strength;
  $("#match-explanation").textContent = strength.explanation;

  const signals = $("#signals-list");
  signals.replaceChildren();
  (data.prediction.signals || []).forEach((signal) => {
    const chip = document.createElement("span");
    chip.textContent = signal;
    signals.appendChild(chip);
  });
  $("#signals-wrap").hidden = !data.prediction.signals?.length;

  $("#regime-badge").textContent = regimeLabel(legal.legal_regime);
  $("#section").textContent = legal.section || "N/A";
  $("#law-name").textContent = legal.law || "";
  $("#punishment").textContent = legal.punishment || "N/A";
  $("#bailable").textContent = legal.bailable || "N/A";
  $("#cognizable").textContent = legal.cognizable || "N/A";
  $("#reference-description").textContent = legal.description || "N/A";
  $("#law-notice").textContent = legal.law_notice || "";
  $("#classification-note").textContent = legal.classification_note || "";
  $("#disclaimer").textContent = data.disclaimer;
  $("#privacy-result").textContent = data.privacy || "";

  $("#legacy-row").hidden = !legal.legacy_section;
  $("#legacy-section").textContent = legal.legacy_section || "";
  $("#current-equivalent-row").hidden = !legal.current_section;
  $("#current-equivalent").textContent = legal.current_section || "";
  replaceList("#consequences-list", legal.consequences || []);
  replaceList("#next-steps-list", data.guidance?.next_steps || [], true);
  replaceList("#evidence-list", data.guidance?.evidence || []);
  renderResources(data.guidance?.resources || []);
  renderAlternatives(data.alternatives || [], data.prediction.confidence);

  const sourceLink = $("#source-link");
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
    const fresh = [];
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const result = event.results[index];
      if (!result.isFinal) continue;
      const transcript = result[0].transcript.trim().replace(/\s+/g, " ");
      const key = transcript.toLocaleLowerCase();
      if (!transcript || sessionTranscripts.has(key)) continue;
      sessionTranscripts.add(key);
      fresh.push(transcript);
    }
    if (fresh.length) {
      const addition = fresh.join(" ");
      const current = description.value.trim();
      if (!current.toLocaleLowerCase().endsWith(addition.toLocaleLowerCase())) {
        description.value = [current, addition].filter(Boolean).join(" ");
      }
      updateCharacterCount();
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
    if (listening) { recognition.stop(); return; }
    if (startPending) return;
    recognition.lang = speechLanguages[languageSelect.value];
    startPending = true;
    try { recognition.start(); } catch (_error) {
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
    updateCharacterCount();
    description.focus();
  });
});

description.addEventListener("input", updateCharacterCount);
incidentDate.max = new Date().toISOString().slice(0, 10);
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
      body: JSON.stringify({
        description: description.value,
        language: languageSelect.value,
        incident_date: incidentDate.value || null,
        immediate_danger: immediateDanger.checked
      })
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

$("#print-result").addEventListener("click", () => window.print());
$("#new-analysis").addEventListener("click", () => {
  resultCard.hidden = true;
  description.value = "";
  immediateDanger.checked = false;
  updateCharacterCount();
  description.focus();
  $("#analyzer").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("#copy-result").addEventListener("click", async () => {
  if (!latestResult) return;
  const legal = latestResult.legal_reference;
  const summary = [
    `NyayaAI reference: ${latestResult.analysis_id}`,
    `Possible category: ${latestResult.prediction.label}`,
    `Match strength: ${strengthContent(latestResult.prediction.match_strength).label}`,
    `Legal reference: ${legal.section} — ${legal.law}`,
    `Possible statutory punishment: ${legal.punishment}`,
    "Educational result only; professional verification is required."
  ].join("\n");
  try {
    await navigator.clipboard.writeText(summary);
    showToast(t("copied"));
  } catch (_error) {
    showToast(t("copyFailed"));
  }
});

applyLanguage(window.submittedLanguage || "en");
updateCharacterCount();
if (!SpeechRecognition) voiceStatus.textContent = t("unsupported");
if (window.serverResult) showResult(window.serverResult);
