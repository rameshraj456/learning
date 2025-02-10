import React, { useState } from 'react'
import { images } from './images'

function ImageSideBar() {
    const all_images = images;

    console.log(images)

    const [current_image , set_current_image] = useState(all_images[0])

    
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
     

      {/* <div>
        {
            all_images.map( (image,idx) => <div style={{backgroundColor:"black",width:"120px",height:"120px",borderRadius:"10px",margin:"10px"}}>

                <img 
                src={image} 
                style={{margin:"5px",width:"110px",height:"110px",borderRadius:"10px"}}
                onClick={()=>set_current_image(idx)}
                onMouseEnter={  ()=>set_current_image(idx)  }
                />

            </div>  )
        }
      </div> */}

      {/* <img src={all_images[current_image]} style={{width:"480px",height:"480px",backgroundColor:"black",padding:"10px"}}/> */}

      <div>
        {
            all_images.map( (image,idx) => <div style={{backgroundColor:"black",width:"120px",height:"120px",borderRadius:"10px",margin:"10px"}}>

                <img 
                src={image} 
                style={{margin:"5px",width:"110px",height:"110px",borderRadius:"10px"}}
                onClick={()=>set_current_image(image)}
                onMouseEnter={  ()=>set_current_image(image)  }
                />

            </div>  )
        }
      </div>

        <img src={current_image} style={{width:"480px",height:"480px",backgroundColor:"black",padding:"10px"}}/>

    </div>
  )
}

export default ImageSideBar
