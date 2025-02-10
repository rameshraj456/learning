import React, { useState } from 'react'
import tiger from './tiger.png'

function ImageShowHide() {
    const [enable , setEnable] = useState(true);

  return (
    <div>
        {
            enable?<img  src={tiger} />:<p>click the below button to show image</p>
        }
      <button
      onClick={
        () => setEnable( enable ? false : true )
      }
      >
        {
            enable ?
            "hide the image"
            :
            "show the image"
        }
      </button>
    </div>
  )
}

export default ImageShowHide
