import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div className='contatainer-fluid Footer '>
            <div className="container">
            <div className="row CONTA">
                <div className="col-xl-6  contact">
                <h3 >Contact</h3>

                    <p>3a,John Obasi Kalu Close, Behind Ocean Crest School,
                       </p>
                        <p> Oniru Lekki, Lagos, Nigeria.</p>
                    <p>+234 1 295 2104, +234 809 876 5432
                    </p>
                    <span>hello@acadamier.com</span>
                    <div className="contact-icon">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-linkedin"></i>
                    </div>
                </div>
                
                    <div className="col-xl-3 col-md-4">
                    <h2 className='explo'>Explore</h2>
                    <div className="explore">
                        <div className="col-6">
                              <li>Start Here</li>
                                <li>For Instructors</li>
                                <li>For Individual</li>
                                <li>For Team</li>
                                <li>Featured Courses</li>
                                <li>Free Classes</li>
                                <li>Live Classes</li>
                 </div>
                        <div className="col-6">
                                <li>  Learning Path</li>
                                <li>
                                    Success Stories</li>
                                <li>Acadamier Blog</li>
                                <li>
                                    Acadamier Store</li>
                                <li>Get the App</li>
                                <li>
                                    Help and Support</li>
                           </div>
                </div>
                
                    </div>
                      <div className="col-3">
                                <h2 className='compa'>Contact</h2>
                                <select name="" id="">
                                    <option value="">English</option>
                                    <option value="">French</option>
                                    <option value="">Spanish</option>
                                </select>
                            </div>
                    <div className="line2">

                    </div>
                    <div className="text-center foot">
                         <p >
                        © 2021 The English Manner Nigeria | Built by Nativebrands</p>
                    </div>
                   
                </div>



                
                  

                
                </div>
                </div>

               
         
     
  
    )
}

export default Footer
