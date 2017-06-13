var session = new Session();

var alert = function(message) {
    let toast = document.createElement("div");
    $(toast).css("display", "none");
    toast.appendChild(document.createTextNode(message));
    toast.classList.add("toast");
    $("body").append(toast);
    $('.toast').fadeIn(400).delay(3000).fadeOut(400);
}

var login = function() {
    var user = Mock.users($("#user_input").val());
    if(!user){
		console.log("Login error");
		alert("LOGIN UNSUCCESSFUL");
	} else {
        var cart = new Cart();
		session.login(user, cart);
		if(user.getRole() == "USER"){
			$("#title_menu").load("html/signed_menu.html");
        
			var div = document.createElement("div");
			div.id = "pet-browser";
			$('#main_menu').append(div);
			$('#pet-browser').load("html/pet_browser.html");
			
		}else if(user.getRole() == "ADMIN"){
			alert("ADMIN LOGIN SUCCESSFUL");
			$("#title_menu").load("html/signed_menu.html");
			var div = document.createElement("div");
			div.id = "admin_prod_browser";
			$('#pageloader').empty();
			$('#pageloader').append(div);
			$(div).load("html/admin_main.html");
		}
		
	}
}

$(document).ready( function() {
    // Configure the title menu when logged in
    $("#button_login").on("click", login);
    $("#btn_signup").on("click", function() {
        View.loadPage("signup.html");
    })

    // Configure the main menu
    $("#menu_pb").on("click", function() {
        session.productCategoryFilter = undefined;
        View.loadPage("product_browser.html");
    });
    $("#menu_products li").on("click", function(e) {
        session.productCategoryFilter = e.target.firstChild.data;
        View.loadPage("product_browser.html");
    })
    // TODO create page of services presentation
    $("#menu_bs").on("click", function () {View.loadPage("book_service.html")});
    $("#menu_services li").on("click", function(e) {
        session.selectedService = Mock.services(e.target.firstChild.data);
        View.loadPage("service.html");
    });

    View.loadPage("product_browser.html");
});