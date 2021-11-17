import React from 'react';
import Header from '../../Share/Header/Header';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppoinment/AvailableAppoinment';


const Appointment = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <div>
            <Header></Header>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;