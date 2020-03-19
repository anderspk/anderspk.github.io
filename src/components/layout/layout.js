import React from "react"
import layoutStyles from "./layout.module.scss"
import Header from "../header/header"
import Footer from "../footer/footer"
import "../../styles/styles.scss"

const Layout = ({ children }) => (
  <div className={layoutStyles.layout}>
    <Header />
    <div className={layoutStyles.content}>{children}</div>
    <Footer />
  </div>
)

export default Layout
