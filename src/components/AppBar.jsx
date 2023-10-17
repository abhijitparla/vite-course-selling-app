import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AppBar = (props) => {
    const navigate = useNavigate();
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between'
    }}>
        <div>
            <h2>Zackermicsh</h2>
        </div>
        <div style={{
            alignSelf:'center'
        }}>
            <Button onClick={() => {navigate('/login')}}>Sign in</Button>
            <Button onClick={() => {navigate('/signup')}}>Sign up</Button>
        </div>
    </div>
  )
}

export default AppBar
