// Remove Set Interval
// Look into callbacks after image has been added, kick off timer with set timeout
// At end of set timeout "Fire a few things"


function show_buttons() {
    document.getElementById('radios').style.display = "block";
    document.getElementById('start').style.display = "none";
}


function selector(choice){
    if (choice == 'all'){
        $("img").removeClass("loaded");

        $(".cat-box").children().remove();
        $(".cat-box").append('<img onload="imgLoaded()" src="http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&' + new Date().getTime() + '" />');
    }
    else{
        document.getElementById('imgDisplay').src = "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category="+ choice + "&" + new Date().getTime()
    }
}
function imgLoaded(choice) {
    $("img").addClass("loaded");
    startFunction("all");

}


var myVar;

function startFunction(choice){
    clearInterval(myVar);
    myVar = setInterval(selector, 2400, choice);
}

function myStopFunction() {
    clearInterval(myVar);
}


function showMore(){
    document.getElementById('hiddenValues').style = "display: block;"
    document.getElementById('myButton').style = "display: none;"
}

startFunction('all')