const nameForm = ({ onNameChange }) => {
  return (
    <div className="mt3">
      <label className="db fw4 lh-copy f5" htmlFor="Name">
        Name
      </label>
      <input
        onChange={onNameChange}
        className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-80"
        type="text"
        name="Name"
        id="Name"
      />
    </div>
  )
}

export default nameForm
