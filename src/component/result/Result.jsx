import React from 'react'
import { Link } from 'react-router-dom'
import hot from '../../assets/hot.svg'
import Favourite from '../favourite/Favourite'
import Topcities from '../topCities/Topcities'

const Result = ({weather}) => {
    const SaveFavourites = (fav) => {
        localStorage.setItem('FavData', JSON.stringify(fav))
        var FavData = localStorage.getItem('FavData');
  
        console.log(JSON.parse(FavData));
    }
    return (
        <>
            {
                weather.success === false  ? 
                  ''
                :
                <div className="weather">
                    {/* {weather.map((list, index) =>( */}
                            <div className="weather__container">
                                <span><img src={weather?.current?.weather_icons ?  weather?.current?.weather_icons : hot}  alt={weather?.request?.query} /></span>
                                <p className='star' value={weather} onClick={ () => SaveFavourites(weather?.current?.query)}> 
                                    <img src="https://img.icons8.com/windows/20/222831/star--v1.png" alt='star'/>
                                </p>                        
                                <Link to={`/details/${weather?.location?.name}`}>
                                    <h1> {weather?.current?.temperature}&#176;</h1>
                                    <p>{weather?.request?.query}</p>                        
                                </Link>
                            </div>
                    {/* ))} */}
                        
                </div>
             }
             <Favourite />
             <Topcities />
        </>
    )
}

export default Result
