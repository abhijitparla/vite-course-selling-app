import { Box, Button, Card, Checkbox, FormControlLabel, FormGroup, Input, InputAdornment, TextField } from '@mui/material'
import ResponsiveAppBar from './ResposniveAppBar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddNewCourse = () => {
    const [title, setTitle] = useState('')
    const [errorTitle, setErrorTitle] = useState(false)
    const [errorDescription, setErrorDescription] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [description, setDescription] = useState('') 
    const [price, setPrice] = useState(0) 
    const [published, setPublished] = useState(false)
    const navigate = useNavigate()
  return (
    <div>
      <ResponsiveAppBar/>
      <Box>
        <Card sx={{
            display:'flex',
            flexDirection: 'column',
            p:'2rem'
        }}>
        <TextField sx={{marginBottom:'1rem'}} required id="title-text" error={errorTitle} helperText={errorText} label="Title" variant="outlined" onChange={(e) => {
            setTitle(e.target.value)
            setErrorTitle(title==='')
            title==='' ? setErrorText('This field is mandatory') : setErrorText('')
            }} value={title}/>
        <TextField sx={{marginBottom:'1rem'}} required id="description-text" error={errorDescription} helperText={errorText} label="Description" variant="outlined" onChange={(e) => {
            setDescription(e.target.value)
            setErrorDescription(description==='')
            description==='' ? setErrorText('This field is mandatory') : setErrorText('')
            }} value={description}/>
        <TextField sx={{marginBottom:'1rem'}} required id="price-text"  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {'$'}
            </InputAdornment>
          ),
        }} label="Price" variant="outlined" inputProps={{
            type: 'number',
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: '0',
          }} onChange={(e) => setPrice(e.target.value)} value={price}/>
            <FormControlLabel sx={{marginBottom:'1rem'}} control={<Checkbox checked={published}/>} label="Published" onChange={(e) => {setPublished(e.target.checked)}} />
        <Button onClick={() => {
                if(title === ''){
                    setErrorTitle(true)
                    setErrorText('This field is mandatory')
                }else{
                    setErrorTitle(false)
                    setErrorText('')
                }

                if(description === ''){
                    setErrorDescription(true)
                    setErrorText('This field is mandatory')
                }else{
                    setErrorDescription(false)
                    setErrorText('')
                }


                if(title !== '' && description !== ''){
                        fetch('http://localhost:3000/admin/courses', {
                            method:'POST',
                            headers:{
                                'Content-Type':'application/json',
                                'authorization':'Bearer '+localStorage.getItem('token')
                            },
                            body:JSON.stringify({
                                'title':title,
                                'description':description,
                                'price': price,
                                'published': published
                            })
                        }).then(response => response.json()).then(data => {
                            navigate('/dashboard')
                        })
                }
        }} variant="contained">Submit</Button>
        </Card>
      </Box>
    </div>
  )
}

export default AddNewCourse
