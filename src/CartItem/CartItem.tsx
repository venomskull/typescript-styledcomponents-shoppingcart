
import React from 'react';
import { CartItemType } from '../App';
import { Wrapper } from '../App.styles';

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {
    return (
        <Wrapper>

        </Wrapper>
    );
};

export default CartItem;
