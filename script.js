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


const myUsers = document.querySelector('.my-users');
const usersBtn = document.querySelector('.get-users');
let myArray = [];

async function getUsers() {
    const response = await fetch('users.json');
    const users = await response.json();
    myArray = users;
    // getDisplay();
    return users
}

// function getDisplay() {
//     myArray.forEach((ele) => {
//         myUsers.innerHTML +=  `<p>User is ${ele.username}</p>`
//     })
// }

getUsers().then(user => {
    user.map(ele => {
        myUsers.innerHTML += `<p>User is ${ele.username}</p>`
    })
})

getUsers();

/* My Details */

const myDetails = document.querySelector('.my-details');
const DETAILS_URL = 'https://jsonplaceholder.typicode.com/users/3';
const getDetailsButton = document.querySelector('.get-details');


async function getDetails() {
    const response = await fetch(DETAILS_URL);
    const resolve = await response.json();
    return resolve;
}

getDetailsButton.addEventListener('click', () => {
    getDetails().then(ele => {
        myDetails.innerHTML = `<p>Name: ${ele.name}</p>
                               <p>Username: ${ele.username}</p>
                               <p>Company: ${ele.company.name}</p>
                               <p>Details: </p>
                               <p>Email:${ele.email}</p>
                               <p>Phone: ${ele.phone}</p>
                               <p>Website: ${ele.website}</p>  `
    })
})