// Main data
const data = {
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
// Fetch the server to sign up this user.
export const signUp = async () => {
  try {
    //write in the Database
    const response = await fetch(
      "https://gentle-caverns-57673.herokuapp.com/register",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      }
    )
    const user = await response.json()
    if (user.name.length > 1) {
      return user
    } else {
      alert("Provide all data")
    }
  } catch (error) {
    alert("Provide all data")
  }
}
