// Main data
export const data = {
  name: "",
  email: "",
  password: "",
}
// User Name
export const onNameChange = (event) => {
  data.name = event.target.value
}
// Email
export const onEmailChange = (event) => {
  data.email = event.target.value
}
// Password
export const onPasswordChange = (event) => {
  data.password = event.target.value
}
