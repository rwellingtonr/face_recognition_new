import React from "react"
import { connectionSignIn } from "../../Container/Connections"
import DefaultForm from "../Forms/defaultForm"
import { onEmailChange, onPasswordChange } from "../Forms/postData"

const SignIn = (props) => {
  const pageName = "Sign In"

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(event.key)
      onSubmitSigin()
    }
  }

  //   when the user click the submit button
  const onSubmitSigin = async () => {
    try {
      const { loadUser, onRouteChange } = props
      const user = connectionSignIn()
      if (user.id) {
        loadUser(user)
        onRouteChange("home")
      } else {
        alert("Provide your user")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <article className="br3 ba b--black-10 mv4 w-80-ns w-50-m w-25-l mw6 center shadow-5">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 center mh0">{pageName}</legend>
            {/* email  and Password*/}
            <DefaultForm
              onEmailChange={onEmailChange}
              onPasswordChange={onPasswordChange}
              handleKeyPress={handleKeyPress}
            />
          </fieldset>
          <div className="">
            <input
              onClick={onSubmitSigin}
              className="b ph2 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value={pageName}
            />
          </div>
          <div className="lh-copy mt3">
            <a
              href="#0"
              className="f5 link dim black db"
              onClick={() => props.onRouteChange("register")}
            >
              Register
            </a>
          </div>
        </div>
      </main>
    </article>
  )
}

export default SignIn
