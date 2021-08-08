import React from "react"

const Rank = ({ name, entries }) => {
  return entries === 0 ? (
    <div className="white f3">{`Hello ${name}, let's get start`}</div>
  ) : (
    <div>
      <div id="greetings">
        <div className="white f3">{`Hello ${name}, your current rank is...`}</div>
        <div className="white f1">{entries}</div>
      </div>
      <div
        id="erroMsg"
        className="white f2 pv5"
        style={{ display: "none" }}
      ></div>
    </div>
  )
}

export default Rank
