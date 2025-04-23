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
import signInImage from '/signin-image.jpg'; // Update the path as needed

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff',
    padding: '3rem 0',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxHeight: '250px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '2rem',
  },
  card: {
    maxWidth: 500,
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '2rem 1.5rem',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.08)',
  },
  formControl: {
    marginTop: '1.5rem', // increased spacing between inputs
  },
  button: {
    marginTop: '2rem',
    backgroundColor: '#003366',
    color: '#fff',
    padding: '0.75rem',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#002244',
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <img
          src={signInImage}
          alt="Sign In Banner"
          className={classes.image}
        />

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Sign In
            </Typography>

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              className={classes.formControl}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              className={classes.formControl}
              sx={{ mb: 3 }}
            />

            <Button
              fullWidth
              variant="contained"
              className={classes.button}
            >
              Sign In
            </Button>

            <Box mt={3} textAlign="center">
              <Typography variant="body2">
                Don't have an account? <a href="/register" style={{ color: 'red', fontWeight: 'bold' }}>Register here</a>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;
