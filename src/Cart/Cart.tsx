import { CartItemType } from "../App"
import { Wrapper } from "../App.styles"
import CartItem from "../CartItem/CartItem";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const getTotal = (items: CartItemType[]) => {
        return items.reduce((ack: number, item) => ack + (item.amount * item.price), 0);
    }

    return (
        <Wrapper>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map((item: CartItemType) => (
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
            ))}
            <h2>${(getTotal(cartItems)).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart;