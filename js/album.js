let container = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`);


let search = new URLSearchParams(window.location.search);




if (albums[search.get(`i`)]){
    let album = albums[search.get(`i`)];
    container.innerHTML = `
    <div class="card mb-3">
        <div class="row">
            <div class="col-md-4">
                <img src="${album.img}" alt="${album.title}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.description}</p>
                    <p class="card-text"><small class="text-muted">Сборник выпущен в ${album.year} году</small></p>
                    <button type="button" class="btn btn-1 btn-secondary">Слушать</button>
                </div>
            </div>
        </div>
    </div>
    `;

    let tracks = album.tracks;

    for(t = 0; t < tracks.length; t++) {
        let track = tracks[t];
        playlist.innerHTML += `
        <li class="track list-group-item d-flex align-items-center">
            <img src="assets/play.png" alt="play" height="30px" class="me-3 img-playing">
            <img src="assets/stop.png" alt="stop" height="30px" class="me-3 img-pause d-none">
            <div class = "w-100">
                <div>${track.title}</div>
                <div class="text-secondary">${track.author}</div>
                <div class="progress " style="height: 3px;">
                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            </div>
            <div class="ms-auto time">${track.time}</div>
            <audio class="audio" src="${track.src}"></audio>
        </li>
        `;




        function setupAudio() {
            let trackNodes = document.querySelectorAll(`.track`); 
            for (let o = 0; o < trackNodes.length; o++) { 
                let node = trackNodes[o];   
                let audio = node.querySelector(`.audio`); 
                let timeNode = node.querySelector(`.time`);
                let track = album.tracks[o]
                node.addEventListener(`click`, function () {
                    if (track.isPlaying) {
                        track.isPlaying = false;
                        audio.pause();
                        let imgPlaying = node.querySelector(`.img-playing`)
                        let imgPause = node.querySelector(`.img-pause`)
                        imgPlaying.classList.remove(`d-none`);
                        imgPause.classList.add(`d-none`);
                    } else {
                        track.isPlaying = true;
                        audio.play();
                        let imgPlaying = node.querySelector(`.img-playing`)
                        let imgPause = node.querySelector(`.img-pause`)
                        imgPlaying.classList.add(`d-none`);
                        imgPause.classList.remove(`d-none`);
                        updateProgress();
                    }
                });
                function updateProgress() {
                    let time = getTime(audio.currentTime)
                    timeNode.innerHTML = time;
                    let allTime = Math.floor(audio.duration);
                    let nowTime =  Math.floor(audio.currentTime);
                    let percent = (nowTime/allTime)*100
                    let progress = node.querySelector(`.progress-bar`)
                    progress.style.width=`${percent}%`
                    if (track.isPlaying) {
                          requestAnimationFrame(updateProgress);
                    }
                }  
        }
    }
    setupAudio();
    function getPercent(per){
        let allTime = track.seconds + (track.minutes*60)
        let nowTime =  Math.floor(per);
        let percent = (nowTime/allTime)*100
        progress.style.width=`${percent}%`
    }
    function getTime(time) {
        let currentSeconds = Math.floor(time);
        let minutes = Math.floor(currentSeconds / 60);
        let seconds = Math.floor(currentSeconds % 60);
        if (minutes < 10){
            minutes = `0` + minutes;
        }
        if (seconds < 10){
            seconds = `0` + seconds;
        }
        return `${minutes}:${seconds}`
    }
}   
} else if(albums[search.get(`c`)]){
    let album = albumsch[search.get(`c`)];
    container.innerHTML = `
    <div class="card mb-3">
        <div class="row">
            <div class="col-md-4">
                <img src="${album.img}" alt="${album.title}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.description}</p>
                    <p class="card-text"><small class="text-muted">Сборник выпущен в ${album.year} году</small></p>
                    <button type="button" class="btn btn-secondary">Слушать</button>
                </div>
            </div>
        </div>
    </div>
    `;

    let tracks = album.tracks;

    for(t = 0; t < tracks.length; t++) {
        let track = tracks[t];
        playlist.innerHTML += `
        <li class="track list-group-item d-flex align-items-center">
            <img src="assets/play.png" alt="play" height="30px" class="me-3 img-playing">
            <img src="assets/stop.png" alt="stop" height="30px" class="me-3 img-pause d-none">
            <div class = "w-100">
                <div>${track.title}</div>
                <div class="text-secondary">${track.author}</div>
                <div class="progress " style="height: 3px;">
                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            </div>
            <div class="ms-auto time">${track.time}</div>
            <audio class="audio" src="${track.src}"></audio>
        </li>
        `;





        let isPlaying = false;


        function setupAudio() {
            let trackNodes = document.querySelectorAll(`.track`); 
            for (let o = 0; o < trackNodes.length; o++) { 
                let node = trackNodes[o];   
                let audio = node.querySelector(`.audio`); 
                let timeNode = node.querySelector(`.time`);
                let track = album.tracks[o]
                node.addEventListener(`click`, function () {
                    if (track.isPlaying) {
                        track.isPlaying = false;
                        audio.pause();
                        let imgPlaying = node.querySelector(`.img-playing`)
                        let imgPause = node.querySelector(`.img-pause`)
                        imgPlaying.classList.remove(`d-none`);
                        imgPause.classList.add(`d-none`);
                    } else {
                        track.isPlaying = true;
                        audio.play();
                        let imgPlaying = node.querySelector(`.img-playing`)
                        let imgPause = node.querySelector(`.img-pause`)
                        imgPlaying.classList.add(`d-none`);
                        imgPause.classList.remove(`d-none`);
                        updateProgress();

                    }
                });
                function updateProgress() {
                    let time = getTime(audio.currentTime)
                    timeNode.innerHTML = time;
                    let allTime = Math.floor(audio.duration);
                    let nowTime =  Math.floor(audio.currentTime);
                    let percent = (nowTime/allTime)*100
                    let progress = node.querySelector(`.progress-bar`)
                    progress.style.width=`${percent}%`
                    if (track.isPlaying) {
                          requestAnimationFrame(updateProgress);
                    }
                }

        }
    }
    setupAudio();
    function getPercent(per){
        let allTime = track.seconds + (track.minutes*60)
        let nowTime =  Math.floor(per);
        let percent = (nowTime/allTime)*100
        progress.style.width=`${percent}%`
    }
    function getTime(time) {
        let currentSeconds = Math.floor(time);
        let minutes = Math.floor(currentSeconds / 60);
        let seconds = Math.floor(currentSeconds % 60);
        if (minutes < 10){
            minutes = `0` + minutes;
        }
        if (seconds < 10){
            seconds = `0` + seconds;
        }
        return `${minutes}:${seconds}`
    }
}   
} else if(albums[search.get(`g`)]){
    let album = albumsgames[search.get(`g`)];
    container.innerHTML = `
    <div class="card mb-3">
        <div class="row">
            <div class="col-md-4">
                <img src="${album.img}" alt="${album.title}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.description}</p>
                    <p class="card-text"><small class="text-muted">Сборник выпущен в ${album.year} году</small></p>
                    <button type="button" class="btn btn-secondary">Слушать</button>
                </div>
            </div>
        </div>
    </div>
    `;

    let tracks = album.tracks;

    for(t = 0; t < tracks.length; t++) {
        let track = tracks[t];
        playlist.innerHTML += `
        <li class="track list-group-item d-flex align-items-center">
            <img src="assets/play.png" alt="play" height="30px" class="me-3 img-playing">
            <img src="assets/stop.png" alt="stop" height="30px" class="me-3 img-pause d-none">
            <div class = "w-100">
                <div>${track.title}</div>
                <div class="text-secondary">${track.author}</div>
                <div class="progress " style="height: 3px;">
                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            </div>
            <div class="ms-auto time">${track.time}</div>
            <audio class="audio" src="${track.src}"></audio>
        </li>
        `;




        let isPlaying = false;


        function setupAudio() {
            let trackNodes = document.querySelectorAll(`.track`); 
            for (let o = 0; o < trackNodes.length; o++) { 
                let node = trackNodes[o];   
                let audio = node.querySelector(`.audio`); 
                let timeNode = node.querySelector(`.time`);
                let track = album.tracks[o]
                node.addEventListener(`click`, function () {
                    if (track.isPlaying) {
                        track.isPlaying = false;
                        audio.pause();
                        let imgPlaying = node.querySelector(`.img-playing`)
                        let imgPause = node.querySelector(`.img-pause`)
                        imgPlaying.classList.remove(`d-none`);
                        imgPause.classList.add(`d-none`);
                    } else {
                        track.isPlaying = true;
                        audio.play();
                        let imgPlaying = node.querySelector(`.img-playing`)
                        let imgPause = node.querySelector(`.img-pause`)
                        imgPlaying.classList.add(`d-none`);
                        imgPause.classList.remove(`d-none`);
                        updateProgress();

                    }
                });
                function updateProgress() {
                    let time = getTime(audio.currentTime)
                    timeNode.innerHTML = time;
                    let allTime = Math.floor(audio.duration);
                    let nowTime =  Math.floor(audio.currentTime);
                    let percent = (nowTime/allTime)*100
                    let progress = node.querySelector(`.progress-bar`)
                    progress.style.width=`${percent}%`
                    if (track.isPlaying) {
                          requestAnimationFrame(updateProgress);
                    }
                }

        }
    }
    setupAudio();
    function getPercent(per){
        let allTime = track.seconds + (track.minutes*60)
        let nowTime =  Math.floor(per);
        let percent = (nowTime/allTime)*100
        progress.style.width=`${percent}%`
    }
    function getTime(time) {
        let currentSeconds = Math.floor(time);
        let minutes = Math.floor(currentSeconds / 60);
        let seconds = Math.floor(currentSeconds % 60);
        if (minutes < 10){
            minutes = `0` + minutes;
        }
        if (seconds < 10){
            seconds = `0` + seconds;
        }
        return `${minutes}:${seconds}`
    }
}   
} else if(albums[search.get(`b`)]){
    let album = albumsbooks[search.get(`b`)];
    container.innerHTML = `
    <div class="card mb-3">
        <div class="row">
            <div class="col-md-4">
                <img src="${album.img}" alt="${album.title}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.description}</p>
                    <p class="card-text font-weight-bold">Слишком большие файлы, поэтому не работает.</p>
                    <p class="card-text"><small class="text-muted">Сборник выпущен в ${album.year} году</small></p>
                    <button type="button" class="btn btn-secondary">Слушать</button>
                </div>
            </div>
        </div>
    </div>
    `;

    let tracks = album.tracks;

    for(t = 0; t < tracks.length; t++) {
        let track = tracks[t];
        playlist.innerHTML += `
        <li class="track list-group-item d-flex align-items-center">
            <img src="assets/play.png" alt="play" height="30px" class="me-3 img-playing">
            <img src="assets/stop.png" alt="stop" height="30px" class="me-3 img-pause d-none">
            <div class = "w-100">
                <div>${track.title}</div>
                <div class="text-secondary">${track.author}</div>
                <div class="progress " style="height: 3px;">
                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
            </div>
            <div class="ms-auto time">${track.time}</div>
            <audio class="audio" src="${track.src}"></audio>
        </li>
        `;





        let isPlaying = false;


        function setupAudio() {
            let trackNodes = document.querySelectorAll(`.track`); 
            for (let o = 0; o < trackNodes.length; o++) { 
                let node = trackNodes[o];   
                let audio = node.querySelector(`.audio`); 
                let timeNode = node.querySelector(`.time`);
                let track = album.tracks[o]
                node.addEventListener(`click`, function () {
                    if (track.isPlaying) {
                        track.isPlaying = false;
                        audio.pause();
                        let imgPlaying = node.querySelector(`.img-playing`)
                        let imgPause = node.querySelector(`.img-pause`)
                        imgPlaying.classList.remove(`d-none`);
                        imgPause.classList.add(`d-none`);
                    } else {
                        track.isPlaying = true;
                        audio.play();
                        let imgPlaying = node.querySelector(`.img-playing`)
                        let imgPause = node.querySelector(`.img-pause`)
                        imgPlaying.classList.add(`d-none`);
                        imgPause.classList.remove(`d-none`);
                        updateProgress();

                    }
                });
                function updateProgress() {
                    let time = getTime(audio.currentTime)
                    timeNode.innerHTML = time;
                    let allTime = Math.floor(audio.duration);
                    let nowTime =  Math.floor(audio.currentTime);
                    let percent = (nowTime/allTime)*100
                    let progress = node.querySelector(`.progress-bar`)
                    progress.style.width=`${percent}%`
                    if (track.isPlaying) {
                          requestAnimationFrame(updateProgress);
                    }
                }

        }
    }
    setupAudio();
    function getPercent(per){
        let allTime = track.seconds + (track.minutes*60)
        let nowTime =  Math.floor(per);
        let percent = (nowTime/allTime)*100
        progress.style.width=`${percent}%`
    }
    function getTime(time) {
        let currentSeconds = Math.floor(time);
        let minutes = Math.floor(currentSeconds / 60);
        let seconds = Math.floor(currentSeconds % 60);
        if (minutes < 10){
            minutes = `0` + minutes;
        }
        if (seconds < 10){
            seconds = `0` + seconds;
        }
        return `${minutes}:${seconds}`
    }
}   
}

