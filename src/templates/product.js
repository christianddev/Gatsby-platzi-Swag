import React from "react"
import {ProductDetail} from "../components"

const Product = ({pageContext}) => {
  console.log('pageContext', pageContext)
  return <ProductDetail {...pageContext} />
}
export default Product
