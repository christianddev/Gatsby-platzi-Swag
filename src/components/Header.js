import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { MenuItem, StyledHeader } from "../styles/components"
import { CartContext } from "../context"

const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <StyledHeader>
      <Link to="/">
        <img
          src="https://i.postimg.cc/6q3pg48v/Logo.png"
          alt="icono logo platzi swag"
        ></img>
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
                <img
                  src="https://i.postimg.cc/L6wpMxLt/cart.png"
                  alt="icono carrito compra"
                ></img>
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
