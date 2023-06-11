'use strict';
/*El ejercicio consiste en desarrollar una aplicación web que contiene un listado de personajes de Disney todo el planeta, que nos permite marcar y desmarcar los personajes como favoritos y guardarlos en localStorage.*/
// QUERYSELECTOR
//const  = document.querySelector('.');
const ulMainElement = document.querySelector('.js__listMain');

// VARIABLES GLOBALES, OBJETOS Y ARRAYS VACÍOS
/*urlAPI = 'api.disneyapi.dev/character?pageSize=50'
urlAPIDeLasProfes = //dev.adalab.es/api/disney?pageSize=15*/
const urlAPI = 'https://api.disneyapi.dev/character?pageSize=50';
let cardListApi = [];

// FETCH
/*fetch()
.then()
.then()*/

fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    cardListApi = data.data;
    renderCardList(cardListApi);
  });

// FUNCIONES
const renderOneCard = (card) => {
  const htmlCard = 
  `<li class="card">
    <div class="card__imgContainer">
        <img
            src="${card.imageUrl}"
            alt="${card.name}"
            class="characterImg"
        />
    </div>
    <div class="card__nameContainer">
      <i class="fa-solid fa-heart hidden"></i>
      <i class="fa-solid fa-heart-crack hidden"></i>
      <i class="fa-regular fa-heart"></i>
      <p>${card.name}</p>
    </div>
  </li>`;
  return htmlCard;
};

const renderCardList = (dataList) => {
    for (const card of dataList) {
        ulMainElement.innerHTML += renderOneCard(card);
    };
};
// EVENTOS

//# sourceMappingURL=main.js.map
