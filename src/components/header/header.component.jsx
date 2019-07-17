import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, cartHidden }) => {

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo />
            </Link>
            <div className={ 'options' }>
                {
                    currentUser ?
                        <div className={ 'option' } onClick={ () => auth.signOut() }>SIGN OUT</div>

                        :

                        <Link className={ 'option' } to='/signin' >SIGNIN</Link>
                }
                <Link className={ 'option' } to='/shop' >
                    SHOP
                </Link>
                <Link className={ 'option' } to='/contact' >
                    CONTACT
                </Link>
                <CartIcon />
            </div>
            {!cartHidden && <CartDropdown /> }
        </div>
    )
}

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
})

export default connect(mapStateToProps,null)(Header);