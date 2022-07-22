import React from "react"
import { graphql } from "gatsby"

import ProductList from "../components/ProductList"

export const query = graphql`
  query GET_DATA_PRODUCTS {
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            metadata {
              description
              img
            }
          }
        }
      }
    }
  }
`

const Products = ({data}) => {
  return (
    <>
      <ProductList products={data?.allStripePrice?.edges} />
    </>
  )
}

export default Products
