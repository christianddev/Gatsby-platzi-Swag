import React from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"
import styled from "styled-components"
import Seo from "../components/seo"
import Jumbo from "../components/jumbo"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const Button = styled.button`
  width: 8rem;
  background-color: #98ca2f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover {
    transform: scale(1.1);
  }
`

const index = ({ data }) => (
  <>
    <Seo title="Home" />
    <Jumbo
      description={data?.allSite?.edges[0]?.node?.siteMetadata?.description}
    />
    <Button color="gray">Buy</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/thanks/">Go to Thanks</Link>
    <Link to="/cancelled/">Go to Cancelled</Link>
  </>
)

export default index
