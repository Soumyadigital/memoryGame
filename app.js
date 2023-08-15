const cardArray = [
    {
        name:'fries',
        img: 'img/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name:'icecream',
        img: 'img/ice-cream.png',
    },
    {
        name:'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name:'pizza',
        img: 'img/pizza.png',
    },
    {
        name:'fries',
        img: 'img/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name:'icecream',
        img: 'img/ice-cream.png',
    },
    {
        name:'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name:'pizza',
        img: 'img/pizza.png',
    }
];

cardArray.sort(()=> 0.5 -Math.random());

const gridDisplay=document.querySelector('#grid');
const resultDisplay = document.getElementById('result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createCards(){
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src','img/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard);
        gridDisplay.appendChild(card);
    }
}

createCards();  

function checkMatch() {
   const cards = document.querySelectorAll('img');
   
    console.log('check for match');     
    if (cardsChosenIds[0]==cardsChosenIds[1]) {
        alert('You clicked the same card');
        cards[cardsChosenIds[0]].setAttribute('src','img/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src','img/blank.png');
    }
   if (cardsChosen[0]==cardsChosen[1] && cardsChosenIds[0]!=cardsChosenIds[1]) {
    alert('Match');
    cards[cardsChosenIds[0]].setAttribute('src','img/white.png')
    cards[cardsChosenIds[1]].setAttribute('src','img/white.png')
    cards[cardsChosenIds[0]].removeEventListener('click',flipcard);
    cards[cardsChosenIds[1]].removeEventListener('click',flipcard); 
    
    cardsWon.push(cardsChosen)
}else{
    cards[cardsChosenIds[0]].setAttribute('src','img/blank.png');
    cards[cardsChosenIds[1]].setAttribute('src','img/blank.png');
    alert('Sorry Try again');
}
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds=[];

    if (cardsWon.length==cardArray.length/2) {
        resultDisplay.innerHTML='Congratulations You Won'
    }
   
}
function flipcard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    // console.log('clicked',cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)

    if (cardsChosen.length ===2){
        setTimeout (checkMatch,500);
    }}
