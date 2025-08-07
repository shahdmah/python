let currentLang = 'ar';

window.onload = function () {
  const savedLang = localStorage.getItem("lang");
  const savedDark = localStorage.getItem("darkMode");

  if (savedLang) {
    currentLang = savedLang;
    applyLanguage(currentLang);
  }

  if (savedDark === "true") {
    document.body.classList.add("dark-mode");
  }
};

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

function toggleLang() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(currentLang);
  localStorage.setItem("lang", currentLang);
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.getElementById("chatTitle").innerText = lang === "ar"
    ? "🤖 مساعد الجامعة الذكي"
    : "🤖 Smart Campus Assistant";

  document.getElementById("langBtn").innerText = lang === "ar" ? "🌐 EN" : "🌐 AR";

  document.getElementById("sendBtn").innerText = lang === "ar" ? "إرسال" : "Send";

  document.getElementById("userInput").placeholder = lang === "ar"
    ? "اكتب سؤالك هنا..."
    : "Type your question...";

  document.getElementById("backBtn").innerText = lang === "ar"
    ? "🔙 الرجوع للرئيسية"
    : "🔙 Back to Home";

  document.getElementById("welcomeMsg").innerText = lang === "ar"
    ? "مرحبًا بك! اسألني عن المواقع، الجداول، الامتحانات، الأعذار ..."
    : "Welcome! Ask me about locations, schedules, exams, excuses...";
}

// إرسال الرسالة
function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (text === "") return;

  appendMessage("user", text);
  input.value = "";

  const reply = getResponse(text);
  setTimeout(() => {
    appendMessage("bot", reply);
  }, 400);
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chatBox");
  const msgDiv = document.createElement("div");
  msgDiv.className = `${sender}-message chat-message`;
  msgDiv.innerHTML = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// الردود حسب اللغة والسؤال
function getResponse(text) {
  const msg = text.toLowerCase();

  // المباني
  if (msg.includes("مبني a") || msg.includes("مبنى a") || msg.includes("building a") ||
      msg.includes("مبني b") || msg.includes("مبنى b") || msg.includes("building b") ||
      msg.includes("مبني c") || msg.includes("مبنى c") || msg.includes("building c") ||
      msg.includes("مبني d") || msg.includes("مبنى d") || msg.includes("building d")) {
    return currentLang === "ar"
      ? `📍 يمكنك رؤية موقع المبنى الذي تسأل عنه من هنا:<br><a href="map.html" target="_blank">افتح الخريطة</a><br>ستجد وصفًا للموقع حسب الاتجاه.`
      : `📍 You can view the building location from here:<br><a href="map.html" target="_blank">Open the Map</a><br>You’ll find directions by position.`;
  }

  // قاعات / معامل
  if (msg.includes("clab") || msg.includes("مدرج") || msg.includes("lab") || msg.includes("معمل") || msg.includes("b0") || msg.includes("a1") || msg.includes("class")) {
    return currentLang === "ar"
      ? `📘 لتحديد موقع أي مكان داخل مبنى، اقرأ الاسم بهذا الشكل:<br><b>B0CLab1</b> = مبني B، الدور الأرضي، معمل 1.<br>ونفس الصيغة تنطبق على أي مبنى.`
      : `📘 To locate any room inside a building, follow this format:<br><b>B0CLab1</b> = Building B, Ground Floor, Lab 1.<br>The same format applies to all buildings.`;
  }

  // المصلى
  if (msg.includes("مصلي") || msg.includes("مصلى") || msg.includes("prayer") || msg.includes("worship")) {
    return currentLang === "ar"
      ? "🙏 المصلى موجود في الدور الأرضي في كل مبنى داخل الحرم الجامعي."
      : "🙏 The prayer room is on the ground floor of each building.";
  }

  // الكافيتريا
  if (msg.includes("كافتيريا") || msg.includes("كافيتريا") || msg.includes("بوفيه") || msg.includes("cafeteria") || msg.includes("food")) {
    return currentLang === "ar"
      ? "🍔 يوجد كافتيريا داخلية في كل مبنى، وكرفانات طعام عند مدخل الجامعة."
      : "🍔 There’s a cafeteria inside each building, and food trucks at the main gate.";
  }

  // الجداول
  if (msg.includes("جدول") || msg.includes("الجداول") || msg.includes("schedule") || msg.includes("timetable")) {
    return currentLang === "ar"
      ? "📅 يتم نشر الجداول على الجروب الرسمي للفرقة على تليجرام."
      : "📅 Schedules are posted on the official Telegram group.";
  }

  // الامتحانات
  if (msg.includes("امتحان") || msg.includes("الامتحانات") || msg.includes("exam")) {
    return currentLang === "ar"
      ? "📝 يتم الإعلان عن مواعيد الامتحانات عبر الجروب الرسمي أو من شؤون الطلاب."
      : "📝 Exam dates are announced via the official group or Student Affairs.";
  }

  // الأعذار
  if (msg.includes("عذر") || msg.includes("اعذار") || msg.includes("excuse")) {
    return currentLang === "ar"
      ? "📌 لتقديم عذر غياب، توجه إلى شؤون الطلاب داخل مبنى الإدارة."
      : "📌 To submit an excuse for absence, visit Student Affairs inside the Admin building.";
  }

  // شؤون الطلاب
  if (msg.includes("شؤون") || msg.includes("شئون") || msg.includes("student affairs")) {
    return currentLang === "ar"
      ? "🏢 شؤون الطلاب موجودة داخل مبنى الإدارة."
      : "🏢 Student Affairs is located inside the Administration Building.";
  }

  // الغياب
  if (msg.includes("غياب") || msg.includes("absent") || msg.includes("absence")) {
    return currentLang === "ar"
      ? "⚠️ الحد الأقصى للغياب هو 25% من مجموع المحاضرات والسكاشن. إذا تجاوزت ذلك، قد تُمنع من دخول الامتحان."
      : "⚠️ The absence limit is 25% of all lectures and sessions. Exceeding it may prevent you from taking exams.";
  }

  // رد افتراضي
  return currentLang === "ar"
    ? "❓ عذرًا، لم أفهم سؤالك. حاول بطريقة مختلفة."
    : "❓ Sorry, I didn't understand. Try rephrasing your question.";
}
