import React from "react"
import "../../styles/styles.scss"
import layoutStyles from "./layout.module.scss"
import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = ({ children }) => (
  <div className={layoutStyles.layout}>
    <Header />
    <div className={layoutStyles.content}>{children}</div>
    <Footer />
  </div>
)

export default Layout
