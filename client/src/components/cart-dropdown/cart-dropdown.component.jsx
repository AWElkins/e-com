import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer,
    CartClose
  } from './cart-dropdown.styles';

const Cart = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartClose onClick={() => dispatch(toggleCartHidden())}>&#10005;</CartClose>
            <CartItemsContainer>
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => {
                            return <CartItem key={ cartItem.id } item={ cartItem} />
                        })
                    )
                    
                    :
                    
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={ () => { history.push('/checkout'); dispatch(toggleCartHidden())} }>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(Cart));