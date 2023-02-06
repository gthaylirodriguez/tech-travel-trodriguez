import React, {useContext} from 'react';
import CartContext from '../../context/cart';
import {MdDelete} from 'react-icons/md';
import {Container, ContainerList, TravelItem, Info, Quantity, Subtotal} from './styles';


function Cart() {
  const {state, setState} = useContext(CartContext);

  function handleRemoveToCart(travel){
    const copyCart = [...state.cart];
    const travelIndex = copyCart.findIndex((el)=> el.id === travel.id);

    if (travelIndex > 0){
      delete copyCart[travelIndex];
    }

    setState({
      cart: copyCart, 
    });
  }

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el)=>(
        <TravelItem>
          <img src={el.photo} alt= {el.title}/>
          <Info>
            <p>{el.title}</p>
            <strong>{el.price}</strong>
          </Info>
          <Quantity readOnly type='number' value= {el.quantity} />
          <Subtotal>
            <p>{el.quantity * el.price}</p>
            <div>
              <button type= 'button' onClick={()=> handleRemoveToCart(el)}>
                <MdDelete size={24} color= '#0676d9'/>
              </button>
            </div>
          </Subtotal>
        </TravelItem>
      ))}

      </ContainerList>
    </Container>
  )
}
export default Cart;
