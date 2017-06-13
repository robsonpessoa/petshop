var pet = session.user.pets[session.selectedPet];
$("#pet_name").text(pet.name);
$("#pet_specie").text(pet.specie);
$("#pet_race").text(pet.race);

$("#pets").on("click", function() {
    View.loadPage("edit_pet.html");
});

for (var i = 0; i < pet.events.length; ++i) {
	var element = document.createElement("li");
	element.appendChild(document.createTextNode(pet.events[i].service.name + " - " + pet.events[i].date));
	$("#pet_events").append(element);
}