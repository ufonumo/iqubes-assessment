import React from 'react'
import hot from '../../assets/hot.svg'

const Topcities = () => {
    const onClose = () =>{

    }
    return (
        <>
            <div className="nofav top__cities">
                <h6>
                <img src="https://img.icons8.com/material/20/F05454/dashboard-layout.png" alt='top cities' className='çity__img'/>
                    Top Cities
                </h6>
            </div>    

            <div className="weather">
                <div className="weather__container" >
                <h5 className='close' onClick={onClose}></h5>
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
                <div className="weather__container">
                    <span ><img src={hot} alt="" /></span>
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
    )
}

export default Topcities
