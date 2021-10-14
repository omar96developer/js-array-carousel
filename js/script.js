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


  
const Container = document.querySelector('.img-box');
const Container2 = document.querySelector('.text-img');




let currentIndex = 0;

/* for (let i = 0; i < items.length; i++) {

    const imgContainer = items[i]; 
    const textimg = title[i]

    let classUsare ='';

    if( i === 0){
        classUsare= 'active';
    }
    
    const tagimg = `<img  class="${classUsare}" src="${imgContainer}" alt="immagine${i}">`;
    const testo = `<div class="text-img"><p>${textimg}</p></div>`
    Container.innerHTML += tagimg + testo;
} */
for (let i = 0; i < items.length; i++) {

    const imgContainer = items[i]; 
    

    let classUsare ='';

    if( i === 0){
        classUsare= 'active';
    }
    
    const tagimg = `<img  class="${classUsare}" src="${imgContainer}" alt="immagine${i}">`;
    
    Container.innerHTML += tagimg;

    
}

//attivazioni pulsanti su giu

const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');

btnUp.addEventListener("click", function () {

    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
      };
    const imgTags = Container.querySelectorAll("img");
    const newActiveImage = imgTags[currentIndex];
    newActiveImage.classList.add("active");
    
});

btnDown.addEventListener("click", function () {

    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");
    currentIndex++;
    if (currentIndex > items.length - 1) {
        currentIndex = 0;
      }
    const imgTags = Container.querySelectorAll("img");
    const newActiveImage = imgTags[currentIndex];
    newActiveImage.classList.add("active");
    
});
