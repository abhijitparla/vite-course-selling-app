import { useState } from 'react'
import { TextField, Button, Card} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const SignupPage = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailvalid, setEmailvalid] = useState(false)
    const [errorText, setErrorText] = useState('')

     const navigate = useNavigate();

    const handleSubmitReq = (e) => {
        console.log(props.type)

        if(props.type === 'signup'){
          fetch('http://localhost:3000/admin/signup', {
            method: "POST",
            headers: {
              'Content-Type':'application/json',
              'username':username,
              'password':password
            }
          }).then(response => response.json()).then((json) => {
            console.log(json)
            if(!json.token){
              setErrorText(json.message)
              setEmailvalid(true)
            }else{
              setErrorText('')
              setEmailvalid(false)
              localStorage.setItem('token', json.token)
              navigate('/dashboard')
            }
          })
        }else{
          fetch('http://localhost:3000/admin/login', {
            method: "POST",
            headers: {
              'Content-Type':'application/json',
              'username':username,
              'password':password
            }
          }).then(response => response.json()).then((json) => {
            console.log(json)
            if(!json.token){
              setErrorText(json.message)
              setEmailvalid(true)
            }else{
              setErrorText('')
              setEmailvalid(false)
              localStorage.setItem('token', json.token)
              navigate('/dashboard')
            }
          })
        }
    }
  return (
    <div style={{
        marginTop: '120px'
    }}>
    <center>
    <h1>Welcome to Zackormie</h1>
      <Card variant="outlined" style={{
        width:'350px',
        backgroundColor: 'lightgrey'
      }}>
      <form action="" style={{
        display: 'flex',
        flexDirection: 'column'
      }}>

            <TextField error={emailvalid} helperText={errorText}
          id="outlined-error-helper-text"
         label="Username" variant="outlined" style={{
                margin: '15px'
            }} onChange={(e) => {setUsername(e.target.value)}} value = {username}/>

            <TextField style={{
                margin: '15px'
            }} id="password-comp" label="Password" variant="outlined" type='password' onChange={(e) => {setPassword(e.target.value)}} value = {password}/>
            <Button style={{
                margin: '10px'
            }} variant="contained" onClick = {handleSubmitReq}>{props.type}</Button>
        </form>
      </Card>
      
    </center>
      
    </div>
  )
}

export default SignupPage
