import React from "react"
import { connectionSignIn } from "../../Container/Connections"
import DefaultForm from "../Forms/defaultForm"
import { onEmailChange, onPasswordChange } from "../Forms/postData"

const SignIn = (props) => {
  const pageName = "Sign In"

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmitSigin()
    }
  }

  //   when the user click the submit button
  const onSubmitSigin = async () => {
    try {
      const { loadUser, onRouteChange } = props
      const user = await connectionSignIn()
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
    <article className="br3 ba b--silver-10 mv4 w-80-ns w-50-m w-25-l mw6 center shadow-5">
      <main className="pa4 white-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 white center ph0 mh0">{pageName}</legend>
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
              className="b ph2 pv2 input-reset ba b--silver
               bg-transparent grow pointer f6 dib"
              type="submit"
              value={pageName}
            />
          </div>
          <div className="lh-copy mt3">
            <a
              href="#0"
              className="ba f5 link dim white db"
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
