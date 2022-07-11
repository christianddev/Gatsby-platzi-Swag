/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"

 import Header from "./header"
 import { Content, Footer } from "../styles/components"

 const Layout = ({ children }) => (
     <>
       <Header />
       <Content
         style={{
           margin: `0 auto`,
           maxWidth: 960,
           padding: `0px 1.0875rem 1.45rem`,
           paddingTop: 0,
         }}
       >
         <main>{children}</main>
         <Footer>
           <a href="https://github.com/christianddev">Christian</a>
         </Footer>
       </Content>
     </>
 )

 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }

 export default Layout
