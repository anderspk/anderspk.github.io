import React from "react"
import Reward from "react-rewards"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  let reward

  return (
    <footer className={footerStyles.footer}>
      <Reward
        ref={ref => {
          reward = ref
        }}
        type="confetti"
        config={{
          lifetime: 100,
          spread: 90,
          startVelocity: 20,
          springAnimation: false,
          elementCount: 35,
        }}
      >
        <button onClick={() => reward.rewardMe()}>
          <span role="img" aria-label="celebrate emoji">
            🎉
          </span>
        </button>
      </Reward>
      <span>Takk for besøket!</span>
    </footer>
  )
}
export default Footer
