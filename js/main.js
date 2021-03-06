const CallButtonElement = document.querySelector('.button-main')
const PopupContainer = document.querySelector('.popup');
if(CallButtonElement) {
    CallButtonElement.addEventListener('click', function() {PopupContainer.classList.add('popup-body')})
}

const MiddleButtonElement = document.querySelector('.popup-button')
const PopupMiddel=document.querySelector('.popup-middle')
MiddleButtonElement.addEventListener('click', function() {
    PopupContainer.classList.remove('popup-body');
    PopupMiddel.classList.add('popup-middle-body')
})

const FinishButtonElement = document.querySelector('.popup-middle-button .popup-button')
const PopupFinish=document.querySelector('.popup-finish')
FinishButtonElement.addEventListener('click', function() {
    PopupMiddel.classList.remove('popup-middle-body');
    PopupFinish.classList.add('popup-finish-body')
})

const FooterButtonElement = document.querySelector('.button-footer')
const PopupFooter=document.querySelector('.popup-footer')
FooterButtonElement.addEventListener('click', function(){
    PopupFooter.classList.add('popup-footer-body')
})

const FinishButtonOk=document.querySelector('.finish-btn .midlle-btn')
FinishButtonOk.addEventListener('click', function() {
    PopupFinish.classList.remove('popup-finish-body')
})

const CloseButton=document.querySelector('.closebtn')
CloseButton.addEventListener('click', function(){
    PopupContainer.classList.remove('popup-body')
    PopupMiddel.classList.remove('popup-middle-body')
})

const CloseButtonMiddle=document.querySelector('.closebtn-middle .closebtn')
CloseButtonMiddle.addEventListener('click', function() {
    PopupMiddel.classList.remove('popup-middle-body')
})

const CloseButtonFinish=document.querySelector('.closebtn-finish .closebtn')
CloseButtonFinish.addEventListener('click', function(){
    PopupFinish.classList.remove('popup-finish-body')
})

const CloseButtonFooter=document.querySelector('.closebtn-footer .closebtn')
CloseButtonFooter.addEventListener('click', function(){
    PopupFooter.classList.remove('popup-footer-body')
})

const FooterButtonOk=document.querySelector('.footer-finish-btn .popup-button')
const FooterFinishButton=document.querySelector('.popup-finish')
FooterButtonOk.addEventListener('click', function(){
    PopupFooter.classList.remove('popup-footer-body')
    FooterFinishButton.classList.add('popup-finish-body')
})

const MiddleButtonBack=document.querySelector('.popup-middle-btn .midlle-btn')
const PopupMiddelBack=document.querySelector('.popup-middle')
const PopupBack=document.querySelector('.popup')
MiddleButtonBack.addEventListener('click', function() {
    PopupMiddelBack.classList.remove('popup-middle-body')
    PopupBack.classList.add('popup-body')
    MiddleButtonBack.classList.add('popup-body')
})