import React from 'react'

const MainNav = () => {
    return (
        <div>
            <div className="nav">
                <div className="container">
                    <h2>Weather App</h2>
                    <div className="search">
                        <input type="text" placeholder='Search for places' name="search" id="search__bar" />
                        <button type='submit' className='btn'>
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" id="search__bar_img" />
                        </button>
                        
                    </div>
                    <div className="degrees">
                        <span id='black'>&#176;c</span>
                        <span id='white'>&#176;f</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNav
