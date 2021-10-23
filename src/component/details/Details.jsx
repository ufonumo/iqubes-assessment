import React, {useEffect, useState} from 'react'
import wind from '../../assets/wind.svg'
import pressure from '../../assets/pressure.svg'
import Humidity from '../../assets/Humidity.svg'
import Notes from '../notes/Notes'
import hot from '../../assets/hot.svg'
import sunny from '../../assets/sunny.svg'
import { useParams } from 'react-router'

const Details = () => {

  const {name} = useParams()
  const [weather, setweather] = useState('')

  useEffect(() => {
    const GetWeather = async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/weather?q=${name}&appid=${process.env.REACT_APP_APIKEY}&units=metric`);

      let data = await response.json();
      setweather(data);
    };
    GetWeather();
  }, [name]);

    return (
        <>
            <div className="details">
                <div className="container">
                    <h2>{weather?.name}<small>Last updated: {weather?.current?.observation_time}</small></h2>
                </div>

                <div className="details__content">
                    <div className="details__container">
                        <small>Weather</small>
                        <div className="details__container__weather">
                        <img src={sunny} alt='sunny' />
                        <div className="sunny__dets">
                            <h4>{weather?.weather?.map((list) =>(
                                list.description
                            ))}</h4>
                            <p>Cloud Cover - {weather?.clouds?.all}</p>
                            <p>Feels Like - {weather?.main?.feels_like}&#176;</p>
                        </div>
                        </div>
                    </div>
                    <Notes/>
                </div> 

                <div className="each__elements">
                    <div className="Temperature">
                        <small>Temperature</small>
                        <div className="weather__container Temperature__content">
                            <span><img src={hot} alt={weather?.request?.query} /> <br /> {weather?.current?.weather_descriptions}</span>
                            <h1>{weather?.main?.temp}&#176;</h1>
                        </div>  
                    </div> 
                    
                    <div className="wind">
                        <small>Wind</small>
                        <div className="wind__content">
                            <div>
                                <img src={wind} alt="wind" />
                            </div>
                            <div>
                                <p>Speed - {weather?.wind?.speed}</p>
                                <p>Direction - {weather?.wind?.deg}</p>
                                <p>Angle - {weather?.wind?.gust}</p>
                            </div>
                        </div>  
                    </div> 

                    <div className="wind">
                        <small>Pressure</small>
                        <div className="wind__content">
                            <div>
                                <img src={pressure} alt="pressure" />
                            </div>
                            <div className='pressure__h2'>
                               <h2>{weather?.main?.pressure}</h2>
                            </div>
                        </div>  
                    </div> 
                </div>

                <div className="each__elements">
                    <div className="wind">
                        <small>Humidity</small>
                        <div className="wind__content">
                            <div>
                                <img src={Humidity} alt="Humidity" />
                            </div>
                            <div className='pressure__h2'>
                               <h2>{weather?.main?.humidity}</h2>
                            </div>
                        </div>  
                    </div> 

                    <div className="wind">
                        <small>Visibility</small>
                        <div className="wind__content">
                            <div>
                                <img src={pressure} alt="visibility" />
                            </div>
                            <div className='pressure__h2'>
                               <h2>{weather?.visibility}</h2>
                            </div>
                        </div>  
                    </div> 
                </div>
                    
            </div>
        </>
    )
}

export default Details
