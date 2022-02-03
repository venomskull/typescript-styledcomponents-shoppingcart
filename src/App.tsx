import Drawer from '@material-ui/core/Drawer';
// import LinearProgress from '@mui/material/LinearProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
// import Grid from '@mui/material/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { StyledButton, Wrapper } from './App.styles';
import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';
import Item from './Item/Item';
import { useState } from 'react';
import Cart from './Cart/Cart';



export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json();
}

// const getProducts = async (): Promise<CartItemType[]> => 
//  await fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())

// const getProducts = async (): Promise<CartItemType[]> =>
//   await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)
  // console.log(data);

  const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ack: number, item: CartItemType) => ack + item.price, 0);

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = (id: number) => null;

  if (isLoading) return <LinearProgress />

  if (error) return (<div>Something went wrong..</div>);

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3} >
        {data?.map(item => (
          <Grid item xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
