import card from './components/card.js';
import modal from './components/modal.js';

const getAllProducts = function (callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dummyjson.com/products/?limit=10', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.response).products);
    }
  };
  xhr.send();
};

window.addEventListener('load', function () {
  getAllProducts(function (items) {
    let products = '';

    items.forEach(function (item) {
      products += card(item);
      products += modal(item);
    });

    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = products;
  });
});
