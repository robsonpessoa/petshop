View.updateCart();
$(".finish_button").on("click", function() {
    View.loadPage("finish_buy.html");
    View.toogleModal();
});