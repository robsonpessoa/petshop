$("[name=my_animals]").children().remove();
$('[name=my_animals]').append(View.createOption("Selecione um animal", ""));
for (var i=0; i < session.user.pets.length; ++i)
    $('[name=my_animals]').append(View.createOption(session.user.pets[i].name, session.user.pets[i].name));

var selectedPed;

$('[name=my_animals]').on("change", function() {
    var name = $('[name=my_animals]').val();

    for (var i = 0; i < session.user.pets.length; ++i)
        if (session.user.pets[i].name == name)
            selectedPet = session.user.pets[i];
});

$("#button_confirm").on("click", function() {
    selectedPet.bookEvent(new PetService($("[name=date]").val(), $("[name=time]").val(), session.selectedService));
    alert("Agendado com sucesso!");
    View.refresh();
});