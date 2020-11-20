$(document).ready(function() {
    // function showDiv() {
    //     document.getElementById("popup").style.display = "block";
    // }

    var counter = 1;
    setInterval(function() {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if(counter > 5){
            counter = 1;
        }
    }, 3000);
});