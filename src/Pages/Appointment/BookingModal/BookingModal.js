import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import useAuth from '../../hook/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ book, openBooking, handleBookingClose, setBookingSuccess, date }) => {
    const { name, time,price } = book;
    const { user } = useAuth();
    const initialInfo = { patientName: user?.displayName, email: user?.email, phone: '' };
    const [booking, setBooking] = useState(initialInfo);

    // handler To Blur
    const handlerOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBooking = { ...booking };
        newBooking[field] = value;
        setBooking(newBooking);

    }


    // handler To Submit
    const handleToBookingSubmit = e => {
        const appointment = {
            ...booking,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString(),
        }
        fetch('https://whispering-garden-01955.herokuapp.com/appointments', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(appointment),
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose();
                }
            })

        e.preventDefault();
    }
    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                    <TextField
                        disabled
                        onBlur={handlerOnBlur}
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                    />
                    <TextField
                        onBlur={handlerOnBlur}
                        name="patientName"
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        defaultValue={user?.displayName}
                        size="small"
                    />
                    <TextField
                        onBlur={handlerOnBlur}
                        name="email"
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        defaultValue={user?.email}
                        size="small"
                    />
                    <TextField
                        onBlur={handlerOnBlur}
                        name="phone"
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        placeholder="Phone Number"
                        size="small"
                    />
                    <TextField
                        onBlur={handlerOnBlur}
                        disabled
                        sx={{ width: "90%", m: 1 }}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                    />
                </Typography>
                <Button sx={{ width: "90%", color: '#ffff', backgroundImage: "linear-gradient(to right,#18D2B5, #11CFE3)", padding: "6px 22px", m: 1 }} onClick={handleToBookingSubmit} >Submit</Button>
            </Box>
        </Modal>
    );
};

export default BookingModal;