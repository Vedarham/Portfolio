var h2 = document.querySelectorAll("h2");
var time = gsap.timeline();

time.from(".nav-bar", {
    x: -200,
    opacity: 0,
    delay: 0.8,
    duration: 1,
})
time.from(".social-icons a ", {
    opacity: 0,
    scale: 1.5,
    duration: 0.4,
    stagger: 0.5,

})
time.from(".nav-bar .nav-heads li", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: -0.5,
})

function breakTheTextDown(det) {
    var h1 = document.querySelector(det);
    var h1Text = h1.textContent;

    var splitText = h1Text.split("");

    var clutter = "";

    splitText.forEach(function (e) {
        clutter += `<span>${e}</span>`
    })

    h1.innerHTML = clutter
}
breakTheTextDown(".content h1");
gsap.from(".content h1 span", {
    y: -50,
    duration: 0.6,
    delay: 0.2,
    opacity: 0,
    stagger: 0.2,

})

breakTheTextDown(".content h3");
gsap.from(".content h3 span", {
    y: -50,
    delay: 0.2,
    opacity: 0,
    stagger: 0.2,

})

var cursor = document.querySelector("#cursor")
function mouseFollow() {
    window.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration: 0.4,
        })


    })
}
mouseFollow()

var myself =document.querySelector(".container-h img")
myself.addEventListener("mouseenter",()=>{
    var hero=document.querySelector(".hero")
    var attr = hero.getAttribute("data-image")
    hero.style.backgroundImage = `url(${attr})`
   
})
myself.addEventListener("mouseleave", () => {
    var hero=document.querySelector(".hero")
   hero.style.backgroundImage = "none"
})
var boxes = document.querySelectorAll(".box")
boxes.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        e.style.backgroundColor = "#001c309a"
        var attr = e.getAttribute("data-image")
        cursor.style.width = "450px"
        cursor.style.height = "400px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${attr})`
        cursor.style.filter = `none`
    })
    e.addEventListener("mouseleave", () => {
        e.style.backgroundColor = "transparent"
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
        cursor.style.filter = `blur(${3}px)`
    })
})