// Select the modal and overlay elements
let modal = document.querySelector('.modal-wrapper');
let overlay = document.querySelector('.overlay');

// Function to activate the modal
function activeModal() {
    console.log('Modal Activated.'); // Log a message to the console
    modal.classList.add('activeModal'); // Add the 'activeModal' class to the modal element
    overlay.classList.add('activeOverlay'); // Add the 'activeOverlay' class to the overlay element
}

// Function to deactivate the modal
function removeModal() {
    console.log('Modal Deactivated.'); // Log a message to the console
    modal.classList.remove('activeModal'); // Remove the 'activeModal' class from the modal element
    overlay.classList.remove('activeOverlay'); // Remove the 'activeOverlay' class from the overlay element
}
