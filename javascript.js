let numElement = document.querySelector('html');
let h1 = document.querySelector('h1');
let num;
let button = document.querySelector('button');
let negative = document.querySelectorAll('button')[1];

let tick = new Audio('tick.mp3');
const checkbox = document.querySelector("input[type='checkbox']");
const rainbowMode = document.querySelectorAll("input[type='checkbox']")[1];

numElement.addEventListener('click', function() {
	if (checkbox.checked) {
		tick.play();
	}
	if (rainbowMode.checked) {
		let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
		h1.style.backgroundColor = color;
		color = '#' + Math.floor(Math.random() * 16777215).toString(16);
		button.style.backgroundColor = color;
		color = '#' + Math.floor(Math.random() * 16777215).toString(16);
		negative.style.backgroundColor = color;
		color = '#' + Math.floor(Math.random() * 16777215).toString(16);
		let body = document.querySelector('body');
		body.style.backgroundColor = color;
	}
	num = parseInt(h1.innerText);
	num++;
	h1.innerText = num;
});
button.addEventListener('click', function() {
	h1.innerText = -1;
});
negative.addEventListener('click', function() {
	num = parseInt(h1.innerText);
	num -= 2;
	h1.innerText = num;
});
