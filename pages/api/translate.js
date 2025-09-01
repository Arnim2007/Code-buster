// LibreTranslate API - Free & Open Source Translation with fallback
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { texts, target } = req.body;
  if (!texts || !target) {
    return res.status(400).json({ error: 'Missing texts or target language' });
  }

  // Map language codes to LibreTranslate format
  const languageMap = {
    'hi': 'hi',    // Hindi
    'ml': 'ml',    // Malayalam 
    'ta': 'ta',    // Tamil
    'te': 'te',    // Telugu
    'en': 'en'     // English
  };

  const targetLang = languageMap[target] || 'en';
  
  // If target is English, return original texts
  if (targetLang === 'en') {
    return res.status(200).json({ translations: texts });
  }

  // If target is Hindi, use pre-built translations
  if (target === 'hi') {
    const hindiTranslations = {
      heroTitle: "केरल किसानों का AI सहायक",
      heroDesc: "AI द्वारा संचालित तत्काल, बुद्धिमान कृषि सलाह प्राप्त करें। अपनी पसंदीदा भाषा में प्रश्न पूछें और केरल की अनूठी कृषि परिस्थितियों के लिए व्यक्तिगत समाधान प्राप्त करें।",
      cta: "प्रश्न पूछना शुरू करें →",
      learnMore: "और जानें",
      whyTitle: "केरा फार्म मित्र क्यों चुनें?",
      whyDesc: "उन्नत AI तकनीक पारंपरिक केरल कृषि ज्ञान से मिलकर आपको सर्वोत्तम कृषि मार्गदर्शन प्रदान करती है।",
      multiLang: "बहु-भाषा समर्थन",
      askTitle: "अपना कृषि प्रश्न पूछें",
      askDesc: "हमारा AI सहायक किसी भी कृषि संबंधी प्रश्न में आपकी सहायता के लिए तैयार है",
      aiAnswer: "AI उत्तर:",
      techTitle: "AI के साथ केरल किसानों को सशक्त बनाना",
      techDesc: "हमारा AI सहायक अत्याधुनिक तकनीक को केरल की कृषि प्रथाओं के गहरे ज्ञान के साथ जोड़ता है। पारंपरिक खेती के तरीकों से लेकर आधुनिक तकनीकों तक, हम आपकी सभी खेती की जरूरतों के लिए व्यापक सहायता प्रदान करते हैं।",
      cropGuidance: "केरल की जलवायु के लिए फसल-विशिष्ट मार्गदर्शन",
      support: "24/7 AI-संचालित समर्थन",
      multiLangFeature: "बहु-भाषा संचार",
      built: "केरल किसानों के लिए 💚 के साथ बनाया गया | हैकथॉन 2024",
      empower: "कृत्रिम बुद्धिमत्ता के माध्यम से कृषि को सशक्त बनाना",
      copyright: "© 2024 केरा फार्म मित्र। सभी अधिकार सुरक्षित।",
      
      // Stats section
      keralaDistricts: "केरल जिले",
      cropVarieties: "फसल किस्में",
      languages: "भाषाएं",
      
      // Feature cards
      aiPoweredTitle: "AI-संचालित बुद्धिमत्ता",
      aiPoweredDesc: "केरल के कृषि पैटर्न पर विशेष रूप से प्रशिक्षित उन्नत मशीन लर्निंग एल्गोरिदम, वायनाड से कुट्टानाड तक स्थानीय कृषि चुनौतियों के लिए बुद्धिमान समाधान प्रदान करते हैं।",
      keralaSpecificTitle: "केरल-विशिष्ट विशेषज्ञता",
      keralaSpecificDesc: "मसाला की खेती, नारियल की खेती, चावल के खेत, और पारंपरिक केरल कृषि का गहरा ज्ञान आधुनिक टिकाऊ प्रथाओं के साथ एकीकृत।",
      multiLangDesc: "मलयालम, हिंदी, तमिल, तेलुगु और अंग्रेजी में निर्बाध संचार - प्रौद्योगिकी के माध्यम से केरल के विविध कृषि समुदायों को जोड़ना।",
      
      // Tech features
      realTimeWeather: "वास्तविक समय मौसम एकीकरण",
      marketPrices: "बाजार मूल्य अपडेट",
      
      // Sample questions
      sampleQ1: "चावल की उपज कैसे बढ़ाएं?",
      sampleQ2: "नारियल लगाने का सबसे अच्छा समय?",
      sampleQ3: "सब्जियों के लिए जैविक उर्वरक?",
      sampleQ4: "प्राकृतिक रूप से कीटों को कैसे नियंत्रित करें?",
      sampleQ5: "काली मिर्च की खेती के लिए मिट्टी की तैयारी?",
      
      // Form elements
      questionPlaceholder: "यहाँ अपना कृषि प्रश्न टाइप करें... (जैसे, चावल की उपज कैसे बढ़ाएं?)",
      features: "विशेषताएं",
      askAI: "AI से पूछें"
    };
    
    return res.status(200).json({ translations: hindiTranslations });
  }

  // For Malayalam, add basic translations
  if (target === 'ml') {
    const malayalamTranslations = {
      heroTitle: "കേരള കർഷകരുടെ AI സഹായി",
      heroDesc: "AI നിർദ്ദേശിച്ച തൽക്ഷണ, ബുദ്ധിപരമായ കൃഷി ഉപദേശം നേടുക. നിങ്ങളുടെ ഇഷ്ട ഭാഷയിൽ ചോദ്യങ്ങൾ ചോദിച്ച് കേരളത്തിന്റെ അദ്വിതീയ കാർഷിക സാഹചര്യങ്ങൾക്കായി വ്യക്തിഗത പരിഹാരങ്ങൾ സ്വീകരിക്കുക.",
      cta: "ചോദ്യങ്ങൾ ചോദിക്കാൻ തുടങ്ങുക →",
      learnMore: "കൂടുതൽ അറിയുക",
      whyTitle: "എന്തുകൊണ്ട് കേര ഫാം മിത്ര തിരഞ്ഞെടുക്കണം?",
      whyDesc: "വികസിത AI സാങ്കേതിക വിദ്യ പരമ്പരാഗത കേരള കൃഷി ജ്ഞാനവുമായി ചേർന്ന് നിങ്ങൾക്ക് ഏറ്റവും മികച്ച കാർഷിക മാർഗ്ഗനിർദ്ദേശം നൽകുന്നു.",
      multiLang: "ബഹുഭാഷ പിന്തുണ",
      askTitle: "നിങ്ങളുടെ കൃഷി ചോദ്യം ചോദിക്കുക",
      askDesc: "ഏതൊരു കൃഷിയുമായി ബന്ധപ്പെട്ട അന്വേഷണത്തിലും നിങ്ങളെ സഹായിക്കാൻ ഞങ്ങളുടെ AI സഹായി തയ്യാറാണ്",
      aiAnswer: "AI ഉത്തരം:",
      techTitle: "AI ഉപയോഗിച്ച് കേരള കർഷകരെ ശാക്തീകരിക്കുന്നു",
      techDesc: "ഞങ്ങളുടെ AI സഹായി അത്യാധുനിക സാങ്കേതിക വിദ്യയെ കേരളത്തിന്റെ കാർഷിക രീതികളെക്കുറിച്ചുള്ള ആഴത്തിലുള്ള അറിവുമായി സംയോജിപ്പിക്കുന്നു.",
      cropGuidance: "കേരളത്തിന്റെ കാലാവസ്ഥയ്ക്കുള്ള വിള-നിർദ്ദിഷ്ട മാർഗ്ഗനിർദ്ദേശം",
      support: "24/7 AI-പ്രവർത്തിത പിന്തുണ",
      multiLangFeature: "ബഹുഭാഷ ആശയവിനിമയം",
      built: "കേരള കർഷകർക്കായി 💚 ഉപയോഗിച്ച് നിർമ്മിച്ചത് | ഹാക്കത്തൺ 2024",
      empower: "കൃത്രിമ ബുദ്ധിയിലൂടെ കൃഷിയെ ശാക്തീകരിക്കുന്നു",
      copyright: "© 2024 കേര ഫാം മിത്ര. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.",
      
      // Stats section
      keralaDistricts: "കേരള ജില്ലകൾ",
      cropVarieties: "വിള ഇനങ്ങൾ",
      languages: "ഭാഷകൾ",
      
      // Feature cards
      aiPoweredTitle: "AI-പ്രവർത്തിത ബുദ്ധി",
      aiPoweredDesc: "കേരളത്തിന്റെ കാർഷിക പാറ്റേണുകളിൽ പ്രത്യേകമായി പരിശീലിപ്പിച്ച വികസിത മെഷീൻ ലേണിംഗ് അൽഗോരിതങ്ങൾ, വയനാട് മുതൽ കുട്ടനാട് വരെയുള്ള പ്രാദേശിക കാർഷിക വെല്ലുവിളികൾക്ക് ബുദ്ധിപരമായ പരിഹാരങ്ങൾ നൽകുന്നു.",
      keralaSpecificTitle: "കേരള-നിർദ്ദിഷ്ട വൈദഗ്ധ്യം",
      keralaSpecificDesc: "മസാല കൃഷി, തെങ്ങിൻ കൃഷി, നെൽകൃഷി, പരമ്പരാഗത കേരള കൃഷിയെക്കുറിച്ചുള്ള ആഴത്തിലുള്ള അറിവ് ആധുനിക സുസ്ഥിര രീതികളുമായി സംയോജിപ്പിച്ചിരിക്കുന്നു.",
      multiLangDesc: "മലയാളം, ഹിന്ദി, തമിഴ്, തെലുങ്ക്, ഇംഗ്ലീഷ് എന്നിവയിൽ നിർബാധമായ ആശയവിനിമയം - സാങ്കേതികവിദ്യയിലൂടെ കേരളത്തിന്റെ വൈവിധ്യമാർന്ന കാർഷിക സമൂഹങ്ങളെ ബന്ധിപ്പിക്കുന്നു.",
      
      // Tech features
      realTimeWeather: "തത്സമയ കാലാവസ്ഥാ സംയോജനം",
      marketPrices: "വിപണി വില അപ്ഡേറ്റുകൾ",
      
      // Sample questions
      sampleQ1: "നെല്ലിന്റെ വിളവ് എങ്ങനെ വർദ്ധിപ്പിക്കാം?",
      sampleQ2: "തെങ്ങ് നട്ടുപിടിപ്പിക്കാനുള്ള ഏറ്റവും നല്ല സമയം?",
      sampleQ3: "പച്ചക്കറികൾക്കുള്ള ജൈവ വളങ്ങൾ?",
      sampleQ4: "പ്രകൃതിദത്തമായി കീടങ്ങളെ എങ്ങനെ നിയന്ത്രിക്കാം?",
      sampleQ5: "കുരുമുളക് കൃഷിക്കുള്ള മണ്ണ് തയ്യാറാക്കൽ?",
      
      // Form elements
      questionPlaceholder: "ഇവിടെ നിങ്ങളുടെ കാർഷിക ചോദ്യം ടൈപ്പ് ചെയ്യുക... (ഉദാ., നെല്ലിന്റെ വിളവ് എങ്ങനെ വർദ്ധിപ്പിക്കാം?)",
      features: "സവിശേഷതകൾ",
      askAI: "AI യോട് ചോദിക്കുക"
    };
    
    return res.status(200).json({ translations: malayalamTranslations });
  }

  // For Tamil, add basic translations
  if (target === 'ta') {
    const tamilTranslations = {
      heroTitle: "கேரள விவசாயிகளின் AI உதவியாளர்",
      heroDesc: "AI மூலம் உடனடி, அறிவுள்ள விவசாய ஆலோசனையைப் பெறுங்கள். உங்கள் விருப்பமான மொழியில் கேள்விகளைக் கேட்டு கேரளாவின் தனித்துவமான விவசாய நிலைமைகளுக்கான தனிப்பட்ட தீர்வுகளைப் பெறுங்கள்.",
      cta: "கேள்விகள் கேட்க ஆரம்பிக்கவும் →",
      learnMore: "மேலும் அறிய",
      whyTitle: "ஏன் கேர ஃபார்ம் மித்ராவைத் தேர்ந்தெடுக்க வேண்டும்?",
      whyDesc: "மேம்பட்ட AI தொழில்நுட்பம் பாரம்பரிய கேரள விவசாய அறிவுடன் இணைந்து உங்களுக்கு சிறந்த விவசாய வழிகாட்டுதலை வழங்குகிறது.",
      multiLang: "பல மொழி ஆதரவு",
      askTitle: "உங்கள் விவசாய கேள்வியைக் கேளுங்கள்",
      askDesc: "எந்தவொரு விவசாயம் தொடர்பான வினவலிலும் உங்களுக்கு உதவ எங்கள் AI உதவியாளர் தயாராக உள்ளது",
      aiAnswer: "AI பதில்:",
      techTitle: "AI மூலம் கேரள விவசாயிகளை மேம்படுத்துதல்",
      techDesc: "எங்கள் AI உதவியாளர் அதிநவீன தொழில்நுட்பத்தை கேரளாவின் விவசாய நடைமுறைகளின் ஆழமான அறிவுடன் இணைக்கிறது.",
      cropGuidance: "கேரளாவின் காலநிலைக்கான பயிர்-குறிப்பிட்ட வழிகாட்டுதல்",
      support: "24/7 AI-இயங்கும் ஆதரவு",
      multiLangFeature: "பல மொழி தொடர்பு",
      built: "கேரள விவசாயிகளுக்காக 💚 உடன் கட்டப்பட்டது | ஹாக்கத்தான் 2024",
      empower: "செயற்கை நுண்ணறிவு மூலம் விவசாயத்தை மேம்படுத்துதல்",
      copyright: "© 2024 கேர ஃபார்ம் மித்ரா. அனைத்து உரிமைகளும் பாதுகாக்கப்படுகின்றன.",
      
      // Stats section
      keralaDistricts: "கேரள மாவட்டங்கள்",
      cropVarieties: "பயிர் வகைகள்",
      languages: "மொழிகள்",
      
      // Feature cards
      aiPoweredTitle: "AI-இயக்கப்படும் நுண்ணறிவு",
      aiPoweredDesc: "கேரளாவின் விவசாய முறைகளில் குறிப்பாக பயிற்சி பெற்ற மேம்பட்ட இயந்திர கற்றல் வழிமுறைகள், வயநாட் முதல் குட்டநாடு வரையிலான உள்ளூர் விவசாய சவால்களுக்கு அறிவார்ந்த தீர்வுகளை வழங்குகின்றன.",
      keralaSpecificTitle: "கேரள-குறிப்பிட்ட நிபுணத்துவம்",
      keralaSpecificDesc: "மசாலா சாகுபடி, தென்னை விவசாயம், நெல் வயல்கள், பாரம்பரிய கேரள விவசாயத்தின் ஆழமான அறிவு நவீன நிலையான நடைமுறைகளுடன் ஒருங்கிணைக்கப்பட்டுள்ளது.",
      multiLangDesc: "தமிழ், மலையாளம், ஹிந்தி, தெலுங்கு, ஆங்கிலம் ஆகியவற்றில் தடையற்ற தொடர்பு - தொழில்நுட்பத்தின் மூலம் கேரளாவின் பல்வேறு விவசாய சமூகங்களை இணைக்கிறது.",
      
      // Tech features
      realTimeWeather: "நிகழ்நேர வானிலை ஒருங்கிணைப்பு",
      marketPrices: "சந்தை விலை புதுப்பிப்புகள்",
      
      // Sample questions
      sampleQ1: "அரிசி விளைச்சலை எவ்வாறு அதிகரிப்பது?",
      sampleQ2: "தென்னை நடவு செய்ய சிறந்த நேரம்?",
      sampleQ3: "காய்கறிகளுக்கான இயற்கை உரங்கள்?",
      sampleQ4: "இயற்கையாக பூச்சிகளை எவ்வாறு கட்டுப்படுத்துவது?",
      sampleQ5: "மிளகு விவசாயத்திற்கான மண் தயாரிப்பு?",
      
      // Form elements
      questionPlaceholder: "உங்கள் விவசாய கேள்வியை இங்கே தட்டச்சு செய்யுங்கள்... (எ.கா., அரிசி விளைச்சலை எவ்வாறு அதிகரிப்பது?)",
      features: "அம்சங்கள்",
      askAI: "AI யிடம் கேளுங்கள்"
    };
    
    return res.status(200).json({ translations: tamilTranslations });
  }

  // For Telugu, add basic translations  
  if (target === 'te') {
    const teluguTranslations = {
      heroTitle: "కేరళ రైతుల AI సహాయకుడు",
      heroDesc: "AI ద్వారా తక్షణ, తెలివైన వ్యవసాయ సలహాలను పొందండి. మీ ఇష్టమైన భాషలో ప్రశ్నలు అడిగి కేరళ యొక్క ప్రత్యేకమైన వ్యవసాయ పరిస్థితులకు వ్యక్తిగత పరిష్కారాలను పొందండి.",
      cta: "ప్రశ్నలు అడగడం ప్రారంభించండి →",
      learnMore: "మరింత తెలుసుకోండి",
      whyTitle: "కేర ఫార్మ్ మిత్రను ఎందుకు ఎంచుకోవాలి?",
      whyDesc: "అధునాతన AI సాంకేతికత సాంప్రదాయ కేరళ వ్యవసాయ జ్ఞానంతో కలిసి మీకు ఉత్తమ వ్యవసాయ మార్గదర్శనాన్ని అందిస్తుంది.",
      multiLang: "బహుభాషా మద్దతు",
      askTitle: "మీ వ్యవసాయ ప్రశ్నను అడగండి",
      askDesc: "ఏదైనా వ్యవసాయం సంబంధిత ప్రశ్నలో మీకు సహాయం చేయడానికి మా AI సహాయకుడు సిద్ధంగా ఉన్నాడు",
      aiAnswer: "AI సమాధానం:",
      techTitle: "AI తో కేరళ రైతులను శక్తివంతం చేయడం",
      techDesc: "మా AI సహాయకుడు అత్యాధునిక సాంకేతికతను కేరళ వ్యవసాయ పద్ధతుల లోతైన జ్ఞానంతో కలుపుతాడు.",
      cropGuidance: "కేరళ వాతావరణానికి పంట-నిర్దిష్ట మార్గదర్శనం",
      support: "24/7 AI-శక్తితో మద్దతు",
      multiLangFeature: "బహుభాషా కమ్యూనికేషన్",
      built: "కేరళ రైతుల కోసం 💚 తో నిర్మించబడింది | హ్యాకథాన్ 2024",
      empower: "కృత్రిమ మేధస్సు ద్వారా వ్యవసాయాన్ని శక్తివంతం చేయడం",
      copyright: "© 2024 కేర ఫార్మ్ మిత్ర. అన్నీ హక్కులు రక్షించబడ్డాయి.",
      
      // Stats section
      keralaDistricts: "కేరళ జిల్లాలు",
      cropVarieties: "పంట రకాలు",
      languages: "భాషలు",
      
      // Feature cards
      aiPoweredTitle: "AI-శక్తితో కూడిన తెలివితేటలు",
      aiPoweredDesc: "కేరళ వ్యవసాయ నమూనాలపై ప్రత్యేకంగా శిక్షణ పొందిన అధునాతన మెషిన్ లర్నింగ్ అల్గారిథమ్‌లు, వయనాడ్ నుండి కుట్టనాడు వరకు స్థానిక వ్యవసాయ సవాళ్లకు తెలివైన పరిష్కారాలను అందిస్తాయి.",
      keralaSpecificTitle: "కేరళ-నిర్దిష్ట నైపుణ్యం",
      keralaSpecificDesc: "మసాలా సాగు, కొబ్బరి వ్యవసాయం, వరి పొలాలు, సాంప్రదాయ కేరళ వ్యవసాయం యొక్క లోతైన జ్ఞానం ఆధునిక స్థిరమైన పద్ధతులతో అనుసంధానించబడింది.",
      multiLangDesc: "తెలుగు, మలయాళం, హిందీ, తమిళ్, ఇంగ్లీష్‌లలో అంతరాయం లేని కమ్యూనికేషన్ - సాంకేతికత ద్వారా కేరళ యొక్క విభిన్న వ్యవసాయ సమాజాలను కలుపుతుంది.",
      
      // Tech features
      realTimeWeather: "నిజ సమయ వాతావరణ ఏకీకరణ",
      marketPrices: "మార్కెట్ ధర నవీకరణలు",
      
      // Sample questions
      sampleQ1: "వరి దిగుబడిని ఎలా పెంచాలి?",
      sampleQ2: "కొబ్బరి నాటడానికి ఉత్తమ సమయం?",
      sampleQ3: "కూరగాయలకు సేంద్రీయ ఎరువులు?",
      sampleQ4: "సహజంగా చీడపురుగులను ఎలా నియంత్రించాలి?",
      sampleQ5: "మిరియాల వ్యవసాయానికి మట్టి తయారీ?",
      
      // Form elements
      questionPlaceholder: "మీ వ్యవసాయ ప్రశ్నను ఇక్కడ టైప్ చేయండి... (ఉదా., వరి దిగుబడిని ఎలా పెంచాలి?)",
      features: "లక్షణాలు",
      askAI: "AI ని అడగండి"
    };
    
    return res.status(200).json({ translations: teluguTranslations });
  }

  // List of LibreTranslate instances to try
  const instances = [
    'https://translate.argosopentech.com',
    'https://libretranslate.de',
    'https://libretranslate.com'
  ];
  
  try {
    const translations = {};
    
    // Try each instance until one works
    let workingInstance = null;
    for (const instance of instances) {
      try {
        const testResponse = await fetch(`${instance}/languages`, {
          method: 'GET',
          headers: { 'Accept': 'application/json' }
        });
        
        if (testResponse.ok && testResponse.headers.get('content-type')?.includes('application/json')) {
          workingInstance = instance;
          break;
        }
      } catch (error) {
        console.log(`Instance ${instance} not available:`, error.message);
        continue;
      }
    }

    if (!workingInstance) {
      console.log('No LibreTranslate instances available, using fallback translations');
      
      // Fallback: Basic translations for Hindi
      if (target === 'hi') {
        const hindiTranslations = {
          heroTitle: "केरल किसानों का AI सहायक",
          heroDesc: "AI द्वारा संचालित तत्काल, बुद्धिमान कृषि सलाह प्राप्त करें। अपनी पसंदीदा भाषा में प्रश्न पूछें और केरल की अनूठी कृषि परिस्थितियों के लिए व्यक्तिगत समाधान प्राप्त करें।",
          cta: "प्रश्न पूछना शुरू करें →",
          whyTitle: "केरा फार्म मित्र क्यों चुनें?",
          whyDesc: "उन्नत AI तकनीक पारंपरिक केरल कृषि ज्ञान से मिलकर आपको सर्वोत्तम कृषि मार्गदर्शन प्रदान करती है।",
          multiLang: "बहु-भाषा समर्थन",
          askTitle: "अपना कृषि प्रश्न पूछें",
          askDesc: "हमारा AI सहायक किसी भी कृषि संबंधी प्रश्न में आपकी सहायता के लिए तैयार है",
          aiAnswer: "AI उत्तर:",
          techTitle: "AI के साथ केरल किसानों को सशक्त बनाना",
          techDesc: "हमारा AI सहायक अत्याधुनिक तकनीक को केरल की कृषि प्रथाओं के गहरे ज्ञान के साथ जोड़ता है।",
          cropGuidance: "केरल की जलवायु के लिए फसल-विशिष्ट मार्गदर्शन",
          support: "24/7 AI-संचालित समर्थन",
          multiLangFeature: "बहु-भाषा संचार",
          built: "केरल किसानों के लिए 💚 के साथ बनाया गया | हैकथॉन 2024",
          empower: "कृत्रिम बुद्धिमत्ता के माध्यम से कृषि को सशक्त बनाना",
          copyright: "© 2024 केरा फार्म मित्र। सभी अधिकार सुरक्षित।"
        };
        
        return res.status(200).json({ translations: hindiTranslations });
      }
      
      // For other languages, return original English text
      return res.status(200).json({ translations: texts });
    }

    // Process translations with working instance
    for (const [key, value] of Object.entries(texts)) {
      if (!value || value.trim() === '') {
        translations[key] = value;
        continue;
      }

      try {
        const response = await fetch(`${workingInstance}/translate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            q: value,
            source: 'en',
            target: targetLang,
            format: 'text'
          })
        });

        if (!response.ok) {
          console.warn(`Translation failed for ${key}: ${response.statusText}`);
          translations[key] = value; // Fallback to original text
          continue;
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          console.warn(`Invalid response type for ${key}: ${contentType}`);
          translations[key] = value; // Fallback to original text
          continue;
        }

        const data = await response.json();
        translations[key] = data.translatedText || value;
        
        // Small delay to be respectful to the free service
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (error) {
        console.warn(`Translation error for ${key}:`, error.message);
        translations[key] = value; // Fallback to original text
      }
    }

    res.status(200).json({ translations });
    
  } catch (error) {
    console.error('Translation service error:', error);
    // Return original texts as fallback
    res.status(200).json({ translations: texts });
  }
}
