import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.componet';
import './cart-dropdown.styles.scss';

const Cart = ({ cartItems }) => {
    return (
        <div className={ 'cart-dropdown' }>
            <div className={ 'cart-items' }>
                {
                    cartItems.map(cartItem => {
                        return <CartItem key={ cartItem.id } item={ cartItem} />
                    })
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps,null)(Cart);