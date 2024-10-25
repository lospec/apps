const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// add click event to all  os>desktop>a
$$('os desktop a').forEach(function(a) {
	a.addEventListener('click', function(e) {
		if (a.classList.contains('focused')) return;

		$$('os desktop a.focused').forEach(l => l.classList.remove('focused'));
		a.classList.add('focused');
		e.preventDefault();
	});
});

// update clock
setInterval(function() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	$('os taskbar time').innerHTML = strTime;
}, 1000);
