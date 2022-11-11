let ePowerMenu;
let ePowerMenuShadow;

window.onload = function() {
	ePowerMenu = document.getElementById('power-menu');
	ePowerMenuShadow = document.getElementById('powermenu-shadow');
	ePowerMenu.onclick = function(e) {
		let powerButtons = document.getElementsByClassName('power-menu-button');
		for (var i = 0; i < powerButtons.length; i++) {
			powerButtons[i].setAttribute('isVisible', true);
		}
		ePowerMenuShadow.setAttribute('isVisible', true);
	}
}

window.onclick = function(e) {
	if(!e.target.classList.contains('powermenu-image')) {
		let powerButtons = document.getElementsByClassName('power-menu-button');
		for (var i = 0; i < powerButtons.length; i++) {
			powerButtons[i].setAttribute('isVisible', 'no');
		}
		ePowerMenuShadow.setAttribute('isVisible', 'no');
	}
}