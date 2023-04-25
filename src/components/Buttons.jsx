import React from 'react'

const Button = ({valueOfButton,nameOfClass,}) => {
  return (
      <button className={nameOfClass}  >{valueOfButton}</button>
  )
}

export default Button