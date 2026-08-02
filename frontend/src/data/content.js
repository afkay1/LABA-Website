// LÀ·BA — bilingual content & menu data
export const IMAGES = {
  hero: "/images/hero-dining.jpg",
  exterior: "/images/exterior-night.jpg",
  interior: "/images/interior-main.jpg",
  stage: "/images/stage.jpg",
  arch: "/images/arch-neon.jpg",
};

export const MENU_IMAGES = {
  coffee:
    "https://images.unsplash.com/photo-1478192013110-1203b3616b75?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  sliders:
    "https://images.unsplash.com/photo-1678110707493-8d05425137ac?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  desserts:
    "https://images.unsplash.com/photo-1637944220604-c5f28faac604?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  drinks:
    "https://images.unsplash.com/photo-1656423371679-297f0d3ef4ee?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  seafood:
    "https://images.unsplash.com/photo-1761668439955-8e6acfcb05c3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  pizza:
    "https://images.unsplash.com/photo-1579751626657-72bc17010498?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  restaurant: "/images/interior-main.jpg",
  breakfast: "/images/hero-dining.jpg",
};

export const CONTACT = {
  phone: "058 226 6333",
  phoneTel: "0582266333",
  whatsapp: "966582266333",
  instagram: "https://instagram.com/la.ba.ksa",
  instagramHandle: "@la.ba.ksa",
  maps: "https://www.google.com/maps/search/?api=1&query=LA.BA+Prince+Abdulaziz+St+As+Sulimaniyah+Riyadh",
  menuLink: "https://laba.yallaqrcodes.com/branch/1/",
};

