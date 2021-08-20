const emailField = ({ onEmailChange }) => {
  return (
    <div className="mt3">
      <label className="db fw4 lh-copy f5" htmlFor="email-address">
        Email address
      </label>
      <input
        onChange={onEmailChange}
        className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-80"
        type="email"
        required
        name="email-address"
        id="email-address"
      />
    </div>
  )
}

export default emailField
