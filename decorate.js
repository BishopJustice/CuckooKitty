// 

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



// var choices = {
//     all: "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&",
//     hats: "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category=hats&",
//     boxes: "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category=boxes&",
//     ties: "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category=ties&",
//     sunglasses: "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category=sunglass"
// }

// function cat_pics() {
//     document.getElementById('imgDisplay').src = "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&" + new Date().getTime();
//     setInterval(cat_pics(), 3000);
// }

// function timer(choice){
//             clearInterval(myVar);
//             var myVar = setInterval(function(){ selector(choice) }, 2000);
//             return myVar
//     }





// function selector(){
//     if (document.getElementById('all').checked){
//         console.log("it works")
//     }
//     else if (document.getElementById('hats').checked){
//         console.log("it works")
//     }
// }


// function rotate() {
//     if (document.getElementById('all').checked) {
//         setInterval(function() {
//             document.getElementById('imgDisplay').src = choices.all + new Date().getTime();
//             console.log(document.getElementById('imgDisplay').src)
//         }, 3000);
//     } else if (document.getElementById('hats').checked) {
//         setInterval(function() {
//             document.getElementById('imgDisplay').src = choices.hats + new Date().getTime();
//             console.log(document.getElementById('imgDisplay').src)
//         }, 3000);
//     } else if (document.getElementById('ties').checked) {
//         setInterval(function() {
//             document.getElementById('imgDisplay').src = choices.ties + new Date().getTime();
//             console.log(document.getElementById('imgDisplay').src)
//         }, 3000);
//     } else if (document.getElementById('sunglasses').checked) {
//         setInterval(function() {
//             document.getElementById('imgDisplay').src = choices.sunglasses + new Date().getTime();
//             console.log(document.getElementById('imgDisplay').src)
//         }, 3000);
//     }
// }

// if(document.getElementById('all').checked) {
//   rotate()
// }else if(document.getElementById('hats').checked) {
//   //Female radio button is checked
// }else if(document.getElementById('ties').checked) {
//   //Female radio button is checked
// }else if(document.getElementById('sunglasses').checked) {
//   //Female radio button is checked
// }