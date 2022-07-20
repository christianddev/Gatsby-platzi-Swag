import React, { useState } from "react"
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

export const ProductDetail = ({ unit_amount, product: { name, metadata } }) => {
  const price = priceFormat(unit_amount ?? 0)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
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
        <QtySelect selected={qty}>
          <QtyButton onClick={() => (qty > 1 ? setQty((q) => q-1) : null)}>-</QtyButton>
          <input type="text" value={qty} disabled />
          <QtyButton onClick={() => setQty((q) => q+1)}>+</QtyButton>
        </QtySelect>
        <Button> Add to Cart</Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
