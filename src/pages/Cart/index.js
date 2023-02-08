import React, {useContext} from 'react';
import CartContext from '../../context/cart';
import {MdDelete} from 'react-icons/md';
import {Container, ContainerList, TravelItem, Info, Quantity, Subtotal, Total} from './styles';


function Cart() {
  const {state, setState} = useContext(CartContext);

  function handleRemoveToCart(travel){
    const copyCart = [...state.cart];
    const travelIndex = copyCart.findIndex((el)=> el.id === travel.id);

    if (copyCart[travelIndex].quantity>1){
      copyCart[travelIndex].quantity = copyCart[travelIndex].quantity - 1;
    }
      else if(copyCart[travelIndex].quantity===1){
      copyCart.splice(travelIndex, 1);
      console.log(copyCart);
    }

    setState({
      cart: copyCart, 
    });
    console.log([...state.cart]);
  }

  const totalItems = state.cart.reduce(
    (acc, travel) => acc + (travel.quantity * travel.price),
    0,
  );

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el)=>(
        <TravelItem key = {el.id}>
          <img src={el.photo} alt= {el.title}/>
          <Info>
            <p>{el.title}</p>
            <strong>$ {el.price}</strong>
          </Info>
          <Quantity readOnly type='number' value= {el.quantity} />
          <Subtotal>
            <p>$ {el.quantity * el.price}</p>
            <div>
              <button type= 'button' onClick={()=> handleRemoveToCart(el)}>
                <MdDelete size={24} color= '#0676d9'/>
              </button>
            </div>
          </Subtotal>
        </TravelItem>
      ))}

      <TravelItem>
      <Info></Info>
          <Total>
            <p>Total</p>
            <div><strong>$ {totalItems}</strong></div>
          </Total>
        </TravelItem>
      </ContainerList>
    </Container>
  )
}
export default Cart;
