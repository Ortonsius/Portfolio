gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    autoRaf: true,
});

// Nav animation
const showAnim = gsap.from('nav', { 
    yPercent: -100,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    onUpdate: self => {
        self.direction === 1 ? showAnim.reverse() : showAnim.play();
    }
});

// Load screen animation
let loadScreen = document.querySelector('.load-screen p');
let chars = loadScreen.textContent.split('');
loadScreen.innerHTML = '';
chars.forEach(e => {
    loadScreen.innerHTML += `<div>${e}</div>`;
})
document.querySelectorAll('.load-screen p div').forEach((el,idx) => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(el,{
        yPercent: 150,
        opacity: 0,
        duration: 1.2,
        delay: idx * 0.02,
        ease: 'power4.inOut',
    }).to(el,{
        yPercent:-150,
        opacity:0,
        duration:1.2,
        ease: 'power4.inOut',
    })
})

gsap.to('.load-screen',{
    duration: 1.6,
    yPercent: -100,
    delay:3,
    ease: 'power4.inOut',
    onComplete:() => {
        document.querySelector(".load-screen").remove();
    }
})
