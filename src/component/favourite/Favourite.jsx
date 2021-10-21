import React from 'react'
import Topcities from '../topCities/Topcities';
import hot from '../../assets/hot.svg'
import { Link } from 'react-router-dom';

const NoFavourites = () => (
    <>
        <div className="nofav">
            <h6>
                <img src="https://img.icons8.com/color/20/000000/star.png" alt='star'/>
                Favourites
            </h6>
            <h2>No favourites added Yet.</h2>
        </div>  
    </>
);


const Favourite = ({weather}) => {
    console.log(weather.success);
    // axios.all([
    //     axios.get('/api/seat/models'),
    //     axios.get('/api/volkswagen/models')
    //   ])
    //   .then(axios.spread(function (seat, volkswagen) {
    //     let vehicles = seat.data.concat(volkswagen.data);
    //     this.setState({ vehicles: vehicles })
    //   }))
    //   //.then(response => this.setState({ vehicles: response.data }))
    //   .catch(error => console.log(error));
    return (
        <>
            {
                weather.success === false  ? 
                   <NoFavourites/>  
                :
                <div className="weather">
                    {weather.map((list, index) =>(
                        <Link to={`/details/${list?.location?.name}`}>
                        <div key={index} className="weather__container">
                            <span><img src={list?.current?.weather_icons ?  list?.current?.weather_icons : hot}  alt="" /></span>
                            <h1> {list?.current?.temperature}&#176;</h1>
                            <p>{list?.request?.query}</p>
                        </div>
                        </Link>
                    ))}
                    
                </div>
            }
            
               
            <Topcities/>
        </>
    )
}

export default Favourite
