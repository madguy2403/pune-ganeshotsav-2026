/*
 * Pune Ganeshotsav mandal directory. `query` is the text address used
 * to build the Google Maps directions link/embed on the Map page and on
 * each mandal's "Get Directions" button — keep it accurate, since it
 * decides where visitors actually get routed. A few entries had no street
 * address in the source material; their `query` falls back to "<name>,
 * Pune, Maharashtra" so Maps can still text-search it.
 *
 * `name` and `history` are bilingual ({en, mr}) — no Hindi copy exists yet,
 * so the Hindi UI falls back to English for both (see js/mandals.js).
 * `area` and `query` stay in English/transliterated form across languages,
 * since they're proper nouns used for search and map routing.
 */
window.MANDALS = [
  // ---------- Manache Ganpati (the five first-honor mandals) ----------
  {
    id: "kasba-ganpati",
    image: "images/mandals/kasba-ganpati.jpg",
    name: { en: "Kasba Ganpati (Manacha Pahila)", mr: "कसबा गणपती (मानाचा पहिला)", hi: "कसबा गणपती (मानाचा पहिला)" },
    area: "Kasba Peth, near Kasba Ganpati Chowk, Pune",
    category: "Manache Ganpati",
    tags: ["Manache Ganpati", "Gramadaivat"],
    established: "1630",
    query: "Kasba Ganpati Temple, Kasba Peth, Pune",
    history: {
      en: "Commissioned by Jijausaheb in 1630 after Dadoji Konddeo reported the discovery of a Ganpati idol in Pune. Bal Gangadhar Tilak later recognized it as Pune's premier Ganpati. The festival has been held in an enclosed mandap since 1926, featuring cultural programs by local artists. Shri Kasba Ganpati leads Pune's Visarjan procession.",
      mr: "इ.स. १६३० मध्ये दादोजी कोंडदेव यांनी पुण्यात गणपतीची मूर्ती सापडल्याची माहिती दिल्यानंतर जिजाऊसाहेबांनी या मंदिराची स्थापना केली. पुढे लोकमान्य बाळ गंगाधर टिळक यांनी या मूर्तीला पुण्याचा मानाचा पहिला गणपती म्हणून मान्यता दिली. १९२६ पासून गणेशोत्सव मंडपात साजरा केला जात असून त्यामध्ये स्थानिक कलाकारांचे विविध सांस्कृतिक कार्यक्रम आयोजित केले जातात. विसर्जन मिरवणुकीत श्री कसबा गणपतीला अग्रमान असून तो मिरवणुकीचे नेतृत्व करतो.",
      hi: "1630 में दादोजी कोंडदेव ने पुणे में गणपति की मूर्ति मिलने की जानकारी दी, जिसके बाद जिजाऊसाहेब ने इस मंदिर की स्थापना की। आगे चलकर लोकमान्य बाळ गंगाधर टिळक ने इस मूर्ति को पुणे का मान का पहला गणपति माना। 1926 से गणेशोत्सव मंडप में मनाया जाता है, जिसमें स्थानीय कलाकारों के विविध सांस्कृतिक कार्यक्रम आयोजित किए जाते हैं। विसर्जन मिरवणुक में श्री कसबा गणपति को अग्रमान प्राप्त है और वह मिरवणुक का नेतृत्व करता है।"
    }
  },
  {
    id: "tambdi-jogeshwari",
    image: "images/mandals/tambdi-jogeshwari.jpg",
    name: { en: "Tambdi Jogeshwari (Manacha Dusra)", mr: "तांबडी जोगेश्वरी (मानाचा दुसरा गणपती)", hi: "तांबडी जोगेश्वरी (मानाचा दूसरा गणपती)" },
    area: "Budhwar Peth, Pune",
    category: "Manache Ganpati",
    tags: ["Manache Ganpati", "Gramadaivat"],
    established: "1893",
    query: "33A, Budhwar Peth Road, Budhwar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Goddess Shri Tambdi Jogeshwari is revered as the Gramdevata (City Goddess) of Pune. In 1893, Lokmanya Bal Gangadhar Tilak bestowed the honour of \"Manacha Dusra Ganpati\" upon the Tambdi Jogeshwari Ganeshotsav Mandal.",
      mr: "श्री तांबडी जोगेश्वरी देवी या पुणे शहराच्या ग्रामदेवता म्हणून पूजनीय आहेत. इ.स. १८९३ मध्ये लोकमान्य बाळ गंगाधर टिळक यांनी तांबडी जोगेश्वरी गणेशोत्सव मंडळाला \"मानाचा दुसरा गणपती\" हा मान बहाल केला.",
      hi: "श्री तांबडी जोगेश्वरी देवी को पुणे शहर की ग्रामदेवता के रूप में पूजा जाता है। 1893 में लोकमान्य बाळ गंगाधर टिळक ने तांबडी जोगेश्वरी गणेशोत्सव मंडल को \"मान का दूसरा गणपति\" का सम्मान प्रदान किया।"
    }
  },
  {
    id: "guruji-talim",
    image: "images/mandals/guruji-talim.jpg",
    name: { en: "Guruji Talim (Manacha Tisra)", mr: "गुरुजी तालीम (मानाचा तिसरा गणपती)", hi: "गुरुजी तालीम (मानाचा तीसरा गणपती)" },
    area: "Pune",
    category: "Manache Ganpati",
    tags: ["Manache Ganpati", "Historic"],
    established: "1887",
    query: "Guruji Talim Ganpati, Pune, Maharashtra",
    history: {
      en: "Established in 1887 by Bhiku Shinde and Ustaad Nalban, it symbolises Hindu-Muslim unity in Pune. Founded before Lokmanya Bal Gangadhar Tilak's Sarvajanik Ganeshotsav, it became the first Mandal to celebrate its Platinum Jubilee.",
      mr: "इ.स. १८८७ मध्ये भिकू शिंदे व उस्ताद नलबंद यांनी स्थापन केलेले हे मंडळ पुण्यातील हिंदू-मुस्लिम ऐक्याचे प्रतीक आहे. लोकमान्य बाळ गंगाधर टिळक यांच्या सार्वजनिक गणेशोत्सवापूर्वी स्थापन झाल्याने प्लॅटिनम ज्युबिली साजरी करणारे हे पहिले मंडळ ठरले.",
      hi: "1887 में भिकू शिंदे और उस्ताद नलबंद द्वारा स्थापित यह मंडल पुणे में हिंदू-मुस्लिम एकता का प्रतीक है। लोकमान्य बाळ गंगाधर टिळक के सार्वजनिक गणेशोत्सव से पहले स्थापित होने के कारण यह प्लैटिनम जुबली मनाने वाला पहला मंडल बना।"
    }
  },
  {
    id: "tulshibaug-ganpati",
    image: "images/mandals/tulshibaug-ganpati.jpg",
    name: { en: "Tulshibaug Ganpati (Manacha Chautha)", mr: "तुळशीबाग गणपती (मानाचा चौथा)", hi: "तुलसीबाग गणपती (मानाचा चौथा)" },
    area: "Tulshibaug, Budhwar Peth, Pune",
    category: "Manache Ganpati",
    tags: ["Manache Ganpati", "Grand Decoration"],
    established: "1901",
    query: "Tulshibaug, Budhwar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Established in 1901, the Mandal installed the first fibre Ganesha idol in 1975. The 13-feet tall idol with 80 kg silver ornaments is a major attraction in Tulshibaug, Pune.",
      mr: "इ.स. १९०१ मध्ये स्थापन झालेले हे मंडळ असून १९७५ मध्ये येथे पहिली फायबर गणेशमूर्ती स्थापित करण्यात आली. तुळशीबाग येथील १३ फूट उंच मूर्ती व तिचे ८० किलो चांदीचे दागिने हे प्रमुख आकर्षण आहे.",
      hi: "1901 में स्थापित इस मंडल में 1975 में पहली फाइबर गणेशमूर्ति स्थापित की गई। तुलसीबाग की 13 फुट ऊंची मूर्ति और उसके 80 किलो चांदी के आभूषण मुख्य आकर्षण हैं।"
    }
  },
  {
    id: "kesariwada-ganpati",
    image: "images/mandals/kesariwada-ganpati.jpg",
    name: { en: "Kesariwada Ganpati (Manacha Pachva)", mr: "केसरीवाडा गणपती (मानाचा पाचवा)", hi: "केसरीवाड़ा गणपती (मानाचा पांचवा)" },
    area: "Narayan Peth, Pune",
    category: "Manache Ganpati",
    tags: ["Manache Ganpati", "Historic"],
    established: "1894",
    query: "577, NC Kelkar Road, Narayan Peth, Pune, Maharashtra 411030",
    history: {
      en: "Established in 1894 at Vinchurkar Wada, the residence of the Tilaks, the idol was shifted to Kesari Wada in 1905 (earlier known as Gaikwad Wada). Vinchurkar Wada itself was built by Vitthal Dani, founder of the Vinchurkar family, and is remembered as the place where Lokmanya Tilak began his public awareness activities and launched the Kesari newspaper. The Wada preserves a museum dedicated to Lokmanya Tilak, showcasing his belongings and the origin place of his newspapers Kesari and Maratha.",
      mr: "इ.स. १८९४ मध्ये टिळकांच्या निवासस्थानी असलेल्या विंचूरकर वाड्यात स्थापन झालेले हे मंडळ १९०५ मध्ये केसरीवाड्यात हलविण्यात आले (पूर्वीचे नाव गायकवाड वाडा). विंचूरकर वाडा हा विंचूरकर कुटुंबाचे संस्थापक विठ्ठल दाणी यांनी बांधला असून लोकमान्य टिळकांनी येथूनच जनजागृतीचे कार्य व केसरी वृत्तपत्राची सुरुवात केली. येथे लोकमान्य टिळकांचे संग्रहालय असून त्यांच्या वस्तू जतन केल्या आहेत. तसेच केसरी आणि मराठा ही वृत्तपत्रे याच ठिकाणाहून सुरू झाली.",
      hi: "1894 में टिळक के निवासस्थान विंचूरकर वाड़ा में स्थापित यह मंडल 1905 में केसरीवाड़ा में स्थानांतरित किया गया (पहले का नाम गायकवाड वाड़ा)। विंचूरकर वाड़ा विंचूरकर परिवार के संस्थापक विठ्ठल दाणी ने बनवाया था, और लोकमान्य टिळक ने यहीं से जनजागृति का कार्य और केसरी अखबार की शुरुआत की। यहां लोकमान्य टिळक का संग्रहालय है, जिसमें उनकी वस्तुएं संरक्षित हैं। साथ ही केसरी और मराठा ये अखबार भी इसी स्थान से शुरू हुए।"
    }
  },

  // ---------- Unique wooden Ganesha idols ----------
  {
    id: "bhausaheb-rangari-ganapati",
    image: "images/mandals/bhausaheb-rangari-ganapati.jpg",
    name: { en: "Shrimant Bhausaheb Rangari Ganapati", mr: "श्रीमंत भाऊसाहेब रंगारी गणपती", hi: "श्रीमंत भाऊसाहेब रंगारी गणपती" },
    area: "Budhwar Peth, Pune",
    category: "Wooden Idol",
    tags: ["Wooden Idol", "Historic"],
    established: "1892",
    query: "662/657, Bhau Rangari Road, Budhwar Peth, Pune, Maharashtra 411002",
    history: {
      en: "The first public Ganeshotsav, established in 1892 by freedom fighter Bhausaheb Rangari. Its unique wooden-and-silver idol symbolizes the victory of good over evil and India's freedom spirit.",
      mr: "हा भारतातील पहिला सार्वजनिक गणेशोत्सव असून त्याची स्थापना १८९२ मध्ये स्वातंत्र्यसैनिक भाऊसाहेब रंगारी यांनी केली. लाकूड व चांदीपासून बनविलेली ही वैशिष्ट्यपूर्ण गणेशमूर्ती दुष्टावरच्या सज्जनाच्या विजयाचे तसेच भारताच्या स्वातंत्र्यभावनेचे प्रतीक आहे.",
      hi: "यह भारत का पहला सार्वजनिक गणेशोत्सव है, जिसकी स्थापना 1892 में स्वतंत्रता सेनानी भाऊसाहेब रंगारी ने की थी। लकड़ी और चांदी से बनी यह विशिष्ट गणेशमूर्ति बुराई पर अच्छाई की जीत और भारत की स्वतंत्रता भावना का प्रतीक है।"
    }
  },
  {
    id: "twashta-kasar-samaj-mandal",
    image: "images/mandals/twashta-kasar-samaj-mandal.jpg",
    name: { en: "Twashta Kasar Samaj Mandal", mr: "त्वष्टा कासार समाज मंडळ", hi: "त्वष्टा कासार समाज मंडल" },
    area: "Kasba Peth, Pune",
    category: "Wooden Idol",
    tags: ["Wooden Idol", "Historic"],
    established: "Restored 1906",
    query: "Laxmi Road, Lunanagar, Kasba Peth, Pune, Maharashtra 411011",
    history: {
      en: "A historic temple of Maharashtra's Twashta Kasar (coppersmith) community, dedicated to Goddess Kalika. Restored in 1906, it is known for its 3-foot stone idol and intricate 20 kg silver artwork behind the sanctum.",
      mr: "हे महाराष्ट्रातील त्वष्टा कासार (तांबट) समाजाचे ऐतिहासिक मंदिर असून ते देवी कालिकेला समर्पित आहे. १९०६ मध्ये जीर्णोद्धार झालेल्या या मंदिरातील सुमारे ३ फूट उंच दगडी कालिका देवीची मूर्ती आणि गाभाऱ्यामागील २० किलो वजनाची रौप्य कलाकुसर विशेष आकर्षण आहे.",
      hi: "यह महाराष्ट्र के त्वष्टा कासार (तांबट) समाज का ऐतिहासिक मंदिर है, जो देवी कालिका को समर्पित है। 1906 में जीर्णोद्धार हुए इस मंदिर की लगभग 3 फुट ऊंची पत्थर की कालिका देवी की मूर्ति और गर्भगृह के पीछे की 20 किलो वजनी चांदी की कलाकारी विशेष आकर्षण है।"
    }
  },
  {
    id: "kadbe-ali-talim-mandal",
    image: "images/mandals/kadbe-ali-talim-mandal.jpg",
    name: { en: "Shree Kadbe Ali Talim Mandal", mr: "श्री कडबे आळी तालीम मंडळ", hi: "श्री कडबे अली तालीम मंडल" },
    area: "Shaniwar Peth, Pune",
    category: "Wooden Idol",
    tags: ["Wooden Idol", "Historic"],
    established: "1934",
    query: "Opp. Shaniwar Wada, Shrimant Thorale Bajirao Peshwa Rd, near Shani Mandir, Shaniwar Peth, Pune, Maharashtra 411030",
    history: {
      en: "Established in 1934, home to a rare Ganesh idol carved from a single piece of sandalwood during the Peshwa era. The idol is renowned for retaining its natural sandalwood fragrance even today.",
      mr: "याची स्थापना १९३४ मध्ये झाली. पेशवेकाळात एका चंदनाच्या ओंडक्यातून कोरलेली ही दुर्मिळ गणेशमूर्ती आजही नैसर्गिक चंदनाचा सुगंध दरवळत असल्याने विशेष प्रसिद्ध आहे.",
      hi: "इसकी स्थापना 1934 में हुई। पेशवा काल में चंदन के एक ही लट्ठे से तराशी गई यह दुर्लभ गणेशमूर्ति आज भी प्राकृतिक चंदन की सुगंध देने के कारण विशेष प्रसिद्ध है।"
    }
  },
  {
    id: "chhatrapati-rajaram-mandal",
    image: "images/mandals/chhatrapati-rajaram-mandal.jpg",
    name: { en: "Chhatrapati Rajaram Mandal", mr: "छत्रपती राजाराम मंडळ", hi: "छत्रपति राजाराम मंडल" },
    area: "Sadashiv Peth, Pune",
    category: "Wooden Idol",
    tags: ["Wooden Idol", "Cultural Programs"],
    established: "1867",
    query: "871, Sadashiv Peth Rd, Perugate, Sadashiv Peth, Pune, Maharashtra 411030",
    history: {
      en: "Founded in 1867, a historic cultural institution dedicated to preserving Marathi language, literature, and heritage.",
      mr: "याची स्थापना १८६७ मध्ये झाली असून ते मराठी भाषा, साहित्य आणि सांस्कृतिक वारसा जपणारी ऐतिहासिक संस्था आहे.",
      hi: "इसकी स्थापना 1867 में हुई थी और यह मराठी भाषा, साहित्य और सांस्कृतिक विरासत को संरक्षित रखने वाली ऐतिहासिक संस्था है।"
    }
  },
  {
    id: "shri-lakadi-ganapati",
    name: { en: "Shri Lakadi Ganapati", mr: "श्री लाकडी गणपती", hi: "श्री लकड़ी गणपती" },
    area: "Shukrawar Peth, Pune",
    category: "Wooden Idol",
    tags: ["Wooden Idol", "Historic"],
    established: "1896",
    query: "409, Chhatrapati Shivaji Maharaj Rd, Sathe Colony, Shukrawar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Established in 1896, renowned for its unique wooden Ganesh idol. After the original idol was destroyed in a fire in 2000, a new handcrafted wooden idol was created, preserving its historic legacy.",
      mr: "याची स्थापना १८९६ मध्ये झाली असून ते आपल्या वैशिष्ट्यपूर्ण लाकडी गणेशमूर्तीसाठी प्रसिद्ध आहे. २००० मधील आगीत मूळ मूर्ती नष्ट झाल्यानंतर तिच्याच धर्तीवर नवीन लाकडी मूर्ती साकारण्यात आली.",
      hi: "इसकी स्थापना 1896 में हुई थी और यह अपनी विशिष्ट लकड़ी की गणेशमूर्ति के लिए प्रसिद्ध है। 2000 में आग में मूल मूर्ति नष्ट होने के बाद उसी के आधार पर नई लकड़ी की मूर्ति बनाई गई।"
    }
  },
  {
    id: "saraf-suvarnakar-ganpati",
    image: "images/mandals/saraf-suvarnakar-ganpati.jpg",
    name: { en: "Saraf Suvarnakar Ganpati", mr: "सराफ सुवर्णकार गणपती", hi: "सराफ सुवर्णकार गणपती" },
    area: "Raviwar Peth, Pune",
    category: "Wooden Idol",
    tags: ["Wooden Idol", "Social Message"],
    established: "1894",
    query: "Sonya Maruti Chowk, Kapad Ganj, Raviwar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Established in 1894, known for its 125+ year-old Ganesh idol made from paper pulp, coconut fibre, and Shadu clay, along with its historic chariot. The mandal is also recognized for its peaceful Ganeshotsav and social initiatives.",
      mr: "याची स्थापना १८९४ मध्ये झाली असून १२५ वर्षांहून अधिक जुन्या कागदाचा लगदा, नारळाच्या तंतू व शाडू मातीपासून बनविलेल्या गणेशमूर्तीसाठी आणि ऐतिहासिक रथासाठी ते प्रसिद्ध आहे. मंडळ शांततापूर्ण गणेशोत्सव व सामाजिक उपक्रमांसाठीही ओळखले जाते.",
      hi: "इसकी स्थापना 1894 में हुई थी और यह 125 वर्षों से अधिक पुरानी कागज के लुगदी, नारियल के रेशे और शाडू मिट्टी से बनी गणेशमूर्ति तथा ऐतिहासिक रथ के लिए प्रसिद्ध है। मंडल शांतिपूर्ण गणेशोत्सव और सामाजिक कार्यों के लिए भी जाना जाता है।"
    }
  },
  {
    id: "ulhas-mitra-mandal",
    name: { en: "Ulhas Mitra Mandal", mr: "उल्हास मित्र मंडळ", hi: "उल्हास मित्र मंडल" },
    area: "Guruwar Peth, Pune",
    category: "Wooden Idol",
    tags: ["Wooden Idol", "Historic"],
    established: "1935",
    query: "Ulhas Mitra Mandal, Guruwar Peth, Pune, Maharashtra",
    history: {
      en: "Established in 1935, renowned for its unique wooden Ganesh idol, sculpted in 1945 by Shankarrao Bhosale. Inspired by a famous painting, it is regarded as India's first complete Siddharudha wooden Ganesh idol.",
      mr: "याची स्थापना १९३५ मध्ये झाली असून १९४५ मध्ये शंकरराव भोसले यांनी साकारलेली अद्वितीय लाकडी गणेशमूर्ती येथे आहे. ही भारतातील पहिली संपूर्ण सिद्धारूढ लाकडी गणेशमूर्ती म्हणून ओळखली जाते.",
      hi: "इसकी स्थापना 1935 में हुई थी, और यहां 1945 में शंकरराव भोसले द्वारा बनाई गई अद्वितीय लकड़ी की गणेशमूर्ति है। यह भारत की पहली संपूर्ण सिद्धारूढ़ लकड़ी की गणेशमूर्ति मानी जाती है।"
    }
  },

  // ---------- Must-visit Ganpati mandals ----------
  {
    id: "dagdusheth-halwai-ganpati",
    image: "images/mandals/dagdusheth-halwai-ganpati.jpg",
    name: { en: "Shrimant Dagdusheth Halwai Ganpati", mr: "श्रीमंत दगडूशेठ हलवाई गणपती", hi: "श्रीमंत दगडूशेठ हलवाई गणपती" },
    area: "Budhwar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Grand Decoration"],
    established: "Festival since 1952",
    query: "Ganpati Bhavan, 250, Chhatrapati Shivaji Maharaj Rd, Budhwar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Established by Shri Dagdusheth Halwai and his wife Lakshmibai, Pune's most revered Ganesh idol. Since 1952, the festival has been organized with devotion and social service, making it a symbol of faith and unity.",
      mr: "याची स्थापना श्री दगडूशेठ हलवाई आणि त्यांच्या पत्नी लक्ष्मीबाई यांनी केली असून ही पुण्यातील सर्वात मानाची गणेशमूर्ती आहे. १९५२ पासून हा उत्सव भक्ती, एकता आणि सामाजिक सेवेसह साजरा केला जातो.",
      hi: "इसकी स्थापना श्री दगडूशेठ हलवाई और उनकी पत्नी लक्ष्मीबाई ने की थी, और यह पुणे की सबसे मान्य गणेशमूर्ति है। 1952 से यह उत्सव भक्ति, एकता और सामाजिक सेवा के साथ मनाया जाता है।"
    }
  },
  {
    id: "akhil-mandai-mandal",
    image: "images/mandals/akhil-mandai-mandal.jpg",
    name: { en: "Akhil Mandai Mandal — Shri Sharada Gajanan Temple", mr: "अखिल मंडई मंडळ – श्री शारदा गजानन मंदिर", hi: "अखिल मंडई मंडल – श्री शारदा गजानन मंदिर" },
    area: "Shukrawar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Rare Idol"],
    established: "1893",
    query: "Phatakwada Society, Mandai, Shukrawar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Houses one of Pune's rare Ganesh idols, established in 1893 and inaugurated by Lokmanya Tilak. Known for its unique right-curved trunk, the idol is made from grass, paper pulp, and river sand.",
      mr: "येथे पुण्यातील दुर्मिळ गणेशमूर्तींपैकी एक मूर्ती असून तिची स्थापना १८९३ मध्ये लोकमान्य टिळकांच्या हस्ते झाली. उजवीकडे वळलेल्या सोंडेसाठी प्रसिद्ध असलेली ही मूर्ती गवत, कागदाचा लगदा आणि नदीच्या वाळूपासून बनविण्यात आली आहे.",
      hi: "यहां पुणे की दुर्लभ गणेशमूर्तियों में से एक मूर्ति है, जिसकी स्थापना 1893 में लोकमान्य टिळक के हाथों हुई थी। दाईं ओर मुड़ी सूंड के लिए प्रसिद्ध यह मूर्ति घास, कागज की लुगदी और नदी की रेत से बनाई गई है।"
    }
  },
  {
    id: "hutatma-babu-genu-mandal",
    image: "images/mandals/hutatma-babu-genu-mandal.jpg",
    name: { en: "Hutatma Babu Genu Ganesh Mandal Trust", mr: "हुतात्मा बाबू गेनू गणेश मंडळ ट्रस्ट", hi: "हुतात्मा बाबू गेनू गणेश मंडल ट्रस्ट" },
    area: "Tulshibaug, Budhwar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Navsacha Ganpati"],
    established: "1970",
    query: "Tulshibaug Internal Rd, Tulshibaug, Budhwar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Established in 1970, known as \"Navsacha Ganpati.\" The idol, completed after the original sculptor's demise by Shri Prakash Gosavi, was created through public donations and devotion.",
      mr: "याची स्थापना १९७० मध्ये झाली असून ते \"नवसाचा गणपती\" म्हणून प्रसिद्ध आहे. मूळ शिल्पकाराच्या निधनानंतर श्री प्रकाश गोसावी यांनी पूर्ण केलेली ही मूर्ती लोकांच्या श्रद्धा व देणगीतून साकारली गेली.",
      hi: "इसकी स्थापना 1970 में हुई थी और यह \"नवस का गणपति\" के नाम से प्रसिद्ध है। मूल शिल्पकार के निधन के बाद श्री प्रकाश गोसावी द्वारा पूर्ण की गई यह मूर्ति लोगों की श्रद्धा और दान से बनाई गई।"
    }
  },
  {
    id: "hatti-ganpati-mandal",
    image: "images/mandals/hatti-ganpati-mandal.jpg",
    name: { en: "Hatti Ganpati Mandal", mr: "हत्ती गणपती मंडळ", hi: "हत्ती गणपती मंडल" },
    area: "Navi Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Rare Idol"],
    established: "1893",
    query: "Hatti Ganpati Mandal, Navi Peth, Pune, Maharashtra",
    history: {
      en: "Established in 1893, one of Pune's historic Ganesh mandals with a 129-year legacy. Its unique idol depicts Lord Ganesha seated on a tiger, making it the only such idol in Maharashtra.",
      mr: "याची स्थापना १८९३ मध्ये झाली असून हे पुण्यातील ऐतिहासिक गणेश मंडळांपैकी एक आहे. या मंडळाची वैशिष्ट्यपूर्ण गणेशमूर्ती वाघावर विराजमान असलेल्या श्री गणेशाचे रूप दर्शवते आणि महाराष्ट्रातील अशी एकमेव मूर्ती म्हणून ओळखली जाते.",
      hi: "इसकी स्थापना 1893 में हुई थी और यह पुणे के ऐतिहासिक गणेश मंडलों में से एक है। इस मंडल की विशिष्ट गणेशमूर्ति बाघ पर विराजमान श्री गणेश का रूप दर्शाती है और महाराष्ट्र की ऐसी एकमात्र मूर्ति मानी जाती है।"
    }
  },
  {
    id: "nimbalkar-talim-ganpati-mandal",
    image: "images/mandals/nimbalkar-talim-ganpati-mandal.jpg",
    name: { en: "Nimbalkar Talim Ganpati Mandal", mr: "निंबाळकर तालीम गणपती मंडळ", hi: "निंबालकर तालीम गणपती मंडल" },
    area: "Sadashiv Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Cultural Programs"],
    established: "1920",
    query: "Nimbalkar Talim Ganpati Mandal, Sadashiv Peth, Pune, Maharashtra 411030",
    history: {
      en: "Established in 1920, a historic cultural mandal known for promoting classical music, arts, and traditional programs. It has hosted legendary artists and continues to celebrate religious and cultural heritage.",
      mr: "याची स्थापना १९२० मध्ये झाली असून हे ऐतिहासिक सांस्कृतिक मंडळ शास्त्रीय संगीत, कला आणि पारंपरिक कार्यक्रमांसाठी प्रसिद्ध आहे. या मंडळाने अनेक दिग्गज कलाकारांचे कार्यक्रम आयोजित केले असून आजही धार्मिक व सांस्कृतिक वारसा जपत आहे.",
      hi: "इसकी स्थापना 1920 में हुई थी और यह ऐतिहासिक सांस्कृतिक मंडल शास्त्रीय संगीत, कला और पारंपरिक कार्यक्रमों के लिए प्रसिद्ध है। इस मंडल ने कई दिग्गज कलाकारों के कार्यक्रम आयोजित किए हैं और आज भी धार्मिक व सांस्कृतिक विरासत को संजोए हुए है।"
    }
  },
  {
    id: "jilbya-maruti-mandal",
    image: "images/mandals/jilbya-maruti-mandal.jpg",
    name: { en: "Jilbya Maruti Mandal", mr: "जिलब्या मारुती मंडळ", hi: "जिलब्या मारुती मंडल" },
    area: "Shukrawar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Tradition"],
    established: "1954",
    query: "Jilbya Maruti Chowk, Mandai, Shukrawar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Established in 1954, known for its unique Ganesh idol with glass eyes and the tradition of offering Jalebi garlands. The mandal continues this sweet tradition during Ganeshotsav celebrations.",
      mr: "याची स्थापना १९५४ मध्ये झाली असून ते काचेच्या डोळ्यांच्या वैशिष्ट्यपूर्ण गणेशमूर्तीसाठी आणि जिलबीच्या हाराच्या परंपरेसाठी प्रसिद्ध आहे. गणेशोत्सवात आजही ही गोड परंपरा जपली जाते.",
      hi: "इसकी स्थापना 1954 में हुई थी और यह कांच की आंखों वाली विशिष्ट गणेशमूर्ति तथा जलेबी की माला चढ़ाने की परंपरा के लिए प्रसिद्ध है। गणेशोत्सव में आज भी यह मीठी परंपरा निभाई जाती है।"
    }
  },
  {
    id: "riddhi-siddhi-ganpati-nagnath-par",
    image: "images/mandals/riddhi-siddhi-ganpati-nagnath-par.jpg",
    name: { en: "Riddhi Siddhi Ganpati (Nagnath Par Mandal)", mr: "रिद्धी सिद्धी गणपती (नागनाथ पार मंडळ)", hi: "रिद्धि सिद्धि गणपती (नागनाथ पार मंडल)" },
    area: "Sadashiv Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Historic"],
    established: "Permanent idol since 1983",
    query: "Nagnath Par, Phadke Howd, Sadashiv Peth, Pune, Maharashtra",
    history: {
      en: "One of Pune's oldest Ganesh mandals, established by Narahari Sheth Vasulkar. In 1983, a permanent idol was created according to Puranic traditions and continues to be a symbol of devotion.",
      mr: "हे पुण्यातील जुन्या गणेश मंडळांपैकी एक असून त्याची स्थापना नरहरी शेठ वसुळकर यांनी केली. १९८३ मध्ये पुराणोक्त पद्धतीनुसार कायमस्वरूपी गणेशमूर्ती साकारण्यात आली आणि आजही ती श्रद्धेचे प्रतीक आहे.",
      hi: "यह पुणे के पुराने गणेश मंडलों में से एक है, जिसकी स्थापना नरहरी शेठ वसुळकर ने की थी। 1983 में पुराणोक्त पद्धति के अनुसार स्थायी गणेशमूर्ति बनाई गई और आज भी यह श्रद्धा का प्रतीक है।"
    }
  },
  {
    id: "sharada-gajanan-ganesh-mandal-gultekdi",
    image: "images/mandals/sharada-gajanan-ganesh-mandal-gultekdi.jpg",
    name: { en: "Sharada Gajanan Ganesh Mandal", mr: "शारदा गजानन गणेश मंडळ", hi: "शारदा गजानन गणेश मंडल" },
    area: "Gultekdi, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Grand Decoration"],
    established: "",
    query: "Duncan Rd, Market Yard, Gultekdi, Pune, Maharashtra 411037",
    history: {
      en: "Located in Gultekdi Market Yard, Pune, known for its grand religious and historical decorations. The mandal presents inspiring themes like Shiva Rajyabhishek and temple replicas for devotees.",
      mr: "हे पुण्यातील गुलटेकडी मार्केट यार्ड येथील प्रसिद्ध गणेश मंडळ असून ते भव्य धार्मिक व ऐतिहासिक देखाव्यांसाठी ओळखले जाते. मंडळात शिवराज्याभिषेकासारखे प्रेरणादायी देखावे आणि मंदिरांच्या प्रतिकृती सादर केल्या जातात.",
      hi: "यह पुणे के गुलटेकड़ी मार्केट यार्ड का प्रसिद्ध गणेश मंडल है, जो भव्य धार्मिक व ऐतिहासिक झांकियों के लिए जाना जाता है। मंडल में शिवराज्याभिषेक जैसी प्रेरणादायी झांकियां और मंदिरों की प्रतिकृतियां प्रस्तुत की जाती हैं।"
    }
  },
  {
    id: "naidu-ganpati-mandir",
    name: { en: "Naidu Ganpati Mandir", mr: "नायडू गणपती मंदिर", hi: "नायडू गणपती मंदिर" },
    area: "Rasta Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Historic"],
    established: "97th year (as recorded)",
    query: "359, Porwal Metallica, Rasta Peth, Pune, Maharashtra 411011",
    history: {
      en: "Located in Rasta Peth, Pune, one of the old Ganesh mandals known for its beautiful idols of Lord Ganesha and Sharada Mata.",
      mr: "हे पुण्यातील रास्ता पेठ येथील जुन्या गणेश मंडळांपैकी एक असून येथे श्री गणेश आणि शारदा मातेच्या सुंदर मूर्ती आहेत.",
      hi: "यह पुणे के रास्ता पेठ स्थित पुराने गणेश मंडलों में से एक है, जहां श्री गणेश और शारदा माता की सुंदर मूर्तियां हैं।"
    }
  },
  {
    id: "akra-maruti-chowk-ganesh-mandir",
    image: "images/mandals/akra-maruti-chowk-ganesh-mandir.jpg",
    name: { en: "Akra Maruti Chowk Ganesh Mandir (Pratham Dagdusheth Ganpati)", mr: "अकरा मारुती चौक गणेश मंदिर (प्रथम दगडूशेठ गणपती)", hi: "अकरा मारुती चौक गणेश मंदिर (प्रथम दगडूशेठ गणपती)" },
    area: "Shukrawar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Historic"],
    established: "1935",
    query: "245, Bapusaheb Paranjpe Road, Shukrawar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Established in 1935 by local residents, this temple houses the first idol of the Dagdusheth Ganpati Mandal, sculpted by Naik. The idol depicts Lord Ganesha seated on a table with both legs folded. The mandal also introduced Pune's first public Dahi Handi celebration.",
      mr: "स्थानिक नागरिकांनी १९३५ मध्ये या मंडळाची स्थापना केली. येथे दगडूशेठ गणपती मंडळाची पहिली गणेशमूर्ती असून ती शिल्पकार नाईक यांनी साकारली आहे. मूर्तीमध्ये भगवान गणेश टेबलावर दोन्ही पाय दुमडून बसलेल्या अवस्थेत आहेत. पुण्यातील पहिल्या सार्वजनिक दहीहंडी उत्सवाची सुरुवातही या मंडळाने केली.",
      hi: "स्थानीय नागरिकों ने 1935 में इस मंडल की स्थापना की। यहां दगडूशेठ गणपती मंडल की पहली गणेशमूर्ति है, जिसे शिल्पकार नाईक ने बनाया है। मूर्ति में भगवान गणेश मेज पर दोनों पैर मोड़कर बैठी अवस्था में हैं। पुणे के पहले सार्वजनिक दहीहंडी उत्सव की शुरुआत भी इसी मंडल ने की थी।"
    }
  },
  {
    id: "garud-ganpati",
    image: "images/mandals/garud-ganpati.jpg",
    name: { en: "Garud Ganpati", mr: "गरुड गणपती", hi: "गरुड़ गणपती" },
    area: "Narayan Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Grand Decoration"],
    established: "1944",
    query: "VG Kothari Path, Narayan Peth, Pune, Maharashtra 411030",
    history: {
      en: "Established in 1944 by the Daundkar family, the mandal initially celebrated Ganeshotsav at their home before shifting to larger venues due to limited space. In 1950, it began celebrating on Lakshmi Road as Balsevak Ganesh Mandal. It later became popularly known as Garud Ganpati after a spectacular decoration featuring Lord Ganesha seated on a 12-foot-high, 25-foot-wide moving eagle, a major attraction during the immersion procession.",
      mr: "१९४४ मध्ये दौंडकर कुटुंबाने या मंडळाची स्थापना केली. सुरुवातीला गणेशोत्सव त्यांच्या घरी साजरा केला जात होता; जागेची कमतरता असल्याने नंतर तो मोठ्या ठिकाणी हलविण्यात आला. १९५० मध्ये लक्ष्मी रस्त्यावर उत्सव सुरू झाल्यानंतर मंडळाचे नाव बालसेवक गणेश मंडळ असे ठेवण्यात आले. नंतर १२ फूट उंच व २५ फूट रुंद, हालचाल करणाऱ्या गरुडावर विराजमान श्रीगणेशाची आकर्षक सजावट करण्यात आली. विसर्जन मिरवणुकीतील या देखाव्यामुळे मंडळ \"गरुड गणपती\" या नावाने प्रसिद्ध झाले.",
      hi: "1944 में दौंडकर परिवार ने इस मंडल की स्थापना की। शुरुआत में गणेशोत्सव उनके घर पर मनाया जाता था; जगह की कमी के कारण बाद में उसे बड़े स्थान पर स्थानांतरित किया गया। 1950 में लक्ष्मी रोड पर उत्सव शुरू होने के बाद मंडल का नाम बालसेवक गणेश मंडल रखा गया। बाद में 12 फुट ऊंचे और 25 फुट चौड़े, चलते हुए गरुड़ पर विराजमान श्रीगणेश की आकर्षक सजावट की गई। विसर्जन मिरवणुक की इस झांकी के कारण मंडल \"गरुड़ गणपति\" नाम से प्रसिद्ध हुआ।"
    }
  },
  {
    id: "khadak-mal-ali-ganpati",
    image: "images/mandals/khadak-mal-ali-ganpati.jpg",
    name: { en: "Khadak Mal Ali Ganpati", mr: "खडक माळ आळी गणपती", hi: "खड़क माल अली गणपती" },
    area: "Guruwar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Historic"],
    established: "1923",
    query: "1123, 1431, Shukrawar Peth-Mahatma Gandhi Road, Police Colony, Guruwar Peth, Pune, Maharashtra 411042",
    history: {
      en: "Established in 1923, one of Pune's longstanding public Ganesh mandals. The current president of the trust is Hon. Shri Sanjay Balgude.",
      mr: "१९२३ मध्ये या गणपती मंडळाची स्थापना झाली. हे पुण्यातील जुन्या सार्वजनिक गणेश मंडळांपैकी एक आहे. सध्या या गणपती ट्रस्टचे अध्यक्ष मा. श्री. संजय बलगुडे आहेत.",
      hi: "1923 में इस गणपती मंडल की स्थापना हुई। यह पुणे के पुराने सार्वजनिक गणेश मंडलों में से एक है। वर्तमान में इस गणपती ट्रस्ट के अध्यक्ष मा. श्री. संजय बलगुडे हैं।"
    }
  },
  {
    id: "lokhande-talim-ganpati-paper-pulp",
    image: "images/mandals/lokhande-talim-ganpati-paper-pulp.jpg",
    name: { en: "Lokhande Talim Ganpati (Paper-pulp Idol)", mr: "लोखंडे तालीम गणपती", hi: "लोखंडे तालीम गणपती" },
    area: "Narayan Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Historic"],
    established: "1896",
    query: "677, HN Apte Path, Narayan Peth, Pune, Maharashtra 411030",
    history: {
      en: "Established in 1896, one of Pune's oldest public Ganesh mandals. The festival began with a ₹2.50 idol purchased through public donations. In 1965, the mandal commissioned its current paper-pulp Ganesh idol from Mumbai sculptor Ram Sarang. Known for its distinctive warrior-like appearance, the idol stands apart from others. The mandal also regularly conducts social and educational activities.",
      mr: "१८९६ मध्ये स्थापन झालेले लोखंडे तालीम गणपती हे पुण्यातील सर्वात जुन्या सार्वजनिक गणेश मंडळांपैकी एक आहे. लोकवर्गणीतून अडीच रुपयांची गणेशमूर्ती आणून गणेशोत्सवाची सुरुवात करण्यात आली. १९६५ मध्ये मुंबईतील शिल्पकार राम सारंग यांनी साकारलेली सध्याची कागदी लगद्याची गणेशमूर्ती प्रतिष्ठापित करण्यात आली. तालीमीच्या योद्ध्याची ओळख दर्शविणारे या मूर्तीचे वैशिष्ट्यपूर्ण स्वरूप इतर मंडळांपेक्षा वेगळे आहे. मंडळ नियमितपणे सामाजिक व शैक्षणिक उपक्रमही राबवते.",
      hi: "1896 में स्थापित लोखंडे तालीम गणपती पुणे के सबसे पुराने सार्वजनिक गणेश मंडलों में से एक है। लोकचंदे से ढाई रुपये की गणेशमूर्ति लाकर गणेशोत्सव की शुरुआत की गई थी। 1965 में मुंबई के शिल्पकार राम सारंग द्वारा बनाई गई वर्तमान कागज की लुगदी की गणेशमूर्ति प्रतिष्ठापित की गई। तालीम के योद्धा की पहचान दर्शाने वाला इस मूर्ति का विशिष्ट स्वरूप अन्य मंडलों से अलग है। मंडल नियमित रूप से सामाजिक व शैक्षणिक कार्य भी करता है।"
    }
  },
  {
    id: "guruvarya-jagobadada-ganpati",
    image: "images/mandals/guruvarya-jagobadada-ganpati.jpg",
    name: { en: "Guruvarya Jagobadada Ganpati (Dashbhuja Ganpati)", mr: "गुरुवर्य जगोबादादा गणपती (दशभुजा गणपती)", hi: "गुरुवर्य जगोबादादा गणपती (दशभुजा गणपती)" },
    area: "Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Rare Idol"],
    established: "Idol created 1977",
    query: "Guruvarya Jagobadada Ganpati, Pune, Maharashtra",
    history: {
      en: "Established from Jagobadada Talim, a wrestling center started by Guruvarya Jagobadada, this famous Pune mandal is also known as Dashbhuja Ganpati (ten-handed Ganesha). Later, Dagdusheth Halwai developed it into a mandal and temple. The current idol was created in 1977 by the father of artist Nagesh Shimpi and took two years to complete.",
      mr: "गुरुवर्य जगोबादादा यांनी सुरू केलेल्या कुस्ती तालीमीतून या प्रसिद्ध गणपती मंडळाची सुरुवात झाली. हे मंडळ दशभुजा गणपती म्हणून ओळखले जाते. नंतर दगडूशेठ हलवाई यांनी याचे मंडळ व मंदिर विकसित केले. सध्याची दहा हातांची गणेशमूर्ती १९७७ मध्ये कलाकार नागेश शिंपी यांच्या वडिलांनी तयार केली असून ती पूर्ण करण्यास दोन वर्षे लागली.",
      hi: "गुरुवर्य जगोबादादा द्वारा शुरू की गई कुश्ती तालीम से इस प्रसिद्ध गणपती मंडल की शुरुआत हुई। यह मंडल दशभुजा गणपती के नाम से जाना जाता है। बाद में दगडूशेठ हलवाई ने इसका मंडल व मंदिर विकसित किया। वर्तमान दस हाथों वाली गणेशमूर्ति 1977 में कलाकार नागेश शिंपी के पिता ने बनाई थी, जिसे पूरा करने में दो वर्ष लगे।"
    }
  },
  {
    id: "shri-sai-mitra-mandal",
    name: { en: "Shri Sai Mitra Mandal", mr: "श्री साई मित्र मंडळ", hi: "श्री साई मित्र मंडल" },
    area: "Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Grand Decoration"],
    established: "1994",
    query: "Shri Sai Mitra Mandal, Pune, Maharashtra",
    history: {
      en: "Established in 1994, has been presenting live performances during Ganeshotsav for many years under the guidance of Founder President Hon. Shri Muralidhar Mohol. The mandal is known for creating grand replicas, including the Pandharpur Vitthal Rukmini Temple and the Ayodhya Ram Mandir replica in 2023.",
      mr: "१९९४ मध्ये स्थापन झालेले श्री साई मित्र मंडळ संस्थापक अध्यक्ष मा. श्री. मुरलीधर मोहोळ यांच्या मार्गदर्शनाखाली गणेशोत्सवात अनेक वर्षांपासून भव्य देखावे व सादरीकरणे सादर करत आहे. मंडळाने पंढरपूर विठ्ठल-रुक्मिणी मंदिराची प्रतिकृती तसेच २०२३ मध्ये अयोध्या राम मंदिराची प्रतिकृती साकारली आहे.",
      hi: "1994 में स्थापित श्री साई मित्र मंडल संस्थापक अध्यक्ष मा. श्री. मुरलीधर मोहोळ के मार्गदर्शन में गणेशोत्सव में कई वर्षों से भव्य झांकियां और प्रस्तुतियां पेश कर रहा है। मंडल ने पंढरपुर विठ्ठल-रुक्मिणी मंदिर की प्रतिकृति तथा 2023 में अयोध्या राम मंदिर की प्रतिकृति बनाई है।"
    }
  },
  {
    id: "trishund-ganpati-mandir",
    image: "images/mandals/trishund-ganpati-mandir.jpg",
    name: { en: "Trishund Ganpati Mandir", mr: "त्रिशुंड गणपती मंदिर", hi: "त्रिशुंड गणपती मंदिर" },
    area: "Somwar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Ancient Temple", "Rare Idol"],
    established: "Built 1754",
    query: "Somwar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Built in 1754 by Mahant Bhimjigiri Gosavi, this historic temple in Somwar Peth is the city's best-sculptured temple and reflects late Peshwa architecture. Dedicated to the Tantra tradition, it is famous for its unique carvings, inscriptions, and the Trishund Mayureshwar Ganpati idol — a square-seated Lord Ganesha on a peacock with three trunks (touching a modakpatra, stomach, and Shakti's chin), carved from black basalt stone, with a hidden recumbent Sheshshayi Bhagavan idol behind it. The basement of the temple was used as a meditation space and houses Gosavi's samadhi.",
      mr: "१७५४ मध्ये महंत भीमजिगिरी गोसावी यांनी बांधलेले हे सोमवार पेठेतील ऐतिहासिक मंदिर पुण्यातील सर्वोत्तम शिल्पकलेचे मंदिर असून पेशवेकालीन स्थापत्यशैलीचे उत्कृष्ट उदाहरण आहे. तांत्रिक परंपरेशी संबंधित या मंदिरातील वैशिष्ट्यपूर्ण कोरीवकाम, शिलालेख आणि काळ्या बेसॉल्ट दगडातील त्रिशुंड मयुरेश्वर गणपतीची तीन डोकी व सहा हात असलेली मूर्ती (सोंडा मोदकपात्राला, पोटाला आणि शक्तीच्या हनुवटीला स्पर्श करतात) हे या मंदिराचे आकर्षण आहे, आणि गाभाऱ्यात मागे शेषशायी भगवानाची मूर्ती आहे. मंदिराचा तळभाग साधूंच्या ध्यानासाठी वापरला जात असे आणि येथे गोसावींची समाधी आहे.",
      hi: "1754 में महंत भीमजिगिरी गोसावी द्वारा बनवाया गया सोमवार पेठ का यह ऐतिहासिक मंदिर पुणे का सर्वोत्तम शिल्पकला वाला मंदिर है और पेशवाकालीन स्थापत्यशैली का उत्कृष्ट उदाहरण है। तांत्रिक परंपरा से जुड़ी इस मंदिर की विशिष्ट नक्काशी, शिलालेख और काले बेसाल्ट पत्थर की त्रिशुंड मयूरेश्वर गणपती की तीन सिर व छह हाथों वाली मूर्ति (जिसकी सूंडें मोदकपात्र, पेट और शक्ति की ठुड्डी को छूती हैं) इस मंदिर का आकर्षण है, और गर्भगृह में पीछे शेषशायी भगवान की मूर्ति है। मंदिर का तलघर साधुओं के ध्यान के लिए उपयोग होता था और यहां गोसावी की समाधि है।"
    }
  },
  {
    id: "ganpati-chowk-mitra-mandal",
    image: "images/mandals/ganpati-chowk-mitra-mandal.jpg",
    name: { en: "Ganpati Chowk Mitra Mandal (Laxmi Road Cha Raja)", mr: "गणपती चौक मित्र मंडळ (लक्ष्मी रोडचा राजा)", hi: "गणपती चौक मित्र मंडल (लक्ष्मी रोड का राजा)" },
    area: "Tulshibaug, Budhwar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Grand Decoration"],
    established: "",
    query: "48, Laxmi Road, Tulshibaug, Budhwar Peth, Pune, Maharashtra 411002",
    history: {
      en: "Famous for its unique and one of the tallest Ganesh idols in Pune, inspired by the style of Lalbaug Cha Raja.",
      mr: "हे मंडळ पुण्यातील वैशिष्ट्यपूर्ण आणि उंच गणेशमूर्तीसाठी प्रसिद्ध आहे. या मूर्तीची रचना लालबागच्या राजाप्रमाणे करण्यात आली आहे.",
      hi: "यह मंडल पुणे की विशिष्ट और ऊंची गणेशमूर्ति के लिए प्रसिद्ध है। इस मूर्ति की रचना लालबाग के राजा की तर्ज पर की गई है।"
    }
  },
  {
    id: "shanipar-mandal-trust",
    image: "images/mandals/shanipar-mandal-trust.jpg",
    name: { en: "Shanipar Mandal Trust", mr: "शनिपार मंडळ ट्रस्ट", hi: "शनिपार मंडल ट्रस्ट" },
    area: "Shanipar Chowk, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Grand Decoration"],
    established: "~131 years old (as recorded)",
    query: "Near Shanipar Chowk, Pune, Maharashtra 411002",
    history: {
      en: "Established around 131 years ago, known for its grand and unique Ganesh festival displays. The temple setup features a large arrangement with a 60-foot length, 40-foot width, and a 35-foot-high entrance gate.",
      mr: "सुमारे १३१ वर्षे जुने असलेले शनिपार मंडळ ट्रस्ट भव्य आणि वैशिष्ट्यपूर्ण गणेशोत्सव देखाव्यांसाठी प्रसिद्ध आहे. मंदिराचा देखावा साधारणपणे ६० फूट लांब, ४० फूट रुंद असून प्रवेशद्वाराची उंची ३५ फूट आहे.",
      hi: "लगभग 131 वर्ष पुराना शनिपार मंडल ट्रस्ट भव्य और विशिष्ट गणेशोत्सव झांकियों के लिए प्रसिद्ध है। मंदिर की झांकी लगभग 60 फुट लंबी, 40 फुट चौड़ी है और प्रवेशद्वार की ऊंचाई 35 फुट है।"
    }
  },
  {
    id: "tarawade-ganpati",
    image: "images/mandals/tarawade-ganpati.jpg",
    name: { en: "Tarawade Ganpati", mr: "तारवडे गणपती", hi: "तारवडे गणपती" },
    area: "Somwar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Historic"],
    established: "1893",
    query: "276, Nanal Shastri Road, Somwar Peth, Pune, Maharashtra 411011",
    history: {
      en: "Established in 1893 by Lokmanya Tilak at the residence of freedom fighter and social worker Bandoba Malharrao Tarawade, this historic Ganpati idol symbolizes the victory of good over evil. The original idol, purchased from artist Bhausaheb Rangare, is still worshipped with the same traditions. The idol depicts Lord Ganesha defeating three demons, including Khadya and Bodhlya.",
      mr: "१८९३ मध्ये स्वातंत्र्यसैनिक व समाजसेवक बंडोबा मल्हारराव तारवडे यांच्या निवासस्थानी लोकमान्य टिळक यांनी या गणपतीची स्थापना केली. ही ऐतिहासिक गणेशमूर्ती वाईटावर चांगल्याच्या विजयाचे प्रतीक मानली जाते. कलाकार भाऊसाहेब रंगारे यांच्याकडून आणलेली मूळ मूर्ती आजही त्याच परंपरेने पूजली जाते. या मूर्तीमध्ये भगवान गणेशांनी खाड्या आणि बोधल्या यांसह तीन राक्षसांचा पराभव केल्याचे दर्शविले आहे.",
      hi: "1893 में स्वतंत्रता सेनानी और समाजसेवी बंडोबा मल्हारराव तारवडे के निवासस्थान पर लोकमान्य टिळक ने इस गणपती की स्थापना की। यह ऐतिहासिक गणेशमूर्ति बुराई पर अच्छाई की जीत का प्रतीक मानी जाती है। कलाकार भाऊसाहेब रंगारे से लाई गई मूल मूर्ति आज भी उसी परंपरा से पूजी जाती है। इस मूर्ति में भगवान गणेश को खाड्या और बोधल्या सहित तीन राक्षसों को पराजित करते दिखाया गया है।"
    }
  },
  {
    id: "sangram-dashabhuja-ganpati",
    image: "images/mandals/sangram-dashabhuja-ganpati.jpg",
    name: { en: "Sangram Dashabhuja Ganpati", mr: "संग्राम दशभुजा गणपती", hi: "संग्राम दशभुजा गणपती" },
    area: "Mangalwar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Rare Idol"],
    established: "1966",
    query: "Mangalwar Peth, Pune, Maharashtra",
    history: {
      en: "Established in 1966 at Mangalwar Peth by Late Shivaji Khaire and others, famous as Dashabhuja Ganpati due to its ten-armed Ganesha idol. Created by Sunil Jungli, the idol shows Lord Ganesha seated on a throne with one leg placed on the thigh.",
      mr: "१९६६ मध्ये मंगळवार पेठ येथे कै. शिवाजी खैरे व इतर सहकाऱ्यांनी या मंडळाची स्थापना केली. दहा हात असलेल्या गणेशमूर्तीमुळे हे मंडळ दशभुजा गणपती म्हणून प्रसिद्ध आहे. सुनील जंगली यांनी साकारलेली ही मूर्ती सिंहासनावर विराजमान असून एका पायाची मांडी घातलेली आहे.",
      hi: "1966 में मंगळवार पेठ में स्व. शिवाजी खैरे व अन्य सहयोगियों ने इस मंडल की स्थापना की। दस हाथों वाली गणेशमूर्ति के कारण यह मंडल दशभुजा गणपती के नाम से प्रसिद्ध है। सुनील जंगली द्वारा बनाई गई यह मूर्ति सिंहासन पर विराजमान है और एक पैर मोड़कर बैठी है।"
    }
  },
  {
    id: "panch-houd-mitra-mandal",
    name: { en: "Panch Houd Mitra Mandal", mr: "पंच हौद मित्र मंडळ", hi: "पंच हौद मित्र मंडल" },
    area: "Guruwar Peth, Pune",
    category: "Must Visit",
    tags: ["Must Visit", "Rare Idol"],
    established: "1953",
    query: "Panch Houd Mitra Mandal, Guruwar Peth, Pune, Maharashtra",
    history: {
      en: "Established in 1953 by local residents of Guruwar Peth, famous for its unique turtle-based Ganesh idol. Created by sculptor Vinod Yellapurkar, it is the first and only turtle Ganesh idol in Pune.",
      mr: "१९५३ मध्ये गुरुवार पेठेतील स्थानिक नागरिकांनी या मंडळाची स्थापना केली. शिल्पकार विनोद येल्लापूरकर यांनी साकारलेली कासवावर विराजमान असलेली गणेशमूर्ती हे या मंडळाचे वैशिष्ट्य आहे. पुण्यातील पहिली आणि एकमेव कासवावरील गणेशमूर्ती या मंडळाकडे आहे.",
      hi: "1953 में गुरुवार पेठ के स्थानीय नागरिकों ने इस मंडल की स्थापना की। शिल्पकार विनोद येल्लापूरकर द्वारा बनाई गई कछुए पर विराजमान गणेशमूर्ति इस मंडल की विशेषता है। पुणे की पहली और एकमात्र कछुए पर विराजमान गणेशमूर्ति इसी मंडल के पास है।"
    }
  },

  // ---------- Pune's majestic standing Ganpati idol pandals/mandirs ----------
  {
    id: "virachi-talim-mandal",
    image: "images/mandals/virachi-talim-mandal.jpg",
    name: { en: "Virachi Talim Mandal", mr: "वीराची तालीम मंडळ", hi: "वीराची तालीम मंडल" },
    area: "Shaniwar Peth, Pune",
    category: "Standing Idol",
    tags: ["Standing Idol", "Historic"],
    established: "Idol created 1982",
    query: "Shaniwar Peth, Pune, Maharashtra",
    history: {
      en: "Originating from the Peshwa era, named after the wrestling training center (Veerachi Talim) where Peshwa sardars practiced near Shinde Para, Shaniwar Peth. The Ganesh idol created by renowned sculptor B. R. Khedkar in 1982 symbolizes bravery. The idol is presented in different forms every year and is known for its unique themes.",
      mr: "पेशवेकाळात शनिवार पेठेतील शिंदे पाराजवळ असलेल्या व्यायाम व तालीम केंद्रामुळे या मंडळाला वीराची तालीम हे नाव मिळाले. पेशव्यांचे सरदार येथे व्यायामासाठी येत असत. प्रसिद्ध शिल्पकार बी. आर. खेडकर यांनी १९८२ मध्ये साकारलेली गणेशमूर्ती शौर्याचे प्रतीक मानली जाते. मंडळ दरवर्षी गणेशमूर्तीला वेगवेगळे रूप देते.",
      hi: "पेशवा काल में शनिवार पेठ के शिंदे पारा के पास स्थित व्यायाम व तालीम केंद्र के कारण इस मंडल को वीराची तालीम नाम मिला। पेशवाओं के सरदार यहां व्यायाम के लिए आते थे। प्रसिद्ध शिल्पकार बी. आर. खेडकर द्वारा 1982 में बनाई गई गणेशमूर्ति शौर्य का प्रतीक मानी जाती है। मंडल हर वर्ष गणेशमूर्ति को अलग-अलग रूप देता है।"
    }
  },
  {
    id: "lokhande-talim-mandal-bal-ganesh",
    name: { en: "Lokhande Talim Mandal (Bal Ganesh Idol)", mr: "लोखंडे तालीम मंडळ", hi: "लोखंडे तालीम मंडल" },
    area: "Narayan Peth, Pune",
    category: "Standing Idol",
    tags: ["Standing Idol", "Rare Idol"],
    established: "1896",
    query: "689, Lokhande Talim Road, Bhatancha Bol, Narayan Peth, Pune, Maharashtra",
    history: {
      en: "Established in 1896, famous for its unique Bal Ganesh idol. Created by renowned sculptor Ram Sarang in 1964, the stone idol has a graceful posture with one leg slightly raised. Its unique features, including a snake around the body and a peaceful expression, make it one of a kind in Maharashtra.",
      mr: "१८९६ मध्ये स्थापन झालेले नारायण पेठेतील लोखंडे तालीम मंडळ आपल्या वैशिष्ट्यपूर्ण बाल गणेशमूर्तीसाठी प्रसिद्ध आहे. प्रसिद्ध शिल्पकार राम सारंग यांनी १९६४ मध्ये साकारलेली ही दगडी मूर्ती एका पायावर किंचित उभी असल्यासारखी दिसते. मूर्तीवरील नागाचे चित्रण, शांत भाव आणि आकर्षक मुद्रा यामुळे ही महाराष्ट्रातील एकमेव वैशिष्ट्यपूर्ण मूर्ती मानली जाते.",
      hi: "1896 में स्थापित नारायण पेठ का लोखंडे तालीम मंडल अपनी विशिष्ट बाल गणेशमूर्ति के लिए प्रसिद्ध है। प्रसिद्ध शिल्पकार राम सारंग द्वारा 1964 में बनाई गई यह पत्थर की मूर्ति एक पैर पर हल्की खड़ी सी दिखती है। मूर्ति पर नाग का चित्रण, शांत भाव और आकर्षक मुद्रा के कारण यह महाराष्ट्र की एकमात्र विशिष्ट मूर्ति मानी जाती है।"
    }
  },
  {
    id: "phani-ali-ganpati",
    name: { en: "Phani Ali Ganpati", mr: "फणी आळी गणपती", hi: "फणी अली गणपती" },
    area: "Phani Ali, Pune",
    category: "Standing Idol",
    tags: ["Standing Idol", "Rare Idol"],
    established: "1946",
    query: "Phani Ali, Pune, Maharashtra",
    history: {
      en: "Established in 1946, Phani Ali Talim Trust is located near the famous Shri Kasba Ganpati Mandir and is known for its unique Vishnu-form Ganpati idol. Created by Mumbai sculptors Sarang Bandhu, the idol features Vishnu's symbols like the conch, chakra, and mace.",
      mr: "१९४६ मध्ये स्थापन झालेले फणी आळी तालीम ट्रस्ट हे प्रसिद्ध श्री कसबा गणपती मंदिराजवळ स्थित असून आपल्या वैशिष्ट्यपूर्ण विष्णू रूपातील गणेशमूर्तीसाठी प्रसिद्ध आहे. मुंबईतील सारंग बंधूंनी साकारलेल्या या मूर्तीमध्ये विष्णूची प्रतीके असलेले शंख, चक्र आणि गदा दिसतात.",
      hi: "1946 में स्थापित फणी अली तालीम ट्रस्ट प्रसिद्ध श्री कसबा गणपती मंदिर के पास स्थित है और अपनी विशिष्ट विष्णु रूप वाली गणेशमूर्ति के लिए प्रसिद्ध है। मुंबई के सारंग बंधुओं द्वारा बनाई गई इस मूर्ति में विष्णु के प्रतीक शंख, चक्र और गदा दिखाई देते हैं।"
    }
  },
  {
    id: "vajradehi-trust",
    name: { en: "Vajradehi Trust", mr: "वज्रदेही ट्रस्ट", hi: "वज्रदेही ट्रस्ट" },
    area: "Raviwar Peth, Pune",
    category: "Standing Idol",
    tags: ["Standing Idol", "Rare Idol"],
    established: "1938",
    query: "Raviwar Peth, Pune, Maharashtra",
    history: {
      en: "Established in 1938, started the Ganeshotsav tradition in the Raviwar Peth area. Famous for its unique Hanuman-form Ganpati idol, where Lord Ganesha is shown opening his chest with Lord Ram and Sita's image inside. Earlier associated with Agarwale Talim, hosting cultural programs like music, drama, and dance.",
      mr: "१९३८ मध्ये स्थापन झालेले वज्रदेही ट्रस्ट हे रविवार पेठ परिसरातील गणेशोत्सव परंपरेसाठी प्रसिद्ध आहे. या मंडळाची वैशिष्ट्यपूर्ण हनुमान रूपातील गणेशमूर्ती असून त्यामध्ये भगवान गणेशांनी छाती उघडल्यावर आत श्रीराम आणि सीतेची प्रतिमा दिसते. पूर्वी हे मंडळ अगरवाले तालीमशी संबंधित होते आणि येथे संगीत, नाटक व नृत्याचे सांस्कृतिक कार्यक्रम आयोजित केले जात असत.",
      hi: "1938 में स्थापित वज्रदेही ट्रस्ट रविवार पेठ क्षेत्र की गणेशोत्सव परंपरा के लिए प्रसिद्ध है। इस मंडल की विशिष्ट हनुमान रूप वाली गणेशमूर्ति है, जिसमें भगवान गणेश की छाती खोलने पर अंदर श्रीराम और सीता की छवि दिखाई देती है। पहले यह मंडल अगरवाले तालीम से जुड़ा था और यहां संगीत, नाटक व नृत्य के सांस्कृतिक कार्यक्रम आयोजित किए जाते थे।"
    }
  },
  {
    id: "sakhlipir-talim",
    name: { en: "Sakhlipir Talim (National Maruti Mandal)", mr: "साखळीपीर तालीम (राष्ट्रीय मारुती मंडळ)", hi: "साखलीपीर तालीम (राष्ट्रीय मारुती मंडल)" },
    area: "Nana Peth, Pune",
    category: "Standing Idol",
    tags: ["Standing Idol", "Tradition"],
    established: "",
    query: "Nana Peth, Pune, Maharashtra",
    history: {
      en: "National Maruti Mandal in Nana Peth has preserved traditional Ganeshotsav celebrations. The unique idol, created by Sopan Belsarkar, a disciple of sculptor B. R. Khedkar, reflects different identities through its accessories, such as a whip, turban, or Gandhi cap. The mandal also conducts a Varkari Dindi procession carrying replicas of the idol.",
      mr: "नाना पेठेतील राष्ट्रीय मारुती मंडळाने पारंपरिक गणेशोत्सवाची परंपरा जपली आहे. शिल्पकार बी. आर. खेडकर यांचे शिष्य सोपान बेलसरेकर यांनी साकारलेली ही वैशिष्ट्यपूर्ण गणेशमूर्ती वेगवेगळ्या रूपांमधून विविध ओळखी दर्शवते. मूर्तीवर छडी, पगडी किंवा गांधी टोपी धारण केल्यास तिचे वेगळे स्वरूप दिसते. मंडळातर्फे मूर्तीच्या प्रतिकृतींसह वारकरी दिंडी मिरवणूकही काढली जाते.",
      hi: "नाना पेठ के राष्ट्रीय मारुती मंडल ने पारंपरिक गणेशोत्सव की परंपरा को संजोया है। शिल्पकार बी. आर. खेडकर के शिष्य सोपान बेलसरेकर द्वारा बनाई गई यह विशिष्ट गणेशमूर्ति अलग-अलग रूपों से विविध पहचान दर्शाती है। मूर्ति पर छड़ी, पगड़ी या गांधी टोपी धारण करने पर उसका अलग रूप दिखता है। मंडल की ओर से मूर्ति की प्रतिकृतियों सहित वारकरी दिंडी मिरवणुक भी निकाली जाती है।"
    }
  },

  // ---------- Ancient Ganpati temples ----------
  {
    id: "sarasbaug-ganpati",
    image: "images/mandals/sarasbaug-ganpati.jpg",
    name: { en: "Sarasbaug Ganpati", mr: "सारसबाग गणपती", hi: "सारसबाग गणपती" },
    area: "Sarasbaug, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "Built 1784",
    query: "Sarasbaug, Pune, Maharashtra 411030",
    history: {
      en: "One of Pune's most famous and sacred Ganesh temples. Built in 1784 by Shrimant Sawai Madhavrao Peshwa, located on an island in the lake developed by Shrimant Nanasaheb Peshwa near Parvati Hills. The original idol was made of Kurund stone, later replaced with a white marble idol installed in 1990. A small Ganesh museum was added to the temple complex in 1995.",
      mr: "सारसबाग गणपती मंदिर हे पुण्यातील प्रसिद्ध आणि पवित्र गणेश मंदिरांपैकी एक आहे. १७८४ मध्ये श्रीमंत सवाई माधवराव पेशवे यांनी हे मंदिर बांधले. हे मंदिर श्रीमंत नानासाहेब पेशवे यांनी विकसित केलेल्या तलावातील बेटावर वसलेले आहे. मूळ गणेशमूर्ती कुरुंद दगडाची होती; नंतर ती बदलण्यात आली आणि १९९० मध्ये गाभाऱ्यात पांढऱ्या संगमरवरी मूर्तीची स्थापना करण्यात आली. १९९५ मध्ये मंदिर परिसरात गणेश संग्रहालय सुरू करण्यात आले.",
      hi: "सारसबाग गणपती मंदिर पुणे के प्रसिद्ध और पवित्र गणेश मंदिरों में से एक है। 1784 में श्रीमंत सवाई माधवराव पेशवा ने यह मंदिर बनवाया। यह मंदिर श्रीमंत नानासाहेब पेशवा द्वारा विकसित तालाब के टापू पर स्थित है। मूल गणेशमूर्ति कुरुंद पत्थर की थी; बाद में उसे बदला गया और 1990 में गर्भगृह में सफेद संगमरमर की मूर्ति स्थापित की गई। 1995 में मंदिर परिसर में गणेश संग्रहालय शुरू किया गया।"
    }
  },
  {
    id: "gundacha-ganpati-temple",
    image: "images/mandals/gundacha-ganpati-temple.jpg",
    name: { en: "Gundacha Ganpati Temple", mr: "गुंडाचा गणपती मंदिर", hi: "गुंडाचा गणपती मंदिर" },
    area: "Kasba Peth, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "19th century",
    query: "576, Kasba Peth Road, Kasba Peth, Pune, Maharashtra 411011",
    history: {
      en: "Established in the 19th century, located in Kasba Peth, one of the oldest parts of Pune. Named after Nagoji Gund, who lived near the temple, and also known as Shree Siddhivinayak Ganapati Mandir.",
      mr: "१९व्या शतकात स्थापन झालेले गुंडाचा गणपती मंदिर पुण्यातील सर्वात जुन्या भागांपैकी एक असलेल्या कसबा पेठेत स्थित आहे. या मंदिराचे नाव परिसरात राहणाऱ्या नागोजी गुंड यांच्या नावावरून पडले असून हे मंदिर श्री सिद्धिविनायक गणपती मंदिर म्हणूनही ओळखले जाते.",
      hi: "19वीं सदी में स्थापित गुंडाचा गणपती मंदिर पुणे के सबसे पुराने क्षेत्रों में से एक कसबा पेठ में स्थित है। इस मंदिर का नाम वहां रहने वाले नागोजी गुंड के नाम पर पड़ा है और यह मंदिर श्री सिद्धिविनायक गणपती मंदिर के नाम से भी जाना जाता है।"
    }
  },
  {
    id: "chimnya-ganpati",
    image: "images/mandals/chimnya-ganpati.jpg",
    name: { en: "Chimnya Ganpati", mr: "चिमण्या गणपती", hi: "चिमण्या गणपती" },
    area: "Sadashiv Peth, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "",
    query: "1294, Chimnya Ganpati Chowk, Perugate, Sadashiv Peth, Pune, Maharashtra 411030",
    history: {
      en: "Located in Sadashiv Peth, a famous temple in Pune. The idol of Lord Ganesha is around 3 feet tall with a left trunk and a crown. Currently owned by the Shastri family. It is believed the name Chimnya Ganpati (sparrow Ganpati) came from the many sparrows that used to gather here to pick rice.",
      mr: "सदाशिव पेठेतील चिमण्या गणपती हे पुण्यातील प्रसिद्ध मंदिर आहे. येथील गणेशमूर्ती सुमारे ३ फूट उंच असून तिची सोंड डावीकडे आहे व डोक्यावर मुकुट आहे. हे मंदिर सध्या शास्त्री कुटुंबाच्या मालकीचे आहे. येथे पूर्वी तांदूळ टिपण्यासाठी अनेक चिमण्या येत असत, त्यामुळे या गणपतीला चिमण्या गणपती असे नाव पडले असावे.",
      hi: "सदाशिव पेठ का चिमण्या गणपती पुणे का प्रसिद्ध मंदिर है। यहां की गणेशमूर्ति लगभग 3 फुट ऊंची है, जिसकी सूंड बाईं ओर है और सिर पर मुकुट है। यह मंदिर वर्तमान में शास्त्री परिवार के स्वामित्व में है। यहां पहले चावल चुगने के लिए कई गौरैया आती थीं, इसलिए इस गणपती का नाम चिमण्या गणपती (गौरैया गणपती) पड़ा होगा।"
    }
  },
  {
    id: "dashabhuja-ganapati-erandwane",
    image: "images/mandals/dashabhuja-ganapati-erandwane.jpg",
    name: { en: "Dashabhuja Ganapati", mr: "दशभुजा गणपती", hi: "दशभुजा गणपती" },
    area: "Erandwane, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "",
    query: "Karve Nagar Road, Pandurang Colony, Erandwane, Pune, Maharashtra 411004",
    history: {
      en: "A famous Hindu temple in Pune, once owned by Sardar Haripant Phadke, a Peshwa-era Sardar, later gifted to the Peshwas as dowry. Attracts thousands of devotees, especially during Ganesh Chaturthi. The idol is unique with its trunk turned towards the right side, considered rare and sacred.",
      mr: "दशभुजा गणपती मंदिर हे पुण्यातील प्रसिद्ध हिंदू मंदिर आहे. हे मंदिर पूर्वी सरदार हरिपंत फडके यांच्या मालकीचे होते. पेशव्यांच्या काळातील हे मंदिर नंतर हुंडा म्हणून पेशव्यांना देण्यात आले. येथे दररोज हजारो भाविक दर्शनासाठी येतात आणि गणेश चतुर्थीच्या काळात गर्दी वाढते. या मंदिरातील गणेशमूर्तीची सोंड उजव्या बाजूला असून अशी मूर्ती दुर्मिळ आणि पवित्र मानली जाते.",
      hi: "दशभुजा गणपती मंदिर पुणे का प्रसिद्ध हिंदू मंदिर है। यह मंदिर पहले सरदार हरिपंत फडके के स्वामित्व में था। पेशवा काल का यह मंदिर बाद में दहेज के रूप में पेशवाओं को दिया गया। यहां प्रतिदिन हजारों भक्त दर्शन के लिए आते हैं और गणेश चतुर्थी के दौरान भीड़ बढ़ जाती है। इस मंदिर की गणेशमूर्ति की सूंड दाईं ओर है, और ऐसी मूर्ति दुर्लभ व पवित्र मानी जाती है।"
    }
  },
  {
    id: "varad-gupchup-ganpati-mandir",
    image: "images/mandals/varad-gupchup-ganpati-mandir.jpg",
    name: { en: "Varad Gupchup Ganpati Mandir", mr: "वरद गुपचूप गणपती मंदिर", hi: "वरद गुपचूप गणपती मंदिर" },
    area: "Shaniwar Peth, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "12 February 1882",
    query: "106, Apte Ghat, Shaniwar Peth, Pune, Maharashtra 411030",
    history: {
      en: "Established on 12 February 1882 by Ramchandra Vishnu Gupchup, also known as Gupchup Ganpati Mandir. The temple was damaged in the 1961 Panshet flood and later reconstructed. Built in Peshwa-style architecture, known for its beautiful wooden structure and paintings depicting Hindu mythology. The Ganesh idol was created by sculptor Moreshwar Shastri Dixit.",
      mr: "१२ फेब्रुवारी १८८२ रोजी रामचंद्र विष्णू गुपचूप यांनी स्थापन केलेले हे शनिवार पेठेतील मंदिर गुपचूप गणपती मंदिर म्हणूनही ओळखले जाते. १९६१ च्या पानशेत पुरात मंदिराचे नुकसान झाले, त्यानंतर त्याची पुनर्बांधणी करण्यात आली. पेशवेकालीन स्थापत्यशैलीतील हे मंदिर लाकडी रचना आणि हिंदू पौराणिक कथांवरील चित्रांसाठी प्रसिद्ध आहे. येथील गणेशमूर्ती शिल्पकार मोरेश्वर शास्त्री दीक्षित यांनी साकारली आहे.",
      hi: "12 फरवरी 1882 को रामचंद्र विष्णु गुपचूप द्वारा स्थापित शनिवार पेठ का यह मंदिर गुपचूप गणपती मंदिर के नाम से भी जाना जाता है। 1961 की पानशेत बाढ़ में मंदिर को नुकसान हुआ, जिसके बाद इसका पुनर्निर्माण किया गया। पेशवाकालीन स्थापत्यशैली वाला यह मंदिर लकड़ी की संरचना और हिंदू पौराणिक कथाओं पर आधारित चित्रों के लिए प्रसिद्ध है। यहां की गणेशमूर्ति शिल्पकार मोरेश्वर शास्त्री दीक्षित ने बनाई है।"
    }
  },
  {
    id: "peshwa-ganpati-mandir",
    image: "images/mandals/peshwa-ganpati-mandir.jpg",
    name: { en: "Peshwa Ganpati Mandir", mr: "पेशवा गणपती मंदिर", hi: "पेशवा गणपती मंदिर" },
    area: "Shaniwar Peth, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "Peshwa era",
    query: "Chhatrapati Shivaji Maharaj Road, Shaniwar Peth, Pune, Maharashtra 411030",
    history: {
      en: "This historic temple dates back to the Peshwa era and is located near the Ganesh Darwaja of Sarkar Wada (Juna Wada). It reflects the rich heritage of Pune's Peshwa period.",
      mr: "हे ऐतिहासिक मंदिर पेशवेकाळापासून अस्तित्वात असून सरकार वाडा (जुना वाडा) येथील गणेश दरवाजाजवळ स्थित आहे. हे मंदिर पुण्याच्या पेशवेकालीन वारशाचे प्रतीक आहे.",
      hi: "यह ऐतिहासिक मंदिर पेशवा काल से अस्तित्व में है और सरकार वाड़ा (जुना वाड़ा) के गणेश दरवाजे के पास स्थित है। यह मंदिर पुणे की पेशवाकालीन विरासत का प्रतीक है।"
    }
  },
  {
    id: "parvati-nandan-ganpati-devsthan",
    image: "images/mandals/parvati-nandan-ganpati-devsthan.jpg",
    name: { en: "Shri Parvati Nandan Ganpati Devsthan (Khinditla Ganpati)", mr: "श्री पार्वती नंदन गणपती देवस्थान (खिंडीतला गणपती)", hi: "श्री पार्वती नंदन गणपती देवस्थान (खिंडी वाला गणपती)" },
    area: "Gokhalenagar, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "",
    query: "Chaturshringi, Gokhalenagar, Pune, Maharashtra 411016",
    history: {
      en: "This ancient temple's history dates back to the time of Chhatrapati Shivaji Maharaj and Jijau Mata. It is believed that Jijau Mata discovered a self-manifested Ganesh idol under a Shami tree and built a temple there. During the Peshwa era, this temple was a revered shrine where Peshwas sought blessings before important missions. It is the 55th among the famous 56 Vinayakas of Pune.",
      mr: "या प्राचीन गणपती मंदिराचा इतिहास छत्रपती शिवाजी महाराज आणि जिजाऊ माता यांच्या काळाशी संबंधित आहे. असे मानले जाते की जिजाऊ मातांना शमीच्या झाडाखाली स्वयंभू गणेशमूर्ती आढळली आणि त्यांनी तेथे भव्य मंदिर बांधले. पेशवेकाळात महत्त्वाच्या मोहिमांपूर्वी पेशवे या जागृत देवस्थानाचे आशीर्वाद घेत असत. हे पुण्यातील प्रसिद्ध ५६ विनायकांपैकी ५५ वे विनायक मानले जाते.",
      hi: "इस प्राचीन गणपती मंदिर का इतिहास छत्रपती शिवाजी महाराज और जिजाऊ माता के काल से जुड़ा है। ऐसा माना जाता है कि जिजाऊ माता को शमी के पेड़ के नीचे स्वयंभू गणेशमूर्ति मिली और उन्होंने वहां भव्य मंदिर बनवाया। पेशवा काल में महत्त्वपूर्ण अभियानों से पहले पेशवा इस जागृत देवस्थान का आशीर्वाद लेते थे। यह पुणे के प्रसिद्ध 56 विनायकों में से 55वां विनायक माना जाता है।"
    }
  },
  {
    id: "phadke-mandir",
    image: "images/mandals/phadke-mandir.jpg",
    name: { en: "Phadke Mandir", mr: "फडके मंदिर", hi: "फडके मंदिर" },
    area: "Dattawadi, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "",
    query: "115/B133/3, Sinhgad Road, Jaydeo Nagar, Dattawadi, Pune, Maharashtra 411030",
    history: {
      en: "Built by Haripant Phadke, a general in the Peshwa army, later associated with revolutionary Vasudev Balwant Phadke, who used it for activities of his Ramoshi revolutionary group. The stone temple has an old pipal tree and a unique 3-foot Ganesh idol covered with shendur, holding parashu and ankush, worshipped as Vighnaharta Ganesh.",
      mr: "पेशवा सैन्यातील सेनापती हरिपंत फडके यांनी हे ऐतिहासिक मंदिर बांधले. पुढे क्रांतिकारक वासुदेव बळवंत फडके यांनी त्यांच्या रामोशी क्रांतिकारी चळवळीच्या कार्यासाठी या ठिकाणाचा उपयोग केला. दगडी बांधकाम असलेल्या या मंदिरात जुने पिंपळाचे झाड आणि सुमारे ३ फूट उंचीची शेंदूर लेपित गणेशमूर्ती आहे. मूर्तीच्या वरच्या हातात परशु व अंकुश असून हे देवस्थान विघ्नहर्ता गणेश म्हणूनही ओळखले जाते.",
      hi: "पेशवा सेना के सेनापति हरिपंत फडके ने यह ऐतिहासिक मंदिर बनवाया। बाद में क्रांतिकारी वासुदेव बळवंत फडके ने अपने रामोशी क्रांतिकारी आंदोलन के कार्य के लिए इस स्थान का उपयोग किया। पत्थर के निर्माण वाले इस मंदिर में पुराना पीपल का पेड़ और लगभग 3 फुट ऊंची सिंदूर लेपित गणेशमूर्ति है। मूर्ति के ऊपरी हाथों में परशु व अंकुश हैं, और यह देवस्थान विघ्नहर्ता गणेश के नाम से भी जाना जाता है।"
    }
  },
  {
    id: "mati-ganpati",
    image: "images/mandals/mati-ganpati.jpg",
    name: { en: "Mati Ganpati", mr: "माती गणपती", hi: "मिट्टी गणपती" },
    area: "Narayan Peth, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "1770s",
    query: "107, Narayan Peth, NC Kelkar Road, Narayan Peth, Pune, Maharashtra 411030",
    history: {
      en: "Built in the 1770s, famous for its large mud and clay Ganesh idol, considered the biggest of its kind in Pune. The idol was made using clay from the banks of the Ambil River and was shaped by children before being installed in a brass frame.",
      mr: "१७७० च्या दशकात बांधलेले नारायण पेठेतील माती गणपती मंदिर पुण्यातील सर्वात मोठ्या मातीच्या गणेशमूर्तीसाठी प्रसिद्ध आहे. अंबिल नदीच्या काठावरून मिळणाऱ्या मातीपासून ही मूर्ती तयार करण्यात आली असून लहान मुलांनी ती साकारून पितळी चौकटीत प्रतिष्ठापित केली.",
      hi: "1770 के दशक में बना नारायण पेठ का माती गणपती मंदिर पुणे की सबसे बड़ी मिट्टी की गणेशमूर्ति के लिए प्रसिद्ध है। अंबिल नदी के किनारे से मिलने वाली मिट्टी से यह मूर्ति बनाई गई थी, जिसे बच्चों ने बनाकर पीतल के फ्रेम में प्रतिष्ठापित किया।"
    }
  },
  {
    id: "wadacha-ganpati",
    name: { en: "Wadacha Ganpati (Phule Ganpati)", mr: "वडाचा गणपती (फुले गणपती)", hi: "वड़ाचा गणपती (फूल गणपती)" },
    area: "Dattawadi, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "Peshwa era",
    query: "Sinhagad Road, Ganesh Mala, Dattawadi, Pune, Maharashtra 411030",
    history: {
      en: "A Peshwa-era deity named after a floral dress gift (Phule Ganpati) and an old Vada tree (Vadacha Ganpati). The 3-4.5 foot seated idol has four arms, weapons, a left-turned trunk, and expressive eyes.",
      mr: "वडाचा गणपती (फुले गणपती) हा पेशव्यांच्या काळातील एक ऐतिहासिक मूर्ती आहे. एका व्यक्तीने पेशव्यांना फुलांचा पोशाख भेट दिल्याने मिळालेल्या जमिनीवरून याला 'फुले गणपती' आणि समोरील वडाच्या झाडावरून 'वडाचा गणपती' म्हणतात. ३ ते ४.५ फूट उंचीच्या या बसलेल्या मूर्तीला चार हात, डावीकडे वळलेली सोंड आणि देखणे डोळे आहेत.",
      hi: "वड़ाचा गणपती (फूल गणपती) पेशवा काल की एक ऐतिहासिक मूर्ति है। एक व्यक्ति द्वारा पेशवाओं को फूलों की पोशाक भेंट करने पर मिली भूमि के कारण इसे 'फूल गणपती' और सामने के बरगद के पेड़ के कारण 'वड़ाचा गणपती' कहा जाता है। 3 से 4.5 फुट ऊंची इस बैठी मूर्ति के चार हाथ, बाईं ओर मुड़ी सूंड और सुंदर आंखें हैं।"
    }
  },
  {
    id: "shri-modi-ganpati-mandir",
    image: "images/mandals/shri-modi-ganpati-mandir.jpg",
    name: { en: "Shri Modi Ganpati Mandir", mr: "श्री मोदी गणपती मंदिर", hi: "श्री मोदी गणपती मंदिर" },
    area: "Narayan Peth, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "19th century",
    query: "Modi Ganpati Chowk, 527, Narayan Peth, Pune, Maharashtra 411030",
    history: {
      en: "A 19th-century two-storeyed hall built by Bhat Shastri in Narayan Peth, Pune. Named after Khushru Modi, whose adjacent garden yielded a swayambhu idol; also known as Bomblya Ganpati due to nearby fishmongers or the Marathi term for speaking loudly.",
      mr: "श्री मोदी गणपती मंदिर हे १९ व्या शतकाच्या सुरुवातीला पुण्याच्या नारायण पेठेत भट शास्त्री यांनी बांधलेले दोन मजली सभागृह आहे. पेशव्यांचे भाषांतरकार खुशरू मोदी यांच्या बागेजवळ स्वयंभू मूर्ती सापडल्यामुळे याला 'मोदी गणपती' म्हणतात. तसेच, जवळ मासळी विकणाऱ्या कोळ्यांमुळे किंवा मोठ्याने बोलणाऱ्या व्यक्तीसाठी वापरल्या जाणाऱ्या 'बोमबळ्या' या शब्दावरून याला 'बोमबळ्या गणपती' असेही म्हणतात.",
      hi: "श्री मोदी गणपती मंदिर 19वीं सदी की शुरुआत में पुणे के नारायण पेठ में भट शास्त्री द्वारा बनवाया गया दो मंजिला सभागृह है। पेशवाओं के अनुवादक खुशरू मोदी के बगीचे के पास स्वयंभू मूर्ति मिलने के कारण इसे 'मोदी गणपती' कहा जाता है। साथ ही, पास में मछली बेचने वाले मछुआरों के कारण या जोर से बोलने वाले व्यक्ति के लिए इस्तेमाल होने वाले 'बोमबळ्या' शब्द से इसे 'बोमबळ्या गणपती' भी कहा जाता है।"
    }
  },
  {
    id: "umbraya-ganpati-mandir",
    image: "images/mandals/umbraya-ganpati-mandir.jpg",
    name: { en: "Umbraya Ganpati Mandir", mr: "उंबऱ्या गणपती मंदिर", hi: "उंबऱ्या गणपती मंदिर" },
    area: "Dhayari, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "100 years old (as recorded)",
    query: "Umbrya Ganpati Chowk, Sitaee Nagar, Dhayari, Khadewadi, Pune, Maharashtra 411041",
    history: {
      en: "Named after an old Umbar tree on Lakshmi Street, a 100-year-old small, quadrangular Ganesha idol. Shifted during road widening, now housed near Limaye's palace inside a building next to Peter England near the Maharaj Smriti plaque.",
      mr: "उंबऱ्या गणपती मंदिर (लक्ष्मी रस्त्यावरील जुन्या उंबराच्या झाडावरून नाव पडलेले) ही शंभर वर्षे जुनी, लहान आणि चौरस आकाराची गणेशाची मूर्ती आहे. रस्ते रुंदीकरणात स्थलांतरित झालेली ही मूर्ती सध्या 'महाराज स्मृती' पाटीजवळ, पीटर इंग्लंडच्या आतील बाजूस, लिमये वाड्याजवळ एका इमारतीत आहे.",
      hi: "उंबऱ्या गणपती मंदिर (लक्ष्मी रोड के पुराने गूलर के पेड़ के नाम पर रखा गया नाम) सौ वर्ष पुरानी, छोटी और चौकोर आकार की गणेश की मूर्ति है। सड़क चौड़ीकरण में स्थानांतरित हुई यह मूर्ति वर्तमान में 'महाराज स्मृती' पट्टिका के पास, पीटर इंग्लैंड के अंदर की ओर, लिमये वाड़ा के पास एक इमारत में है।"
    }
  },
  {
    id: "madrasi-ganpati",
    image: "images/mandals/madrasi-ganpati.jpg",
    name: { en: "Madrasi Ganpati", mr: "मद्रासी गणपती", hi: "मद्रासी गणपती" },
    area: "Rasta Peth, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "",
    query: "14, Porwal Metallica, Rasta Peth, Pune, Maharashtra 411011",
    history: {
      en: "Located near Apollo Theater in Pune, originated when the Diwan of Peshwa Sardar Vashdi had a divine vision of a Ganesha idol beneath a tree and subsequently discovered it there. Named \"Madrasi\" because its construction and architecture feature a distinct southern style.",
      mr: "पुण्यातील अपोलो थिएटरजवळ असलेला 'मद्रासी गणपती' हा पेशव्यांचे सरदार वशदी यांच्या दिवाणांना एका झाडाखाली गणेशाची मूर्ती असल्याचा दैवी दृष्टांत झाल्यानंतर तिथे सापडलेल्या मूर्तीवरून प्रसिद्ध आहे. या मंदिराची रचना आणि वास्तुकला दाक्षिणात्य शैलीतील असल्यामुळे याला 'मद्रासी गणपती' असे नाव पडले असावे.",
      hi: "पुणे के अपोलो थिएटर के पास स्थित 'मद्रासी गणपती' पेशवाओं के सरदार वशदी के दीवान को एक पेड़ के नीचे गणेश की मूर्ति होने का दैवी दृष्टांत होने के बाद वहां मिली मूर्ति के कारण प्रसिद्ध है। इस मंदिर की रचना और वास्तुकला दक्षिण भारतीय शैली की होने के कारण इसे 'मद्रासी गणपती' नाम पड़ा होगा।"
    }
  },
  {
    id: "puja-park-ganpati-mandir",
    image: "images/mandals/puja-park-ganpati-mandir.jpg",
    name: { en: "Puja Park Ganpati Mandir", mr: "पूजा पार्क गणपती मंदिर", hi: "पूजा पार्क गणपती मंदिर" },
    area: "Kothrud, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Grand Decoration"],
    established: "1998",
    query: "Pooja Park Complex, Paud Rd, Kothrud, Pune, Maharashtra 411038",
    history: {
      en: "In Left Bhusari Colony, Kothrud, a 1998 whitewashed temple founded by Dr. Hemant Moreshwar Thombare. Features a quadrilateral Panchdhatu Ganesha idol with a left trunk, built-in crown, flanked by Riddhi-Siddhi and Shubh-Labh. The complex also houses eight marble deities, an adjacent Yagyashala (24 yagnas yearly), and an Acharya Niwas with global Ganesha pictures.",
      mr: "पुण्यातील कोथरूड बस डेपो जवळ, पौड रोडवरील लेफ्ट भुसारी कॉलनीतील 'पूजा पार्क' संकुलातील हे पांढऱ्या रंगाचे गणपती मंदिर १९९८ मध्ये डॉ. हेमंत मोरेश्वर ठोबरे यांनी स्थापन केले. पंचधातूची चतुर्भूज मूर्ती (डावी सोंड, मुकुट) आणि ऋद्धी-सिद्धी व शुभ-लाभ परिवार असलेल्या या मंदिरात आठ संगमरवरी देवता, वर्षातून २४ यज्ञ होणारी यज्ञशाळा आणि जगभरातील गणपतींची चित्रे असलेले आचार्य निवास आहे.",
      hi: "पुणे के कोथरूड बस डिपो के पास, पौड रोड पर लेफ्ट भुसारी कॉलोनी के 'पूजा पार्क' परिसर का यह सफेद रंग का गणपती मंदिर 1998 में डॉ. हेमंत मोरेश्वर ठोबरे ने स्थापित किया। पंचधातु की चतुर्भुज मूर्ति (बाईं सूंड, मुकुट) और ऋद्धी-सिद्धी व शुभ-लाभ परिवार वाले इस मंदिर में आठ संगमरमर की देवियां, वर्ष में 24 यज्ञ होने वाली यज्ञशाला और दुनियाभर के गणपतियों के चित्रों वाला आचार्य निवास है।"
    }
  },
  {
    id: "pawaskar-ganesh-mandir",
    image: "images/mandals/pawaskar-ganesh-mandir.jpg",
    name: { en: "Pawaskar Ganesh Mandir", mr: "पावस्कर गणेश मंदिर", hi: "पावस्कर गणेश मंदिर" },
    area: "Shaniwar Peth, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "Idol installed 1982",
    query: "550, NC Kelkar Road, Shaniwar Peth, Pune, Maharashtra 411030",
    history: {
      en: "Inside the 'Ameya' society on NC Kelkar Road, Shaniwar Peth, managed by the Pavaskar family, who received the land from the Peshwas as a reward for Vedamurthy Mahadev Joshi Pavaskar's accurate prediction about Gangabai giving birth to Sawai Madhavrao. The stone idol, coated in shendur, was moved into the building in 1982.",
      mr: "पुण्याच्या शनिवार पेठेतील एन. सी. केळकर रस्त्यावरील 'अमेया' सोसायटीमध्ये असलेले पावस्कर गणेश मंदिर हे पेशवेकाळात गंगाबाईंना पुत्र होईल अशी अचूक भविष्यवाणी वर्तवल्याबद्दल मिळालेल्या जमिनीत पावस्कर कुटुंबाद्वारे चालवले जाते. शेंदूर लेपलेली ही मोठी आणि चतुर्भूज दगडी मूर्ती १९८२ मध्ये इमारतीत स्थापन करण्यात आली.",
      hi: "पुणे के शनिवार पेठ की एन. सी. केळकर रोड पर 'अमेया' सोसायटी में स्थित पावस्कर गणेश मंदिर पेशवा काल में गंगाबाई को पुत्र होगा, यह सटीक भविष्यवाणी करने पर मिली भूमि पर पावस्कर परिवार द्वारा संचालित है। सिंदूर लेपित यह बड़ी और चतुर्भुज पत्थर की मूर्ति 1982 में इमारत में स्थापित की गई।"
    }
  },
  {
    id: "bedekar-ganpati-mandir",
    image: "images/mandals/bedekar-ganpati-mandir.jpg",
    name: { en: "Bedekar Ganpati Mandir", mr: "बेडेकर गणपती मंदिर", hi: "बेडेकर गणपती मंदिर" },
    area: "Kothrud, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "1969",
    query: "Omkar 43/2, Paud Rd, Rambaug Colony, Kothrud, Pune, Maharashtra 411038",
    history: {
      en: "In Rambaug Colony, Kothrud, built in 1969 by Mr. Jyeshtharaj Bedekar to fulfill his father's wishes. The left-trunk, quadrilateral, shendur-anointed idol was originally in Ganesha Peth before being established in the current building in 1990; the private temple is open to devotees morning and evening alongside other deities.",
      mr: "पुण्याच्या कोथरूडमधील रामबाग कॉलनीत असलेले बेडेकर गणपती मंदिर श्री. ज्येष्ठराज बेडेकर यांनी १९६९ मध्ये आपल्या वडिलांच्या इच्छेनुसार बांधले. डावी सोंड, चतुर्भूज आणि शेंदूरचर्चित असलेली ही मूर्ती मूळची गणेश पेठेतील असून, १९९० मध्ये ती या इमारतीत स्थापन करण्यात आली; इतर देवतांचा समावेश असलेल्या या खासगी मंदिराचे दर्शन सकाळी व संध्याकाळी खुले असते.",
      hi: "पुणे के कोथरूड की रामबाग कॉलोनी में स्थित बेडेकर गणपती मंदिर श्री. ज्येष्ठराज बेडेकर ने 1969 में अपने पिता की इच्छा के अनुसार बनवाया। बाईं सूंड, चतुर्भुज और सिंदूर लेपित यह मूर्ति मूल रूप से गणेश पेठ की थी, और 1990 में इसे इस इमारत में स्थापित किया गया; अन्य देवताओं वाले इस निजी मंदिर के दर्शन सुबह व शाम खुले रहते हैं।"
    }
  },
  {
    id: "junya-jaicha-ganpati",
    image: "images/mandals/junya-jaicha-ganpati.jpg",
    name: { en: "Junya Jaicha Ganpati", mr: "जुना जाईचा गणपती", hi: "जुना जाईचा गणपती" },
    area: "Shukrawar Peth, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "",
    query: "Near Raja Kelkar Museum, Shukrawar Peth, Pune, Maharashtra",
    history: {
      en: "Near the Raja Kelkar Museum in Shukrawar Peth, Pune, has an unclear historical background, though it is believed to potentially be affiliated with one of the Ganpati temples listed in the Peshwa records. The shrine is housed within a ground-floor building.",
      mr: "पुण्याच्या शुक्रवार पेठेतील राजा केळकर संग्रहालयाजवळ असलेला 'जुना जाईचा गणपती' या मंदिराचा नेमका इतिहास अज्ञात आहे, परंतु हे पेशवा यादीत नोंदवलेल्या गणपती मंदिरांपैकी एक असावे असा अंदाज आहे. हे छोटेसे देवालय शुक्रवार पेठेतील एका इमारतीच्या तळमजल्यावर स्थित आहे.",
      hi: "पुणे के शुक्रवार पेठ में राजा केळकर संग्रहालय के पास स्थित 'जुना जाईचा गणपती' मंदिर का सटीक इतिहास अज्ञात है, लेकिन अनुमान है कि यह पेशवा सूची में दर्ज गणपती मंदिरों में से एक होगा। यह छोटा सा देवालय शुक्रवार पेठ की एक इमारत के भूतल पर स्थित है।"
    }
  },
  {
    id: "ramana-ganpati-temple",
    image: "images/mandals/ramana-ganpati-temple.jpg",
    name: { en: "Ramana Ganpati Temple", mr: "रमण गणपती मंदिर", hi: "रमण गणपती मंदिर" },
    area: "Parvati, Pune",
    category: "Ancient Temple",
    tags: ["Ancient Temple", "Historic"],
    established: "",
    query: "Laxmi Nagar, Parvati Paytha, Pune, Maharashtra 411009",
    history: {
      en: "At the base of Parvati in Laxmi Nagar, Pune, originally sat on an open platform before being built up by the Dev-Deveshwar Sansthan. The surrounding Ramana area was historically established by the Peshwas as a venue for gatherings where learned scholars were tested on their prowess and awarded dakshina.",
      mr: "पुण्यातील पार्वतीच्या पायथ्याशी लक्ष्मी नगर येथे असलेले 'रमण गणपती मंदिर' मूळ एका उघड्या चबुतऱ्यावर होते, नंतर देव-देवेश्वर संस्थेने येथे मंदिराची उभारणी केली. पेशव्यांच्या काळात विद्वानांच्या परीक्षा घेऊन त्यांना दक्षिणा देण्यासाठी नेमलेल्या 'रमण' या संमेलनाच्या ठिकाणावरून या क्षेत्राला आणि गणपतीला हे नाव मिळाले.",
      hi: "पुणे में पार्वती की तलहटी में लक्ष्मी नगर स्थित 'रमण गणपती मंदिर' मूल रूप से एक खुले चबूतरे पर था, बाद में देव-देवेश्वर संस्था ने यहां मंदिर का निर्माण किया। पेशवा काल में विद्वानों की परीक्षा लेकर उन्हें दक्षिणा देने के लिए नियत 'रमण' नामक सम्मेलन स्थल के कारण इस क्षेत्र और गणपती को यह नाम मिला।"
    }
  }
];
