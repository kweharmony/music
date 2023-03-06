let container = document.querySelector(`.albums`);


for(let i = 0; i < albumsbooks.length; i++ ){
    container.innerHTML += `
        <div class="col mb-3">
            <a href="album.html?b=${i}" class="text-decoration-none">
                <div class="card">
                    <img src="${albumsbooks[i].img}" class="card-img-top" alt="${albumsbooks[i].title}">
                    <div class="card-body">
                        <p class="card-text">${albumsbooks[i].title}</p>
                    </div>
                </div>
            </a>
        </div>
        `
};