// Menu categories. Each item: [en, ar, price]
export const MENU = [
  {
    key: "coffee",
    canvas: "coffee",
    name: { en: "Coffee", ar: "قهوة" },
    title: { en: "Slow Mornings, Rich Rituals", ar: "صباحات هادئة، طقوس غنية" },
    desc: {
      en: "House-roasted beans pulled to perfection — from the classic espresso to our saffron-kissed signatures.",
      ar: "حبوب محمصة في المنزل تُحضَّر بإتقان — من الإسبريسو الكلاسيكي إلى نكهاتنا المميزة بالزعفران.",
    },
    items: [
      { en: "Single Espresso", ar: "إسبريسو مفرد", price: 18 },
      { en: "Double Espresso", ar: "إسبريسو مزدوج", price: 23 },
      { en: "Cappuccino", ar: "كابتشينو", price: 26 },
      { en: "Latte", ar: "لاتيه", price: 26 },
      { en: "Flat White", ar: "فلات وايت", price: 26 },
      { en: "Spanish Latte", ar: "لاتيه إسباني", price: 28 },
      { en: "Arabian Night — saffron, cardamom, honey", ar: "ليلة عربية — زعفران، هيل، عسل", price: 32 },
      { en: "LaBa Signature — maple, vanilla, orange zest", ar: "لابا سيجنتشر — قيقب، فانيليا، برتقال", price: 35 },
      { en: "Affogato", ar: "أفوجاتو", price: 30 },
    ],
  },
  {
    key: "sliders",
    canvas: "sliders",
    name: { en: "Sliders & Burgers", ar: "سلايدرز وبرغر" },
    title: { en: "Stacked, Seared, Unforgettable", ar: "مرصوصة، مشوية، لا تُنسى" },
    desc: {
      en: "From delicate salmon sliders to a 200g Wagyu masterpiece — every bite is a small performance.",
      ar: "من سلايدرز السلمون الرقيقة إلى تحفة الواغيو 200 جرام — كل قضمة عرض صغير.",
    },
    items: [
      { en: "Salmon Royale Sliders", ar: "سلايدرز السلمون رويال", price: 55 },
      { en: "Beef Brisket Sliders", ar: "سلايدرز لحم البريسكت", price: 74 },
      { en: "The Artist Burger — 200g Wagyu MB 6-7", ar: "برغر الفنان — واغيو 200 جرام MB 6-7", price: 210 },
      { en: "Fire-Grilled Chicken Brioche", ar: "دجاج مشوي على الحطب بخبز البريوش", price: 62 },
    ],
  },
  {
    key: "desserts",
    canvas: "desserts",
    name: { en: "Desserts", ar: "حلويات" },
    title: { en: "The Sweet Finale", ar: "الختام الحلو" },
    desc: {
      en: "Parisian pastry craft meets theatrical plating — the perfect encore to your evening.",
      ar: "حرفية المعجنات الباريسية تلتقي بالتقديم المسرحي — الختام المثالي لأمسيتك.",
    },
    items: [
      { en: "French Toast", ar: "توست فرنسي", price: 35 },
      { en: "Tiramisu", ar: "تيراميسو", price: 45 },
      { en: "Crème Brûlée", ar: "كريم بروليه", price: 30 },
      { en: "Cheesecake Strawberry", ar: "تشيز كيك فراولة", price: 48 },
      { en: "Paris LaBa Pistache", ar: "باريس لابا بيستاش", price: 42 },
      { en: "Black Forest", ar: "بلاك فورست", price: 42 },
    ],
  },
  {
    key: "drinks",
    canvas: "drinks",
    name: { en: "Drinks", ar: "مشروبات" },
    title: { en: "Signature Mocktails", ar: "موكتيلات مميزة" },
    desc: {
      en: "Hand-crafted, alcohol-free and endlessly photogenic — poured with theatre and finesse.",
      ar: "مُحضَّرة يدوياً، خالية من الكحول وجذابة دائماً — تُسكب بلمسة مسرحية وأناقة.",
    },
    items: [
      { en: "Moscow Mule", ar: "موسكو ميول", price: 45 },
      { en: "La.Ba Mojito", ar: "لابا موهيتو", price: 45 },
      { en: "LaBa Colada", ar: "لابا كولادا", price: 75 },
      { en: "Carnival Berry", ar: "كرنفال بيري", price: 45 },
      { en: "Strawberry Fizz", ar: "ستروبيري فيز", price: 45 },
      { en: "Bellino Peach Bottle", ar: "زجاجة بيلينو بالخوخ", price: 199 },
    ],
  },
  {
    key: "seafood",
    canvas: "seafood",
    name: { en: "Seafood", ar: "مأكولات بحرية" },
    title: { en: "From the Mediterranean", ar: "من البحر المتوسط" },
    desc: {
      en: "Sea bass, paella and shrimp treated with Levantine warmth and Riviera elegance.",
      ar: "سي باس، بايلا وروبيان بلمسة شرقية دافئة وأناقة الريفيرا.",
    },
    items: [
      { en: "Seafood Paella", ar: "بايلا المأكولات البحرية", price: 147 },
      { en: "Sea Bass à la Libanaise", ar: "سي باس على الطريقة اللبنانية", price: 158 },
      { en: "Riviera Hot Pot Shrimp", ar: "روبيان ريفيرا هوت بوت", price: 65 },
      { en: "Atlantic Shrimp Soup", ar: "شوربة روبيان أطلسي", price: 54 },
    ],
  },
  {
    key: "pizza",
    canvas: "pizza",
    name: { en: "Pizza", ar: "بيتزا" },
    title: { en: "Wood-Fired & Wild", ar: "على الحطب وجريئة" },
    desc: {
      en: "Blistered crusts, five cheeses, black truffle and burrata — Italian soul, LÀ·BA drama.",
      ar: "عجينة مشوية، خمس أجبان، كمأة سوداء وبوراتا — روح إيطالية بلمسة لابا الدرامية.",
    },
    items: [
      { en: "Quinto Formaggi — 5 cheeses, burrata, truffle", ar: "كوينتو فورماجي — 5 أجبان، بوراتا، كمأة", price: 75 },
      { en: "Wild Mushroom Truffle", ar: "فطر بري بالكمأة", price: 75 },
      { en: "Laham Ajeen — Minced Meat", ar: "لحم بعجين", price: 36 },
      { en: "Mix Cheese Pie", ar: "فطيرة أجبان مشكلة", price: 32 },
    ],
  },
  {
    key: "restaurant",
    canvas: "restaurant",
    name: { en: "Restaurant", ar: "المطعم" },
    title: { en: "The Main Stage", ar: "المسرح الرئيسي" },
    desc: {
      en: "Our headline acts — Black Angus tomahawk, Wagyu prime cuts and truffle risotto.",
      ar: "أطباقنا الرئيسية — توماهوك بلاك أنجوس، قطع واغيو مميزة وريزوتو الكمأة.",
    },
    items: [
      { en: "LÀ.BA Signature Tomahawk — 1.5kg Black Angus", ar: "توماهوك لابا المميز — بلاك أنجوس 1.5 كجم", price: 790 },
      { en: "Wagyu Ribeye Prime Cut MB 6-7", ar: "ريب آي واغيو قطعة مميزة MB 6-7", price: 298 },
      { en: "Entre-Nous Steak — Angus striploin", ar: "ستيك أونتر-نو — سترِبلوين أنجوس", price: 199 },
      { en: "Sea Bass à la Libanaise", ar: "سي باس على الطريقة اللبنانية", price: 158 },
      { en: "Mushroom Truffle Risotto", ar: "ريزوتو الفطر بالكمأة", price: 127 },
      { en: "Fettuccine Shrimp White Wine", ar: "فيتوتشيني روبيان بصلصة النبيذ الأبيض", price: 74 },
      { en: "Golden Caesar Palette", ar: "سيزر الذهبية", price: 69 },
    ],
  },
  {
    key: "breakfast",
    canvas: "breakfast",
    name: { en: "Breakfast", ar: "فطور" },
    title: { en: "Daylight Indulgence", ar: "متعة النهار" },
    desc: {
      en: "Za'atar omelettes, avocado toast and shakshuka — a luminous start beneath the marquee.",
      ar: "أومليت الزعتر، توست الأفوكادو والشكشوكة — بداية مشرقة تحت الأضواء.",
    },
    items: [
      { en: "Wild Za'atar & Mushroom Omelette", ar: "أومليت الزعتر البري والفطر", price: 48 },
      { en: "Salmon Royale Sliders", ar: "سلايدرز السلمون رويال", price: 55 },
      { en: "Artisan Avocado & Egg Toast", ar: "توست الأفوكادو والبيض", price: 51 },
      { en: "Ember Baked Shakshuka", ar: "شكشوكة على الجمر", price: 34 },
      { en: "Creamy Pesto Chicken Croissant", ar: "كرواسون الدجاج بالبيستو", price: 39 },
      { en: "French Chicken Vol-au-Vent", ar: "فول-او-فان الدجاج الفرنسي", price: 56 },
      { en: "Classic French Croque Monsieur", ar: "كروك مسيو الفرنسي الكلاسيكي", price: 57 },
    ],
  },
];

