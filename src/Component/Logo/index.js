import React from "react"
import Tilt from "react-parallax-tilt"
import "./Logo.css"
import alphabet from "./alphabet.png"

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" style={{ height: 100, width: 100 }}>
        <div className="pa1">
          <img src={alphabet} alt="logo" />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
