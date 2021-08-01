import React, {useEffect} from 'react'
import img from '../images/lady-notifi.png'
import './academiar2.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Academiar2() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div data-aos='fade-up' className='container academier academ2'>
            <div className="row acade2 ">
                <div className="col-md-5 acaimg image2">
                    <img src={img} alt="" />
                </div>

                <div className="col-md-7 acatext  acatext2">
                    <h6>ACADAMIER FOR BUSINESS</h6>
                    <h4>Become an Instructor</h4>

                    <p>As learners, people can enjoy great
                        companionship from Acadamier
                        mentors and educators. We can help
                        you develop and grow at your best.</p>

                    <a href="index.html"><button>Get Started</button></a>
                </div>

            </div>
            
        </div>
    )
}

export default Academiar2
