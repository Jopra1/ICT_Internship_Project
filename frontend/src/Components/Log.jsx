  // import React from 'react'
  // import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
  // import FormGroup from '@mui/material/FormGroup';
  // import FormControlLabel from '@mui/material/FormControlLabel';
  // import Checkbox from '@mui/material/Checkbox';
  // import Link from '@mui/material/Link';



  // const Log = () => {
  //   const paperstyle2={padding :'20px 30px' ,width:300};
  //   return (
  //     <>
  //     <Grid>
  //       <Paper elevation ={20} style ={paperstyle2}>
  //         <Grid align='center'>
  //         <Avatar></Avatar>
  //         <h2>Login</h2>
        
  //       <Typography variant='caption'>Please fill this form to Login</Typography>
  //       </Grid>
  //       <form>
  //         <TextField fullWidth variant="standard" label='Username' placeholder='Enter your Username'></TextField>
          
  //         <TextField fullWidth variant="standard" label='Password'placeholder='Enter Password'></TextField>
  //         <FormGroup>
  //       <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
    
  //     </FormGroup>
  

  //         <Button type='submit' variant='contained'>Login</Button>
  //         <Typography >
  //                     <Link href="#" >
  //                         Forgot password ?
  //                 </Link>
  //                 </Typography>
  //                 <Typography > Do you have an account ?
  //                    <Link href="#" >
  //                       Sign Up 
  //               </Link>
  //               </Typography>
  //       </form>
  //       </Paper>
  //     </Grid>
    
  //     </>
  //   )
  // }

  // export default Log
  import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom'; // Ensure you are using react-router-dom
import axios from 'axios'; // Ensure axios is installed and imported

const Log = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student', // Default role
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5999/login', formData);
      const { token } = response.data;

      // Save token in localStorage
      localStorage.setItem('authToken', token);

      // Redirect based on role
      if (formData.role === 'student') {
        navigate('/student-dashboard'); 
      } else if (formData.role === 'instructor') {
        navigate('/instructor-dashboard'); 
      }
    } catch (error) {
      alert('Incorrect email or password');
    }
  };

  const paperStyle = { padding: '20px 30px', width: 300 };
  
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar></Avatar>
          <h2>Login</h2>
          <Typography variant="caption">Please fill this form to Login</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField 
            fullWidth 
            variant="standard" 
            label="Email" 
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField 
            fullWidth 
            variant="standard" 
            label="Password" 
            placeholder="Enter your password"
            type="password"
            name="password"
            value={formData.password}
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
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
          </FormGroup>
          <Button type="submit" variant="contained">Login</Button>
          <Typography>
            <Link href="#">
              Forgot password?
            </Link>
          </Typography>
          <Typography>
            Do you have an account? 
            <Link href="#">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
}

export default Log;