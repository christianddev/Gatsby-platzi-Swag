import { Link } from 'gatsby'
import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'

const Thanks = () => {
  return (
    <div>
      <SEO title='Successful purchase'  />
      <Purchase>
        <h2>Successful purchase</h2>
        <p>hope you enjoy your purchase, use in moderation.</p>
        <span role="img" aria-label="emoji">😄</span>
        <Link to ="/">
          <Button>Catalog</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default Thanks
