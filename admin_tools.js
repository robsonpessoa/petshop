




$(document).ready(function(){

	$('menu').on('click','#edit_button_menu', function(){
		console.log('you clicked me');
		if($('.edit_button_catalogue_items').length < 1){
		// Button does not exist
			var $input = $('<input class="edit_button_menu_items_remove" type="button" value="-" />');
			$input.appendTo($("menu ul li"));
			
			var $input2 = $('<input class="edit_button_menu_items_modify" type="button" value="modify" />');
			$input2.appendTo($("menu ul li"));
		}
		var $input = $('<input class="edit_button_menu_items_add" type="button" value="+" />');
			$input.appendTo($("menu"));
		
		
	});
	
	$('#prod_items').on('click','#edit_button_catalogue', function(){
		console.log('you clicked me');
		if($('.edit_button_catalogue_items').length < 1){
		// Button does not exist
			var $input = $('<input class="edit_button_catalogue_items_remove" type="button" value="-" />');
			$input.appendTo($("#prod_items ul li"));
			
		}
		
		var $input2 = $('<input class="edit_button_catalogue_items_modify" type="button" value="modify" />');
			$input2.appendTo($("#prod_items ul li"));
		
		var $input = $('<input class="edit_button_prod_items_add" type="button" value="+" />');
			$input.appendTo($("#prod_items"));
		
	});
	

   $("menu").mouseenter(function(){
		if($('#edit_button_menu').length < 1){
			var $input = $('<input id="edit_button_menu" type="button" value="edit" />');
			$input.appendTo($("menu"));
		
		}
	});
	
	$("menu").mouseleave(function(){
		$("#edit_button_menu").remove();
		$(".edit_button_menu_items").remove();
		$(".edit_button_menu_items_add").remove();

	});
	
	$("#prod_items").mouseenter(function(){
		if($('#edit_button_catalogue').length < 1){
			var $input = $('<input id="edit_button_catalogue" type="button" value="edit" />');
			$input.appendTo($("#prod_items"));
		}
		
		
	});
	
	$("#prod_items").mouseleave(function(){
		$("#edit_button_catalogue").remove();
		$(".edit_button_catalogue_items_remove").remove();
		$(".edit_button_prod_items_add").remove();
		$(".edit_button_catalogue_items_modify").remove();

	});
	
	//REMOVE PRODUCT
	$('#prod_items').on('click','.edit_button_catalogue_items_remove', function(e){

		var myparent = $(e.target).parent();
		myparent.remove();
		
	});
	
	$('menu').on('click','.edit_button_menu_items_remove', function(e){

		var myparent = $(e.target).parent();
		myparent.remove();
		
	});
	
	var selectedParent;//GLOBAL PARENT VARIABLE. THERES PROBABLY A BETTER APPROACH TO THIS
	
	
	//UPDATE PRODUCT
	$('#prod_items').on('click','.edit_button_catalogue_items_modify', function(e) {
		
		var div = document.createElement("div");
		div.id = "admin_modify_product_popup";
		$('#pageloader').append(div);
		$(div).load("admin_modify_product_popup.html");

		$("#contactdiv").css("display", "block");
		
		var myparent = $(e.target).parent();
		selectedParent = myparent;
		var prod_name = myparent.children('h2');
		var prod_price = myparent.children('h3');
		
		$("#product_name").val(prod_name.text());
		$("#product_price").val(prod_price.text());
		
		
	});
	
	
	//MISSING DESCRIPTION AND IMG URL UPDATES
	$('#pageloader').on('click','#popup_send', function(e) {
		
		var prod_name = $("#product_name").val();
		var prod_price = $("#product_price").val();



		//ADD NEW NODE INSTEAD OF MODIFYING IT
		if(selectedParent.children('h2').text() == ""){
			alert("new product");
			$("#prod_items").append(selectedParent);
		}
		
		selectedParent.children('h2').text(prod_name);
		selectedParent.children('h3').text(prod_price);
		
		selectedParent = undefined;
		$('#admin_modify_product_popup').remove();
	
	});
	
	$('#pageloader').on('click','#popup_cancel', function(e) {

		$('#admin_modify_product_popup').remove();
	
	});
	
	//ADD NEW PRODUCT
	$('#prod_items').on('click','.edit_button_prod_items_add', function(e) {
		
		var div = document.createElement("div");
		div.id = "admin_modify_product_popup";
		$('#pageloader').append(div);
		$(div).load("admin_modify_product_popup.html");

		$("#contactdiv").css("display", "block");
		
		var myparent = $(e.target).parent();
		selectedParent = myparent;
		var prod_name = myparent.children('h2');
		var prod_price = myparent.children('h3');
		
		var node = document.createElement("li");

        var name = document.createElement("h2");
        var photo = document.createElement("div");
        photo.classList.add('photo_uploader');
        var price = document.createElement("h3");
		
		name.appendChild(document.createTextNode(""));
        price.appendChild(document.createTextNode(""));

        node.appendChild(name);
        node.appendChild(photo);
        node.appendChild(price);
		
		selectedParent = $(node);
	});
	
	//UPDATE MENU
	$("menu").on('click','.edit_button_menu_items_modify', function(e) {
		
		var div = document.createElement("div");
		div.id = "admin_modify_menu_popup";
		$('#pageloader').append(div);
		$(div).load("admin_modify_menu_popup.html");

		$("#contactdiv").css("display", "block");
		
		var myparent = $(e.target).parent();
		selectedParent = myparent;
		var cat_name = myparent.children('button');
		alert(cat_name.text());
		
		$("#category_name").val(cat_name.text());

		
	});
	
	//SEND BUTTON FOR MENU 
	$('#pageloader').on('click','#popup_menu_send', function(e) {
		
		var cat_name = $("#category_name").val();




		//ADD NEW NODE INSTEAD OF MODIFYING IT
		if(selectedParent.children('button').text() == ""){
			alert("new category");
			$("menu").append(selectedParent);
		}
		
		selectedParent.children('button').text(cat_name);
		
		selectedParent = undefined;
		$('#admin_modify_menu_popup').remove();
	
	});
	

});