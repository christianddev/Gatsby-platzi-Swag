import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { CartContext } from "../context"
import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"

const CartDetails = () => {
  const { cart } = useContext(CartContext)
  const [stripe, setStripe] = useState()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setStripe(window.Stripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY))
  }, [setStripe])

  useEffect(() => {
    setTotal(
      cart?.reduce((acc, item) => acc + item?.unit_amount * item?.quantity, 0)
    )
  }, [setTotal, cart])

  const handleSubmit = async e => {
    e?.preventDefault()

    let items = cart.map(({ id, quantity }) => ({
      price: `${id}`,
      quantity,
    }))
    const { error } = await stripe?.redirectToCheckout({
      lineItems: items,
      mode: "payment",
      successUrl: `${window.location.origin}/thanks/`,
      cancelUrl: `${window.location.origin}/cancelled/`,
    })

    if (error) {
      throw error
    }
  }

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
                {priceFormat(item?.unit_amount)}
              </td>
              <td>{item?.quantity}</td>
              <td>USD {priceFormat(item?.unit_amount * item?.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>subtotal:</h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Back</Button>
          </Link>
          <Button onClick={handleSubmit} disabled={!cart.length}>
            Buy
          </Button>
        </div>
      </nav>
    </StyledCart>
  )
}

export default CartDetails
