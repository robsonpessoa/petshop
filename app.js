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

var updateCards = function() {
    for (let i = 0; i < session.user.cards.length; ++i) {
        let id = "card_" + session.user.cards[i].number;
        let card = document.createElement("div");
        $(card).prop("id", id);
        card.classList.add("card");
        $("#cards").append(card);
        $(card).load("card.html", function() {
            console.log($(".card_number"));
            console.log($(card).find(".card_number"));
            $(card).find(".card_number").text(session.user.cards[i].number);
            $(card).find(".card_owner").text(session.user.cards[i].owner);
            $(card).find(".card_expiration").text(session.user.cards[i].expiration);
        });
    }
}

var updateCart = function() {
    $("#cart_items").children().remove();
        var total = 0;
        for (var i=0; i < session.cart.items.length; ++i) {
            var element = document.createElement("li");
            total += session.cart.items[i].price;
            element.index = i;

            var photo = document.createElement("div");
            $(photo).css("float", "left");
            photo.classList.add("photo_uploader_adjusted");

            var div = document.createElement("div");

            var itemName = document.createTextNode(session.cart.items[i].name);
            var itemPrice = document.createTextNode("R$ " + session.cart.items[i].price);

            div.appendChild(photo);
            div.appendChild(itemName);
            div.appendChild(document.createElement("br"));
            div.appendChild(itemPrice);

            $(element).on("click", function() {
                session.selectedItem = element.index;
            });

            element.appendChild(div);

            $("#cart_items").append(element);
        }

        $("#total_price").text(total);
}

var createOption = function(name, value) {
    var element = document.createElement("option");
    var text = document.createTextNode(name);
    element.value = value;
    element.appendChild(text);
    return element;
} 

var toogleModal = function() {
    if ($("#overlay").length != 0) {
        $("#overlay").remove();
        $(".modal").remove();
    }
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