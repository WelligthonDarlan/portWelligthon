function openTab(n) {
    links.forEach(n => n.classList.remove("active-link"));
    document.querySelectorAll(".contentLinks").forEach(n => n.classList.remove("active-tab"));
    event.currentTarget.classList.add("active-link");
    document.getElementById(n).classList.add("active-tab")
} 

function typeWriter(n) {
    const t = n.innerHTML.split("");
    n.innerHTML = "";
    t.forEach((t, i) => { setTimeout(() => n.innerHTML += t, 30 * i) })
} 

function isElementInViewport(n) {
    const t = n.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
} 

function startTypeWriterWhenVisible() { isElementInViewport(aboutP) && (typeWriter(aboutP), window.removeEventListener("scroll", startTypeWriterWhenVisible)) } function fixed() {
    navbarDesktop.classList.remove("relative-navbar");
    navbarDesktop.classList.add("fixed-navbar")
} 

function relative() {
    navbarDesktop.classList.remove("fixed-navbar");
    navbarDesktop.classList.add("relative-navbar")
} 

function isElementAtTop(n) {
    var t = n.getBoundingClientRect();
    return t.bottom < 40
} 

function checkNavbar() { isElementAtTop(introduction) ? fixed() : relative() } function copyrightOn() {
    const n = document.querySelector(".iconWpp"), t = document.querySelector(".copyright");
    isCopyrightInViewport(t) ? (n.classList.add("copyrightWppImg"), containerYodaSMS.classList.add("copyrightWppContainer")) : (n.classList.remove("copyrightWppImg"), containerYodaSMS.classList.remove("copyrightWppContainer"))
} 

function isCopyrightInViewport(n) {
    const t = n.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) / 3 * 4 && t.right <= (window.innerWidth || document.documentElement.clientWidth)
} 

function addClass() { cards.forEach((n, t) => { n.style.animation = `fade ${animationDurations[t]} ease`, n.style.opacity = "1" }) } function removeClass() { cards.forEach(n => { n.style.animation = "", n.style.opacity = "0" }) } function isElementAtBottom(n) {
    var t = n.getBoundingClientRect();
    return t.top < window.innerHeight
} 

function checkElement() { isElementAtBottom(document.querySelector("#projects")) ? addClass() : removeClass() } function showSlide(n, t) {
    const r = slides.length, i = n * 3 + t;
    i >= 0 && i < r ? (slides.forEach(n => { n.style.display = "none" }), slides[i].style.display = "block") : console.error("Índice de slide inválido:", i)
} 

function nextSlide(n) {
    slideIndexes[n] = (slideIndexes[n] + 1) % 3;
    showSlide(n, slideIndexes[n])
} 

function prevSlide(n) {
    slideIndexes[n] = (slideIndexes[n] - -2) % 3;
    showSlide(n, slideIndexes[n])
} 

function init() {
    resizeReset();
    animationLoop()
} 

function resizeReset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    for (let n = ((h - particleDistance) % particleDistance + particleDistance) / 2;
        n < h;
        n += particleDistance)for (let t = ((w - particleDistance) % particleDistance + particleDistance) / 2;
            t < w;
            t += particleDistance)particles.push(new Particle(t, n))
} 

function animationLoop() {
    ctx.clearRect(0, 0, w, h);
    drawScene();
    requestAnimationFrame(animationLoop)
} 

function drawScene() {
    for (let n = 0;
        n < particles.length;
        n++)particles[n].update(), particles[n].draw();
    drawLine()
} 

