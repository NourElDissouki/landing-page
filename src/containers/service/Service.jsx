import React from 'react'
import './Service.css'
import { Section, Card } from '../../components'
import Laser from '../../Laser-Therapy.jpeg'
function Service() {
  return (
    <div id='Services'>
      <Section column='true' section='2'>
        <div className="SideSectionTitle">
              <div className="Head-Text" style={{"fontSize": "18px"}}>الخدمات التي اقدمها</div>
              <div className= "Description-Text">انواع العلاج و الخدمات</div>
          </div>

          <div className="Cards-View">
              <Card image={Laser} title = 'Laser Hair Removal' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit beatae distinctio sed? Debitis ullam, nemo exercitationem deleniti explicabo soluta!' /> 
        </div>
      </ Section>
    </div>
  )
}

export default Service