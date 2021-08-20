const nameForm = ({ onNameChange }) => {
  return (
    <div className="mt3">
      <label className="db fw4 lh-copy f5" htmlFor="Name">
        Name
      </label>
      <input
        onChange={onNameChange}
        className="pa2 silver input-reset ba b--silver bg-transparent hover-bg-near-black hover-white w-80"
        type="text"
        name="Name"
        id="Name"
      />
    </div>
  )
}

export default nameForm
