import React, {useEffect} from 'react'
import img from '../images/team-picture3.png'
import './academiar.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Academiar() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div data-aos='fade-up' className='container academier '>
            <div className="row acade">
                <div className="col-md-6 acatext">
                    <h6>ACADAMIER FOR BUSINESS</h6>
                    <h4>We re Here To
                        Transform Your
                        Business!</h4>

                    <p>As learners, people can enjoy great
                        companionship from Acadamier
                        mentors and educators. We can help
                        you develop and grow at your best.</p>

                    <a href="index.html"><button>Get Started</button></a>
                </div>

                <div className="col-md-6 acaimg">
                    <img src={img} alt="" />
                </div>

          
            </div>
        </div>
    )
}

export default Academiar
