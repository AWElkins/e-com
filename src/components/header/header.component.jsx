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
import { signOutStart } from '../../redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, cartHidden, signOutStart }) => {
    console.log(signOutStart);
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={ signOutStart }>SIGN OUT</OptionLink>

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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
})

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);