import { Link } from "gatsby"
import React, { useContext } from "react"
import { CartContext } from "../context"
import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"

const CartItems = () => {
  const { cart } = useContext(CartContext)
  console.log('cart', cart)
  return (
    <StyledCart>
      <h2>Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.map(item => (
            <tr key={item?.id}>
              <td>
                <img src={item?.metadata?.img} alt={item?.name} />
              </td>
              <td>
                USD
                {priceFormat(item?.price)}
              </td>
              <td>{item?.quantity}</td>
              <td>USD {priceFormat(item?.price * item?.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>subtotal:</h3>
          <small>Total</small>
          <Link to="/">
            <Button type="outline">Back</Button>
          </Link>
          <Button>Buy</Button>
        </div>
      </nav>
      <Link />
    </StyledCart>
  )
}

export default CartItems
