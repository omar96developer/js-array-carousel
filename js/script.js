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

// SELEZIONO ELEMENTI HTML

const containerImg = document.querySelector(".container-image");
const aside = document.querySelector(".aside");

let currentIndex = 0;

//LAVORO SU ELEMNETI SELEZIONATI A CUI ASSGNERO HTML NUOVO CON RELATIVE IMMAGINI E TESTI

for (let i = 0; i < items.length; i++) {

    const prevImg = items[i];
    const imgAtt = items[i];
    const titleimg = title[i];
    const testo = text[i];

    let prev = " ";
    let imgatt = " ";
    let contimg = " ";

    if (i === currentIndex){ 
        prev = "active" 
    }
    if (i === currentIndex) { 
        imgatt = "active" 
    }
    if (i === currentIndex) { 
        contimg = "active" 
    }

    const previou = ` <div class="prevv ${prev}"><img src="${prevImg}" alt="img ${i}"></div>`;
    const immagine = ` <img class="${imgatt}" src="${imgAtt}" alt="img ${i}">`;
    const contesto = ` <div class="descrizione ${contimg}">
                            <div class="title">
                                   ${titleimg}
                             </div>
    
                            <div class="text">
                                   ${testo}
                            </div>
                        </div>
                       `
    aside.innerHTML += previou;
    containerImg.innerHTML += immagine;
    containerImg.innerHTML += contesto;
}

//FRECCIE SU E GIU

const frecciaSu = document.querySelector(".arrow-up");
const frecciaGiu = document.querySelector(".arrow-down");

frecciaSu.addEventListener("click", function () {

    const prevatt = aside.querySelector(".active");
    const previmg = containerImg.querySelector(".active")
    const prevtesto = containerImg.querySelector(".container-image>.descrizione.active");

    prevatt.classList.remove("active");
    previmg.classList.remove("active");
    prevtesto.classList.remove("active");

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    const antimg = aside.querySelectorAll(".prevv");
    const imgImmagine = containerImg.querySelectorAll("img");
    const antBox = containerImg.querySelectorAll(".descrizione")

    const newAnteprima = antimg[currentIndex];
    const newImmagine = imgImmagine[currentIndex];
    const newBox = antBox[currentIndex];

    newAnteprima.classList.add("active");
    newImmagine.classList.add("active");
    newBox.classList.add("active");
});

frecciaGiu.addEventListener("click", function () {

    const prevatt = aside.querySelector(".active");
    const previmg = containerImg.querySelector(".container-image> img.active");
    const prevtesto = containerImg.querySelector(".container-image>.descrizione.active");

    prevatt.classList.remove("active");
    previmg.classList.remove("active");
    prevtesto.classList.remove("active");

    currentIndex++;

    if (currentIndex > items.length - 1) {
        currentIndex = 0;
    }

    const antimg = aside.querySelectorAll(".prevv");
    const imgImmagine = containerImg.querySelectorAll("img");
    const antBox = containerImg.querySelectorAll(".descrizione")
    
    const newAnteprima = antimg[currentIndex];
    const newImmagine = imgImmagine[currentIndex];
    const newBox = antBox[currentIndex];

    newAnteprima.classList.add("active");
    newImmagine.classList.add("active");
    newBox.classList.add("active");
});




