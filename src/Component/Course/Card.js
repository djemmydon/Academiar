import React, { Component} from 'react'
import Course from './Course'
import Elastic from 'react-elastic-carousel'
import './card.css'


const breakPoints = [
    {width: 1, itemsToShow: 1},
     { width: 550, itemsToShow: 3 },
      { width: 768, itemsToShow: 5 },

       { width: 1200, itemsToShow: 6 }
]
class Card extends Component {
  


    render() {
        return (

            <div data-aos = 'fade-up' className='container-fluid cards'>
                <div className="icon">
                    <Elastic breakPoints={breakPoints}>
                        <div className="icons">
                            <i className="fas fa-camera"></i>
                            <p>photography</p>
                        </div>

                        <div className="icons">
                            <i className="fas fa-camera"></i>
                            <p>photography</p>
                        </div>

                        <div className="icons">
                            <i className="fas fa-camera"></i>
                            <p>photography</p>
                        </div>

                        <div className="icons">
                            <i className="fas fa-camera"></i>
                            <p>photography</p>
                        </div>

                        <div className="icons">
                            <i className="fas fa-camera"></i>
                            <p>photography</p>
                        </div>
                    </Elastic>
                </div>
               < div className = " text1 text-center" >
                    <p>START ANYWHERE</p>
                    <h2>Top Courses</h2>
                </div >
    <div className="row rowling">
        <div className="col-lg-md-4  ">
            <Course />
        </div>

                    <div className="col-lg-md-4">
            <Course />
        </div>

                    <div className="col-lg-md-4">
            <Course />
        </div>
    </div>
            </div>
        )
    }
}

export default Card
 