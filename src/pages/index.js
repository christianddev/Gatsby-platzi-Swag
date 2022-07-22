import React from "react"
import { graphql, Link } from "gatsby"

import Seo from "../components/Seo"
import ProductList from "../components/ProductList"
import Jumbo from "../components/Jumbo"

export const query = graphql`
  query GET_DATA_HOME {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
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

const index = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      <Jumbo
        description={data?.allSite?.edges[0]?.node?.siteMetadata?.description}
      />
      <ProductList products={data?.allStripePrice?.edges} />
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/thanks/">Go to Thanks</Link>
      <Link to="/cancelled/">Go to Cancelled</Link>
    </>
  )
}

export default index
