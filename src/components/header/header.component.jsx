import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from './header.styles';

import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, cartHidden }) => {

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={ () => auth.signOut() }>SIGN OUT</OptionLink>

                        :

                        <OptionLink to='/signin' >SIGNIN</OptionLink>
                }
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                <CartIcon />
            </OptionsContainer>
            {!cartHidden && <CartDropdown /> }
        </HeaderContainer>
    )
}

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
})

export default connect(mapStateToProps,null)(Header);