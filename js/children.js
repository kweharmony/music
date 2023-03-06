let container = document.querySelector(`.albums`);


for(let i = 0; i < albumsch.length; i++ ){
    container.innerHTML += `
        <div class="col mb-3">
            <a href="album.html?c=${i}" class="text-decoration-none">
                <div class="card">
                    <img src="${albumsch[i].img}" class="card-img-top" alt="${albumsch[i].title}">
                    <div class="card-body">
                        <p class="card-text">${albumsch[i].title}</p>
                    </div>
                </div>
            </a>
        </div>
        `
};
    