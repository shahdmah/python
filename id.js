const student = {
  name: "شهد سلامه",
  id: "20220034",
  university: "MNU",
  faculty: "حاسبات ومعلومات",
  level: "الرابع",
  department: "IOT",
  email: "shahd.salama@ai.mnu.edu.eg"
};

// عرض البيانات
document.getElementById("studentName").innerText = student.name;
document.getElementById("studentID").innerText = student.id;
document.getElementById("studentUniversity").innerText = student.university;
document.getElementById("studentFaculty").innerText = student.faculty;
document.getElementById("studentLevel").innerText = student.level;
document.getElementById("studentDepartment").innerText = student.department;
document.getElementById("studentEmail").innerText = student.email;

// إنشاء QR code
new QRCode(document.getElementById("qrcode"), {
  text: student.id,
  width: 130,
  height: 130
});
function downloadPDF() {
  const element = document.getElementById("idCard");
  const opt = {
    margin: 0.5,
    filename: 'student-id.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
  };
  html2pdf().set(opt).from(element).save();
}

// ✅ الوضع الليلي
const toggleBtn = document.getElementById("toggleDark");

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  toggleBtn.innerText = "☀️ الوضع العادي";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.innerText = isDark ? "☀️ الوضع العادي" : "🌙 الوضع الليلي";
  localStorage.setItem("darkMode", isDark);
});

// ✅ تعدد اللغات
const translations = {
  ar: {
    title: "جامعة MNU - بطاقة الهوية الجامعية",
    printBtn: "🖨️ طباعة الهوية",
    pdfBtn: "📄 تحميل PDF",
    backBtn: "🔙 الرجوع للرئيسية",
    name: "اسم الطالب",
    labels: {
      id: "الرقم الجامعي",
      university: "الجامعة",
      faculty: "الكلية",
      department: "القسم",
      level: "الفرقة",
      email: "الإيميل الجامعي"
    },
    manager: "مدير برامج حاسبات : د. تامر فتحي",
    langBtn: "🌐 English"
  },
  en: {
    title: "MNU University - Student ID Card",
    printBtn: "🖨️ Print ID",
    pdfBtn: "📄 Download PDF",
    backBtn: "🔙 Back to Home",
    name: "Student Name",
    labels: {
      id: "Student ID",
      university: "University",
      faculty: "Faculty",
      department: "Department",
      level: "Level",
      email: "Email"
    },
    manager: "CS Program Director: Dr. Tamer Fathy",
    langBtn: "🌐 العربية"
  }
};

const elements = {
  headerText: document.querySelector(".header span"),
  studentName: document.getElementById("studentName"),
  infoLabels: document.querySelectorAll(".info p strong"),
  printBtn: document.querySelector(".bottom-buttons button:first-child"),
  pdfBtn: document.querySelector(".bottom-buttons button:last-child"),
  backBtn: document.querySelector(".signature a"),
  signature: document.querySelector(".signature span"),
  langBtn: document.getElementById("toggleLang")
};

function setLanguage(lang) {
  const t = translations[lang];
  elements.headerText.textContent = t.title;
  elements.studentName.textContent = t.name;
  const labelKeys = ["id", "university", "faculty", "department", "level", "email"];
  elements.infoLabels.forEach((label, index) => {
    label.textContent = t.labels[labelKeys[index]] + ":";
  });
  elements.printBtn.textContent = t.printBtn;
  elements.pdfBtn.textContent = t.pdfBtn;
  elements.backBtn.textContent = t.backBtn;
  elements.signature.textContent = t.manager;
  elements.langBtn.textContent = t.langBtn;
  localStorage.setItem("lang", lang);
}

elements.langBtn.addEventListener("click", () => {
  const current = localStorage.getItem("lang") || "ar";
  const next = current === "ar" ? "en" : "ar";
  setLanguage(next);
});

const currentLang = localStorage.getItem("lang") || "ar";
setLanguage(currentLang);

