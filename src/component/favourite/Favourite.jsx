import React from 'react'
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

const Favourite = ({RemoveFavourites, favCity}) => {
    console.log(favCity);

    return (
        <>
            {
                favCity === [[]]  ? 
                   <NoFavourites/>  
                :
                <>
                    <div className="nofav">
                        <h6>
                            <img src="https://img.icons8.com/color/20/000000/star.png" alt='star'/>
                            Favourites
                        </h6>
                    </div> 
                    <div className="weather">
                        {favCity.map((list, index) => 
                        // {return console.log(list)}
                        (
                            <div className="weather__container" key={index}>
                                <p className='star' value={list.name} onClick={ () => RemoveFavourites(index)}> 
                                    <img src="https://img.icons8.com/color/20/000000/star.png" alt='star'/>
                                </p>                        
                                <Link to={`/details/${list[0]}`}>
                                    <h1> {list[1]}&#176;</h1>
                                    <p>{list[0]}</p>                        
                                </Link>
                            </div>
                        )
                        )} 
                        
                    </div>
                </>
            }
        </>
    )
}

export default Favourite
