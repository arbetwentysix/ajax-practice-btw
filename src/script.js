const card = function ({ title, description, images, id }) {
  return `
    <div class="card w-25">
      <img src="${images}" class="card-img-top" alt="${title}" />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text overflow-hidden" style="text-overflow: ellipsis; white-space: nowrap;">${description}</p>
        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal${id}">
          See details
        </button>
      </div>
    </div>`;
};

const modal = function ({ id, title, description }) {
  return `
    <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>${description}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-light">Save changes</button>
          </div>
        </div>
      </div>
    </div>`;
};

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
