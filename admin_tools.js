




$(document).ready(function(){

	$('menu').on('click','#edit_button_menu', function(){
		console.log('you clicked me');
		if($('.edit_button_catalogue_items').length <= 0){
		// Button does not exists
			var $input = $('<input class="edit_button_catalogue_items" type="button" value="+-" />');
			$input.appendTo($("menu ul li"));
		}
		
		
	});
	

   $("menu").mouseenter(function(){
		var $input = $('<input id="edit_button_menu" type="button" value="edit" />');
        $input.appendTo($("menu"));

	});
	
	$("menu").mouseleave(function(){
		$("#edit_button_menu").remove();
		$(".edit_button_catalogue_items").remove();

	});
	
	$("#prod_items").mouseenter(function(){
		var $input = $('<input id="edit_button_catalogue" type="button" value="edit" />');
        $input.appendTo($("#prod_items"));
		
	});
	
	$("#prod_items").mouseleave(function(){
		$("#edit_button_catalogue").remove();

	});
	
	
	
	

});