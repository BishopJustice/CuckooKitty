var base = "http://thecatapi.com/api/images/get?size=med&type=jpg,png&category=";
var key = ['hats', 'space', 'funny', 'sunglasses', 'boxes', 'caturday', 'ties', 'dream', 'kittens', 'sinks'];

var choices = {
    all: "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&",
    hats: "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category=hats&",
    boxes: "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category=boxes&",
    ties: "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category=ties&",
    sunglasses: "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&category=sunglass"
}


setInterval(function(choice = "ties") {
    document.getElementById('imgDisplay').src = "http://thecatapi.com/api/images/get?size=med&type=jpg,png&api_key=MTAzMzIw&" + new Date().getTime();
}, 3000);