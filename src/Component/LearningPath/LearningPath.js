import React,{ useEffect} from 'react'
import img from '../images/artwork.jpg'
import './lerning.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function LearningPath() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div data-aos='fade-up' className=' container-fluid cont'>
            < div className=" text1 text-center" >
                <p>TOP 10 COURSES</p>
                <h2>Featured Courses</h2>
            </div >
           <div className="path container carding">
               <div className="box">
                   <div className="herder">
                       <h3>Full-Stack Developer</h3>
                   <p>7 courses</p>
                   </div>
                   
                   <div className="box-course d-flex">
                       <div className="list">

                            <div className="coursess">
                                <div className="ima">  <img src={img} alt="" /></div>
                                <div className="txt">
                                    <p>Up and Running Object-Oriented programming</p>
                                    <span>₦10,000.00</span>
                                </div>


                            </div>
                            <div className="coursess">
                                <div className="ima">  <img src={img} alt="" /></div>
                                <div className="txt">
                                    <p>Up and Running Object-Oriented programming</p>
                                    <span>₦10,000.00</span>
                                </div>


                            </div>
                            <div className="coursess">
                                <div className="ima">  <img src={img} alt="" /></div>
                                <div className="txt">
                                    <p>Up and Running Object-Oriented programming</p>
                                    <span>₦10,000.00</span>

                                    
                                </div>
                            

                            </div>
                            <i className="fas fa-chevron-down"></i>
                       </div>
                 
                   </div>
               </div>
                <div className="box">
                    <div className="herder">
                        <h3>Full-Stack Developer</h3>
                        <p>7 courses</p>
                    </div>
                    <div className="box-course d-flex">
                        <div className="list">
                        <div className="coursess">
                            <div className="ima">  <img src={img} alt="" /></div>
                            <div className="txt">
                                <p>Up and Running Object-Oriented programming</p>
                                    <span>₦10,000.00</span>
                            </div>

                        </div>

                        <div className="coursess">
                            <div className="ima">  <img src={img} alt="" /></div>
                            <div className="txt">
                                <p>Up and Running Object-Oriented programming</p>
                                    <span>₦10,000.00</span>
                            </div>

                        </div>
                        <div className="coursess">
                            <div className="ima">  <img src={img} alt="" /></div>
                            <div className="txt">
                                <p>Up and Running Object-Oriented programming</p>
                                    <span>₦10,000.00</span>
                            </div>

                        </div> 
                         <i className="fas fa-chevron-down"></i>
                        </div>
                      
                    </div>
                </div>
                <div className="box">
                    <div className="herder">
                        <h3>Full-Stack Developer</h3>
                        <p>7 courses</p>
                    </div>
                    <div className="box-course d-flex">
                        <div className="list">
                        <div className="coursess">
                            <div className="ima">  <img src={img} alt="" /></div>
                            <div className="txt">
                                <p>Up and Running Object-Oriented programming</p>
                                    <span>₦10,000.00</span>
                            </div>
                        </div>
                     
                        <div className="coursess">
                            <div className="ima">  <img src={img} alt="" /></div>
                            <div className="txt">
                                <p>Up and Running Object-Oriented programming</p>
                                    <span>₦10,000.00</span>
                            </div>
                        </div>
                        <div className="coursess">
                            <div className="ima">  <img src={img} alt="" /></div>
                            <div className="txt">
                                <p>Up and Running Object-Oriented programming</p>
                                    <span>₦10,000.00</span>
                            </div>
                        </div>
                         <i className="fas fa-chevron-down"></i>
                        </div>
                       
                    </div>
                    
                </div>

        
                
               </div> 
        </div>
    )
}

export default LearningPath
