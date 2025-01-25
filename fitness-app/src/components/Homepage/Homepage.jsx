import React from 'react'
import "./Homepage.css"
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

const Homepage = (props) =>{

    const navigate = useNavigate()

    return(
    <>
        {/* <div className='homepage'>
            <h1>Hello {props.usern}</h1>
            <div className="button" onClick={()=> navigate("/login")}>Logout</div>
        </div> */}

        <nav>
            <div className='heading'>FIT<span>NESS</span> CLUB</div>
            <ul>
                <li><a href="#">Activity</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Plans</a></li>
                <li><a href="#">Profile</a></li>
                {/* <li><a className="button" onClick={()=> navigate("/login")} href="#" style={{marginLeft: "90px"}}>Logout</a></li> */}
                <Button onClick={()=> navigate("/login")} variant="contained">Logout</Button>
            </ul>
        </nav>

        {/* <h1 style={{textAlign: 'center'}}>My Fitness CLub</h1> */}




        {/* ______________________________________________________________________________________________ */}

        {/* // hero section start  */}

        <section className='hero'>
            {/* <h1>Fitness is Your Lifestyle</h1> */}
        </section>

        
        {/* // hero section ends */}

        

        
        <section className='Features-Section'>

            <div className="mx-auto w-1/2 bg-gray-200 p-4">
                <h1>Choose Program</h1>
                <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
            </div>
        </section>


        



        {/* _____________________________________________________________________________________________ */}













    </>
    )
}

export default Homepage