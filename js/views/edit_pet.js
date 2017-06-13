$("document").ready(function() {
    View.updatePetBox();
    var pet = session.user.pets[session.selectedPet];

    var races = [];

    $('[name=specie]').on("change", function() {
        if ($('[name=specie]').val() == "Gato")
            races = Mock.catRaces();
        else
            races = Mock.dogRaces();

        $('[name=race]').children().remove();
        $('[name=race]').append(createOption("Selecione uma raça", ""));  

        for (var i = 0; i < races.length; ++i) 
            $('[name=race]').append(createOption(races[i], races[i]));                

        $('[name=race]').prop("disabled", false);
    });

    $('#pet_name_edit').text(pet.name);
    $('[name=specie]').val(pet.specie);

    if (races.length == 0)
        $('[name=race]').prop("disabled", true);

    $('[name=race]').val(pet.race);
    $('[name=birthday]').val(pet.birthday);

    for (var i = 0; i < pet.events.length; ++i) {
        var event = pet.events[i];

        var element = document.createElement("li");
        var serviceName = document.createElement("span");
        
        serviceName.style.fontWeight = "bold";
        $(serviceName).text(event.service.name);
        element.appendChild(serviceName);
        element.appendChild(document.createTextNode("(" 
                + event.date + " - " + event.time + ")"));
        element.appendChild(document.createTextNode(" - R$ " + event.service.price));
        
        $("#edit_pet_events").append(element);
    };
});