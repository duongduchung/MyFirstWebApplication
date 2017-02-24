$(function() {
	

	$('tr').each(function(){
		$(this).on('click', function(){
			console.log(this.innerHTML);
		});
	});    


	$('td').each(function(){
		$(this).on('mouseover', function(){
			$('#my-td').html('<span class="my-td-span">'
			 + $(this).text() 
			 +'</span>');
		});

		$(this).on('click', function(){

			$('.highlighted').removeClass('highlighted');

			$(this).addClass('highlighted');
		});
	});    


});