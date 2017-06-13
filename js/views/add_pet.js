View.updatePetBox();

$("#my_animals_size").text("" + session.user.pets.length);

$("#button_add_pet").on("click", function() {
    var pet_data = $("#form_add_pet").get(0);
    var pet = new Pet(pet_data.elements["name"].value,
                        pet_data.elements["specie"].options[pet_data.elements["specie"].selectedIndex].value,
                        pet_data.elements["race"].options[pet_data.elements["race"].selectedIndex].value,
                        pet_data.elements["birthday"].value);
    session.addUserPet(pet);
});

var races = [];

$('[name=specie]').on("change", function() {
    if ($('[name=specie]').val() == "Gato")
        races = Mock.catRaces();
    else
        races = Mock.dogRaces();

    $('[name=race]').children().remove();
    $('[name=race]').append(View.createOption("Selecione uma raça", ""));  

    for (var i = 0; i < races.length; ++i) 
        $('[name=race]').append(View.createOption(races[i], races[i]));                

    $('[name=race]').prop("disabled", false);
});

if (races.length == 0)
    $('[name=race]').prop("disabled", true);