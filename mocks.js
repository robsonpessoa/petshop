class Mock {

	static products(filter) {
		var product1 = new Product(1, "Brinquedo Cachorro", 12.10, "O melhor brinquedo para o seu cachorro");
	    var product2 = new Product(2, "Brinquedo Gato", 17.50, "O melhor brinquedo para o seu gato");

	    product1.category = "Brinquedo";
	    product2.category = "Brinquedo";

	    var product3 = new Product(3, "Coleira Cachorro", 32.99, "A melhor coleira para o seu cachorro");
	    var product4 = new Product(4, "Coleira Gato", 23.79, "A melhor coleira para o seu gato");

	    product3.category = "Coleira";
	    product4.category = "Coleira";

	    var product5 = new Product(5, "Ração Cachorro", 68.59, "A melhor ração para o seu cachorro");
	    var product6 = new Product(6, "Ração Gato", 36.69, "A melhor ração para o seu gato"); 

	    product5.category = "Ração";
	    product6.category = "Ração";

	    var list = [product1, product2, product3, product4, product5, product6];

	    if (!filter)
	    	return list;
	    else {
	    	var result = [];
	    	for (var i = 0; i < list.length; ++i)
	    		if (list[i].category == filter)
	    			result.push(list[i]);
	    	return result;
	    }
	}

	static services(filter) {
		var service1 = new Service(1, "Banho", 12.10, "O melhor brinquedo para o seu cachorro");
	    var service2 = new Service(2, "Tosa", 17.50, "O melhor brinquedo para o seu gato");
	    var service3 = new Service(3, "Veterinário", 32.99, "A melhor coleira para o seu cachorro");
	    var service4 = new Service(4, "Passeio", 23.79, "A melhor coleira para o seu gato");

	    var list = [service1, service2, service3, service4];

	    if (!filter)
	    	return list;
	    else {
	    	var result = [];
	    	for (var i = 0; i < list.length; ++i)
	    		if (list[i].name == filter)
	    			return list[i];
	    }
	}

	static catRaces() {
		return ["Nenhuma", "Persa"];
	}

	static dogRaces() {
		return ["Nenhuma", "Pitbull", "Poodle"];
	}
	
	static users(filter) {
		var admin = new User("admin","admin@petshop.com","ADMIN");

		
		var user1 = new User("John Doe","john@doe.com","USER");

		user1.addCard(new Card("1234 5678 9012 3456", "John Doe", "12/20", 225));
		
		var user2 = new User("Jane Smith","jane@smith.com","USER");
		
		var list = [admin, user1, user2]
		
		if (!filter)
	    	return list;
	    else {
	    	var result = [];
	    	for (var i = 0; i < list.length; ++i)
	    		if (list[i].email == filter)
	    			return list[i];
	    }
		
	}
}