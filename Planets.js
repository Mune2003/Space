// موسوعة البيانات الفلكية الشاملة لتغذية لوحة التحكم الجانبية عند النقر
const spaceSystem = {
  sun: {
    name: "الشمس (The Sun)",
    desc: "الشمس هي النجم المركزي لمجموعتنا الشمسية، وهي كرة عملاقة من البلازما الساخنة المترابطة بالجاذبية. تشكل كتلتها حوالي 99.86% من إجمالي كتلة النظام الشمسي. يحدث في قلبها اندماج نووي هيدروجي مستمر يحول الملايين من أطنان المادة إلى طاقة خالصة تشع في أرجاء الكون لتوفر الضوء والدفء.",
    moons: [],
  },
  mercury: {
    name: "كوكب عطارد (Mercury)",
    desc: "أقرب الكواكب إلى الشمس وأصغر كواكب المجموعة الشمسية حجماً، وهو أسرعها دوراناً حول الشمس حيث يكمل سنته في 88 يوماً فقط. نظراً لعدم وجود غلاف جوي سميك يحميه، فإن سطحه يتعرض لضربات نيزكية لا تتوقف مسببة فوهات عملاقة تجعله شبيهاً بقمرنا.",
    moons: [],
  },
  venus: {
    name: "كوكب الزهرة (Venus)",
    desc: "يُطلق عليه غالباً توأم الأرض لتقاربه الشديد في الحجم والكتلة، ولكنه في الحقيقة جحيم فلكي مستعر! يمتلك غلافاً جوياً كثيفاً جداً يتكون بالكامل تقريباً من ثاني أكسيد الكربون، وتحيط به سحب سميكة من حمض الكبريتيك التي تحبس الحرارة عند 465 درجة مئوية.",
    moons: [],
  },
  earth: {
    name: "كوكب الأرض (Earth) - الواحة الزرقاء",
    desc: "كوكبنا وموطننا، المعجزة الفلكية الفريدة الحاضنة للحياة حتى يومنا هذا. يتميز بموقعه المثالي في 'النطاق الصالح للحياة' حول الشمس، مما سمح بوجود الماء بحالته السائلة التي تغطي 71% من مساحة الكوكب الكلية وغلاف جوي غني بالأكسجين.",
    moons: [{ name: "القمر المستنير الكلاسيكي (The Moon)", size: "3,474 كم" }],
  },
  mars: {
    name: "كوكب المريخ (Mars)",
    desc: "الكوكب الرابع بعداً عن الشمس والمعروف بالكوكب الأحمر نظراً لانتشار جزيئات أكسيد الحديد (الصدأ) بكثافة على سطحه وترابه. المريخ كوكب صخري بارد ذو غلاف جوي رقيق جداً، وهو محط أنظار البشرية لبناء أول مستعمرة مأهولة في المستقبل.",
    moons: [
      { name: "قمر فوبوس (Phobos)", size: "22.2 كم" },
      { name: "قمر ديموس (Deimos)", size: "12.6 كم" },
    ],
  },
  jupiter: {
    name: "كوكب المشتري (Jupiter)",
    desc: "عملاق الغاز الجبار وأكبر كواكب المجموعة الشمسية على الإطلاق، حيث يتسع حجمه وحده لاحتواء أكثر من 1300 كوكب بحجم الأرض! ويمتاز بأحزمته السحابية الدوارة وعواصفه الأعصارية الخارقة المستمرة منذ مئات السنين مثل البقعة الحمراء العظمى.",
    moons: [
      { name: "جانيميد (الأكبر كونياً)", size: "5,268 كم" },
      { name: "كاليستو الجليدي", size: "4,821 كم" },
    ],
  },
  saturn: {
    name: "كوكب زحل (Saturn)",
    desc: "ثاني أكبر الكواكب في نظامنا الفلكي وجوهرة الفضاء الساحرة بامتياز. يشتهر بنظامه الحلقي المذهل الممتد على مسافات شاسعة، وهو عبارة عن مليارات من جزيئات الجليد، الصخور، والغبار الكوني الدوار الذي يعكس الضوء ببراعة.",
    moons: [{ name: "تيتان الفاخر الغازي", size: "5,150 كم" }],
  },
  uranus: {
    name: "كوكب أورانوس (Uranus)",
    desc: "العملاق الجليدي المتميز بلونه الأزرق المخضر الباهت الناتج عن غاز الميثان في غلافه الجوي. يمتلك أورانوس ميزة حركة فريدة وشاذة بين الكواكب، حيث يدور على جانبه بالكامل (محور دورانه مائل بـ 98 درجة) وكأنه كرة تتدحرج.",
    moons: [{ name: "تيتانيا العملاق", size: "1,578 كم" }],
  },
  neptune: {
    name: "كوكب نبتون (Neptune)",
    desc: "أبعد كواكب مجموعتنا الشمسية، وهو عملاق جليدي ذو لون أزرق داكن رائع غامض وسحري. نبتون كوكب هادئ المظهر لكنه يخفي بيئة مرعبة، حيث تهب عليه رياح عاصفة هي الأسرع والأقوى في النظام الشمسي بأكمله (2100 كم/س).",
    moons: [{ name: "تيتون الثائر الجليدي", size: "2,706 كم" }],
  },
};

