import React from "react"
import { StyledJumbo } from "../styles/components"
// test-component
import Image from "./Image"

const Jumbo = ({ description }) => {
  return (
    <StyledJumbo>
      <div>
        <h2>Get the best Swag</h2>
        <small>{description}</small>
        <Image name="icon"/>
      </div>
    </StyledJumbo>
  )
}

export default Jumbo
