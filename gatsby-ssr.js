const React = require("react")
const { CartProvider } = require("./src/context")
const { GlobalStyles } = require("./src/styles")
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
