import React, {useState} from 'react'
import sunny from '../../assets/sunny.svg'
import wind from '../../assets/wind.svg'
import pressure from '../../assets/pressure.svg'
import { useParams } from 'react-router'

const Details = ({ weather }) => {

    const [notes, setnotes] = useState('')

    const handleNote = (e) =>{
       setnotes(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();
        localStorage.setItem('notes', JSON.stringify(notes))
    }
       
   const updatedNotes = localStorage.getItem('notes')
    //  const newNotes = updatedNotes ? JSON.parse(updatedNotes)  : {}
    console.log(updatedNotes);

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
                        <img src={sunny} alt="" />
                        <div className="sunny__dets">
                            <h4>Sunny</h4>
                            <p>Cloud Cover - {weather.current.cloudcover}</p>
                            <p>Feels Like - {weather.current.temperature}</p>
                        </div>
                        </div>
                    </div>
                    <div className="notes">
                        <small>Notes</small>
                        <form onSubmit={handleForm}>
                            <input type="text" placeholder='New Note' name="notes" onChange={handleNote} />
                            <button>submit</button>
                        </form>
                        
                        <div className="note__textarea">
                            <button className='close'>X</button>
                            {/* <textarea name="" id="" cols="27" rows="10" value={notes}></textarea> */}
                            <div className="textarea">
                                <input onChange={handleNote} value={notes}  type="text" name="" id="" />
                            </div>
                        </div>
                        
                    </div>
                </div> 

                <div className="each__elements">
                    <div className="Temperature">
                        <small>Temperature</small>
                        <div className="weather__container Temperature__content">
                            <span><img src={weather?.current?.weather_icons} alt="" /> <br /> Hot</span>
                            <h1>{weather?.current?.temperature}&#176;</h1>
                        </div>  
                    </div> 
                    
                    <div className="wind">
                        <small>Wind</small>
                        <div className="wind__content">
                            <div>
                                <img src={wind} alt="" />
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
                                <img src={pressure} alt="" />
                            </div>
                            <div className='pressure__h2'>
                               <h2>{weather?.current?.pressure}</h2>
                            </div>
                        </div>  
                    </div> 
                </div>
                    
            </div>
        </>
    )
}

export default Details
