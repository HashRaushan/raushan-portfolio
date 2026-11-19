const menuButton=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");
menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");}));
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));button.classList.add("active");const category=button.dataset.filter;document.querySelectorAll(".project-card").forEach(card=>{card.classList.toggle("hidden",category!=="all"&&card.dataset.category!==category);});}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll(".placeholder-link").forEach(link=>link.addEventListener("click",event=>{event.preventDefault();alert("Please add your actual profile URL in index.html before publishing.");}));