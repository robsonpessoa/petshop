$("document").ready(function() {
    if (session.productCategoryFilter == undefined)
        $('#items_category').text("Todos");
    else
        $('#items_category').text(session.productCategoryFilter);

    var products = Mock.products(session.productCategoryFilter);

    for (var i = 0; i < products.length; ++i) {
        var element = document.createElement("li");
        element.product = products[i].id;

        var name = document.createElement("h2");
        var photo = document.createElement("div");
        photo.classList.add('photo_medium');
        var price = document.createElement("h3");

        name.appendChild(document.createTextNode(products[i].name));
        price.appendChild(document.createTextNode("R$ " + products[i].price));

        element.appendChild(name);
        element.appendChild(photo);
        element.appendChild(price);

        $(element).on("click", function(e) {
            session.selectedProduct = e.currentTarget.product;
            if ($('.modal').length == 0) {
                var ndiv = document.createElement("div");
                ndiv.classList.add("modal");
                $(ndiv).load("html/product.html");
                $('body').append(ndiv);
            }
            else $('.modal').remove();
            View.toogleModal();
        });

        $("#items").append(element);
    }
});