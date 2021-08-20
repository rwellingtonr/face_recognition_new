const passwordForm = ({ onPasswordChange, handleKeyPress }) => {
  return (
    <div className="mv3">
      <label className="db pv1 near-white fw6 lh-copy f5" htmlFor="password">
        Password
      </label>
      <input
        onKeyPress={handleKeyPress}
        onChange={onPasswordChange}
        className="b pa2 input-reset ba b--silver bg-transparent hover-bg-black hover-white w-80"
        type="password"
        name="password"
        id="password"
      />
    </div>
  )
}

export default passwordForm
