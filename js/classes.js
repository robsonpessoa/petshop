class Card {
    constructor(number,owner, expiration, code) {
        this._id = number;
        this._owner = owner;
        this._expiration = expiration;
        this._code = code;
    }

    get number() {
        return this._id;
    }

    get owner() {
        return this._owner;
    }

    get expiration() {
        return this._expiration;
    }

    get securityCode() {
        return this._code;
    }
}

class Service {
    constructor(id, name, price, description) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get description() {
        return this._description;
    }
}

class PetService {

    constructor(date, time, service) {
        this._date = date;
        this._time = time;
        this._service = service;
    }

    get service() {
        return this._service;
    }

    get date() {
        return this._date;
    }   

    set date(value) {
        this_date = value;
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = time;
    }
}

class Pet {
    constructor(name, specie, race, birthday) {
        this._name = name;
        this._specie = specie;
        this._race = race;
        this._birthday = birthday;
        this._events = []
    }

    get name() {
        return this._name;
    }

    get specie() {
        return this._specie;
    }

    get race() {
        return this._race;
    }

    get birthday() {
        return this._birthday;
    }

    bookEvent(event) {
        this.events.push(event);
    }

    get events() {
        return this._events;
    }
}

class Product {
    constructor(id, name, price, description, units) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._units = units;
        this._sold = 0;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get description() {
        return this._description;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get units() {
        return this._units;
    }

    available(number) {
        return (this._units >= number);
    }

    sell(number) {
        if (this.available(number)) {
            this._units -= number;
            this._sold += number;
        }
    }
}

class Cart {
    constructor() {
        this.items = [];
    }
}

class User {
    constructor(name,email,role) {
        this._name = name;
		this._email = email;
        this._pets = [];
        this._cards = []
		this._role = role;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(value) {
        this._cpf = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get postalCode() {
        return this._postalCode;
    }

    set postalCode(value) {
        this._postalCode = value;
    }

    get pets() {
        return this._pets;
    }

    get cards() {
        return this._cards;
    }

    addCard(card) {
        this._cards.push(card);
    }

    addPet(pet) {
        this._pets.push(pet);
    }

    removeCard(card) {
        // TODO
    }
	
	getRole(){
		return this._role;
	}
	
	setRole(role){ //ADMIN USER OR UNDEFINED
		this._role = role;
	}
}

class Session {
    constructor() {
    }

    get productCategoryFilter() {
        return this._productCategoryFilter;
    }

    set productCategoryFilter(value) {
        this._productCategoryFilter = value;
    }

    get selectedService() {
        return this._service;
    }

    set selectedService(value) {
        this._service = value;
    }

    get selectedCard() {
        return this._selectedCard;
    }

    set selectedCard(value) {
        this._selectedCard = value;
        View.selectCard();
    }
    
    addUserCard(card) {
        this.user.addCard(card);
        View.updateCards();
    }

    addUserPet(pet) {
        this.user.pets.push(pet);
        View.updatePetBox();
        View.refresh();
    }

    login(user, cart) {
        this.user = user;
        this.cart = cart;
        this.selectedPet = 0;
    }

    commit() {
        for (let i = 0; i < this.cart.items.length; ++i)
            this.cart.items[i].sell(this.cart.items[i].user_units);    
        this.cart.items = [];
    }
}

class View {
    constructor() {

    }

    static toogleModal() {
        if ($("#overlay").length != 0) {
            $("#overlay").remove();
            $(".modal").remove();
        }
        else {
            var overlay = document.createElement("div");
            overlay.id = "overlay";
            $(overlay).on("click", function() {
                View.toogleModal();
                $(".modal").remove();
            });
            $("body").append(overlay);
        }
    }

    static selectCard() {
        if (!session.selectedCard) { 
            $(".overlay").remove();
            $(".check").remove();
            $(".card").css("z-index", "0");
            $("#button_finish_buy").prop("disabled", true);
        } else {
            let element_id = "card_" + session.selectedCard.number;
            let card = document.getElementById(element_id);
            $(card).css("z-index", "99");
            let check = document.createElement("div");
            check.classList.add("check");
            $(card).append(check);

            let overlay = document.createElement("div");
            overlay.classList.add("overlay");
            $(overlay).css("height", $("#card_box").height() + "px");
            $(overlay).css("width", $("#card_box").width() + "px");
            // $(overlay).on("click", function() {
            //     View.toogleModal();
            //     $(".modal").remove();
            // });
            $("#card_box").append(overlay);
            $("#button_finish_buy").prop("disabled", false);
        }
    }

    static updateCards() {
        $("#cards").children("div").remove();
        for (let i = 0; i < session.user.cards.length; ++i) {
            let id = "card_" + session.user.cards[i].number;
            let card = document.createElement("div");
            $(card).prop("id", id);
            card.classList.add("card");
            $("#cards").append(card);
            $(card).load("html/card.html", function() {
                $(card).find(".card_number").text(session.user.cards[i].number);
                $(card).find(".card_owner").text(session.user.cards[i].owner);
                $(card).find(".card_expiration").text(session.user.cards[i].expiration);
                $(card).on("click",     function() {
                    if (!session.selectedCard || session.selectedCard.number != session.user.cards[i].number)
                        session.selectedCard = session.user.cards[i];
                    else session.selectedCard = undefined;
                });
            });
        }
    }

    static updateCart() {
        $("#cart_items").children().remove();
            let total = 0;
            for (let i=0; i < session.cart.items.length; ++i) {
                let element = document.createElement("li");
                element.classList.add("vertical_container");
                total += session.cart.items[i].price * session.cart.items[i].user_units;
                element.index = i;

                let photo = document.createElement("div");
                $(photo).css("float", "left");
                photo.classList.add("photo_uploader_adjusted");

                let div = document.createElement("div");
                let div2 = document.createElement("div");

                let itemName = document.createTextNode(session.cart.items[i].name);
                let itemPrice = document.createTextNode("R$ " + session.cart.items[i].price);
                let itemUnits = document.createTextNode("x " + session.cart.items[i].user_units);

                div.appendChild(itemName);
                div.appendChild(document.createElement("br"));
                div.appendChild(itemPrice);
                div2.appendChild(itemUnits);

                $(element).on("click", function() {
                    session.selectedItem = element.index;
                });

                element.appendChild(photo);
                element.appendChild(div)
                element.appendChild(div2);

                $("#cart_items").append(element);
            }

            $("#total_price").text(total);
    }

    static updatePetBox() {
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
                View.loadPage("edit_pet.html");
            });

            $("#my_animals").append(element);
        }
    }

    static refresh() {
        $('#pet-browser').load("html/pet_browser.html");
    }

    static loadPage(page, element) {
        if (!element)
            $("#pageloader").load("html/" + page);
        else $(element).load("html/" + page);
    }

    static authorizedLoadPage(page, element) {
        if (!session.user) {
            session.returnPage = page;
            View.loadPage("signin.html", element);
        } else View.loadPage(page, element);
    }

    static createOption(name, value) {
        var element = document.createElement("option");
        var text = document.createTextNode(name);
        element.value = value;
        element.appendChild(text);
        return element;
    } 

    static toogleModal() {
        if ($("#overlay").length != 0) {
            $("#overlay").remove();
            $(".modal").remove();
        }
        else {
            var overlay = document.createElement("div");
            overlay.id = "overlay";
            $(overlay).on("click", function() {
                View.toogleModal();
                $(".modal").remove();
            });
            $("body").append(overlay);
        }
    }
}