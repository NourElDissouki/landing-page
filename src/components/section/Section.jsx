import React from 'react'
import './Section.css'

function Section({children, column, section}) {
  var classes = 'Section '
  if(column)
    classes += 'Column '
  else
    classes += 'Row '
  
  if(section === '2')
    classes += 'Section2'

  return (
    <div className={classes}>
        {children}
    </div>
    

  )
}

export default Section