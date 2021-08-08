import { data } from "../Components/Forms/postData"

const url = "https://gentle-caverns-57673.herokuapp.com/"

// Fetch the server to sign up ou sign in this user.
export const connectionDb = async (path) => {
  try {
    //write in the Database
    const response = await fetch(url + path, {
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
  domElements()
  try {
    const response = await fetch(url + "imageurl", {
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
  try {
    const res = await fetch(url + "image", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        id: user.id,
      }),
    })
    //load the image
    //count the entries
    return res.json()
  } catch (error) {
    alert("Error to count your entries")
  }
}

const domElements = () => {
  //get the DOM elements
  const headerGreetings = document.getElementById("greetings")
  const imgLnk = document.getElementById("imgLnk")
  //set element attributes
  imgLnk.hidden = false
  headerGreetings.hidden = false
}
const errorHandler = (msg) => {
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
}
