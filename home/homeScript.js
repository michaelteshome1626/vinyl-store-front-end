var slideIndex = 0;
var vinyls = [
    ["resources/damn-crop.png", "DAMN.", "Kendrick Lamar", 99.7 ],
    ["resources/flower-bloy-crop.png", "Flower Boy", "Tyler, the Creator", 100 ],
    ["resources/lailas-wisdom-crop.png", "Laila's Wisdom", "Rapsody", 87.7],
    ["resources/how-i-got-over-crop.png", "how i got over", "The Roots", 90.2],
    ["resources/ctrl-crop.png", "Ctrl", "SZA", 97],
    ["resources/acid-rap-crop.png", "Acid Rap", "Chance the Rapper", 97.4],
    ["resources/good-girl-gone-bad-crop.png", "Good Girl Gone Bad", "Rihanna", 98.8],
    ["resources/late-registration-crop.png", "Late Registration", "Kanye West", 99],
    ["resources/man-on-the-moon-3-crop.png", "Man on the Moon 3", "Kid Cudi", 88.5],
    ["resources/the-never-story-crop.png", "The Never Story", "JID", 90.75],
    ["resources/the-off-season-crop.png", "The Off Season", "J. Cole", 91.8]
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
    if (vinyls[slideIndex][3]<100){
        space[0].style.alignSelf = "flex-start";
    }
    space[0].src = vinyls[slideIndex][0];
    space[0].style.width = vinyls[slideIndex][3] + "%";
    name[0].innerHTML = vinyls[slideIndex][1];
    artist[0].innerHTML = vinyls[slideIndex][2];
    slideIndex++;
    setTimeout(newDisplay, 5000);
}