import { Fragment} from 'react';
import { Outlet, Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {selectCurrentUser} from "../../store/user.selector";
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles";

import {selectIsCartOpen} from '../../store/cart/cart.selector';


const Navigation = () => {
const currentUser = useSelector(selectCurrentUser); // this will be a current redux store user
  const isCartOpen  = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>

        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />

    </Fragment>
  );
};

export default Navigation;
