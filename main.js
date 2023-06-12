const hand = document.querySelector('#hand');
const wish = document.querySelector('.wish');
const next = document.querySelector('.next');
const text = document.querySelector('.text');
const dance = document.querySelector('.dance');
const kuki = document.querySelector('.lastText');
hand.addEventListener('click',()=>{
    wish.classList.toggle('wish-hidden')
    next.classList.toggle('next-hidden')
    hand.classList.add('wavingHand');
    text.classList.add('textHidden');
})
next.addEventListener('click',()=>{
    dance.classList.toggle('danceHidden');
    kuki.classList.toggle('lastHidden');
    next.classList.add('nextPage');
    wish.classList.add('goodLuck');

})
