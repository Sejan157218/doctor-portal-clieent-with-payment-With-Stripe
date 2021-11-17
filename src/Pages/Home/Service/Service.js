import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const service = ({ service }) => {
    return (
        <Card sx={{ maxWidth: 345,border: 0 ,boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{ height: "80px", width: "auto", margin: "0 auto" }}
                image={service?.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {service?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {service?.description}
                </Typography>
            </CardContent>
        </Card> 
    );
};

export default service;