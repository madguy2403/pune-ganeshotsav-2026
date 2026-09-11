/*
 * Parking zones near Shaniwar Peth / PMC, Pune, sourced from a Google Maps
 * "pmc parking near me" search. `query` drives the "Start Google
 * Navigation" button.
 *
 * `name` and `area` are bilingual ({en, mr, hi}) so they switch with the
 * site language, same convention as js/mandals-data.js and js/food-data.js.
 * `query` stays in English/transliterated form since it's used for search
 * and map routing.
 */
window.PARKING_SPOTS = [
  {
    id: "pune-parking",
    name: { en: "Pune Parking", mr: "पुणे पार्किंग", hi: "पुणे पार्किंग" },
    area: { en: "Near Congress House Road, Shaniwar Peth, Pune", mr: "काँग्रेस हाऊस रोडजवळ, शनिवार पेठ, पुणे", hi: "कांग्रेस हाउस रोड के पास, शनिवार पेठ, पुणे" },
    type: { en: "Two-wheeler & Four-wheeler", mr: "दुचाकी व चारचाकी", hi: "दोपहिया और चारपहिया" },
    query: "Pune Parking, Shaniwar Peth, Pune"
  },
  {
    id: "paid-car-parking-shaniwar-peth",
    name: { en: "Paid Car Parking", mr: "पेड कार पार्किंग", hi: "पेड कार पार्किंग" },
    area: { en: "Shaniwar Peth, Pune", mr: "शनिवार पेठ, पुणे", hi: "शनिवार पेठ, पुणे" },
    type: { en: "Four-wheeler", mr: "चारचाकी", hi: "चारपहिया" },
    query: "Paid Car Parking, Shaniwar Peth, Pune"
  },
  {
    id: "pmc-haribhau-parking-lot",
    name: { en: "PMC - Haribhau Parking Lot", mr: "पीएमसी - हरिभाऊ पार्किंग लॉट", hi: "पीएमसी - हरिभाऊ पार्किंग लॉट" },
    area: { en: "Shaniwar Peth, Pune", mr: "शनिवार पेठ, पुणे", hi: "शनिवार पेठ, पुणे" },
    type: { en: "Two-wheeler & Four-wheeler", mr: "दुचाकी व चारचाकी", hi: "दोपहिया और चारपहिया" },
    query: "PMC Haribhau Parking Lot, Shaniwar Peth, Pune"
  },
  {
    id: "pune-mahanagar-palika-parking",
    name: { en: "Pune Mahanagar Palika Parking", mr: "पुणे महानगर पालिका पार्किंग", hi: "पुणे महानगर पालिका पार्किंग" },
    area: { en: "Shaniwar Peth, Pune", mr: "शनिवार पेठ, पुणे", hi: "शनिवार पेठ, पुणे" },
    type: { en: "Two-wheeler & Four-wheeler", mr: "दुचाकी व चारचाकी", hi: "दोपहिया और चारपहिया" },
    query: "Pune Mahanagar Palika Parking, Shaniwar Peth, Pune"
  },
  {
    id: "pune-nagar-palika-parking",
    name: { en: "Pune Nagar Palika Parking", mr: "पुणे नगर पालिका पार्किंग", hi: "पुणे नगर पालिका पार्किंग" },
    area: { en: "Shaniwar Peth, Pune", mr: "शनिवार पेठ, पुणे", hi: "शनिवार पेठ, पुणे" },
    type: { en: "Two-wheeler & Four-wheeler", mr: "दुचाकी व चारचाकी", hi: "दोपहिया और चारपहिया" },
    query: "Pune Nagar Palika Parking, Shaniwar Peth, Pune"
  },
  {
    id: "pmc-bhau-maharaj-bol-parking-lot",
    name: { en: "PMC Bhau Maharaj Bol Parking Lot", mr: "पीएमसी भाऊ महाराज बोळ पार्किंग लॉट", hi: "पीएमसी भाऊ महाराज बोळ पार्किंग लॉट" },
    area: { en: "Near Hutatma Chowk, Shaniwar Peth, Pune", mr: "हुतात्मा चौकाजवळ, शनिवार पेठ, पुणे", hi: "हुतात्मा चौक के पास, शनिवार पेठ, पुणे" },
    type: { en: "Two-wheeler & Four-wheeler", mr: "दुचाकी व चारचाकी", hi: "दोपहिया और चारपहिया" },
    query: "PMC Bhau Maharaj Bol Parking Lot, Pune"
  },
  {
    id: "paid-parking-tilak-road",
    name: { en: "Paid Parking", mr: "पेड पार्किंग", hi: "पेड पार्किंग" },
    area: { en: "Near Tilak Road, Navi Peth, Pune", mr: "टिळक रोडजवळ, नवी पेठ, पुणे", hi: "टिळक रोड के पास, नवी पेठ, पुणे" },
    type: { en: "Two-wheeler & Four-wheeler", mr: "दुचाकी व चारचाकी", hi: "दोपहिया और चारपहिया" },
    query: "Paid Parking, Tilak Road, Navi Peth, Pune"
  },
  {
    id: "pay-and-park-saras-baug",
    name: { en: "Pay & Park", mr: "पे अँड पार्क", hi: "पे एंड पार्क" },
    area: { en: "Near Saras Baug, Navi Peth, Pune", mr: "सारसबागेजवळ, नवी पेठ, पुणे", hi: "सारसबाग के पास, नवी पेठ, पुणे" },
    type: { en: "Two-wheeler & Four-wheeler", mr: "दुचाकी व चारचाकी", hi: "दोपहिया और चारपहिया" },
    query: "Pay and Park, Saras Baug, Pune"
  },
  {
    id: "saras-baug-parking-lot",
    name: { en: "Saras Baug Parking Lot", mr: "सारसबाग पार्किंग लॉट", hi: "सारसबाग पार्किंग लॉट" },
    area: { en: "Saras Baug, Pune", mr: "सारसबाग, पुणे", hi: "सारसबाग, पुणे" },
    type: { en: "Two-wheeler & Four-wheeler", mr: "दुचाकी व चारचाकी", hi: "दोपहिया और चारपहिया" },
    query: "Saras Baug Parking Lot, Pune"
  }
];
