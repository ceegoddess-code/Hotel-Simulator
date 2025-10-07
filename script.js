function guest (name, room, duration) {
    this.name = name;
    this.room = room;
    this.duration = duration;
}

const guest = [
    new Guest ("Aaliyah High", 101, 3),
    new Guest ("Meaux Mellow", 102, 1),
    new Guest("Antonio Davis", 103, 2)

    class Guest {
    constructor(name, room, duration) {
        this.name = name;
        this.room = room;
        this.duration = duration;

    }


    
];

const form= document.getEconstlementById('checkin-form');
const guestcards = document.getElementById('guest-cards');
const errorMessage = document.getElementById('error-message');

function renderGuests() {
    guestcards.innerHTML = '';
    guest.forEach(guest => {
        const card = document.createElement('div');
        card.className = 'guest-card';
        card.innerHTML = `
            <h3>${guest.name}</h3>
            <p>Room: ${guest.room}</p>
            <p>Duration: ${guest.duration} nights</p>
        `;
        guestcards.appendChild(card);
    });
}

function isRoomAvailable(room) {
    return !guest.some(guest => guest.room === roomNumber);
}


const form = document.getElementById('checkInForm');
const guestList = document.getElementById('guestList');
const errorMessage = document.getElementById('errorMessage');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('guestName').value;
    const room = parseInt(document.getElementById('roomNumber').value);
    const stay = parseInt(document.getElementById('stayDuration').value);

    guest.foreach(guest => {
    const listItem = document.createElement('li');
    listItem.classList.add('guest-entry');
    listItem.innerHTML = `
    <div><strong>${guest.name}</strong></div>
   <div> Room ${guest.room} </div>
    <div> ${duration} nights ${duration > 1 ? 's' : ''} </div>
    `;
    guestList.appendChild(listItem);
    form.reset();
});


    if (isRoomAvailable(room)) {
        errorMessage.textContent = 'Room ${rooom} is already occupied. Please choose another room.';    

        return;
    }

    if (!guestname || !room || !duration) {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    const newGuest = new Guest(guestname, room, duration);
    guest.push(newGuest);
    renderGuests();
    form.reset();
    errorMessage.textContent = '';
});

renderGuests(); 
