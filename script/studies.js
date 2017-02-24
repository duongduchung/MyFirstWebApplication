window.onload = function(){

	var tds = document.getElementsByTagName('td');
	var trs = document.getElementsByTagName('tr');

	for(var i=0; i< tds.length ; i++){

		console.log(tds[i].innerText);

		tds[i].addEventListener('click', function(){
			alert(this.innerText);
		});
		
	}

	for (var i = trs.length - 1; i >= 0; i--) {

		trs[i].addEventListener('click', function(){
			console.log(this.innerHTML);
		})

	}

	trs[0].addEventListener('mouseover', function(){
		alert('Micky was here! ');

	});	
}