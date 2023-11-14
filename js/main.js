function userHasFinishDataCompletion(event) {
    event.preventDefault();

    let nameSurname = document.getElementById("name_surname").value;

    let km = document.getElementById("km").value;

    let age = document.getElementById("age").value;

    let priceTicket = km * 0.21;

    if (age == 'Minorenne') {
        priceTicket -= priceTicket * 0.2;
    } else if (age == 'Anziano') {
        priceTicket -= priceTicket * 0.4;
    }

    priceTicket = priceTicket.toFixed(2);

    document.getElementById("price_ticket").innerHTML = priceTicket;

    console.log(priceTicket);

    let ticket = document.getElementById('ticket');
    ticket.classList.remove('d-none');

    let ticketCard = document.getElementById('ticket_card');
    ticketCard.classList.remove('d-none');

    document.getElementById('user_name').innerHTML = nameSurname;

    document.getElementById('type_ticket').innerHTML = age;

    document.getElementById('car').innerHTML = Math.floor(Math.random() * 10) + 1;;

    document.getElementById("cp").innerHTML = Math.floor(Math.random() * 10000) + 90001;

}

