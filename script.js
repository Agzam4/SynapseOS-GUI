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

	var filesize = 7;
	var fs = document.getElementsByClassName('file');
	for (var i = 0; i < fs.length; i++) {
		var f = fs[i];
		f.style.left = (f.getAttribute('x') * filesize) + "vh";
		f.style.top = (f.getAttribute('y') * filesize) + "vh";
		f.style.width = filesize + "vh";
		f.style.height = filesize + "vh";
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

setInterval(function() {
	var filesize = 7;
	var fs = document.getElementsByClassName('file');
	fs[0].setAttribute('x', Math.floor(document.body.clientWidth*3/document.body.clientHeight));
	fs[1].setAttribute('x', Math.floor(document.body.clientWidth*8/document.body.clientHeight));
	fs[2].setAttribute('x', Math.floor(document.body.clientWidth*6/document.body.clientHeight));
	for (var i = 0; i < fs.length; i++) {
		var f = fs[i];
		f.style.left = (f.getAttribute('x') * filesize) + "vh";
		f.style.top = (f.getAttribute('y') * filesize) + "vh";
		f.style.width = filesize + "vh";
		f.style.height = filesize + "vh";
	}
}, 1000 / 60);