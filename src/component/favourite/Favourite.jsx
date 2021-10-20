import React from 'react'
import hot from '../../assets/hot.svg'

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

const TopCities = () => (
    <>
         <div className="nofav top__cities">
                <h6>
                <img src="https://img.icons8.com/material/20/F05454/dashboard-layout.png" alt='top cities' className='çity__img'/>
                    Top Cities
                </h6>
        </div>    

        <div className="weather">
            <div className="weather__container">
                <span><img src={hot} alt="" /></span>
                <h1>37&#176;</h1>
                <p>Berlin, Germany</p>
            </div>
            <div className="weather__container">
                <span><img src={hot} alt="" /></span>
                <h1>37&#176;</h1>
                <p>Berlin, Germany</p>
            </div>
            <div className="weather__container">
                <span><img src={hot} alt="" /></span>
                <h1>37&#176;</h1>
                <p>Berlin, Germany</p>
            </div>
        </div> 
    </>
);


const Favourite = () => {

    return (
        <>
            <NoFavourites/>
            <TopCities/>
        </>
    )
}

export default Favourite
