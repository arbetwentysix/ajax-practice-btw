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

export default card;
