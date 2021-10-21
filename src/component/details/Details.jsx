import React, {useState} from 'react'
import sunny from '../../assets/sunny.svg'
import wind from '../../assets/wind.svg'
import pressure from '../../assets/pressure.svg'
import Humidity from '../../assets/Humidity.svg'
import Notes from '../notes/Notes'

const Details = ({ weather }) => {


    return (
        <>
            <div className="details">
                <div className="container">
                    <h2>{weather?.request?.query}<small>Last updated: {weather?.current?.observation_time}</small></h2>
                </div>

                <div className="details__content">
                    <div className="details__container">
                        <small>Weather</small>
                        <div className="details__container__weather">
                        <img src={weather?.current?.weather_icons} alt={weather?.current?.weather_icons} />
                        <div className="sunny__dets">
                            <h4>{weather?.current?.weather_descriptions}</h4>
                            <p>Cloud Cover - {weather?.current?.cloudcover}</p>
                            <p>Feels Like - {weather?.current?.temperature}</p>
                        </div>
                        </div>
                    </div>
                    <Notes/>
                </div> 

                <div className="each__elements">
                    <div className="Temperature">
                        <small>Temperature</small>
                        <div className="weather__container Temperature__content">
                            <span><img src={weather?.current?.weather_icons} alt={weather?.request?.query} /> <br /> {weather?.current?.weather_descriptions}</span>
                            <h1>{weather?.current?.temperature}&#176;</h1>
                        </div>  
                    </div> 
                    
                    <div className="wind">
                        <small>Wind</small>
                        <div className="wind__content">
                            <div>
                                <img src={wind} alt="wind" />
                            </div>
                            <div>
                                <p>Speed - {weather?.current?.wind_speed}</p>
                                <p>Direction - {weather?.current?.wind_dir}</p>
                                <p>Angle - {weather?.current?.wind_degree}</p>
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
                               <h2>{weather?.current?.pressure}</h2>
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
                               <h2>{weather?.current?.humidity}</h2>
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
                               <h2>{weather?.current?.visibility}</h2>
                            </div>
                        </div>  
                    </div> 
                </div>
                    
            </div>
        </>
    )
}

export default Details
