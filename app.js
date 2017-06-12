var session = new Session();

var login = function() {
    var user = Mock.users($("#user_input").val());
    if(!user){
		console.log("Login error");
		alert("LOGIN UNSUCCESSFUL");
	}else{

        console.log(user);
		
    var cart = new Cart();
		session.login(user, cart);
		if(user.getRole() == "USER"){
			$("#title_menu").load("signed_menu.html");
        
			var div = document.createElement("div");
			div.id = "pet-browser";
			$('#main_menu').append(div);
			$('#pet-browser').load("pet_browser.html");
			
		}else if(user.getRole() == "ADMIN"){
			alert("ADMIN LOGIN SUCCESSFUL");
			$("#title_menu").load("signed_menu.html");
			var div = document.createElement("div");
			div.id = "admin_prod_browser";
			$('#pageloader').empty();
			$('#pageloader').append(div);
			$(div).load("admin_main.html");
		}
		
	}
}

var refresh = function() {
    $('#pet-browser').load("pet_browser.html");
}

var loadPage = function(page, element) {
    if (!element)
        $("#pageloader").load(page);
    else $(element).load(page);
}

var authorizedLoadPage = function(page, element) {
    if (!session.user) {
        session.returnPage = page;
        loadPage("signin.html", element);
    } else loadPage(page, element);
}

var updatePetBox = function() {
    $("#my_animals").children().remove();
    for (var i=0; i < session.user.pets.length; ++i) {
        var element = document.createElement("li");
        element.index = i;

        var photo = document.createElement("div");
        photo.classList.add("photo_uploader_adjusted");
        var petName = document.createTextNode(session.user.pets[i].name);

        element.appendChild(photo);
        element.appendChild(petName);

        $(element).on("click", function() {
            session.selectedPet = element.index;
            $("#pageloader").load("edit_pet.html");
        });

        $("#my_animals").append(element);
    }
}

var createOption = function(name, value) {
    var element = document.createElement("option");
    var text = document.createTextNode(name);
    element.value = value;
    element.appendChild(text);
    return element;
} 

var toogleModal = function() {
    if ($("#overlay").length != 0)
        $("#overlay").remove();
    else {
        var overlay = document.createElement("div");
        overlay.id = "overlay";
        $(overlay).on("click", function() {
            toogleModal();
            $(".modal").remove();
        });
        $("body").append(overlay);
    }
}

$(document).ready( function() {
    // Configure the title menu when logged in
    $("#button_login").on("click", login);
    $("#btn_signup").on("click", function() {
        loadPage("signup.html");
    })

    // Configure the main menu
    $("#menu_pb").on("click", function() {
        session.productCategoryFilter = undefined;
        loadPage("product_browser.html");
    });
    $("#menu_products li").on("click", function(e) {
        session.productCategoryFilter = e.target.firstChild.data;
        loadPage("product_browser.html");
    })
    // TODO create page of services presentation
    $("#menu_bs").on("click", function () {loadPage("book_service.html")});
    $("#menu_services li").on("click", function(e) {
        session.selectedService = Mock.services(e.target.firstChild.data);
        loadPage("service.html");
    });

    loadPage("product_browser.html");
});