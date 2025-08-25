// HERO TITLES ANIMATION
const titles = ["MentorHub", "Online Guidance", "Your Future Coach"];
const gradients = [
  "linear-gradient(90deg, #1e3a8a, #0ea5e9)",
  "linear-gradient(90deg, #c2410c, #f97316)"
];
const shadows = [
  "0 0 30px rgba(30,58,138,0.7)",
  "0 0 30px rgba(194,65,12,0.7)"
];

const carouselElement = document.querySelector('#home');
const heroTitle = document.getElementById("heroTitle");

function applyTheme(i){
  heroTitle.textContent = titles[i % titles.length];
  const themeIndex = i % gradients.length;
  heroTitle.style.backgroundImage = gradients[themeIndex];
  heroTitle.style.textShadow = shadows[themeIndex];
}

applyTheme(0);
carouselElement.addEventListener('slid.bs.carousel', (event) => {
  applyTheme(event.to);
});

// SERVICES CARDS
const services = [
  {id:'programming',name:'Programming Mentoring',price:180,duration:'60 min', img:'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=70', desc:'One-to-one help with code, projects, and debugging.'},
  {id:'medical',name:'Medical Consultation',price:300,duration:'30-45 min', img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=70', desc:'General advice from certified healthcare professionals.'},
  {id:'psychology',name:'Psychological Session',price:260,duration:'60 min', img:'https://images.unsplash.com/photo-1527236438218-d82077ae1f85?auto=format&fit=crop&w=1200&q=70', desc:'Talk to a licensed counselor and get guidance.'},
  {id:'fitness',name:'Fitness Coaching',price:160,duration:'45-60 min', img:'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=70', desc:'Personal training and tailored workout plans.'},
  {id:'sports',name:'Sports Coaching',price:170,duration:'60 min', img:'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc:'Improve technique and strategy with a pro coach.'},
  {id:'nutrition',name:'Nutrition Guidance',price:150,duration:'40-50 min', img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=70', desc:'Meal planning and lifestyle adjustments.'},
  {id:'career',name:'Career Coaching',price:190,duration:'50-60 min', img:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=70', desc:'CV review, interview prep, and roadmap.'},
  {id:'uiux',name:'UI/UX Mentoring',price:200,duration:'60 min', img:'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=70', desc:'Design critiques and portfolio feedback.'},
];

const servicesRow = document.getElementById('services-row');

services.forEach((s,i)=>{
  servicesRow.innerHTML += `
    <div class="col-md-3">
      <div class="card service-card" data-delay="${i}">
        <img src="${s.img}" class="card-img-top" alt="${s.name}">
        <div class="card-body">
          <h5 class="card-title">${s.name}</h5>
          <p class="card-text">${s.desc}</p>
          <p><strong>$${s.price}</strong> • ${s.duration}</p>
        </div>
      </div>
    </div>`;
});

// Scroll animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const card = entry.target;
      const delay = Number(card.dataset.delay) || 0;
      setTimeout(()=>card.classList.add('show'), delay*300);
      observer.unobserve(card);
    }
  });
},{threshold:0.15});

document.querySelectorAll('.service-card').forEach(c=>observer.observe(c));
