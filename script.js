console.log("Script Loaded");
/* ===========================
   Typing Animation
=========================== */

const words = [
    "Data Analyst",
    "Business Analyst",
    "SQL Developer",
    "Power BI Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if (!typing) return;

    currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, letterIndex++);
    } else {

        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = 120;

    if (!isDeleting && letterIndex === currentWord.length + 1) {

        speed = 1500;
        isDeleting = true;

    } else if (isDeleting && letterIndex === 0) {

        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* ===========================
   Dark / Light Theme
=========================== */

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }

    });

}
/* ===========================
   Scroll Reveal Animation
=========================== */

const reveal = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

const trigger = window.innerHeight * 0.85;

reveal.forEach(sec=>{

const top = sec.getBoundingClientRect().top;

if(top<trigger){

sec.classList.add("show");

}

});

});


/* ===========================
   Active Navbar
=========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ===========================
   Counter Animation
=========================== */

const counters=document.querySelectorAll(".stat-box h2");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const pos=stats.getBoundingClientRect().top;

if(pos<window.innerHeight && !started){

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const update=()=>{

count++;

counter.innerText=count+"+";

if(count<target){

setTimeout(update,30);

}else{

if(target===100){

counter.innerText="100%";

}

}

}

update();

});

}

});


/* ===========================
   Back To Top Button
=========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#38bdf8";
topBtn.style.color="#000";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 15px #38bdf8";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
const form = document.getElementById("contact-form");
const status = document.getElementById("status");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_30u1cbm",
            "template_mve6gkq",
            this
        )
        .then(function () {
            status.innerHTML = "✅ Message sent successfully!";
            status.style.color = "#22c55e";
            form.reset();
        })
        .catch(function () {
            status.innerHTML = "❌ Failed to send message.";
            status.style.color = "red";
        });
    });
}