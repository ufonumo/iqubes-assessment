import React from 'react'
import sunny from '../../assets/sunny.svg'
import wind from '../../assets/wind.svg'
import hot from '../../assets/hot.svg'
import pressure from '../../assets/pressure.svg'

const Details = () => {
    return (
        <>
            <div className="details">
                <div className="container">
                    <h2>Oakland Gardens, United States of America <small>Last updated: 22:09</small></h2>
                </div>

                <div className="details__content">
                    <div className="details__container">
                        <small>Weather</small>
                        <div className="details__container__weather">
                        <img src={sunny} alt="" />
                        <div className="sunny__dets">
                            <h4>Sunny</h4>
                            <p>Cloud Cover - 100</p>
                            <p>Feels Like - 34</p>
                        </div>
                        </div>
                    </div>
                    <div className="notes">
                        <small>Notes</small>
                        <div>
                            <input type="text" placeholder='New Note' name="notes" id="" />
                        </div>
                        
                        <div className="note__textarea">
                            <h4 className='close'>X</h4>
                            <textarea name="" id="" cols="27" rows="10"></textarea>
                        </div>
                        
                    </div>
                </div> 

                <div className="each__elements">
                    <div className="Temperature">
                        <small>Temperature</small>
                        <div className="weather__container Temperature__content">
                            <span><img src={hot} alt="" /> <br /> Hot</span>
                            <h1>37&#176;</h1>
                        </div>  
                    </div> 
                    
                    <div className="wind">
                        <small>Wind</small>
                        <div className="wind__content">
                            <div>
                                <img src={wind} alt="" />
                            </div>
                            <div>
                                <p>Speed - 5mph</p>
                                <p>Direction - NE</p>
                                <p>Angle - 4</p>
                            </div>
                        </div>  
                    </div> 

                    <div className="wind">
                        <small>Pressure</small>
                        <div className="wind__content">
                            <div>
                                <img src={pressure} alt="" />
                            </div>
                            <div className='pressure__h2'>
                               <h2>20</h2>
                            </div>
                        </div>  
                    </div> 
                </div>
                    
            </div>
        </>
    )
}

export default Details
