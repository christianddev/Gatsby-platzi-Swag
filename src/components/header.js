import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {MenuItem, StyledHeader} from '../styles/components'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
    <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="icono logo platzi swag"></img>
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/products">Products</Link>
        </MenuItem>
        <MenuItem margin>
          <a href="https://github.com/christianddev">christianddev</a>
        </MenuItem>
        <MenuItem>
          <Link to="/cart">
            <span>
              <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="icono carrito compra"></img>
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
    <div>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
