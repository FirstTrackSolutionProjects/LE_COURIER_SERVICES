import React from 'react';
import { Container, Typography, Grid, TextField, Button, Card, CardContent, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff',
    padding: '2rem 0',
  },
  header: {
    color: '#000000',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  form: {
    marginTop: '1rem',
  },
  textField: {
    marginBottom: '1rem',
  },
  submitButton: {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#cc0000',
    },
  },
  contactInfo: {
    backgroundColor: '#003366',
    color: '#ffffff',
    padding: '2rem',
    borderRadius: '8px',
    marginTop: '2rem',
  },
  infoText: {
    marginBottom: '0.5rem',
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h3" className={classes.header}>
          Contact Us
        </Typography>
        <Typography variant="h6" align="center">
          We're here to help! Feel free to reach out to us with any questions or concerns.
        </Typography>

        <Grid container spacing={4} className={classes.form}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Send Us a Message
                </Typography>
                <form>
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    label="Your Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    label="Your Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    className={classes.submitButton}
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className={classes.contactInfo}>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1" className={classes.infoText}>
                <strong>Address:</strong> 123 Logistics Street, Cityname, Country
              </Typography>
              <Typography variant="body1" className={classes.infoText}>
                <strong>Phone:</strong> +1 (234) 567-890
              </Typography>
              <Typography variant="body1" className={classes.infoText}>
                <strong>Email:</strong> support@lecourier.com
              </Typography>
              <Typography variant="body1" className={classes.infoText}>
                <strong>Working Hours:</strong> Mon-Fri: 9 AM - 6 PM
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
