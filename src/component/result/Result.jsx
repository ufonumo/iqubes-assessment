import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import hot from '../../assets/hot.svg'
import Favourite from '../favourite/Favourite'
import Topcities from '../topCities/Topcities'
import axios from 'axios';

const Result = ({weather}) => {

    const [citiesData, setStateCitiesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favCity, setfavCity] = useState([])

    useEffect(() => {  
        const GetTopCities = () => {
            ['Tokyo', 'Delhi', 'Shanghai', 'Sao Paulo', 'Mexico City'].forEach( async city => {
            await axios.get(`${process.env.REACT_APP_URL}/weather?q=${city}&appid=${process.env.REACT_APP_APIKEY}&units=metric`)
                .then(response => {
                    let data = response.data;
                    setStateCitiesData((citiesData) => [...citiesData, Object.values(data)])
                })
            });
            setLoading(false);
        }   
        GetTopCities();

    }, []);
    
    useEffect(() => {    
        SaveFavourites();
   }, [])

    const SaveFavourites = (city, temp) => {
          // Parse any JSON previously stored in allEntries
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];
        var entry = {city, temp};
        console.log(entry);
        setfavCity((favCity) => [...favCity, Object.values(entry)])
        localStorage.setItem("entry", JSON.stringify(entry));
        // Save allEntries back to local storage
        existingEntries.push(entry);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    }

    const RemoveFavourites = (fav) => {
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];
        var entry = {fav};
        localStorage.setItem("entry", JSON.stringify(entry));
        // Save allEntries back to local storage
        existingEntries.splice(fav, 1);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));

    }

    return (
        <>
            {
                weather.cod === "400"  ? 
                  ''
                :
                <div className="weather">
                    {/* {weather.map((list, index) =>( */}
                            <div className="weather__container">
                                <span><img src={weather?.current?.weather_icons ?  weather?.current?.weather_icons : hot}  alt={weather?.request?.query} /></span>
                                <p className='star' value={weather} onClick={ () => SaveFavourites(weather?.name, weather?.main.temp)}> 
                                    <img src="https://img.icons8.com/windows/20/222831/star--v1.png" alt='star'/>
                                </p>                        
                                <Link to={`/details/${weather?.name}`}>
                                    <h1> {weather?.main?.temp}&#176;</h1>
                                    <p>{weather?.name}</p>                        
                                </Link>
                            </div>
                    {/* ))} */}
                        
                </div>
             }
             <Favourite
                RemoveFavourites={RemoveFavourites}
                favCity={favCity}
              />
             <Topcities 
                citiesData={citiesData}
                // GetTopCities={GetTopCities}
                loading={loading}
                SaveFavourites={SaveFavourites}
             />
        </>
    )
}

export default Result
