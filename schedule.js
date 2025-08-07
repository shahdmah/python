const toggleBtn = document.getElementById("toggleDark");
const langBtn = document.getElementById("langBtn");
const title = document.getElementById("title");
const table = document.getElementById("scheduleTable").getElementsByTagName("tbody")[0];
const thead = document.querySelector("thead tr");
const backBtn = document.getElementById("backBtn");

// تفعيل الوضع الليلي المحفوظ
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  toggleBtn.innerText = "☀️ الوضع العادي";
}

// تبديل الوضع الليلي
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.innerText = isDark ? "☀️ الوضع العادي" : "🌓 الوضع الليلي";
  localStorage.setItem("darkMode", isDark);
});

// إعداد الجدول حسب اللغة
function setSchedule(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);

  title.innerText = lang === "ar" ? "📅 جدول المحاضرات الأسبوعي" : "📅 Weekly Schedule";
  langBtn.innerText = lang === "ar" ? "🌐 English" : "🌐 العربية";
  toggleBtn.innerText = document.body.classList.contains("dark-mode")
    ? (lang === "ar" ? "☀️ الوضع العادي" : "☀️ Light Mode")
    : (lang === "ar" ? "🌓 الوضع الليلي" : "🌓 Dark Mode");

  backBtn.innerText = lang === "ar" ? "🔙 الرجوع للرئيسية" : "🔙 Back to Home";

  const days = lang === "ar"
    ? ["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"]
    : ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

  const subjects = lang === "ar"
    ? [
        ["رياضيات", "برمجة", "شبكات"],
        ["ذكاء اصطناعي", "رياضيات", "-"],
        ["هندسة برمجيات", "شبكات", "قواعد بيانات"],
        ["-", "مشروع", "برمجة"],
        ["ذكاء اصطناعي", "-", "أنظمة تشغيل"],
        ["برمجة", "برمجة", "راحة"]
      ]
    : [
        ["Math", "Programming", "Networks"],
        ["AI", "Math", "-"],
        ["Software Eng.", "Networks", "Databases"],
        ["-", "Project", "Programming"],
        ["AI", "-", "Operating Systems"],
        ["Programming", "Programming", "Break"]
      ];

  thead.innerHTML = lang === "ar"
    ? "<th>اليوم</th><th>٩:٠٠ - ١٠:٣٠</th><th>١١:٠٠ - ١٢:٣٠</th><th>١:٠٠ - ٢:٣٠</th>"
    : "<th>Day</th><th>9:00 - 10:30</th><th>11:00 - 12:30</th><th>1:00 - 2:30</th>";

  table.innerHTML = "";
  for (let i = 0; i < days.length; i++) {
    table.innerHTML += `
      <tr>
        <td>${days[i]}</td>
        <td>${subjects[i][0]}</td>
        <td>${subjects[i][1]}</td>
        <td>${subjects[i][2]}</td>
      </tr>
    `;
  }

  // ترتيب الأزرار
  const actions = document.querySelector(".actions");
  actions.style.flexDirection = lang === "ar" ? "row-reverse" : "row";
}

langBtn.addEventListener("click", () => {
  const current = localStorage.getItem("lang") || "ar";
  const newLang = current === "ar" ? "en" : "ar";
  setSchedule(newLang);
});

// تحميل اللغة عند فتح الصفحة
const storedLang = localStorage.getItem("lang") || "ar";
setSchedule(storedLang);
