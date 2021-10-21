import React, {useEffect, useState} from 'react'
// import Topcities from '../topCities/Topcities';
// import hot from '../../assets/hot.svg'
// import { Link } from 'react-router-dom';

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

const Favourite = ({favCity}) => {
    console.log(favCity)

    const [favData, setFavData] = useState([]);

    // const favData = JSON.parse(localStorage.getItem('allEntries'))

    useEffect(() => {    
        RemoveFavourites();
        const favDataAll = JSON.parse(localStorage.getItem('allEntries'))
        setFavData(favDataAll)
        // console.log(FavData);

        // window.addEventListener('storage', storageEventHandler, false);

        // window.addEventListener("storage",(e) => {
        //     alert('it is working')
        //  });

        // window.addEventListener('storage', () => {
        //     console.log(JSON.parse(window.localStorage.getItem('allEntries')));
        //     // const FavData = localStorage.getItem('allEntries')
        //     // console.log(FavData);
        //     // setFavData(FavData)
        //     const favDataAll = JSON.parse(localStorage.getItem('allEntries'))
        //     setFavData(favDataAll)
        //     console.log(favData);
        //     alert('it is working')
        //     //setCurrentTheme(theme);
        // })
        
    }, [])

    const RemoveFavourites = (fav) => {

        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];
        var entry = {fav};
        localStorage.setItem("entry", JSON.stringify(entry));
        // Save allEntries back to local storage
        existingEntries.splice(fav, 1);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));

    }

    // const FavData = JSON.parse(localStorage.getItem('allEntries'))
    return (
        <>
            {
                favData === null  ? 
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
                        {/* {favData.map((list, index) => 
                        // {return console.log(list)}
                        (
                            <div className="weather__container" key={index}>
                                <p className='star' value={weather} onClick={ () => RemoveFavourites(index)}> 
                                    <img src="https://img.icons8.com/color/20/000000/star.png" alt='star'/>
                                </p>                        
                                <Link to={`/details/${list.city}`}>
                                    <h1> {list?.temp}&#176;</h1>
                                    <p>{list?.city}</p>                        
                                </Link>
                            </div>
                        )
                        )}  */}
                        
                    </div>
                </>
            }

            {/* <NoFavourites/>  */}
               
            {/* <Topcities/> */}
        </>
    )
}

export default Favourite
