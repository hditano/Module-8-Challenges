const getColors = document.querySelector('.get-colors');
const URL = 'https://apis.scrimba.com/hexcolors/?count=25'
const colors = document.querySelector('.colors');


getColors.addEventListener('click', async () => {
    const response = await fetch(URL);
    const resolve = await response.json();
    let colors = resolve.colors;
    processColor(colors);
    
})

function processColor(color) {
    let colorArray = color.map(colors => { 
        return `<div class="my-grid" style="background-color: ${colors.value}"></div>`}).join('');

    colors.innerHTML += `${colorArray}`;

}

// get Photos
const getPhotos = document.querySelector('.get-photos');
const URL_PHOTOS = 'https://picsum.photos/v2/list';
const photosHTML = document.querySelector('.my-photos');
let photosArray = [];

async function getPhotosFetch() {
    
    const response = await fetch(URL_PHOTOS);
    const resolve = await response.json();
    // randomPhoto = Math.floor(Math.random() * photosArray.length);
    return resolve;
}


getPhotos.addEventListener('click', () => {
    getPhotosFetch().then(user => {
        user.map(ele => {
            photosHTML.innerHTML += `<div class="photos">
                                    <img class="photo-info" src="${ele.download_url}">
                                    <p class="author-info">Author: ${ele.author}</p>
                                    </div>`
        })
    });
})