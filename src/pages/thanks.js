import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/Seo'
import { Button, Purchase } from '../styles/components'

const Thanks = () => {
  return (
    <div>
      <Seo title='Successful purchase'  />
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
