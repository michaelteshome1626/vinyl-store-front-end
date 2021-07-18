var vinyls = [
    ["resources/hh/all-eyez-on-me.jpg", "All Eyez On Me", "2 Pac"],
    ["resources/hh/eve.jpeg", "Eve", "Rapsody"],
    ["resources/hh/forest-hills-drive.jpg", "2014 Forest Hills Drive", "J. Cole"],
    ["resources/hh/good-kid-maad-city.jpg", "Good Kid Maad City", "Kendrick Lamar"],
    ["resources/hh/man-on-the-moon.jpg", "Man on the Moon", "Kid Cudi"],
    ["resources/hh/my-beautiful-dark-twisted.png", "My Beautiful Dark Twisted Fantasy", "Kanye West"],
    ["resources/hh/take-care.jpg", "Take Care", "Drake"],
    ["resources/hh/the-blueprint.jpg", "The Blueprint ", "Jay Z"],
    ["resources/hh/the-pinkprint.jpg", "The Pinkprint", "Nicki Minaj"],
    ["resources/pop/1989.png", "1989", "Taylor Swift"],
    ["resources/pop/fine-line.png", "Fine Line", "Harry Styles"],
    ["resources/pop/future-sex-love-sounds.jpg", "Future Sex/Love Sounds", "Justin Timberlake"],
    ["resources/pop/melodrama.jpg", "Melodrama", "Lorde"],
    ["resources/pop/off-the-wall.jpg", "Off the Wall", "Michael Jackson"],
    ["resources/pop/purple-rain.jpg", "Purple Rain", "Prince"],
    ["resources/pop/sweetner.jpg", "Sweetener", "Ariana Granade"],
    ["resources/pop/when-we-all-fall-asleep.jpg", "When We All Fall Asleep, Where do We Go", "Billie Eilish"],
    ["resources/pop/whitney.jpg", "Whitney", "Whitney Houston"],
    ["resources/rnb/a-seat-at-the-table.png", "A Seat at the Table", "Solange"],
    ["resources/rnb/after-hours.jpeg", "After Hours", "The Weeknd"],
    ["resources/rnb/anti.png", "Anti", "Rihanna"],
    ["resources/rnb/baduizm.jpg", "baduizm", "Erykah Badu"],
    ["resources/rnb/blond.jpeg", "blond", "Frank Ocean"],
    ["resources/rnb/brown-sugar.jpeg", "Brown Sugar", "D'Angelo"],
    ["resources/rnb/confessions.jpg", "Confessions", "Usher"],
    ["resources/rnb/crazy-sexy-cool.png", "Crazy Sexy Cool", "TLC"],
    ["resources/rnb/ctrl.jpeg", "Ctrl", "SZA"]
];

// var popVinyls = [
//     ["resources/pop/1989.png", "1989", "Taylor Swift"],
//     ["resources/pop/fine-line.png", "Fine Line", "Harry Styles"],
//     ["resources/pop/future-sex-love-sounds.jpg", "Future Sex/Love Sounds", "Justin Timberlake"],
//     ["resources/pop/melodrama.jpg", "Melodrama", "Lorde"],
//     ["resources/pop/off-the-wall.jpg", "Off the Wall", "Michael Jackson"],
//     ["resources/pop/purple-rain.jpg", "Purple Rain", "Prince"],
//     ["resources/pop/sweetner.jpg", "Sweetener", "Ariana Granade"],
//     ["resources/pop/when-we-all-fall-asleep.jpg", "When We All Fall Asleep, Where do We Go", "Billie Eilish"],
//     ["resources/pop/whitney.jpg", "Whitney", "Whitney Houston"]
// ];

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