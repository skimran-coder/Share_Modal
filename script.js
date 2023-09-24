let modal = document.querySelector('.modal-wrapper');
let overlay = document.querySelector('.overlay');

function activeModal(){
    console.log ('Modal Activated.');
    modal.classList.add('activeModal');
    overlay.classList.add('activeOverlay');
}

function removeModal(){
    console.log ('Modal Deactivated.');
    modal.classList.remove('activeModal');
    overlay.classList.remove('activeOverlay');
}