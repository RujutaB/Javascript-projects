window.addEventListener("load", () => {
    let long;
    let lat;

    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection =  document.querySelector('.temperature');
    let temperatureSpan =  document.querySelector('.temperatur span');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=11b36e522b265963a568dbe1d09fddb4`;  

            fetch(api)
            .then(response => {
                return response.json(); 
            })
             .then(data => {        
                //console.log(data);
                const { temperature, summary} = data.currently;    

                //SET DOM ELEMENETS from the API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                
                //Change temperature to Celsius/Farenheit
                temperatureSection.addEventListener('click', () =>{
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C";
                    }else{
                        temperatureSpan.textContent = "F";
                    }
                 })

            }); 
        });

        
    }
});