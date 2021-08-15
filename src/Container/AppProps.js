//Conditional to initialize the Web App
export const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
}
//Url to connect with the Back End
export const url = "https://gentle-caverns-57673.herokuapp.com/"
//routes
export const routes = {
  register: "register",
  signin: "signin",
  image: "image",
  imageUrl: "imageurl",
}
