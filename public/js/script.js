// Handle reservation form submission
async function handleReservation(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reservationData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time'),
        guests: parseInt(formData.get('guests'))
    };

    try {
        const response = await fetch('/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservationData)
        });

        if (response.ok) {
            window.location.href = '/Reserva confirmada.html';
        } else {
            const error = await response.json();
            alert('Error: ' + error.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while making the reservation');
    }
}

// Handle waiting list form submission
async function handleWaitingList(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const waitingListData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        guests: parseInt(formData.get('guests')),
        status: 'pending'
    };

    try {
        const response = await fetch('/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(waitingListData)
        });

        if (response.ok) {
            window.location.href = '/Fila confirmada.html';
        } else {
            const error = await response.json();
            alert('Error: ' + error.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while joining the waiting list');
    }
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', handleReservation);
    }

    const waitingListForm = document.getElementById('waitingListForm');
    if (waitingListForm) {
        waitingListForm.addEventListener('submit', handleWaitingList);
    }
});
