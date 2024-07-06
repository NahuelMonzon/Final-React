import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './cart.css';

const Cart = () => {
  const { cart, vaciarCarrito, eliminarItem, totalCarrito } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h1>Carrito vacio</h1>
          <Link to="/" className="back-to-home">Ir a comprar</Link>
        </div>
      ) : (
        <div className="cart-list">
          <h1>Resumen de tu pedido</h1>
          {cart.map((p) => (
            <CartItem key={p.producto.id} producto={p} eliminarItem={eliminarItem} />
          ))}
          <div className="cart-summary">
            <p>Total: ${totalCarrito()}</p>
            <button onClick={vaciarCarrito} className="vaciar-carrito-button">Vaciar carrito</button>
            <Link to="/checkout" className="checkout-button">Comprar</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
