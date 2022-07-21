
import React from "react"
import Layout from "./src/components/layout"
import { CartProvider } from "./src/context"
import { GlobalStyles } from "./src/styles"

export const wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider  >
)
