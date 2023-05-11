import React from 'react'

const Buttons = ({valueOfButton,nameOfClass,}) => {
  return (
      <button className={nameOfClass} type='submit'  >{valueOfButton}</button>
  )
}

export default Buttons