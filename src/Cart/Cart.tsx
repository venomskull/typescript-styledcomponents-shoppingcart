import { CartItemType } from "../App"
import { Wrapper } from "../App.styles"
import CartItem from "../CartItem/CartItem";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    return (
        <Wrapper>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map((item: CartItemType) => (
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
            ))}
        </Wrapper>
    )
}

export default Cart;