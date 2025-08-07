// ✅ تفعيل الوضع الليلي
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem("darkMode", isDark);
}

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// ✅ التبديل بين اللغة العربية والإنجليزية
let currentLang = localStorage.getItem("lang") || 'ar';

function toggleLang() {
  const isArabic = currentLang === 'ar';

  document.documentElement.lang = isArabic ? 'en' : 'ar';
  document.documentElement.dir = isArabic ? 'ltr' : 'rtl';

  document.getElementById("title").innerText = isArabic ? "🧭 Campus Navigation Map" : "🧭 خريطة التنقل في الحرم الجامعي";
  document.getElementById("subtitle").innerText = isArabic ? "Explore campus buildings and locations" : "تعرف على مواقع المباني داخل الجامعة الأهلية";
  document.getElementById("descTitle").innerText = isArabic ? "📌 Explore University Facilities" : "📌 تعرف على مواقع مباني الجامعة الأهلية";
  document.getElementById("langBtn").innerText = isArabic ? "🌐 AR" : "🌐 EN";
  document.getElementById("mapLink").innerText = isArabic ? "🌍 View on Google Maps" : "🌍 الذهاب إلى الموقع على Google Maps";
  document.getElementById("homeBtn").innerText = isArabic ? "🔙 Back to Home" : "🔙 الرجوع إلى الصفحة الرئيسية";

  const list = document.getElementById("descList");
  list.innerHTML = isArabic ? `
    <li>🎯 Main Gate: Entry from Egypt–Alexandria Agricultural Road.</li>
    <li>🏢 North of the gate: Administration building.</li>
    <li>🏫 In front of the gate: Buildings A & B (classrooms, labs, lecture halls).</li>
    <li>🏫 Right side of the gate: Buildings C & D (classrooms, labs, lecture halls).</li>
    <li>🍔 Near the entrance: Food caravans (student cafeteria).</li>
    <li>🧪 Inside buildings: Labs like "B0CLab1".</li>
    <li>🙏 Prayer areas on the ground floors.</li>
    <li>ℹ️ To know room/lab names, follow this format:</li>
    <li>🔤 Format: <strong>Building + Floor Number + Room Type</strong></li>
    <li>🧪 Example: <strong>B0CLab1</strong> → Building B, Ground Floor, Lab 1.</li>
    <li>🏫 Another: <strong>A2Class3</strong> → Building A, 2nd Floor, Class 3.</li>
  ` : `
    <li>🎯 البوابة الرئيسية: مدخل الجامعة من طريق مصر– إسكندرية الزراعي.</li>
    <li>🏢 شمال البوابة: مبنى الإدارة.</li>
    <li>🏫 أمام البوابة: مبنيي A و B (فصول دراسية، معامل، مدرجات).</li>
    <li>🏫 يمين البوابة: مبنيي C و D (فصول دراسية، معامل، مدرجات).</li>
    <li>🍔 عند المدخل: كرفانات الطعام (بوفيه الطلاب).</li>
    <li>🧪 داخل المباني: المعامل مثل "B0CLab1".</li>
    <li>🙏 مصليات مخصصة للطلاب والطالبات في الأدوار الأرضية.</li>
    <li>ℹ️ لمعرفة أسماء القاعات أو المعامل داخل كل مبنى، اتبعي هذا النظام:</li>
    <li>🔤 اسم القاعة يكون بالشكل التالي: <strong>اسم المبنى + رقم الدور + نوع القاعة</strong></li>
    <li>🧪 مثال: <strong>B0CLab1</strong> → معناه: مبنى B، الدور الأرضي، معمل رقم 1.</li>
    <li>🏫 مثال آخر: <strong>A2Class3</strong> → معناه: مبنى A، الدور الثاني، قاعة دراسية رقم 3.</li>
  `;

  currentLang = isArabic ? 'en' : 'ar';
  localStorage.setItem("lang", currentLang);
}

// ✅ تطبيق اللغة المحفوظة عند التحميل
toggleLang();
