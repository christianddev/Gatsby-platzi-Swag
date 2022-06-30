import { Link } from "gatsby"
import React from "react"
import { SEO } from "../components/Index"
import { Button, Purchase } from "../styles/components"

const Cancelled = () => {
  return (
    <div>
      <SEO title="Cancelled" />
      <Purchase>
        <h2>Cancelled purchase</h2>
        <p>don't forget, it is still available</p>
        <span role="img" aria-label="emoji">
          😉
        </span>
        <Link to="/">
          <Button>Catalog</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default Cancelled
