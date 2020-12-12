"use strict";

const homeButtons = document.querySelectorAll('.home__button');
const modalOut = document.querySelector('.modal');
const modalIn = document.querySelector('.modal__inner');

function handleHomeButton(e) {
  const button = e.currentTarget;
  const card = button.closest('.home');
  const imgSrc = card.querySelector('.home__img--js').src;
  const desc = card.dataset.description;
  modalIn.innerHTML = `
    <img src="${imgSrc}" alt="chosen interior">
    <p>${desc}</p>
  `;
  modalOut.classList.add('open');
}
homeButtons.forEach(button => {
  button.addEventListener('click', handleHomeButton);
});
function closeModal() {
  modalOut.classList.remove('open');
}
modalOut.addEventListener('click', function(e) {
  const isOpen = !e.target.closest('.modal__inner');
  if(isOpen) {
    closeModal();
  }
});
window.addEventListener('keydown', function(e) {
  if(e.key === 'Escape') {
    closeModal();
  }
});

