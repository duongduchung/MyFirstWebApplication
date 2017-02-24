window.onload= function(){

	var peopleMenu= document.getElementById('people-menu');

	var peoples = document.getElementsByClassName('people');

	peopleMenu.addEventListener('mouseover', function(){

		for (var i = peoples.length - 1; i >= 0; i--) {
			peoples[i].classList.remove('hidden');
		}

	});

	peopleMenu.addEventListener('mouseover', function(){

		for (var i = peoples.length - 1; i >= 0; i--) {
			peoples[i].classList.add('hidden');
		}

	});
}