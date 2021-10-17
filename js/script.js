

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const sezioneSx = document.querySelector(".sezione-sx");
console.log(sezioneSx)

const currentIndex = 0;

for(i = 0; i < 5; i++) {
    const img = items[i]
    const tit = title[i]
    const txt = text[i]
    let classUsare ='';

    if( i === currentIndex){
        classUsare= 'active';
    }
    const div = `<div class="contenitoreimmagine ${classUsare}"><img src="${img}" alt="0"><div class="testo"><h3 class="titolo-immagine">${tit}</h3><p class="descrizione-immagine">${txt}</p></div></div>`
    sezioneSx.innerHTML += div
}

//attivazioni pulsanti su giu

const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');



btnDown.addEventListener("click", function () {
    const active = document.querySelector('.active')
    active.classList.remove('active')
    active.nextElementSibling.classList.add('active');
    
    

}); 

btnUp.addEventListener("click", function () {
    const active = document.querySelector('.active')
    active.classList.remove('active')
    active.previousSibling.classList.add('active')
    

}); 

