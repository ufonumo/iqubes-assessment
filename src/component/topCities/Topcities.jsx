import React, {useEffect, useState} from 'react'
import hot from '../../assets/hot.svg'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Favourite from '../favourite/Favourite';

const Topcities = () => {
    const cities = ['Tokyo', 'Delhi', 'Shanghai', 'Sao Paulo', 'Mexico City'];
    const [citiesData, setStateCitiesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favCity, setfavCity] = useState([])

    useEffect(() => {  
        const GetTopCities = () => {
            cities.forEach( async city => {
            await axios.get(`${process.env.REACT_APP_URL}/current?access_key=${process.env.REACT_APP_APIKEY}&query=${city}`)
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
        setfavCity(entry)
        localStorage.setItem("entry", JSON.stringify(entry));
        // Save allEntries back to local storage
        existingEntries.push(entry);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        
    }

    if (loading) {
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        )
    } else {

    return (
        <>
            <div className="nofav top__cities">
                <h6>
                <img src="https://img.icons8.com/material/20/F05454/dashboard-layout.png" alt='top cities' className='çity__img'/>
                    Top Cities
                </h6>
            </div>    

            <div className="weather">
                {citiesData.map((list, index) => (
                    <>
                        <div className="weather__container">
                            <span><img src={hot} alt="weather" /></span>
                            <p className='star' onClick={() => SaveFavourites(list[1]?.name, list[2]?.temperature )}> 
                                <img src="https://img.icons8.com/windows/20/222831/star--v1.png" alt='star'/>
                            </p>                       
                            <Link to={`/details/${list[1].name}`} key={index}>
                                <h1>{list[2]?.temperature}&#176;</h1>
                                <p>{list[0]?.query}</p>                        
                            </Link>

                        </div>
                    </>
                ))}
            </div> 
        </>
    )}
}

export default Topcities
