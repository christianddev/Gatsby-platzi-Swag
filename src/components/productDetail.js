import React, {useState} from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  QtySelect,
  StyledProductDetail,
} from "../styles/components"
import Seo from "./seo"

export const ProductDetail = data => {
  const price = priceFormat(data?.price)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  console.log("data", data)
  return (
    <StyledProductDetail>
      <Seo title={data?.product?.name} />
      <img src={data?.product?.metadata?.img} alt={data?.product?.name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{data?.product?.name}</h2>
        <b>USD {price}</b>
        {data?.product?.metadata?.wear && <SizeSelect selected={size}>
          <SizeButton onClick={ () => setSize(1)}>XS</SizeButton>
          <SizeButton onClick={ () => setSize(2)}>S</SizeButton>
          <SizeButton onClick={ () => setSize(3)}>M</SizeButton>
          <SizeButton onClick={ () => setSize(4)}>L</SizeButton>
          </SizeSelect>}
          <p>Qty: </p>
          <QtySelect selected={qty}>
            <Button onClick={ () => qty > 1?  setQty(-1) : null}>-</Button>
            <input type="text" value={qty} disable />
            <Button onClick={ () => setQty(+1)}>+</Button>
            </QtySelect>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
