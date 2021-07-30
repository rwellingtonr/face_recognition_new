import React, { Component } from "react"

class Register extends Component {
  constructor(props) {
    super(props)
    this.status = {
      name: "",
      email: "",
      password: "",
    }
  }

  //   change name
  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }
  // change email
  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  // change password
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }
  // Submit the registration
  onClickRegister = async () => {
    try {
      const { loadUser, onRouteChange } = this.props
      const { name, email, password } = this.state
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

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <div
          className="pa4"
          action="sign-up_submit"
          method="get"
          acceptCharset="utf-8"
        >
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 center">Register</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f5" htmlFor="Name">
                Name
              </label>
              <input
                className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="Name"
                id="Name"
                onChange={this.onNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f5" htmlFor="email-address">
                Email address
              </label>
              <input
                className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                type="email"
                required
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f5" htmlFor="password">
                Password
              </label>
              <input
                className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="mt3">
            <input
              onClick={this.onClickRegister}
              className="b ph3 pv2 input-reset ba b--black b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </article>
    )
  }
}

export default Register
