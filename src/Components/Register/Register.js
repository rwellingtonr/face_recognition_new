import React, { useState } from "react"
import DefaultForm from "../Forms/defaultForm"
import NameForm from "../Forms/nameForm"

const Register = (props) => {
  //Inital State
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //   change name
  const onNameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  // change email
  const onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  // change password
  const onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }
  // Submit the registration
  const onClickRegister = async () => {
    try {
      const { loadUser, onRouteChange } = props
      //write in the Database
      const response = await fetch(
        "https://gentle-caverns-57673.herokuapp.com/register",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      )
      const user = await response.json()
      if (user.name.length > 1) {
        loadUser(user)
        onRouteChange("home")
      } else {
        alert("Provide all data")
      }
    } catch (error) {
      alert("Provide all data")
    }
  }

  return (
    <article className="br3 ba b--black-10 mv4 w-80-ns w-50-m w-25-l mw6 center shadow-5">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 center mh0">Register</legend>
            <NameForm onNameChange={onNameChange} />
            {/* Email and Password */}
            <DefaultForm
              onEmailChange={onEmailChange}
              onPasswordChange={onPasswordChange}
            />
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  )
}

export default Register
