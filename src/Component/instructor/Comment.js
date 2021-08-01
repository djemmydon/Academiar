import React , {useEffect} from 'react'
import '../instructor/instruct.css'
import img1 from '../images/testimonial-1.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Comment() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (

        <div data-aos ='fade-up' className="comment container">
            <div className="cmt">
                <div className="cmt-img">
                    <img src={img1} alt="" />
                </div>
                <div className="cmt-txt">
                    <p>
                        I am happy with their arrangement of lessons and subjects.
                        They reflect a scientific investigation into effective
                        methods to adopt for learners.
                    </p>

                    <h6>LUVIC DUBBLE</h6>
                    <h5>Private tutor</h5>
                </div>
            </div>

            <div className="cmt  ">
                <div className="cmt-img">
                    <img src={img1} alt="" />
                </div>
                <div className="cmt-txt">
                    <p>
                        I am happy with their arrangement of lessons and subjects.
                        They reflect a scientific investigation into effective
                        methods to adopt for learners.
                    </p>

                    <h6>LUVIC DUBBLE</h6>
                    <h5>Private tutor</h5>
                </div>
            </div>

        </div>
    )
}

export default Comment
