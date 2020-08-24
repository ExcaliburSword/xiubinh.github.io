let userButton = document.querySelector("button");
let heading = document.querySelector("h1");
let heading_text = heading.textContent;

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	heading.textContent = heading_text + ", " + storedName;
}

function setUserName() {
	let name = prompt("Please input your name.");
	if (!name || name === null) {
		setUserName();
	} else {
		localStorage.setItem('name', name);
		heading.textContent = heading_text + ", " + name;
	}
	
}

userButton.onclick = function() {
	setUserName();
}