export const EXPERIENCES = [
  {
    icon: "Music",
    title: { en: "Live Entertainment", ar: "عروض حية" },
    desc: { en: "Grand piano and live sets that turn every dinner into a show.", ar: "بيانو كبير وعروض حية تحوّل كل عشاء إلى استعراض." },
  },
  {
    icon: "Wind",
    title: { en: "Shisha Lounge", ar: "صالة شيشة" },
    desc: { en: "A refined lounge to unwind beneath the swirling lights.", ar: "صالة راقية للاسترخاء تحت الأضواء المتلألئة." },
  },
  {
    icon: "Wine",
    title: { en: "Signature Mocktails", ar: "موكتيلات مميزة" },
    desc: { en: "Theatrical, alcohol-free pours crafted to impress.", ar: "مشروبات مسرحية خالية من الكحول تبهر الحواس." },
  },
  {
    icon: "Landmark",
    title: { en: "Iconic Architecture", ar: "عمارة أيقونية" },
    desc: { en: "A burgundy arch and velvet stage worth the photograph.", ar: "قوس عنابي ومسرح مخملي يستحق الصورة." },
  },
  {
    icon: "Star",
    title: { en: "4.3 Stars on Google", ar: "4.3 نجوم على جوجل" },
    desc: { en: "Loved by 800+ guests across Riyadh and beyond.", ar: "محبوب من أكثر من 800 ضيف في الرياض وخارجها." },
  },
  {
    icon: "Clock",
    title: { en: "Open Until 3AM", ar: "مفتوح حتى 3 صباحاً" },
    desc: { en: "Daily from noon till the small hours — the night is yours.", ar: "يومياً من الظهر حتى ساعات الفجر — الليل لك." },
  },
];

