class Cart {
    constructor() {
        this.items = [];
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

class Session {
    constructor(user, cart) {
        this.user = user;
        this.cart = cart;
    }

    configure() {
        $('#user_cart').on("click", function () {
            if ($('#float_menu').length == 0) {
                var ndiv = document.createElement("div");
                ndiv.id = "float_menu";
                $('body').append(ndiv);
                $('#float_menu').load("cart.html");
            }
            else $('#float_menu').remove();
        });
        $('#user_logged span').text(session.user.name);    
    }
}

var session;

var login = function() {
    var user = new User("Usuário Mock");
    var cart = new Cart();
    session = new Session(user, cart);

    $("#title_menu").load("signed_menu.html");
        
    var div = document.createElement("div");
    div.id = "pet-browser";
    $('#main_menu').append(div);
    $('#pet-browser').load("pet_browser.html");

    session.configure();
}

var loadPage = function(page) {
    $("#pageloader").load(page);
}


$(document).ready( function() {
    // Configure the title menu when logged in
    $("#title_menu").on("click", login);

    // Configure the main menu
    $("#menu_pb").on("click", function() {loadPage("product_browser.html")});
    $("#menu_bs").on("click", function () {loadPage("book_service.html")});
});