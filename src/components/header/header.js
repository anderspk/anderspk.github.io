import React from "react"
import Avatar from "../../images/avatar.jpg"
import headerStyles from "./header.module.scss"

const Header = () => (
  <div className={headerStyles.header}>
    <div className={headerStyles.introduction}>
      <img src={Avatar} alt="Avatar" />
      <div className="right">
        <h1>Anders Philip Kamsvåg</h1>
        <nav className={headerStyles.navbar}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/anders-kamsv%C3%A5g/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/anderspk">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
