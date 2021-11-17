import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';




const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price:20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price:21,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price:19,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price:22,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        price:20,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price:25,
        space: 10,
    },
]
const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ color: '#11CFE3', mb: 5 }} variant="h4" component="div" gutterBottom> Available Appointment {date.toDateString()}</Typography>
            {
                bookingSuccess && <Alert severity="success">
                    Appointment Booked <strong>Successfully</strong>
                </Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(book => <Booking
                        key={book.id}
                        setBookingSuccess={setBookingSuccess}
                        date={date}
                        book={book}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;