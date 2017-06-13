$('#user_cart').on("click", function () {
    if ($('#float_menu').length == 0) {
        var ndiv = document.createElement("div");
        ndiv.id = "float_menu";
        ndiv.classList.add("modal");
        $(ndiv).load("html/cart.html");
        $('body').append(ndiv);              
    }
    else $('#float_menu').remove();
    View.toogleModal();
});

$('#user_image').on("click", function() {
	View.loadPage("edit_info.html");
});

$('#user_logged span').text(session.user.name);