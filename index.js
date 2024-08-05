const apiKey = "dad028519fe7b7dcf1905d231fbc2198";
const unit = "metric";
const humidityTxt = document.querySelector("p.humidity");
const windSpeed = document.querySelector("p.wind");
const temp = document.querySelector("h1");
const cityName = document.querySelector("h2.city");
const image = document.querySelector("img.weather-icon");


document.querySelector("button").addEventListener("click",async ()=>{
    const city = document.querySelector("input").value;
    if(city){
        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`);
            const data = await res.json();
            windSpeed.textContent = data["wind"]["speed"] + "miles/h";
            humidityTxt.textContent = data["main"]["humidity"] + "%";
            temp.textContent = Math.ceil(Number(data["main"]["temp"]))+ "°c";
            cityName.textContent = data["name"] +"," +  data["sys"]["country"];
            const temp1 = Math.ceil(Number(data["main"]["temp"]));
            if(temp1<=15){
                image.src = "snow.png";
            }
            else {
                image.src = "drizzle.png";
            }
        }catch(err){
            alert(err);
        }
    }
    document.querySelector("input").value = "";
})


