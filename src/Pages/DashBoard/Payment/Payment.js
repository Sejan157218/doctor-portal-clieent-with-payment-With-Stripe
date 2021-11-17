import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm ';



const stripePromise = loadStripe('')
const Payment = () => {
    const {id} = useParams();
    const [appointments, setAppointments] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/appointments/${id}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [id])
    return (
        <div>
           <h2>Please Pay {appointments?.patientName} For {appointments?.serviceName
}</h2>

<h4>Pay : $ {appointments?.price} </h4>

{
    appointments?.price && <Elements stripe={stripePromise}>
    <CheckoutForm 
    appointments={appointments}
    />
  </Elements>
}
        </div>
    );
};

export default Payment;



/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create payment method
6. server: create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
*/