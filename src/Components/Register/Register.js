import React from "react"
import { connectionSignUp } from "../../Container/Connections"
import DefaultForm from "../Forms/defaultForm"
import NameForm from "../Forms/nameForm"
import {
  onNameChange,
  onEmailChange,
  onPasswordChange,
} from "../Forms/postData"

const Register = (props) => {
  const pageName = "Register"
  document.title = pageName

  // Submit the registration
  const onClickRegister = async () => {
    try {
      const { loadUser, onRouteChange } = props
      const data = await connectionSignUp()
      loadUser(data)
      onRouteChange("home")
    } catch (error) {
      console.log(error)
    }
  }
  //If the user press Enter, then the app will call the onClickRegistration method
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onClickRegister()
    }
  }

  return (
    <article className="br3 ba b--black-10 mv4 w-80-ns w-50-m w-25-l mw6 center shadow-5">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 center mh0">{pageName}</legend>
            <NameForm onNameChange={onNameChange} />
            {/* Email and Password */}
            <DefaultForm
              onEmailChange={onEmailChange}
              onPasswordChange={onPasswordChange}
              handleKeyPress={handleKeyPress}
            />
          </fieldset>
          <div className="">
            <input
              onClick={onClickRegister}
              className="b ph2 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value={pageName}
            />
          </div>
        </div>
      </main>
    </article>
  )
}

export default Register
