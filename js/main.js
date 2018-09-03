var menu = document.getElementById("hamburger_toggle");

function closeMenu(){
	menu.checked = false;
}

function readMore(){
	document.getElementById('about').scrollIntoView();
}