let container = document.querySelector(`.albums`);


for(let i = 0; i < albumsgames.length; i++ ){
    container.innerHTML += `
        <div class="col mb-3">
            <a href="album.html?g=${i}" class="text-decoration-none">
                <div class="card">
                    <img src="${albumsgames[i].img}" class="card-img-top" alt="${albumsgames[i].title}">
                    <div class="card-body">
                        <p class="card-text">${albumsgames[i].title}</p>
                    </div>
                </div>
            </a>
        </div>
        `
};
    