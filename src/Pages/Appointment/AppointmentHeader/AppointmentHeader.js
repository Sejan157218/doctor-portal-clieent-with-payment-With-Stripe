import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import chair from "../../../images/chair.png"
import Calendar from '../../Share/Calendar/Calendar';


const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img style={{ width: "100%" }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;