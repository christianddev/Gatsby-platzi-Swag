import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Image({ name }) {
  const data = useStaticQuery(
    graphql`
      query GET_IMAGE {
        file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  return (
    <GatsbyImage
      image={data?.file?.childImageSharp?.gatsbyImageData}
      alt={name}
    />
  )
}
