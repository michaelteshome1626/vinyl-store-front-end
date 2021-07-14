var vinyls = [
    ["resources/all-eyez-on-me.jpg", "All Eyez On Me", "2 Pac"],
    ["resources/eve.jpeg", "Eve", "Rapsody"],
    ["resources/forest-hills-drive.jpg", "2014 Forest Hiils Drive", "J. Cole"],
    ["resources/good-kid-maad-city.jpg", "Good Kid Maad City", "Kendrick Lamar"],
    ["resources/man-on-the-moon.jpg", "Man on the Moon", "Kid Cudi"],
    ["resources/my-beautiful-dark-twisted.jpg", "My Beautiful Dark Twisted Fantasy", "Kanye West"],
    ["resources/take-care.jpg", "Take Care", "Drake"],
    ["resources/the-blueprint.jpg", "The Blueprint ", "Jay Z"],
    ["resources/the-pinkprint.jpg", "The Pinkprint", "Nicki Minaj"]
];

hhDisplay();

function hhDisplay(){
    let visuals = document.getElementsByClassName('vinyl-image');
    let titles = document.getElementsByClassName('album-name');
    let artists = document.getElementsByClassName('artist');

    for (let i = 0; i< visuals.length; i++){
        visuals[i].src = vinyls[i][0];
        titles[i].innerHTML = vinyls[i][1];
        artists[i].innerHTML = vinyls[i][2];        
    }


}