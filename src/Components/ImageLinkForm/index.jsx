import React from "react"
import "./styles.css"

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  document.title = "Face Recognition"

  return (
    <div>
      <p id="imgLnk" className="f4 ma-2 white">
        {"This smart app will detect faces in your images."}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            type="text"
            id="inputForm"
            className="f4 pa2 w-70 center input-reset"
            onChange={onInputChange}
            placeholder="Please paste here your image url!"
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-dark-blue"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
