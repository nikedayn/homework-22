import WeatherForm from './WeatherForm/WeatherForm';

import s from './weather_page.module.scss';
import mainPageBackground from '../assets/img/Background-image.png';

import {useRef, useState} from 'react'
import axios from 'axios';

const WeatherPage = () => {
    const refs = {
        btnRef: useRef(null),
        inputRef: useRef(null),
        cityRef: useRef(null)
    }

    const [city, setCity] = useState("");

    const changeCity = (cityCandidate) => {
        setCity(cityCandidate)
    }

    const getWheather = () => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=e386a6909ee04b179d7102820232101&q=${city}&aqi=no`)
            .then(res => {
                console.log(res.data.current.temp_c);
                refs.cityRef.current.textContent = `Temperature in ${city} is ${res.data.current.temp_c} °C`;
            })
        refs.inputRef.current.value = null;
    }   

    return (
        <main>
            <div className={`${s.container} container`}>
                <WeatherForm getWheather={getWheather} changeCity={changeCity} btnRef={refs.btnRef} inputRef={refs.inputRef} cityRef={refs.cityRef} firstHeadline={'Enter a city to find out the weather in it'} secondHeadline={'Here you can see weather for you city'}/>
                <img src={mainPageBackground} alt="main_page_background" className={s.main_page_background}/>
            </div>
        </main>
    )
}

export default WeatherPage;