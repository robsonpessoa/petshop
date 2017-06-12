var session = new Session();

var login = function() {
    var user = new User("Usuário Mock");
    user.email = "user@user.com";
    var cart = new Cart();
    session.login(user, cart);

    $("#title_menu").load("signed_menu.html");
        
    var div = document.createElement("div");
    div.id = "pet-browser";
    $('#main_menu').append(div);
    $('#pet-browser').load("pet_browser.html");
}

var refresh = function() {
    $('#pet-browser').load("pet_browser.html");
}

var loadPage = function(page) {
    $("#pageloader").load(page);
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

$(document).ready( function() {
    // Configure the title menu when logged in
    $("#title_menu").on("click", login);

    // Configure the main menu
    $("#menu_pb").on("click", function() {
        session.productCategoryFilter = undefined;
        loadPage("product_browser.html");
    });
    $("#menu_products li").on("click", function(e) {
        session.productCategoryFilter = e.target.firstChild.data;
        loadPage("product_browser.html");
    })
    $("#menu_bs").on("click", function () {loadPage("book_service.html")});
});