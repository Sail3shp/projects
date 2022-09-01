const userInput = document.querySelector("input");
const button = document.querySelector("button");
var temp = document.querySelector("span")
var desc = document.querySelector(".desc")
button.addEventListener("click",e => {
    requestApi(userInput.value);
});
const apiKey = '6d449ed6b0eef1b2d0bc65d471132f02' ;

function requestApi(city){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(api).then(response => (response.json()))
    .then(data => {
        var descValue = data['weather'][0]['description']
        var tempValue = data['main']['temp'];
        temp.innerHTML = Math.floor(tempValue/10)+'C';
        desc.innerHTML = descValue;

    })
}