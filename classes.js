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

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }
}

class User {
    constructor(name) {
        this._name = name;
        this._pets = [];
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

    addPet(pet) {
        this._pets.push(pet);
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

    login(user, cart) {
        this.user = user;
        this.cart = cart;
        this.selectedPet = 0;   
    }
}