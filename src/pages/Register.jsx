import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Box
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import registerImage from '/register-image.jpg'; // 🔁 Update with correct image path

const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: '#ffffff',
      padding: '3rem 0',
      minHeight: '100vh',
    },
    image: {
        width: '100%',
        maxHeight: '250px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '2rem', // ✅ Already there
      },
    card: {
        backgroundColor: '#f9f9f9',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        maxWidth: 500,
        margin: '2rem auto 0 auto', // ✅ Adds space from image
        padding: '2rem',
        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.08)',
      },
      
    title: {
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#000000',
    },
    input: {
      marginBottom: '26px', // adds vertical spacing
    },
    button: {
      marginTop: '1rem',
      backgroundColor: '#003366',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#002244',
      },
    },
    linkBox: {
      marginTop: '1.5rem',
      textAlign: 'center',
    },
  }));
  
  
  

const Register = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        {/* 🔽 Add top image like Sign In page */}
        <img
          src={registerImage}
          alt="Register Banner"
          className={classes.image}
        />

        <Card className={classes.card}>
          <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: '#000000' }}>
             Create Account
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              className={classes.input}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              type="tel"
              className={classes.input}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              className={classes.input}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              className={classes.input}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              type="password"
              className={classes.input}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              label="Business Name"
              variant="outlined"
              type="Business Name"
              className={classes.input}
              sx={{ mb: 3 }}
            />

            <Button fullWidth variant="contained" className={classes.button}>
              Register
            </Button>

            <Box className={classes.linkBox}>
                <Typography variant="body2">
                Already have an account? <a href="/sign-in" style={{ color: 'red', fontWeight:'bold' }}>Sign In</a>

             </Typography>
            </Box>

          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
