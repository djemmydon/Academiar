import React,{useState} from 'react'
import Img1 from '../images/artwork.jpg'
import '../Home/navbar.css'

function Navbar() {
const [click, setClick] = useState(false)

const handleClick= () => setClick (!click)
    return (
   
            

            <div className="nav-item container-fluid">

                <div className="nav-logo">
                    <h2>ACADEMIA</h2>
                </div>
                    <div className="strink">
                         <div className="browse-cat">
                    <i className="fas fa-chevron-circle-down case"> Category
                    </i>

                    <ul className='dropdown'>
                        <li>Bussiness</li>
                        <li>IT and Software</li>

                        <li>Marketing</li>

                        <li>personal development</li>

                        <li>Health and Fitness</li>

                        <li>Design</li>
                    </ul>
                </div>

                    <div className="serch nav">
                <input type="text" placeholder='Search...' />
                    <i className="fas fa-search"></i>
             </div>
                    </div>
               

                <div className="nav-but nav">
                <a href="#">For Team</a>
                    <a href="">For Instructor</a>

                  

                   
                    </div>
            <div className="fav-cart nav">
                <i className='fas fa-shopping-cart'></i>
                <div className="hamburger" onClick={handleClick}>
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
               
            </div>
            <div className="nav-button nav">
                <a href=""  className='login'><button>Login</button></a>
                <a href="" className='sign-up'><button>Sign Up</button></a>
            </div>
            <div className={click ? 'nav-drop active' : 'nav-drop'}>
                <div className="up-nav">
                    <div className='up-nav-name'>
                        <h2>ACADEMIAR</h2>
                    </div>
                    <div className="hamburger" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
                        <div className="img-but">
                              <img src={Img1} alt="" />
                              
                <a href=""><button>My Course</button></a>
                        </div>
                      
                </div>
                   
            </div>
       
    )
}

export default Navbar
