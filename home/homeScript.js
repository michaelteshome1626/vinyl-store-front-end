var slideIndex = 0;
var vinyls = [
    ["resources/damn-crop.png", "DAMN.", "Kendrick Lamar", 99.7 ],
    ["resources/flower-bloy-crop.png", "Flower Boy", "Tyler, the Creator", 100 ],
    //["resources/things-fall-apart-crop.png", "Things Fall Apart", "The Roots", 85.5],
    //["resources/illmatic-crop.png", "Illmatic", "Nas", 89.8],
    //["resources/crtl-crop.png.jpg", "Ctrl", "SZA", 100 ],
    ["resources/acid-rap-crop.png", "Acid Rap", "Chance the Rapper", 100],
    ["resources/good-girl-gone-bad-crop.png", "Good Girl Gone Bad", "Rihanna", 100],
    ["resources/late-registration-crop.png", "Late Registration", "Kanye West", 100],
    //["resources/lemonade-crop.png", "Lemonade", "Beyonce", 100],
    ["resources/man-on-the-moon-crop.png", "Man on the Moon", "Kid Cudi", 100],
    ["resources/the-blueprint-crop.png", "The Blueprint", "Jay Z", 100],
    ["resources/the-never-story-crop.png", "The Never Story", "JID", 100],
    ["resources/the-off-season-crop.png", "The Off Season", "J. Cole", 100],
    //["resources/the-slim-shady-lp-crop.jpg", "The Slim Shady LP", "Eminem", 100]
];
// showRecords();
newDisplay();

// function showRecords(){
//     let records = document.getElementsByClassName("vinyl-display");
//     for(let i = 0; i< records.length; i++){
//         records[i].style.display = "none";
//     }

//     if (slideIndex >= records.length){
//         slideIndex = 0;
//     }

//     records[slideIndex].style.display="flex";
//     slideIndex++;
//     setTimeout(showRecords, 5000);
// }

function newDisplay(){
    let space = document.getElementsByClassName("vinyl-image");
    let name = document.getElementsByClassName("album-name");
    let artist = document.getElementsByClassName("artist");
    let records = document.getElementsByClassName("vinyl-display");
    if (slideIndex>= vinyls.length){
        slideIndex = 0;
    }
    records[0].style.display = "flex";
    space[0].src = vinyls[slideIndex][0];
    space[0].style.width = vinyls[slideIndex][3] + "%";
    name[0].innerHTML = vinyls[slideIndex][1];
    artist[0].innerHTML = vinyls[slideIndex][2];
    slideIndex++;
    setTimeout(newDisplay, 5000);
}