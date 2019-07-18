import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_G8gyFVilNbsXuBpXVvwz9FZc00ZAjGYBne';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
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