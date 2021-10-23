import React from 'react'
import hot from '../../assets/hot.svg'
import { Link } from 'react-router-dom';

const Topcities = ({citiesData, loading ,SaveFavourites}) => {

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
                        <div className="weather__container" key={index}>
                            <span><img src={hot} alt="weather" /></span>
                            <p className='star' onClick={() => SaveFavourites(list?.[11], list[3]?.temp)}> 
                                <img src="https://img.icons8.com/windows/20/222831/star--v1.png" alt='star'/>
                            </p>                       
                            <Link to={`/details/${list?.[11]}`} key={index}>
                                <h1>{list[3]?.temp}&#176;</h1>
                                <p>{list?.[11]}</p>                        
                            </Link>

                        </div>
                    </>
                ))}
            </div> 
        </>
    )}
}

export default Topcities
