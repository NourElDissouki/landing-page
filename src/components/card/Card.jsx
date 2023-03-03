import React from 'react'
import './Card.css'
import '../../MobileStyle.css'
function Card({image, title, description}) {
  return (
    <div className="Card">
        <div className="face front" style={{'backgroundImage' : `url(${image})`}}>
            <div className="Card-Title">{title}</div>
        </div>
        <div className="face back">{description}</div>
    </div>
  )
}

export default Card