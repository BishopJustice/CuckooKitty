function show_buttons() {
    document.getElementById('radios').style.display = "block";
    document.getElementById('start').style.display = "none";
}


function selector(choice){
    if (choice == 'all'){
        document.getElementById('imgDisplay').src = "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&" + new Date().getTime()
        console.log(document.getElementById('imgDisplay').src)
}
    else{
        document.getElementById('imgDisplay').src = "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category="+ choice + "&" + new Date().getTime()
        console.log(document.getElementById('imgDisplay').src)}
}


var myVar;

function startFunction(choice){
    clearInterval(myVar);
    myVar = setInterval(selector, 3000, choice);
}

function myStopFunction() {
    clearInterval(myVar);
}

startFunction('all')