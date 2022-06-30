import React from "react"
import { Link } from "gatsby"

import { Jumbo, SEO } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/thanks/">Go to Thanks</Link>
    <Link to="/cancelled/">Go to Cancelled</Link>
  </>
)

export default IndexPage
