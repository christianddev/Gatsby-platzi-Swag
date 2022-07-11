import React from "react"
import { StyledJumbo } from "../styles/components"
import { StaticImage } from "gatsby-plugin-image"

const Jumbo = ({ description }) => {
  return (
    <StyledJumbo>
      <div>
        <h2>Get the best Swag</h2>
        <small>{description}</small>
        <StaticImage
         src="../images/icon.png"
         alt="SWAG icon"
         />
      </div>
    </StyledJumbo>
  )
}

export default Jumbo
