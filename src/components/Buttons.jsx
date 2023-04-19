import React from 'react'

const Buttons = ({valueOfButton,nameOfClass,}) => {
  return (
      <button className={nameOfClass}  >{valueOfButton}</button>
  )
}

export default Buttons