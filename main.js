const toggleBtn = document.getElementById("toggleDark");

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  toggleBtn.innerText = "☀️ الوضع العادي";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.innerText = isDark ? "☀️ الوضع العادي" : "🌓 الوضع الليلي";
  localStorage.setItem("darkMode", isDark);
});

const translations = {
  ar: {
    title: "🎓 Smart MNU",
    card1_title: "🪪 بطاقة الطالب الذكية",
    card1_text: "اعرض بياناتك الجامعية، QR، واطبع الهوية أو حمّلها PDF.",
    card1_btn: "الدخول",
    card2_title: "🗺️ خريطة الحرم الجامعي",
    card2_text: "استكشف مواقع المباني، الكافيتريا، المصلى، ووصف الاتجاهات.",
    card2_btn: "عرض الخريطة",
    card3_title: "🤖 مساعد الجامعة الذكي",
    card3_text: "اسأله عن الجداول، المدرجات، الغياب، الأعذار، والمزيد.",
    card3_btn: "ابدأ المحادثة",
    card4_title: "📅 الجدول الدراسي",
    card4_text: "تعرف على جدول المحاضرات من السبت للخميس بالتفصيل.",
    card4_btn: "📅 عرض الجدول",
    footer: "مشروع الجامعة الذكية | تنفيذ: شهد سلامة © 2025",
    langBtn: "🌐 English"
  },
  en: {
    title: "🎓 Smart MNU",
    card1_title: "🪪 Smart Student ID",
    card1_text: "View your university data, QR code, and print or download PDF.",
    card1_btn: "Enter",
    card2_title: "🗺️ Campus Map",
    card2_text: "Explore building locations, cafeteria, prayer rooms, and directions.",
    card2_btn: "View Map",
    card3_title: "🤖 Smart Assistant",
    card3_text: "Ask about schedules, lecture halls, absence, excuses, and more.",
    card3_btn: "Start Chat",
    card4_title: "📅 Weekly Schedule",
    card4_text: "Check your detailed class schedule from Saturday to Thursday.",
    card4_btn: "📅 View Schedule",
    footer: "Smart Campus Project | By: Shahd Salama © 2025",
    langBtn: "🌐 العربية"
  }
};

const elements = {
  title: document.getElementById("title"),
  card1_title: document.getElementById("card1_title"),
  card1_text: document.getElementById("card1_text"),
  card1_btn: document.getElementById("card1_btn"),
  card2_title: document.getElementById("card2_title"),
  card2_text: document.getElementById("card2_text"),
  card2_btn: document.getElementById("card2_btn"),
  card3_title: document.getElementById("card3_title"),
  card3_text: document.getElementById("card3_text"),
  card3_btn: document.getElementById("card3_btn"),
  card4_title: document.getElementById("card4_title"),
  card4_text: document.getElementById("card4_text"),
  card4_btn: document.getElementById("card4_btn"),
  footer: document.getElementById("footer"),
  langBtn: document.getElementById("langBtn")
};

function setLanguage(lang) {
  const t = translations[lang];
  for (let key in elements) {
    if (elements[key]) {
      elements[key].textContent = t[key];
    }
  }

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("language", lang);
}

elements.langBtn.addEventListener("click", () => {
  const current = localStorage.getItem("language") || "ar";
  const newLang = current === "ar" ? "en" : "ar";
  setLanguage(newLang);
});

const initialLang = localStorage.getItem("language") || "ar";
setLanguage(initialLang);

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // منع المتصفح من إظهار البوب آب تلقائي
  e.preventDefault();
  deferredPrompt = e;

  // إظهار زر التثبيت للمستخدم (اعمليله display: block في HTML لما يظهر الحدث)
  const installBtn = document.getElementById('installBtn');
  installBtn.style.display = 'inline';

  installBtn.addEventListener('click', () => {
    installBtn.style.display = 'none';
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});

