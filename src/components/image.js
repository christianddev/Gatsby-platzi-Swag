import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export const Image = ({ name }) => {
  return (
    <StaticQuery
      query={graphql`
        query GET_IMAGE {
          file(relativePath: { eq: "icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data =>  <Img fluid={data.file.childImageSharp.fluid} />}
    />
  )
}
