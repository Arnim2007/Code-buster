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
    'ml': 'en',    // Malayalam fallback to English (limited support)
    'ta': 'en',    // Tamil fallback to English (limited support)
    'te': 'en',    // Telugu fallback to English (limited support)
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
      copyright: "© 2024 केरा फार्म मित्र। सभी अधिकार सुरक्षित।"
    };
    
    return res.status(200).json({ translations: hindiTranslations });
  }

  // For Malayalam, add basic translations
  if (target === 'ml') {
    const malayalamTranslations = {
      heroTitle: "കേരള കർഷകരുടെ AI സഹായി",
      heroDesc: "AI നിർദ്ദേശിച്ച തൽക്ഷണ, ബുദ്ധിപരമായ കൃഷി ഉപദേശം നേടുക. നിങ്ങളുടെ ഇഷ്ട ഭാഷയിൽ ചോദ്യങ്ങൾ ചോദിച്ച് കേരളത്തിന്റെ അദ്വിതീയ കാർഷിക സാഹചര്യങ്ങൾക്കായി വ്യക്തിഗത പരിഹാരങ്ങൾ സ്വീകരിക്കുക.",
      cta: "ചോദ്യങ്ങൾ ചോദിക്കാൻ തുടങ്ങുക →",
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
      copyright: "© 2024 കേര ഫാം മിത്ര. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം."
    };
    
    return res.status(200).json({ translations: malayalamTranslations });
  }

  // For Tamil, add basic translations
  if (target === 'ta') {
    const tamilTranslations = {
      heroTitle: "கேரள விவசாயிகளின் AI உதவியாளர்",
      heroDesc: "AI மூலம் உடனடி, அறிவுள்ள விவசாய ஆலோசனையைப் பெறுங்கள். உங்கள் விருப்பமான மொழியில் கேள்விகளைக் கேட்டு கேரளாவின் தனித்துவமான விவசாய நிலைமைகளுக்கான தனிப்பட்ட தீர்வுகளைப் பெறுங்கள்.",
      cta: "கேள்விகள் கேட்க ஆரம்பிக்கவும் →",
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
      copyright: "© 2024 கேர ஃபார்ம் மித்ரா. அனைத்து உரிமைகளும் பாதுகாக்கப்படுகின்றன."
    };
    
    return res.status(200).json({ translations: tamilTranslations });
  }

  // For Telugu, add basic translations  
  if (target === 'te') {
    const teluguTranslations = {
      heroTitle: "కేరళ రైతుల AI సహాయకుడు",
      heroDesc: "AI ద్వారా తక్షణ, తెలివైన వ్యవసాయ సలహాలను పొందండి. మీ ఇష్టమైన భాషలో ప్రశ్నలు అడిగి కేరళ యొక్క ప్రత్యేకమైన వ్యవసాయ పరిస్థితులకు వ్యక్తిగత పరిష్కారాలను పొందండి.",
      cta: "ప్రశ్నలు అడగడం ప్రారంభించండి →",
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
      copyright: "© 2024 కేర ఫార్మ్ మిత్ర. అన్నీ హక్కులు రక్షించబడ్డాయి."
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
