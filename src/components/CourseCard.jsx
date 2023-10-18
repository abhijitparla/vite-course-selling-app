import { Box, Button, Card, InputAdornment, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:'column',
    margin:'1rem'
  };
const CourseCard = (props) => {
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
  return (
    <div>
      <Card sx={{p:'2rem', m:'1rem', display:'flex', justifyContent:'space-between'}}>
        <div>
        <Typography variant='h6'>
                <span style={{
                    fontWeight:'700'
                }}>Title:</span> {props.val.title}
            </Typography>
            <Typography variant='h6'>
                <span style={{fontWeight:'700'}}>Description:</span> {props.val.description}
            </Typography>
            <Typography variant='h6'>
                <span style={{fontWeight:'700'}}>Price:</span> {props.val.price}
            </Typography>
        </div>
            <div>
                <Button variant='contained' onClick={handleOpen}>Edit Course</Button>
            </div>
        </Card>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom:'1rem'}}>
            Edit Course Details
          </Typography>
          <TextField variant="outlined" label="Title" style={{marginBottom:'1rem'}} value={props.val.title}/>
          <TextField variant="outlined" label="Description" style={{marginBottom:'1rem'}} value={props.val.description}/>
          <TextField variant="outlined" label="Price" style={{marginBottom:'1rem'}} value={props.val.price} inputProps={{
            type: 'number',
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: '0',
          }} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {'$'}
              </InputAdornment>
            ),
          }}/>
          {/* <FormControlLabel sx={{marginBottom:'1rem'}} control={<Checkbox checked={published}/>} label="Published" onChange={(e) => {setPublished(e.target.checked)}} /> */}
          <Button variant="contained">Update Details</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default CourseCard
