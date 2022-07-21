import React, { useContext, useState } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  QtySelect,
  StyledProductDetail,
  Button,
} from "../styles/components"
import {Seo, Stars} from "./"
import { CartContext } from "../context"

export const ProductDetail = ({ id, unit_amount, product: { name, metadata } }) => {
  const { addToCart } = useContext(CartContext)
  const price = priceFormat(unit_amount ?? 0)
  const [size, setSize] = useState(2)
  const [quantity, setQty] = useState(1)

  const handleSubmit = () => {
    addToCart({ id, name, unit_amount, size, quantity, metadata })
  }

  return (
    <StyledProductDetail>
      <Seo title={name} />
      <img src={metadata?.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {price}</b>
        <Stars />

        {metadata?.wear === "true" && (
          <>
          <p>Color: {metadata?.color} </p>
          <small>{metadata?.description}</small>
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
          </>
        )}
        <p>Qty: </p>
        <QtySelect selected={quantity}>
          <QtyButton onClick={() => (quantity > 1 ? setQty((q) => q-1) : null)}>-</QtyButton>
          <input type="text" value={quantity} disabled />
          <QtyButton onClick={() => setQty((q) => q+1)}>+</QtyButton>
        </QtySelect>
        <Button onClick={handleSubmit}> Add to Cart</Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
