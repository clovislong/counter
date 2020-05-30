let numElement = document.querySelector('html');
let h1 = document.querySelector('h1');
let num;
let button = document.querySelector('button');
let negative = document.querySelectorAll('button')[1];

let tick = new Audio('tick.mp3');
const checkbox = document.querySelector("input[type='checkbox']");

numElement.addEventListener('click', function() {
	if (checkbox.checked) {
		tick.play();
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
