import React from "react"
import EmailField from "./emailForm"
import PasswordForm from "./passwordForm"

const defaultForm = ({ onEmailChange, onPasswordChange }) => {
  return (
    <div>
      <EmailField onEmailChange={onEmailChange} />
      <PasswordForm onPasswordChange={onPasswordChange} />
    </div>
  )
}
export default defaultForm

//onClick={this.onClickRegister}
