$("document").ready(function() {
    View.updateCart();
    View.updateCards();

    let addCard = function() {
        var card_data = $("#form_card").get(0);
        let number = card_data.elements["number"].value;
        let owner = card_data.elements["owner"].value;
        let expiration = card_data.elements["expiration"].value;
        let code = card_data.elements["code"].value;

        let result = new Card(number, owner, expiration, code);

        session.addUserCard(result);
        alert("Cartão cadastrado com sucesso");
        return result;
    }

    $("#button_add_card").on("click", function() {
        addCard();
    });

    $("#button_add_select").on("click", function() {
        let card = addCard();
        session.selectedCard = card;
    });

    $("#button_finish_buy").on("click", function() {
        alert("Pedido realizado com sucesso!");
        View.loadPage("product_browser.html");
        session.commit();
    });
});