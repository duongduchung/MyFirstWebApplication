window.onload = function(){

	var tds = document.getElementsByTagName('td');
	var trs = document.getElementsByTagName('tr');
	var myTd = document.getElementById('my-td');
	for(var i=0; i< tds.length ; i++){

		console.log(tds[i].innerText);

		tds[i].addEventListener('click', function(event){
			event.preventDefault();

			var highlighted = document.getElementsByClassName('highlighted');

			for (var i = highlighted.length - 1; i >= 0; i--) {
				highlighted[i].classList.remove('highlighted');
			}
			this.classList.add('highlighted');
		});
		
		tds[i].addEventListener('mouseover', function(event){
			event.preventDefault();
			myTd.innerHTML = '<span class="my-td-span">' + this.innerText +'</span>';
		});

		tds[i].addEventListener('mouseout', function(event){
			event.preventDefault();
			myTd.innerHTML = '';
		});
	}

	for (var i = trs.length - 1; i >= 0; i--) {

		trs[i].addEventListener('click', function(event){
			event.preventDefault();
			console.log(this.innerHTML);
		})

	}

	/*trs[0].addEventListener('mouseover', function(){
		alert('Micky was here! ');

	});*/


}