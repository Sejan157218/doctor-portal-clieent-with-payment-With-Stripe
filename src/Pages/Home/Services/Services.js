import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
import { Container, Typography } from '@mui/material';


const Services = () => {
  const services = [
    {
      name: 'Fluoride Treatment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
      img: fluoride
    },
    {
      name: 'Cavity Filling',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
      img: cavity
    },
    {
      name: 'Teeth Whitening',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
      img: whitening
    }
  ]

  return (
    <Box sx={{ flexGrow: 1,textAlign:"center" }}>
      <Container>
      <Typography sx={{ fontWeight: 500,m: 2,color: '#15d1c5' }} gutterBottom variant="h6" component="div">
          Our Services
        </Typography>
        <Typography sx={{ fontWeight: 600,mb: 7 }} gutterBottom variant="h5" component="div">
          Services We Provide
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {services.map(service => (
            <Grid item xs={4} sm={4} md={4}>
              <Service key={service?.name} service={service}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
