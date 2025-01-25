import React, { useState } from 'react'
import "./register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
// import TextField from '@mui/material/TextField';
// import {Box } from '@mui/material';




const Register = () =>{

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        age: null,
        gender: "",
        weight: null,
        height: null,
        goal: "",
    })

    const handlechange = e=>{
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }


    const register = ()=>{
        const {name , email, password , reEnterPassword} = user
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                console.log(res)
                // alert("Register Successfuly")
                alert(res.data.message)
                navigate("/login")
            })
        }else{
            alert("invalid input")
        }
    }

    return(
        <div className='register'>
            <h1>Register</h1>

            {/* <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}
            >  */}
            <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handlechange}/>
            <input type="text" name="email" value={user.email} placeholder='Your Email' onChange={handlechange}/>
            <input type="password" name="password" value={user.password} placeholder='Your Password' onChange={handlechange}/>
            <input type="text" name="gender" value={user.gender} placeholder='Gender' onChange={handlechange}/>
            <input type="text" name="age" value={user.age} placeholder='Your Age' onChange={handlechange}/>
            <input type="text" name="height" value={user.height} placeholder='Your Height' onChange={handlechange}/>
            <input type="password" name="weight" value={user.weight} placeholder='Your Weight' onChange={handlechange}/>
            <input type="text" name="goal" value={user.goal} placeholder='Your Goal' onChange={handlechange}/>

            {/* <TextField label="Name" variant="outlined" value={user.name}  fullWidth > Name </TextField>
            <TextField label="Email" type='email' variant="outlined" value={user.email} fullWidth required> Email </TextField>
            <TextField label="Password" type='password' variant="outlined" value={user.password} onChange={handlechange} fullWidth required> Password </TextField>
            <TextField label="Age" variant="outlined" fullWidth > Age </TextField>
            </Box> */}
            <div className="button" onClick={register}>Register</div>
            <div>OR</div>
            <div className="button" onClick={()=> navigate("/login")}>Login</div>


        </div>
    )
}

export default Register