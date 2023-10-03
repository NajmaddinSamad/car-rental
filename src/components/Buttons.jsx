import React from 'react'

const Buttons = ({valueOfButton,nameOfClass,}) => {
  return (
      <button className={nameOfClass} type='button'  >{valueOfButton}</button>
  )
}

export default Buttons