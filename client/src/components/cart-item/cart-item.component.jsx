import React from 'react';
import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemImage
  } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={ imageUrl } alt={ 'cart item'} />
            <ItemDetailsContainer>
                <span>{ name }</span>
                <span>{quantity} X ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;