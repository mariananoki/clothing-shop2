import { useDispatch, useSelector } from 'react-redux';

// import { CartContext } from '../../contexts/cart.context';

import {ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles";

import {selectCartCount, selectIsCartOpen} from "../../store/cart/cart.selector";

import {setIsCartOpen} from "../../store/cart/cart.action";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
 const cartCount = useSelector(selectCartCount);
 const dispatch = useDispatch();
 const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
