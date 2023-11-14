function userHasFinishDataCompletion(event) {
    event.preventDefault();

    let nameSurname = document.getElementById("nameSurname").value;
    let km = document.getElementById("km").value;
    let favoriteColor = document.getElementById("favourite_color").value;

    let random = Math.floor(Math.random() * 41);

    let password = name + surname + favoriteColor + random;

    document.getElementById("user_password").innerHTML = password;

    // Tolgo il form, una volta che l'utente ha finito di completarlo
    document.getElementById("form_data_input").classList.add("d-none");
    // E faccio comparire la card con la password generata
    document.getElementById("card_password").classList.remove("d-none");
}

