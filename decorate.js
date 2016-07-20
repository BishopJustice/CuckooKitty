function show_buttons() {
    document.getElementById('radios').style.display = "block";
    document.getElementById('start').style.display = "none";
}


function selector(choice){
    if (choice == 'all'){
        document.getElementById('imgDisplay').src = "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&" + new Date().getTime()
        
    }
    else{
        document.getElementById('imgDisplay').src = "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category="+ choice + "&" + new Date().getTime()
    }
}


var myVar;

function startFunction(choice){
    clearInterval(myVar);
    myVar = setInterval(selector, 2500, choice);
}

function myStopFunction() {
    clearInterval(myVar);
}


function showMore(){
    document.getElementById('hiddenValues').style = "display: block;"
    document.getElementById('myButton').style = "display: none;"
}

startFunction('all')