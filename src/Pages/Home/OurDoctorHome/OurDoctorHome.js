import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const OurDoctorHome = () => {
    const [ourDoctors, setOurDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/doctors')
            .then(res => res.json())
            .then(data => setOurDoctors(data))
    }, [])
    return (
        <div>
            <h1>Our Doctors</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {ourDoctors?.map((doctor, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`data:image/jpeg;base64, ${doctor?.image}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {doctor?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {doctor?.email}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  ))}
</Grid>
        </div>
    );
};

export default OurDoctorHome;