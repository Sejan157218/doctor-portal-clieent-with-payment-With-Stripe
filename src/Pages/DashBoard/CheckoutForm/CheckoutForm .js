import React, { useState,useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CircularProgress } from '@mui/material';
import useAuth from '../../hook/useAuth';

const CheckoutForm  = ({appointments}) => {
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const [processing,setProcessing] = useState(false)
    const {price,patientName,_id} =appointments
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();

    const [clientSecret,setClientSecret] = useState('');



    useEffect(()=>{
      fetch('http://localhost:8000/create-payment-intent',{
        method:"Post",
        headers : {
          'content-type': 'application/json'
        },
        body: JSON.stringify({price})
      }).then(res=>res.json(res))
      .then(data=>{
        setClientSecret(data.clientSecret);
        console.log(data);
      })
    },[price])

    const handleSubmit = async (event) => {
        event.preventDefault();
          if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }
          setProcessing(true)
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setError( error.message);
            setSuccess('')
          } else {
            setError('')
            
          }

          const {paymentIntent, error : intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: user?.email,
                },
              },
            },
          );
          console.log('fsdfsdf')
          if(intentError){
            setError(intentError.message);
            setSuccess('')
            console.log(intentError);
          }
          else{
            setError('');
            setProcessing(false);
            console.log(paymentIntent);
            setSuccess('Your Payment Processed Successfully');
            const payment = {
              amount : paymentIntent.amount,
              created : paymentIntent.created,
              last4 : paymentMethod.card.last4,
              transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            fetch(`http://localhost:8000/appointments/${_id}`, {
              method: "put",
              headers: {
                  'content-type': "application/json"
              },
              body: JSON.stringify(payment),
          }).then(res => res.json())
              .then(data => {
                  if (data.matchedCount>0) {
                      console.log(data);
                  }
              })
          }
        
        }
        
    return (
        <div>
                <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {
        processing ? <CircularProgress></CircularProgress>: <button type="submit" disabled={!stripe || success}>
        Pay ${price}
      </button>
      }
    
      
    </form>
    {
      error && <h1>{error}</h1>
    }
    {
      success && <h1>{success}</h1>
    }
        </div>
    );
};

export default CheckoutForm ;