// 1. دالة تبديل الوضع (Dark / Light Mode) وحل مشكلة الخلفية الفضائية
function toggleTheme() {
  const html = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
    btn.innerHTML =
      '<span class="icon">🌙</span> <span class="text">الوضع الداكن</span>';
  } else {
    html.setAttribute("data-theme", "dark");
    btn.innerHTML =
      '<span class="icon">☀️</span> <span class="text">الوضع النهاري</span>';
  }
}

// 2. دالة التكبير السينمائي للجرم السماوي (Cinema Zoom Mode)
function zoomPlanet(planetKey) {
  const rows = document.querySelectorAll(".celestial-row");
  const targetRow = document.getElementById(`${planetKey}-row`);

  // إخفاء العناوين الأساسية تدريجياً لتركيز المشهد
  document.getElementById("mainHeader").style.opacity = "0";
  document.querySelector(".galaxy-section").style.opacity = "0";
  document.querySelector(".system-line").style.opacity = "0";

  rows.forEach((row) => {
    if (row === targetRow) {
      row.classList.add("active");
    } else {
      row.classList.add("hidden");
    }
  });

  // جلب البيانات وحقنها في لوحة التحكم الجانبية
  const data = spaceSystem[planetKey];
  document.getElementById("planetName").innerText = data.name;
  document.getElementById("planetDesc").innerText = data.desc;

  const moonsBox = document.getElementById("moonsBox");
  const list = document.getElementById("moonsList");
  list.innerHTML = "";

  // التحقق من وجود أقمار تابعة للجرم المختار
  if (data.moons.length === 0) {
    moonsBox.style.display = "none";
  } else {
    moonsBox.style.display = "block";
    data.moons.forEach((moon, index) => {
      const li = document.createElement("li");
      li.style.animationDelay = `${0.3 + index * 0.12}s`;
      li.innerHTML = `<span>🌕 ${moon.name}</span> <strong>القطر: ${moon.size}</strong>`;
      list.appendChild(li);
    });
  }

  // إظهار اللوحة الجانبية بسلاسة
  setTimeout(() => {
    document.getElementById("infoPanel").classList.add("show");
  }, 450);
}

// 3. دالة العودة للوضع الطبيعي وإعادة إظهار كل الأجرام
function resetUniverse() {
  const rows = document.querySelectorAll(".celestial-row");
  document.getElementById("infoPanel").classList.remove("show");

  document.getElementById("mainHeader").style.opacity = "1";
  document.querySelector(".galaxy-section").style.opacity = "1";
  document.querySelector(".system-line").style.opacity = "1";

  setTimeout(() => {
    rows.forEach((row) => {
      row.classList.remove("active");
      row.classList.remove("hidden");
    });
  }, 250);
}
