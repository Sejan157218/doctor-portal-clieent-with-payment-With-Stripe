import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ book,date,setBookingSuccess }) => {
    const { name, time, space,price } = book;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ py: 4 }} elevation={3} >
                    <Typography sx={{ color: '#11CFE3' }} variant="h5" component="div" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        {time}
                    </Typography>
                    <Typography variant="caption" component="div" gutterBottom>
                       $ {price} 
                    </Typography>
                    <Typography variant="caption" component="div" gutterBottom>
                        {space} Spaces AVAILABLE
                    </Typography>
                    <Button sx={{ color: '#ffff', backgroundImage: "linear-gradient(to right,#18D2B5, #11CFE3)", padding: "6px 22px", mt: 2 }} onClick={handleOpenBooking} >BOOK APPOINTMENT</Button>
                </Paper >
            </Grid>
            <BookingModal
            date={date}
                book={book}
                setBookingSuccess={setBookingSuccess}
                openBooking={openBooking}
                handleOpenBooking={handleOpenBooking}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
    );
};

export default Booking;