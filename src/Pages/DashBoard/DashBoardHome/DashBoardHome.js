import React from 'react';

import Calendar from '../../Share/Calendar/Calendar';
import AppoinmentsList from '../AppoinmentsList/AppoinmentsList';
import { Grid } from '@mui/material';
const DashBoardHome = ({ date, setDate }) => {
    return (

        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <Calendar
                    date={date}
                    setDate={setDate}
                ></Calendar>
            </Grid>
            <Grid item xs={12} sm={7}>
                <AppoinmentsList
                    date={date}
                ></AppoinmentsList>
            </Grid>

        </Grid>

    );
};

export default DashBoardHome;