export const GALLERY = [
  { src: IMAGES.arch, label: { en: "The Arch", ar: "القوس" } },
  { src: IMAGES.interior, label: { en: "The Dining Room", ar: "قاعة الطعام" } },
  { src: IMAGES.stage, label: { en: "The Stage", ar: "المسرح" } },
  { src: IMAGES.hero, label: { en: "Art of Dining", ar: "فن تناول الطعام" } },
  { src: IMAGES.exterior, label: { en: "Red Carpet Entrance", ar: "مدخل السجادة الحمراء" } },
  { src: MENU_IMAGES.seafood, label: { en: "Seafood Paella", ar: "بايلا بحرية" } },
  { src: MENU_IMAGES.pizza, label: { en: "Wood-Fired Pizza", ar: "بيتزا على الحطب" } },
  { src: MENU_IMAGES.drinks, label: { en: "Signature Mocktail", ar: "موكتيل مميز" } },
  { src: MENU_IMAGES.desserts, label: { en: "Parisian Dessert", ar: "حلوى باريسية" } },
  { src: MENU_IMAGES.coffee, label: { en: "The Coffee Ritual", ar: "طقوس القهوة" } },
];

// UI strings
export const T = {
  nav: {
    story: { en: "Story", ar: "القصة" },
    menu: { en: "Menu", ar: "القائمة" },
    experience: { en: "Experience", ar: "التجربة" },
    gallery: { en: "Gallery", ar: "المعرض" },
    reserve: { en: "Reserve", ar: "احجز" },
  },
  hero: {
    eyebrow: { en: "Art of Dining · Riyadh, Saudi Arabia", ar: "فن تناول الطعام · الرياض، المملكة العربية السعودية" },
    tagline: { en: "Art of Dining", ar: "فن تناول الطعام" },
    exploreMenu: { en: "Explore Menu", ar: "استكشف القائمة" },
    reserve: { en: "Reserve a Table", ar: "احجز طاولة" },
    scroll: { en: "Scroll to enter", ar: "مرّر للدخول" },
  },
  story: {
    heading: { en: "A Stage Set for Extraordinary Dining", ar: "مسرح مُعدّ لتجربة طعام استثنائية" },
    body1: {
      en: "Step through the glowing burgundy arch and you enter a theatre of taste. LÀ·BA reimagines fine dining as performance — a white grand piano on a velvet stage, swirling ceiling lights, and a marquee that spells its name in warm bulbs.",
      ar: "اعبر القوس العنابي المتوهج لتدخل مسرحاً للأذواق. تعيد لابا تصوّر تجربة الطعام الفاخرة كعرض حي — بيانو أبيض كبير على مسرح مخملي، أضواء متلألئة، ولافتة تكتب اسمها بمصابيح دافئة." ,
    },
    body2: {
      en: "In the heart of As Sulimaniyah, we serve a world in every category — from house-roasted coffee to a 1.5kg Black Angus tomahawk — nightly, until three in the morning.",
      ar: "في قلب السليمانية، نقدّم عالماً في كل فئة — من القهوة المحمصة في المنزل إلى توماهوك بلاك أنجوس بوزن 1.5 كجم — كل ليلة، حتى الثالثة فجراً.",
    },
    stats: [
      { value: "4.3★", label: { en: "Google Rating", ar: "تقييم جوجل" } },
      { value: "800+", label: { en: "Reviews", ar: "تقييم" } },
      { value: "3 AM", label: { en: "Open Until", ar: "مفتوح حتى" } },
    ],
  },
  menu: {
    eyebrow: { en: "The Menu", ar: "القائمة" },
    heading: { en: "A World in Every Category", ar: "عالم في كل فئة" },
    viewFull: { en: "View Full Menu", ar: "عرض القائمة كاملة" },
  },
  experience: {
    eyebrow: { en: "The Experience", ar: "التجربة" },
    heading: { en: "More Than a Meal", ar: "أكثر من مجرد وجبة" },
  },
  about: {
    overlay: { en: "Art of Dining", ar: "فن تناول الطعام" },
    heading: { en: "Where Every Meal Is a Performance", ar: "حيث كل وجبة عرض" },
    body: {
      en: "The velvet curtains part, the piano begins, and dinner becomes something you remember. LÀ·BA is designed to be felt — a red-and-gold world where architecture, music and cuisine share one stage.",
      ar: "تنفتح الستائر المخملية، يبدأ البيانو، ويصبح العشاء ذكرى لا تُنسى. صُممت لابا لتُعاش — عالم أحمر وذهبي تتشارك فيه العمارة والموسيقى والمأكولات مسرحاً واحداً.",
    },
    badge: { en: "4.3 Stars", ar: "4.3 نجوم" },
  },
  gallery: {
    eyebrow: { en: "The Gallery", ar: "المعرض" },
    heading: { en: "Inside LÀ·BA", ar: "داخل لابا" },
  },
  contact: {
    eyebrow: { en: "Reservations", ar: "الحجوزات" },
    heading: { en: "Reserve Your Table", ar: "احجز طاولتك" },
    info: { en: "Find Us", ar: "زرنا" },
    address: { en: "Prince Abdulaziz St, As Sulimaniyah, Riyadh", ar: "شارع الأمير عبدالعزيز، السليمانية، الرياض" },
    hoursLabel: { en: "Hours", ar: "ساعات العمل" },
    hours: { en: "Daily 12:00 PM – 3:00 AM", ar: "يومياً 12:00 ظهراً – 3:00 فجراً" },
    phoneLabel: { en: "Phone", ar: "الهاتف" },
    whatsappLabel: { en: "WhatsApp", ar: "واتساب" },
    menuLabel: { en: "Digital Menu", ar: "القائمة الرقمية" },
    firstName: { en: "First Name", ar: "الاسم الأول" },
    lastName: { en: "Last Name", ar: "اسم العائلة" },
    phone: { en: "Phone", ar: "الهاتف" },
    guests: { en: "Number of Guests", ar: "عدد الضيوف" },
    date: { en: "Date", ar: "التاريخ" },
    time: { en: "Time", ar: "الوقت" },
    requests: { en: "Special Requests", ar: "طلبات خاصة" },
    submit: { en: "Reserve via WhatsApp", ar: "احجز عبر واتساب" },
    note: { en: "Or call us: 058 226 6333", ar: "أو اتصل بنا: 058 226 6333" },
    success: { en: "Reservation received — opening WhatsApp to confirm.", ar: "تم استلام الحجز — جاري فتح واتساب للتأكيد." },
    error: { en: "Something went wrong. Please call us instead.", ar: "حدث خطأ ما. يرجى الاتصال بنا." },
  },
  footer: {
    desc: {
      en: "A theatre of taste in the heart of Riyadh. Red curtains, gold light, and a menu worth the encore.",
      ar: "مسرح للأذواق في قلب الرياض. ستائر حمراء، ضوء ذهبي، وقائمة تستحق التكرار.",
    },
    nav: { en: "Explore", ar: "استكشف" },
    contact: { en: "Contact", ar: "تواصل" },
    rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
    designedBy: { en: "Designed by", ar: "تصميم" },
  },
  marquee: [
    { en: "Art of Dining", ar: "فن تناول الطعام" },
    { en: "As Sulimaniyah · Riyadh", ar: "السليمانية · الرياض" },
    { en: "Open Daily 12PM – 3AM", ar: "يومياً 12 ظهراً – 3 فجراً" },
    { en: "Live Entertainment", ar: "عروض حية" },
    { en: "Premium Dining Experience", ar: "تجربة طعام فاخرة" },
  ],
};

export const currency = (lang, n) => (lang === "ar" ? `${n} ر.س` : `SAR ${n}`);
