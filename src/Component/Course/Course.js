import React from 'react'
import Image1 from '../Course/course-1.jpg'
import './Course.css'

const Course= props => {
    return (
        
        <div className='Course'>

            <div className="box">
                <div className="box-img">
                    <img src={Image1} alt="" />
                </div>
   <div className="card-body">
                         <div className=""><h4>₦10,000.00  <span>₦10,000.00</span></h4>
                        
                    </div>  
                    <p><a href="index.html">Learning to Write as a Professional Author</a></p>
                    <p>Lorem Ipsum dolor sit amet, consecteruer....</p>
                    <div className="tutor"> 
                        <span>by</span> <a href="index.html"> Bamidele Nativebrand</a>
                    </div>
                    <div className="line">
                        
                    </div>

                    <div className="rating">
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>

                            <i className="far fa-star"></i>     <p>(10)</p>
                        </div>
                        <div className="courses d-flex">
                            <p className='p1'><i className='fas fa-layer-group'></i>14 Lessons</p>
                            <p className='p2'><i className='fas fa-user-friends'></i>78 Students</p>
                           
                        </div>
                         <div className="line">
                        </div>
                    </div>
            </div>
                  </div>

            {/* <div className="card carding">

                <div className="overflow">
                        
                </div>
             
          
            </div> */}


        </div>
    )
}

export default Course
