import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const WelcomPage = () => {
    // const useNavigate
    const navigate = useNavigate()
  return (
    <div>
        <center>
            <h1 onClick={
                console.log("inside click o f logo")
                // navigate('/')
            }>Welcome to Zackermisch</h1>
            <div>
                <Button variant="contianed" onClick= {(e) => {
                    //window.location.assign("http://localhost:5173/login")
                    navigate('/login')

                }}>Sign In</Button>
                <Button variant="contianed" onClick = {() => {
                    navigate('/signup')
                }}>Create new account</Button>
            </div>
        </center>
    </div>
  )
}

export default WelcomPage
