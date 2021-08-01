import React, { useEffect } from 'react'
import './hero.css'

import Aos from 'aos'
import 'aos/dist/aos.css'



function Hero() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='hero'>

            <div data-aos='fade-up' className="text-1">
                <h3>Discover the power of knowledge</h3>
                <p>The right mentoring relationship can be a powerful tool for professional growth. Bark up the right tree</p>

                <div className="serch-2 ">
                    <input type="text" placeholder='Search...' />
                    <i className="fas fa-search"></i>
                </div>
            </div>



        </div>

    )
}

export default Hero
