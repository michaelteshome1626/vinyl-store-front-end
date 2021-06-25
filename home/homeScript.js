var slideIndex = 0;
showRecords();

function showRecords(){
    let records = document.getElementsByClassName("vinyl-display");
    for(let i = 0; i< records.length; i++){
        records[i].style.display = "none";
    }

    if (slideIndex >= records.length){
        slideIndex = 0;
    }

    records[slideIndex].style.display="flex";
    slideIndex++;
    setTimeout(showRecords, 5000);
}