import React from 'react';
import StripCheckout from 'react-stripe-checkout';
import axios from 'axios';
import SweetAlert from 'sweetalert2-react';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_G8gyFVilNbsXuBpXVvwz9FZc00ZAjGYBne';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            }
        }).then(res => {
            alert('Payment successful');
        }).catch(err => {
            console.log('Payment error: ', err);
            alert('There was an issue with your payment.');
        })
    }

    return (
        <StripCheckout
            label="Pay Now"
            name="E-Com"
            billingAdress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${ price }`}
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    )
}

export default StripeCheckoutButton;