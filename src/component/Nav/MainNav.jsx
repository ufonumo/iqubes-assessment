import React from 'react'

const MainNav = ({getSearch, search, updateSearch}) => {

    return (
        <>
            <div className="nav">
                <div className="container">
                    <h2>Weather App</h2>
                    <form onSubmit={getSearch} className="search">
                        <input type="text" placeholder='Search for places' name="search" id="search__bar" value={search} onChange={updateSearch}/>
                        <button type='submit' className='btn'>
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" id="search__bar_img" />
                        </button>
                        
                    </form>
                    <div className="degrees">
                        <span id='black'>&#176;c</span>
                        <span id='white'>&#176;f</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainNav
