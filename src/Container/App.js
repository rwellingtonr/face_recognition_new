import React, { Component } from "react"
import "./App.css"
// Components
import Navigation from "../Components/Navigation/Navigation"
import Logo from "../Components/Logo"
import ImageLinkForm from "../Components/ImageLinkForm"
import Rank from "../Components/Rank"
import FaceRecognition from "../Components/FaceRecognition"
import SignIn from "../Components/SignIn/SignIn"
import Register from "../Components/Register/Register"
import { initialState } from "./AppProps"
import { checkFace, entriesCount } from "./Connections"

// liberty
//Particles
import PArticlesOpt from "./particlesjs-config.json"
import Particles from "react-particles-js"

//Conditionals to initialize the Web App

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }
  // Updates the user data
  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        entries: user.entries,
        joined: user.joined,
      },
    })
  }
  //update the input field
  onInputChange = (event) => {
    this.setState({ input: event.target.value, imageUrl: "" })
  }

  // This function will receive the return value of calculateFaceLocation
  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  onButtonSubmit = async () => {
    const { input, user } = this.state
    const checkingIn = await checkFace(input)
    if (checkingIn) {
      this.setState({ imageUrl: input })
      //count the entries
      const count = await entriesCount(user)
      this.setState({ ...user, entries: count })
      //call the callculation
      this.displayFaceBox(this.calculateFaceLocation(checkingIn))
    }
    const inputField = document.getElementById("inputForm")
    inputField.value = ""
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("inputimage")
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    }
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState)
    } else if (route === "home") {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state
    const { name, entries } = this.state.user
    return (
      <div className="tc">
        <Particles className="particles" params={PArticlesOpt} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />

        {route === "home" ? (
          <div>
            <Logo />
            <Rank name={name} entries={entries} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />

            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    )
  }
}

export default App
