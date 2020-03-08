import React from "react"
import confetti from "canvas-confetti"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const emoji = React.useRef(null)
  const clicked = () => {
    const { innerHeight: height } = window

    confetti({
      ticks: 25,
      shapes: ["circle"],
      spread: 120,
      origin: {
        y:
          1.025 - (height - emoji.current.getBoundingClientRect().top) / height,
      },
    })
  }

  return (
    <footer className={footerStyles.footer}>
      <button ref={emoji} onClick={clicked}>
        🎉
      </button>
      <span>Takk for besøket!</span>
    </footer>
  )
}
export default Footer