function drawLine() {
    for (let n = 0;
        n < particles.length;
        n++)for (let t = n;
            t < particles.length;
            t++) {
                let r = particles[n].x - particles[t].x, u = particles[n].y - particles[t].y, i = Math.sqrt(r * r + u * u), f = 39.9;
            if (i < particleDistance * 1.5) {
                let r = 1 - i / (particleDistance * 1.5);
                ctx.strokeStyle = `rgba(10,10,10,${r})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(particles[n].x, particles[n].y);
                ctx.lineTo(particles[t].x, particles[t].y);
                ctx.stroke();
                i < f && (ctx.strokeStyle = mouse.color, ctx.beginPath(), ctx.moveTo(particles[n].x, particles[n].y), ctx.lineTo(particles[t].x, particles[t].y), ctx.stroke())
            }
        }
} 

function handleMouseMove(n) {
    const t = canvas.getBoundingClientRect();
    mouse.x = n.clientX - t.left;
    mouse.y = n.clientY - t.top
} 

function handleMouseOut() {
    mouse.x = undefined;
    mouse.y = undefined
} 

function debounce(n, t) {
    let i;
    return function () {
        const r = this, u = arguments;
        clearTimeout(i);
        i = setTimeout(() => { n.apply(r, u) }, t)
    }
} 

function animateScroll() {
    const n = window.scrollY + window.innerHeight * 3.5 / 4;
    target.forEach(t => { n > t.offsetTop ? t.classList.add(classAnimate) : t.classList.remove(classAnimate) })
} 

let links = document.querySelectorAll(".links");

const aboutP = document.querySelector("#description");

window.addEventListener("scroll", startTypeWriterWhenVisible);

const introduction = document.querySelector("#introduction"), navbar = document.querySelector("#navbarDesktop");

window.addEventListener("scroll", checkNavbar);

const closeYodaSMS = document.querySelector("#closeYodaSMS"), containerYodaSMS = document.querySelector("#containerYodaSMS");

closeYodaSMS.addEventListener("click", () => { containerYodaSMS.style.display = "none" });

const body = document.body, 
linkNavbarMobile = document.querySelectorAll(".linkNavbarMobile"), 
menuBtn = document.querySelector("#menuBtn"), 
classNavbarMobile = document.querySelector(".navbar"), 
upArrow = document.querySelector("#upArrow"), 
iconWpp = document.querySelector("#iconWpp");

window.innerWidth <= 480 && (menuBtn.addEventListener("click", 
    () => { menuBtn.classList.toggle("open"), 
        classNavbarMobile.classList.toggle("active"), 
        upArrow.classList.toggle("navDisplayOff"), 
        iconWpp.classList.toggle("navOpacityOff"), 
        body.classList.toggle("overflowOff") }), 
        linkNavbarMobile.forEach(n => { n.addEventListener("click", 
            () => { menuBtn.classList.remove("open"), 
                classNavbarMobile.classList.remove("active"), 
                upArrow.classList.remove("navDisplayOff"), 
                iconWpp.classList.remove("navOpacityOff"), 
                body.classList.remove("overflowOff") }) 
            }));

window.addEventListener("scroll", copyrightOn);

const cards = document.querySelectorAll(".card"), animationDurations = ["0.5s", "0.9s", "1.3s", "0.9s", "1.3s", "1.7s", "1.3s", "1.7s", "2.1s"];
window.addEventListener("scroll", checkElement);

const openCarouselBtn = document.querySelectorAll(".btnCard"), carouselContainer = document.querySelectorAll(".carouselContainer"), slides = document.querySelectorAll(".carouselSlide"), contentCard = document.querySelectorAll(".contentCard"), btnNavbar = document.querySelectorAll(".btnNavbar"), navbarDesktop = document.querySelector("#navbarDesktop");
let slideIndexes = Array.from({ length: openCarouselBtn.length }, () => 0);

openCarouselBtn.forEach((n, t) => { 
    n.addEventListener("click", () => { 
        slideIndexes[t] = 0, showSlide(t, slideIndexes[t]), 
        carouselContainer[t].style.display = "block", 
        body.classList.toggle("overflowOff"), 
        window.innerWidth > 480 ? navbarDesktop.classList.add("slideOn") : window.innerWidth <= 480 && (menuBtn.style.opacity = "0", 
            menuBtn.style.top = "-200px"), 
            contentCard.forEach(n => { n.classList.add("opacityOn"), 
                n.classList.remove("opacityOff") }), 
                upArrow.classList.toggle("navDisplayOff"), 
                iconWpp.classList.toggle("navOpacityOff") }) });


                function checkWindowSize() {
                    if (window.innerWidth <= 480) {
                        body.classList.add("overflowOn");
                    } else {
                        body.classList.remove("overflowOn");
                    }
                }
                
                // Verifica o tamanho da janela ao carregar a página
                window.addEventListener('load', checkWindowSize);

document.querySelectorAll(".carouselBtnClose").forEach(n => { n.addEventListener("click", t => { t.target === n && carouselContainer.forEach(n => { n.style.display = "none", body.classList.remove("overflowOff"), window.innerWidth > 480 ? navbarDesktop.classList.remove("slideOn") : window.innerWidth <= 480 && (menuBtn.style.opacity = "1", menuBtn.style.top = "20px"), contentCard.forEach(n => { n.classList.add("opacityOff"), n.classList.remove("opacityOn") }), upArrow.classList.remove("navDisplayOff"), iconWpp.classList.remove("navOpacityOff") }) }) });
carouselContainer.forEach(n => { n.addEventListener("click", t => { t.target === n && carouselContainer.forEach(n => { n.style.display = "none", body.classList.remove("overflowOff"), window.innerWidth > 480 ? navbarDesktop.classList.remove("slideOn") : window.innerWidth <= 480 && (menuBtn.style.opacity = "1", menuBtn.style.top = "20px"), contentCard.forEach(n => { n.classList.add("opacityOff"), n.classList.remove("opacityOn") }), upArrow.classList.remove("navDisplayOff"), iconWpp.classList.remove("navOpacityOff") }) }) });
document.querySelectorAll(".carouselBtnNext").forEach((n, t) => { n.addEventListener("click", () => nextSlide(t)) });

document.querySelectorAll(".carouselBtnPrev").forEach((n, t) => { n.addEventListener("click", () => prevSlide(t)) });

const canvas = document.querySelector("#canvas"), ctx = canvas.getContext("2d");

let w, h, particles, particleDistance = 40, mouse = { x: undefined, y: undefined, radius: 90, color: "#7b71ffcc" };

class Particle {
    constructor(n, t) {
        this.x = n;
        this.y = t;
        this.size = 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.color = "rgba(37,41,52,1)";
        this.speed = Math.random() * 25 + 5
    } draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill()
    } update() {
        let t = mouse.x - this.x, i = mouse.y - this.y, n = Math.sqrt(t * t + i * i);
        this.color = n < 130 ? mouse.color : "rgba(37,41,52,1)";
        let r = mouse.radius, u = (r - n) / r, f = t / n, e = i / n, o = f * u * this.speed, s = e * u * this.speed;
        if (n < r) this.x -= o, this.y -= s;
        else {
            if (this.x !== this.baseX) {
                let n = this.x - this.baseX;
                this.x -= n / 3
            } if (this.y !== this.baseY) {
                let n = this.y - this.baseY;
                this.y -= n / 3
            }
        }
    }
} 

window.innerWidth > 3200 ? console.log("A largura da janela é maior que 3200px. O script foi interrompido para evitar possivel travamento da pagina.") : (window.addEventListener("mousemove", handleMouseMove), window.addEventListener("mouseout", handleMouseOut));

init();

window.addEventListener("resize", resizeReset);

const target = document.querySelectorAll("[data-animate]"), classAnimate = "on";

animateScroll();

window.addEventListener("scroll", debounce(function () { animateScroll() }, 100));

