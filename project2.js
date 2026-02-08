const button = document.getElementById("btn");
const cityname = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const temp = document.getElementById("temp");
async function getdata(lat,long) {
  
    const prom = await fetch(`https://api.weatherapi.com/v1/current.json?key=cccd4cefcabb4582bb9125729250110&q=${lat},${long}&aqi=no`)
    return await prom.json();
    
} 
async function gotloc(position)
{
   const res= await getdata(position.coords.latitude,position.coords.longitude); 
   console.log(res); 
   cityname.innerText = `${res.location.name}, ${res.location.region}, ${res.location.country}`;
   cityTime.innerText = res.location.localtime;
   temp.innerText = res.current.temp_c;
}
function failgetting()
{
    console.log("there was some error");
}
button.addEventListener("click", async ()=>{
const res = navigator.geolocation.getCurrentPosition(gotloc,failgetting) 

});