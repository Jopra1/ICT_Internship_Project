// import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import React from 'react'

// const Sign = () => {
//   const paperstyle={padding :'20px 30px' ,width:300};
//   return (
//     <>
//     <Grid>
//       <Paper elevation ={20} style ={paperstyle}>
//         <Grid align='center'>
//         <Avatar></Avatar>
//         <h2>Sign Up</h2>
      
//       <Typography variant='caption'>Please fill this form to create an account</Typography>
//       </Grid>
//       <form>
//         <TextField fullWidth variant="standard" label='Name' placeholder='Enter your Name'></TextField>
//         <TextField fullWidth variant="standard" label='Email'placeholder='Enter your Email'></TextField>
//         <TextField fullWidth variant="standard" label='Phone No'placeholder='Enter your Phone No'></TextField>
//         <TextField fullWidth variant="standard" label='Password'placeholder='Enter Password'></TextField>
//         <TextField fullWidth variant="standard" label='Confirm Password' placeholder='Verify Password'></TextField>
//         <FormGroup>
     
//       <FormControlLabel required control={<Checkbox />} label="I accept  the terms and conditions" />
     
//     </FormGroup>
//         <Button type='submit' variant='contained'>Sign Up</Button>
//       </form>
//       </Paper>
//     </Grid>
  
//     </>
//   )
// }

// export default Sign
import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Sign = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    role: 'student', // Default role
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      await axios.post('http://localhost:5999/signup', formData);
      alert('Signup successful');
      navigate('/signup');
    } catch (error) {
      alert('User already exists!');
    }
  };

  const paperStyle = { padding: '20px 30px', width: 300 };
  
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar></Avatar>
          <h2>Sign Up</h2>
          <Typography variant="caption">Please fill this form to create an account</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField 
            fullWidth 
            variant="standard" 
            label="Name" 
            placeholder="Enter your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField 
            fullWidth 
            variant="standard" 
            label="Email" 
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField 
            fullWidth 
            variant="standard" 
            label="Phone No"
            placeholder="Enter your Phone No"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <TextField 
            fullWidth 
            variant="standard" 
            label="Password"
            placeholder="Enter Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField 
            fullWidth 
            variant="standard" 
            label="Confirm Password"
            placeholder="Verify Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <FormControl component="fieldset" style={{ marginTop: 20 }}>
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup
              aria-label="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <FormControlLabel value="student" control={<Radio />} label="Student" />
              <FormControlLabel value="instructor" control={<Radio />} label="Instructor" />
            </RadioGroup>
          </FormControl>

          <FormGroup>
            <FormControlLabel required control={<Checkbox />} label="I accept the terms and conditions" />
          </FormGroup>
          <Button type="submit" variant="contained">Sign Up</Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default Sign;