import { data } from "../Components/Forms/postData"
import { routes, url } from "./AppProps"

export const connectionSignIn = async () => {
  try {
    // // post the user credentials
    const response = await fetch(url + routes.signin, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
    const userData = await response.json()
    return userData
  } catch (error) {
    console.error(error)
  }
}

//write a new user to the Database
export const connectionSignUp = async () => {
  try {
    //send the name, email and password to back-end where this password must be hashed
    const response = await fetch(url + routes.register, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    })
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

// Check weather there is or there isn't a face in this picture
export const checkFace = async (input) => {
  try {
    const response = await fetch(url + routes.imageUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        input: input,
      }),
    })
    const faceImg = await response.json()
    // if find a face in this picture it will return the
    if (faceImg.outputs[0].data.regions[0].value) {
      return faceImg
    }
  } catch (err) {
    const msg = "Couldn't find a face in this picture, please try again"
    errorHandler(msg)
  }
}

// This one should incrise the entries if find a face
export const entriesCount = async (user) => {
  //load the image
  try {
    const res = await fetch(url + routes.image, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        id: user.id,
      }),
    })
    //count the entries
    const conter = await res.json()
    return conter
  } catch (error) {
    const msg = "Error to count your entries"
    errorHandler(msg)
  }
}

const domElements = () => {
  try {
    //get the DOM elements
    const headerGreetings = document.getElementById("greetings")
    const imgLnk = document.getElementById("imgLnk")
    //set element attributes
    imgLnk.hidden = false
    headerGreetings.hidden = false
  } catch (error) {
    alert("Something went wrong!!")
  }
}
const errorHandler = (msg) => {
  try {
    //get the DOM elements
    const headerGreetings = document.getElementById("greetings")
    const imgLnk = document.getElementById("imgLnk")
    const errorMsg = document.getElementById("erroMsg")

    //apply the functions
    imgLnk.hidden = true
    headerGreetings.hidden = true
    errorMsg.style.display = "block"
    errorMsg.innerHTML = msg
    setTimeout(() => {
      errorMsg.style.display = "none"
      domElements()
    }, 7000)
  } catch (error) {
    alert("Please, paste a PNG or JPG url")
  }
}
