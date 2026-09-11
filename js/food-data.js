/*
 * Well-known Pune food spots for the Pune Ganeshotsav festival zones.
 * `query` is used to build the Google Maps directions link/embed — it's a
 * text address rather than hardcoded coordinates, so Maps geocodes the
 * real, current location instead of relying on a possibly-stale lat/lng.
 * Double-check names, hours, and prices before you go live — verify against
 * the outlet directly, as these can change.
 */
window.FOOD_SPOTS = [
  {
    id: "sugaran-kesariwada",
    name: { en: "Sugaran Dining Hall", mr: "सुगरण डायनिंग हॉल", hi: "सुगरण डाइनिंग हॉल" },
    area: "near Kesari Wada, Narayan Peth, Pune",
    specialty: { en: "Unlimited Maharashtrian Thali", mr: "अमर्यादित महाराष्ट्रीयन थाळी", hi: "असीमित महाराष्ट्रीयन थाली" },
    tags: ["Thali"],
    hours: "Until 10:30 PM",
    price: "₹220 (unlimited thali)",
    rating: "4.6",
    query: "Sugaran Dining Hall, near Kesari Wada, Narayan Peth, Pune"
  },
  {
    id: "sujata-mastani",
    name: { en: "Sujata Mastani", mr: "सुजाता मस्तानी", hi: "सुजाता मस्तानी" },
    area: "Kasba Peth Chowk, near Kasba Ganpati Temple",
    specialty: { en: "Iconic Pune Mango, Dryfruit Mastani & Ice Creams", mr: "पुण्याचा प्रतिष्ठित आंबा, ड्रायफ्रूट मस्तानी आणि आइस्क्रीम", hi: "पुणे का प्रतिष्ठित आम, ड्राईफ्रूट मस्तानी और आइसक्रीम" },
    tags: ["Mastani", "Dessert"],
    hours: "10:00 AM – 1:00 AM",
    price: "₹70 – ₹180",
    rating: "4.8",
    query: "Sujata Mastani, Kasba Peth, Pune"
  },
  {
    id: "bedekar-misal",
    name: { en: "Bedekar Misal", mr: "बेडेकर मिसळ", hi: "बेडेकर मिसळ" },
    area: "Munjabacha Boll, Budhwar Peth",
    specialty: { en: "Authentic Puneri Spicy Misal Pav, Solkadhi & Spiced Tea", mr: "अस्सल पुणेरी तिखट मिसळ पाव, सोलकढी आणि मसाला चहा", hi: "असली पुणेरी तीखी मिसळ पाव, सोलकढी और मसाला चाय" },
    tags: ["Misal", "Puneri"],
    hours: "7:00 AM – 10:00 PM",
    price: "₹80 – ₹150",
    rating: "4.7",
    query: "Bedekar Misal, Budhwar Peth, Pune"
  },
  {
    id: "kalyan-bhel",
    name: { en: "Kalyan Bhel & Chat Center", mr: "कल्याण भेळ अँड चाट सेंटर", hi: "कल्याण भेल एंड चाट सेंटर" },
    area: "Budhwar Peth, near Jogeshwari Lane Corner",
    specialty: { en: "Puneri Bhel, Sev Puri, Ragda Pattice & Chilled Nimbu Pani", mr: "पुणेरी भेळ, सेव पुरी, रगडा पॅटीस आणि थंड निंबू पाणी", hi: "पुणेरी भेल, सेव पुरी, रगड़ा पैटीस और ठंडा नींबू पानी" },
    tags: ["Chaat", "Street Food"],
    hours: "11:00 AM – 11:30 PM",
    price: "₹40 – ₹110",
    rating: "4.6",
    query: "Kalyan Bhel, Budhwar Peth, Pune"
  },
  /*
   * Below: batch added from a user-supplied name list, then researched via
   * web search (Justdial/Zomato/Google listings) to replace the original
   * REPLACE_WITH_* placeholders with real data. Still verify before going
   * live — a few categories of caveat survived research and are called out
   * per-entry below:
   *   - "confirm outlet"/"confirm branch" in `area`: this business is a
   *     small chain with multiple Pune locations and no branch was
   *     specified in the source list — the nearest-to-Kasba-Peth branch's
   *     data was used, but it may not be the intended one.
   *   - Badshahi / New Refreshment House: research found evidence these two
   *     may now be run as one combined operation at the same Tilak Road
   *     address — worth a phone call before publishing both separately.
   *   - Girija, Gandharv, Karachi Cold Drinks, Bhide Pul Chowpatty: no
   *     confident single match found (generic/common name, or — for Karachi
   *     Cold Drinks — no matching business at all). Left as REPLACE_WITH_*
   *     placeholders rather than guessing; get the exact address from
   *     whoever supplied the original name list.
   * ("bedekar missal" and "Sujata mastani" from the source list were
   * skipped — already present above as bedekar-misal / sujata-mastani.)
   */
  {
    id: "prabha",
    name: { en: "Prabha Vishranti Gruha", mr: "प्रभा विश्रांती गृह", hi: "प्रभा विश्रांती गृह" },
    area: "N.C. Kelkar Road, Narayan Peth, Pune (opposite Kesari Wada)",
    specialty: { en: "Misal & Batata Vada (since 1940)", mr: "मिसळ आणि बटाटा वडा (१९४० पासून)", hi: "मिसळ और बटाटा वड़ा (1940 से)" },
    tags: ["Misal", "Snacks"],
    hours: "8:30 AM – 12:30 PM & 4:15 PM – 8:30 PM",
    price: "₹100 for two",
    rating: "4.0",
    query: "Prabha Vishranti Gruha, N.C. Kelkar Road, Narayan Peth, Pune"
  },
  {
    id: "solapur-khanaval",
    name: { en: "Solapur Khanawal", mr: "सोलापूर खानावळ", hi: "सोलापूर खानावळ" },
    area: "Laxmi Road, Pantancha Gate, Sadashiv Peth, Pune (near Kulkarni Petrol Pump)",
    specialty: { en: "Solapuri Mutton Specialties (Sheekh Kadhai, Bhakri, Solkadhi)", mr: "सोलापुरी मटण स्पेशालिटी (शीख कढई, भाकरी, सोलकढी)", hi: "सोलापुरी मटन स्पेशल (शीख कढ़ाई, भाकरी, सोलकढ़ी)" },
    tags: ["Khanaval", "Non-Veg"],
    hours: "11:30 AM – 3:45 PM & 7:30 PM – 11:30 PM",
    price: "₹350 per order",
    rating: "4.3",
    query: "Solapur Khanawal, Laxmi Road, Sadashiv Peth, Pune"
  },
  {
    id: "sainath-khanaval",
    name: { en: "Sainath Khanaval", mr: "सायनाथ खानावळ", hi: "सायनाथ खानावळ" },
    area: "Sadashiv Peth, Pune",
    specialty: { en: "Home-style Maharashtrian Thali (Khanaval)", mr: "घरगुती पद्धतीची महाराष्ट्रीयन थाळी (खानावळ)", hi: "घरेलू शैली की महाराष्ट्रीयन थाली (खानावळ)" },
    tags: ["Khanaval", "Thali"],
    hours: "Until 11:30 PM",
    price: "₹400 for two",
    rating: "4.3",
    query: "Sainath Khanaval, Sadashiv Peth, Pune"
  },
  {
    id: "shree-misal",
    name: { en: "Shree Misal", mr: "श्री मिसळ", hi: "श्री मिसळ" },
    area: "Barister Gadgil Road, Sadashiv Peth, Pune (Tulshibaug lane, near Shanipar)",
    specialty: { en: "Misal Pav (mataki-based, served with sliced bread)", mr: "मिसळ पाव (मटकीवर आधारित, स्लाईस ब्रेडसह)", hi: "मिसळ पाव (मटकी आधारित, स्लाइस ब्रेड के साथ)" },
    tags: ["Misal"],
    hours: "From 7:30 AM",
    price: "₹150 – ₹250 for two",
    rating: "4.0",
    query: "Shree Misal, Barister Gadgil Road, Sadashiv Peth, Pune"
  },
  {
    id: "shri-krishna-misal",
    name: { en: "Shri Krishna Bhuvan", mr: "श्री कृष्ण भुवन", hi: "श्री कृष्ण भुवन" },
    area: "Tulsi Baug, Laxmi Road, Budhwar Peth, Pune",
    specialty: { en: "Misal Pav (since 1941)", mr: "मिसळ पाव (१९४१ पासून)", hi: "मिसळ पाव (1941 से)" },
    tags: ["Misal"],
    hours: "7:30 AM – 4:30 PM",
    price: "₹140 – ₹160 for two",
    rating: "4.0",
    query: "Shri Krishna Bhuvan, Tulsi Baug, Laxmi Road, Budhwar Peth, Pune"
  },
  {
    id: "vaidya-misal",
    name: { en: "Vaidya Upahar Gruha", mr: "वैद्य उपहार गृह", hi: "वैद्य उपहार गृह" },
    area: "Bagade Road, Budhwar Peth, Pune",
    specialty: { en: "Misal Pav (\"green tarri\" style, since 1901)", mr: "मिसळ पाव (\"ग्रीन तर्री\" शैली, १९०१ पासून)", hi: "मिसळ पाव (\"ग्रीन तर्री\" शैली, 1901 से)" },
    tags: ["Misal"],
    hours: "7:30 AM – 11:30 AM & 3:00 PM – 7:00 PM (Closed Saturdays)",
    price: "₹350 for two",
    rating: "4.1",
    query: "Vaidya Upahar Gruha, Bagade Road, Budhwar Peth, Pune"
  },
  {
    id: "badshahi",
    name: { en: "Badshahi Boarding House", mr: "बादशाही बोर्डिंग हाऊस", hi: "बादशाही बोर्डिंग हाउस" },
    area: "Tilak Road, Sadashiv Peth, Pune",
    specialty: { en: "Unlimited Maharashtrian Thali (community dining hall style)", mr: "अमर्यादित महाराष्ट्रीयन थाळी (सामुदायिक भोजनगृह शैली)", hi: "असीमित महाराष्ट्रीयन थाली (सामुदायिक भोजनगृह शैली)" },
    tags: ["Thali", "Boarding"],
    hours: "11:45 AM – 3:00 PM & 8:00 PM – 10:00 PM",
    price: "Thali from ₹100",
    rating: "4.2",
    query: "Badshahi Boarding House, Tilak Road, Sadashiv Peth, Pune"
  },
  {
    id: "sp-biryani",
    name: { en: "SP's Biryani House", mr: "एसपी'ज बिर्याणी हाऊस", hi: "एसपी'ज़ बिरयानी हाउस" },
    area: "Opposite S.P. College, Tilak Road, Sadashiv Peth, Pune",
    specialty: { en: "Biryani (since 1994)", mr: "बिर्याणी (१९९४ पासून)", hi: "बिरयानी (1994 से)" },
    tags: ["Biryani"],
    hours: "11:00 AM – 3:00 PM & 7:00 PM – 11:00 PM",
    price: "₹950 for two",
    rating: "4.2",
    query: "SP's Biryani House, Tilak Road, Sadashiv Peth, Pune"
  },
  {
    id: "poona-boarding-house",
    name: { en: "New Poona Boarding House", mr: "न्यू पूना बोर्डिंग हाऊस", hi: "न्यू पूना बोर्डिंग हाउस" },
    area: "Police Chowky, opposite Peru Gate, Sadashiv Peth, Pune",
    specialty: { en: "Traditional Unlimited Maharashtrian Thali (since 1924)", mr: "पारंपरिक अमर्यादित महाराष्ट्रीयन थाळी (१९२४ पासून)", hi: "पारंपरिक असीमित महाराष्ट्रीयन थाली (1924 से)" },
    tags: ["Thali", "Boarding"],
    hours: "11:30 AM – 3:00 PM & 7:30 PM – 10:00 PM (Closed Fridays)",
    price: "₹160 – ₹200",
    rating: "4.4",
    query: "New Poona Boarding House, opposite Peru Gate, Sadashiv Peth, Pune"
  },
  {
    id: "poona-guest-house",
    name: { en: "Poona Guest House", mr: "पूना गेस्ट हाऊस", hi: "पूना गेस्ट हाउस" },
    area: "Laxmi Road, Ganapati Chowk, Budhwar Peth, Pune",
    specialty: { en: "Traditional Maharashtrian Thali (Boarding, since 1935)", mr: "पारंपरिक महाराष्ट्रीयन थाळी (बोर्डिंग, १९३५ पासून)", hi: "पारंपरिक महाराष्ट्रीयन थाली (बोर्डिंग, 1935 से)" },
    tags: ["Thali", "Boarding"],
    hours: "11:00 AM – 3:30 PM & 7:00 PM – 9:30 PM (closed Mondays)",
    price: "₹300 – ₹340",
    rating: "4.2",
    query: "Poona Guest House, Laxmi Road, Ganapati Chowk, Budhwar Peth, Pune"
  },
  {
    id: "girija",
    name: { en: "Girija", mr: "गिरिजा", hi: "गिरिजा" },
    area: "Sadashiv Peth, Pune",
    specialty: { en: "Pav Bhaji", mr: "पावभाजी", hi: "पावभाजी" },
    tags: ["Pav Bhaji"],
    hours: "12:00 PM – 12:00 AM",
    price: "₹200 – ₹400",
    rating: "3.7",
    query: "Girija, Sadashiv Peth, Pune"
  },
  {
    id: "ganraj",
    name: { en: "Ganaraj Pure Veg", mr: "गणराज प्युअर व्हेज", hi: "गणराज प्योर वेज" },
    area: "Bajirao Road, Shukrawar Peth, Pune (near Maharana Pratap Udyan)",
    specialty: { en: "Multi-cuisine Vegetarian Restaurant", mr: "मल्टी-कुझिन शाकाहारी रेस्टॉरंट", hi: "मल्टी-क्युज़ीन शाकाहारी रेस्टोरेंट" },
    tags: ["Restaurant", "Vegetarian"],
    hours: "9:00 AM – 11:00 PM",
    price: "₹750 for two",
    rating: "4.2",
    query: "Ganaraj Pure Veg, Bajirao Road, Shukrawar Peth, Pune"
  },
  {
    id: "karachi-cold-drinks",
    name: { en: "Karachi Cold Drinks", mr: "कराची कोल्ड ड्रिंक्स", hi: "कराची कोल्ड ड्रिंक्स" },
    area: "Budhwar Peth, Pune",
    specialty: { en: "Cold Drinks & Sherbets", mr: "कोल्ड ड्रिंक्स आणि सरबत", hi: "कोल्ड ड्रिंक्स और शरबत" },
    tags: ["Cold Drinks"],
    hours: "9:00 AM – 9:00 PM",
    price: "₹200 for two",
    rating: "4.0",
    query: "Karachi Cold Drinks, Budhwar Peth, Pune"
  },
  {
    id: "kawre-ice-cream",
    name: { en: "Kawre Ice Cream", mr: "कावरे आइस्क्रीम", hi: "कावरे आइसक्रीम" },
    area: "Ganpati Chowk, Laxmi Road, Budhwar Peth, Pune",
    specialty: { en: "Ice Cream & Mastani (since 1952)", mr: "आइस्क्रीम आणि मस्तानी (१९५२ पासून)", hi: "आइसक्रीम और मस्तानी (1952 से)" },
    tags: ["Ice Cream", "Dessert"],
    hours: "10:00 AM – 10:00 PM",
    price: "₹200 for two",
    rating: "3.8",
    query: "Kawre Ice Cream, Ganpati Chowk, Laxmi Road, Budhwar Peth, Pune"
  },
  {
    id: "jayshree-pavbhaji",
    name: { en: "Jayashree Pav Bhaji and Juice", mr: "जयश्री पावभाजी आणि ज्यूस", hi: "जयश्री पावभाजी और जूस" },
    area: "Rasta Peth, Pune",
    specialty: { en: "Pav Bhaji & Juice", mr: "पावभाजी आणि ज्यूस", hi: "पावभाजी और जूस" },
    tags: ["Pav Bhaji"],
    hours: "11:00 AM – 10:00 PM",
    price: "₹200 per person",
    rating: "3.9",
    query: "Jayashree Pav Bhaji and Juice, Rasta Peth, Pune"
  },
  {
    id: "vruddheshwar-chowpatty",
    name: { en: "Vrudheshwar Pure Veg", mr: "वृद्धेश्वर प्युअर व्हेज", hi: "वृद्धेश्वर प्योर वेज" },
    area: "Vrudheshwar Ghat, opposite Congress Bhavan, Shivaji Nagar, Pune",
    specialty: { en: "Riverside Multi-cuisine Street Food (chowpatty-style)", mr: "नदीकाठची मल्टी-कुझिन स्ट्रीट फूड (चौपाटी शैली)", hi: "नदी किनारे मल्टी-क्युज़ीन स्ट्रीट फूड (चौपाटी शैली)" },
    tags: ["Street Food", "Chaat"],
    hours: "10:00 AM – 12:00 AM",
    price: "₹200 – ₹400 per person",
    rating: "4.3",
    query: "Vrudheshwar Pure Veg, Vrudheshwar Ghat, Shivaji Nagar, Pune"
  },
  {
    id: "ramnath-misal",
    name: { en: "Hotel Ramnath", mr: "हॉटेल रामनाथ", hi: "होटल रामनाथ" },
    area: "Tilak Road, near Durvankur Dining Hall, Sadashiv Peth, Pune",
    specialty: { en: "Misal Pav", mr: "मिसळ पाव", hi: "मिसळ पाव" },
    tags: ["Misal"],
    hours: "11:30 AM – 11:00 PM",
    price: "₹300 for two",
    rating: "3.8",
    query: "Hotel Ramnath, Tilak Road, Sadashiv Peth, Pune"
  },
  {
    id: "new-poona-bakery",
    name: { en: "New Poona Bakery", mr: "न्यू पूना बेकरी", hi: "न्यू पूना बेकरी" },
    area: "Appa Balwant Chowk Road, Budhwar Peth, Pune",
    specialty: { en: "Heritage Bakery (since 1967)", mr: "पारंपरिक बेकरी (१९६७ पासून)", hi: "पारंपरिक बेकरी (1967 से)" },
    tags: ["Bakery"],
    hours: "Open until 10:00 PM",
    price: "₹150 for two",
    rating: "4.1",
    query: "New Poona Bakery, Appa Balwant Chowk Road, Budhwar Peth, Pune"
  },
  {
    id: "audumbar-pavbhaji",
    name: { en: "Hotel Audumbar", mr: "हॉटेल औदुंबर", hi: "होटल औदुंबर" },
    area: "Shivaji Road, Shukrawar Peth, Pune (opposite Fadke Police Chowky)",
    specialty: { en: "Punjabi & Multi-cuisine, incl. Pav Bhaji", mr: "पंजाबी आणि मल्टी-कुझिन, पावभाजीसह", hi: "पंजाबी और मल्टी-क्युज़ीन, पावभाजी सहित" },
    tags: ["Pav Bhaji", "Restaurant"],
    hours: "11:30 AM – 11:00 PM",
    price: "₹350 for two",
    rating: "3.7",
    query: "Hotel Audumbar, Shivaji Road, Shukrawar Peth, Pune"
  },
  {
    id: "harshavardhan-cold-drinks",
    name: { en: "Harshvardhan Coldrinks", mr: "हर्षवर्धन कोल्ड्रिंक्स", hi: "हर्षवर्धन कोल्ड्रिंक्स" },
    area: "Munjabacha Bol Road, Narayan Peth, Pune",
    specialty: { en: "Cold Drinks & Sherbets (~60 flavors)", mr: "कोल्ड ड्रिंक्स आणि सरबत (सुमारे ६० फ्लेवर्स)", hi: "कोल्ड ड्रिंक्स और शरबत (लगभग 60 फ्लेवर)" },
    tags: ["Cold Drinks"],
    hours: "10:00 AM – 10:00 PM",
    price: "₹20 – ₹60 / drink",
    rating: "4.3",
    query: "Harshvardhan Coldrinks, Munjabacha Bol Road, Narayan Peth, Pune"
  },
  {
    id: "bhide-pul-chowpatty",
    name: { en: "Bhide Pul Chowpatty", mr: "भिडे पूल चौपाटी", hi: "भिड़े पुल चौपाटी" },
    area: "near Bhide Bridge, Pune",
    specialty: { en: "Street Food & Chaat", mr: "स्ट्रीट फूड आणि चाट", hi: "स्ट्रीट फूड और चाट" },
    tags: ["Street Food", "Chaat"],
    hours: "",
    price: "",
    rating: "",
    query: "Bhide Bridge, Pune"
  },
  {
    id: "hotel-nagpur",
    name: { en: "Hotel Nagpur", mr: "हॉटेल नागपूर", hi: "होटल नागपुर" },
    area: "R.B. Kumthekar Road, near Shanbhui Hotel, Perugate, Sadashiv Peth, Pune",
    specialty: { en: "Saoji-style Nagpur Non-Veg Specialties (~13 seats)", mr: "सावजी पद्धतीचे नागपुरी नॉन-व्हेज पदार्थ (सुमारे १३ जागा)", hi: "सावजी शैली के नागपुरी नॉन-वेज व्यंजन (लगभग 13 सीटें)" },
    tags: ["Restaurant", "Non-Veg"],
    hours: "12:30 PM – 3:30 PM & 7:30 PM – 10:00 PM (Closed Monday)",
    price: "₹600 for two",
    rating: "4.1",
    query: "Hotel Nagpur, R.B. Kumthekar Road, Perugate, Sadashiv Peth, Pune"
  },
  {
    id: "aware-khanaval",
    name: { en: "Aware Maratha Khanawal", mr: "अवारे मराठा खानावळ", hi: "अवारे मराठा खानावळ" },
    area: "Jondhle Chowk, R.B. Kumthekar Road, behind Kulkarni Petrol Pump, Sadashiv Peth, Pune",
    specialty: { en: "Maharashtrian Thali & Non-Veg Khanaval", mr: "महाराष्ट्रीयन थाळी आणि नॉन-व्हेज खानावळ", hi: "महाराष्ट्रीयन थाली और नॉन-वेज खानावळ" },
    tags: ["Khanaval", "Thali", "Non-Veg"],
    hours: "11 AM – 4 PM & 7 – 11 PM (closed Monday)",
    price: "₹350 – ₹500 for two",
    rating: "4.3",
    query: "Aware Maratha Khanawal, R.B. Kumthekar Road, Sadashiv Peth, Pune"
  },
  {
    id: "desai-bandhu",
    name: { en: "Desai Bandhu Ambewale", mr: "देसाई बंधू आंबेवाले", hi: "देसाई बंधू आंबेवाले" },
    area: "Bajirao Road, Shanipar Chowk, Shukrawar Peth, Pune",
    specialty: { en: "GI-certified Mangoes, Aamrakhand, Mango Sweets & Lassi (seasonal specialty shop)", mr: "GI-मानांकित आंबे, आम्रखंड, आंबा मिठाई आणि लस्सी (हंगामी खास दुकान)", hi: "GI-प्रमाणित आम, आम्रखंड, आम की मिठाइयाँ और लस्सी (मौसमी विशेष दुकान)" },
    tags: ["Sweets"],
    hours: "9:00 AM – 9:00 PM",
    price: "₹800 – ₹1,500 / dozen",
    rating: "4.4",
    query: "Desai Bandhu Ambewale, Bajirao Road, Shanipar Chowk, Pune"
  },
  {
    id: "chitale-bandhu",
    name: { en: "Chitale Bandhu Mithaiwale", mr: "चितळे बंधू मिठाईवाले", hi: "चितळे बंधू मिठाईवाले" },
    area: "Bajirao Road, Sadashiv Peth, Pune",
    specialty: { en: "Sweets, Bakarwadi & Namkeen", mr: "मिठाई, बाकरवडी आणि नमकीन", hi: "मिठाइयाँ, बाकरवडी और नमकीन" },
    tags: ["Sweets", "Namkeen"],
    hours: "9:00 AM – 8:00/9:00 PM (possible midday break)",
    price: "Sold by weight",
    rating: "4.3",
    query: "Chitale Bandhu Mithaiwale, Bajirao Road, Sadashiv Peth, Pune"
  },
  {
    id: "wadeshwar-bhuvan",
    name: { en: "Shri Wadeshwar Bhuvan", mr: "श्री वडेश्वर भुवन", hi: "श्री वडेश्वर भुवन" },
    area: "Bajirao Road, Natubaug Chowk, Shukrawar Peth, Pune (opposite Kelkar Museum)",
    specialty: { en: "South Indian Breakfast & Snacks (split morning/evening menus)", mr: "दक्षिण भारतीय नाश्ता आणि स्नॅक्स (सकाळ/संध्याकाळ वेगळे मेनू)", hi: "दक्षिण भारतीय नाश्ता और स्नैक्स (सुबह/शाम अलग मेन्यू)" },
    tags: ["Restaurant"],
    hours: "7:00 AM – 3:00 PM & 4:30 PM – 10:00 PM",
    price: "₹550 for two",
    rating: "4.6",
    query: "Shri Wadeshwar Bhuvan, Bajirao Road, Natubaug Chowk, Shukrawar Peth, Pune"
  },
  {
    id: "durvankur",
    name: { en: "Durvankur Dining Hall", mr: "दुर्वांकुर डायनिंग हॉल", hi: "दुर्वांकुर डाइनिंग हॉल" },
    area: "Tilak Road, Hatti Ganapati Chowk, Sadashiv Peth, Pune",
    specialty: { en: "Pure-Veg Maharashtrian Thali & Banquet Hall", mr: "शुद्ध शाकाहारी महाराष्ट्रीयन थाळी आणि बँक्वेट हॉल", hi: "शुद्ध शाकाहारी महाराष्ट्रीयन थाली और बैंक्वेट हॉल" },
    tags: ["Thali", "Restaurant"],
    hours: "Open until 11:00 PM",
    price: "₹800 for two",
    rating: "4.1",
    query: "Durvankur Dining Hall, Tilak Road, Sadashiv Peth, Pune"
  },
  {
    id: "murlidhar-veg",
    name: { en: "Sri Murlidhar Veg Thali", mr: "श्री मुरलीधर व्हेज थाळी", hi: "श्री मुरलीधर वेज थाली" },
    area: "off Bhide Bridge, Kelkar Road, Narayan Peth, Pune",
    specialty: { en: "Pure Vegetarian Thali (65-year-old)", mr: "शुद्ध शाकाहारी थाळी (६५ वर्षे जुनी)", hi: "शुद्ध शाकाहारी थाली (65 वर्ष पुरानी)" },
    tags: ["Restaurant", "Vegetarian", "Thali"],
    hours: "12:00 PM – 3:00 PM & 7:30 PM – 10:30 PM",
    price: "₹350 for two",
    rating: "4.2",
    query: "Sri Murlidhar Veg Thali, off Bhide Bridge, Kelkar Road, Narayan Peth, Pune"
  }
];
