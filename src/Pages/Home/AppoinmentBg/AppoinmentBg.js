import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import doctorap from "../../../images/doctor.png"
import appointmentbg from "../../../images/appointment-bg.png"
import { Button, Container } from '@mui/material';

const Appointmentbg = {
    background: `URL(${appointmentbg})`,
    marginTop: "100px",
    backgroundColor: "#41485C",
    backgroundBlendMode: 'darken, luminosity',
}


const AppointmentBg = () => {
    return (

        <Box style={Appointmentbg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img style={{ width: 400, marginTop: "-110px" }} src={doctorap} alt="" />
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Box>
                            <Typography sx={{ color: '#6BD3D2', mt: 3, fontWeight: 600 }} variant="h6">
                                APPOINTMENT
                            </Typography>
                            <Typography sx={{ color: '#ffff', my: 2, fontWeight: 900 }} variant="h3">
                                Make an appointment Today
                            </Typography>
                            <Typography sx={{ color: '#ffff', fontSize: 13, fontWeight: 300 }} variant="h6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam, libero illum omnis porro quisquam rerum cum. Enim, nihil ipsam.
                            </Typography>
                            <Button sx={{ color: '#ffff', my: 2, backgroundImage: "linear-gradient(to right,#18D2B5, #11CFE3)", padding: "6px 22px", mt: 5 }} >Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default AppointmentBg;