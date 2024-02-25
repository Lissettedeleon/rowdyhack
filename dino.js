let meteor = document.getElementById("meteor");
let text = document.getElementById("text");
let dino = document.getElementById("dino");

let dino_leaving = document.getElementById("dinoleaving");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    meteor.style.top = value * 0.9 + "px"; // Corrected this line
    text.style.top = 80 + value * -0.2 + '%';
    dino.style.left = value * 1.5 + "px";
	
	dino_leaving.style.left = value * .9 + "px";
});
