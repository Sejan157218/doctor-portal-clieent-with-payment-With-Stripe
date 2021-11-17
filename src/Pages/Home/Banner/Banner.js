import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png"
import { Button, Container } from '@mui/material';


const bannerbg = {
    background: `URL(${bg})`,
}

const Banner = () => {
    return (
        <Container >
            <Box style={bannerbg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ height: "90vh", justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={5} >
                        <Box>
                            <Typography sx={{ color: '#182840', my: 1, fontWeight: 900 }} variant="h3">
                                Your New Smile Starts Here
                            </Typography>
                            <Typography sx={{ color: '#182840', fontSize: 13, fontWeight: 300 }} variant="h6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam, libero illum omnis porro quisquam rerum cum. Enim, nihil ipsam.
                            </Typography>
                            <Button sx={{ color: '#ffff', my: 2, backgroundImage: "linear-gradient(to right,#18D2B5, #11CFE3)", padding: "6px 22px", mt: 4 }} >GET APPOINTMENT</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: 350 }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;