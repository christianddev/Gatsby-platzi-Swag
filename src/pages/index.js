import React from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"
import {Jumbo, Products, Seo} from "../components"

export const query = graphql`
  query GET_DATA {
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
              wear
            }
          }
        }
      }
    }
  }
`

const index = ({ data }) => {
  console.log('data', data)
  return (
    <>
      <Seo title="Home" />
      <Jumbo
        description={data?.allSite?.edges[0]?.node?.siteMetadata?.description}
      />
      <Products products={data?.allStripePrice?.edges} />
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/thanks/">Go to Thanks</Link>
      <Link to="/cancelled/">Go to Cancelled</Link>
    </>
  )
}

export default index
