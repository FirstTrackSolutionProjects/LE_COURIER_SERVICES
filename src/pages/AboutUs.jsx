import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';
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
  subHeader: {
    color: '#000000',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #e0e0e0',
  },
  avatar: {
    backgroundColor: '#ff0000',
    margin: '0 auto',
  },
  title: {
    color: '#000000',
  },
  description: {
    color: '#333333',
  },
  section: {
    backgroundColor: '#0000ff',
    color: '#ffffff',
    padding: '2rem',
    marginTop: '2rem',
    borderRadius: '8px',
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" className={classes.header}>
          About Us
        </Typography>
        <Typography variant="h6" className={classes.subHeader}>
          Delivering Excellence in Domestic Logistics
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" className={classes.title}>
                  Our Mission
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  To revolutionize domestic logistics by connecting businesses and customers through innovative technology and exceptional service. We ensure efficiency, transparency, and reliability in every shipment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" className={classes.title}>
                  Our Vision
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  To be the leading domestic logistics aggregator, empowering businesses and individuals with seamless, cost-effective, and eco-friendly delivery solutions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box className={classes.section}>
          <Typography variant="h4" align="center" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" align="center">
            We bring together a network of trusted logistics providers, cutting-edge tracking systems, and unparalleled customer support to ensure your parcels are delivered on time, every time.
          </Typography>
        </Box>

        <Typography variant="h4" align="center" className={classes.header} style={{ marginTop: '2rem' }}>
          Meet Our Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"].map((name, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Avatar className={classes.avatar}>{name[0]}</Avatar>
                  <Typography variant="h6" align="center" className={classes.title}>
                    {name}
                  </Typography>
                  <Typography variant="body2" align="center" className={classes.description}>
                    {index % 2 === 0 ? "Logistics Expert" : "Customer Relations Specialist"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
