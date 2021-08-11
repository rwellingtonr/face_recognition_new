import React from "react"
import EmailField from "./emailForm"
import PasswordForm from "./passwordForm"

const defaultForm = ({ onEmailChange, onPasswordChange, handleKeyPress }) => {
  return (
    <div>
      <EmailField onEmailChange={onEmailChange} />
      <PasswordForm
        onPasswordChange={onPasswordChange}
        handleKeyPress={handleKeyPress}
      />
    </div>
  )
}
export default defaultForm

//onClick={this.onClickRegister}
