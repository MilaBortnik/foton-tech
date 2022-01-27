const callButtonElement = document.querySelector('.button-main')
const popupContainer = document.querySelector('.popup')
callButtonElement.addEventListener('click', function() {popupContainer.classList.add('popup-body')})

const middleButtonElement = document.querySelector('.popup-button')
const popupMiddel=document.querySelector('.popup-middle')
middleButtonElement.addEventListener('click', function() {popupMiddel.classList.add('popup-middel-body')})

const finishButtonElement = document.querySelector('.popup-middle-button .popup-button')
const PopupFinish=document.querySelector('.popup-finish')
finishButtonElement.addEventListener('click', function() {PopupFinish.classList.add('popup-finish-body')})

const FooterButtonElement = document.querySelector('.button-footer')
const PopupFooter=document.querySelector('.popup-footer')
FooterButtonElement.addEventListener('click', function(){PopupFooter.classList.add('popup-footer-body')})

