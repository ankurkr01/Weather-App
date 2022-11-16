const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.data_hide');


const getInfo = async(event)=>{
    event.preventDefault();
   let cityval = cityName.value;
    if(cityval===""){
        city_name.innerText = 'Plz Write Name Before Search';
        data_hide.classList.add('data_hide');
    }else{
       try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b80b0aea13d7b4e59fa3e7c0734d3e64`
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_val.innerHTML = arrData[0].main.temp;
        temp_status.innerHTML = arrData[0].weather[0].main;

        const tempmood = arrData[0].weather[0].main;
        // condition to check sunny or cloudy
        if(tempmood=='Clear'){
            temp_status.innerHTML = `<i class="fa-solid fa-sun" style='color: #eccc68'></i>`
        }else if(tempmood=='Clouds'){
            temp_status.innerHTML = `<i class="fa-solid fa-cloud" style='color:#f1f2f6'></i>`
        }else if(tempmood=='Rain'){
            temp_status.innerHTML = `<i class="fa-solid fa-raindrops" style='color:#a4b0be'></i>`
        }else if(tempmood=='Haze'){
            temp_status.innerHTML = `<i class="fa-solid fa-sun-haze" style='color:#f1f2f6'></i>`
        }else{
            temp_status.innerHTML = `<i class="fa-solid fa-sun" style='color: #eccc68'></i>`
        }

        data_hide.classList.remove('data_hide');


       }catch{
        city_name.innerText = 'Plz Enter City Name Properly';
        data_hide.classList.add('data_hide');

       }

    }


}

submitBtn.addEventListener('click',getInfo);