import React from 'react'
import './style/Normalize.css'
import './style/ModalBox.css'
const ModalBox = ({paragraph}) => {
  return (
    <>
    <div className="modal-box">
        <h3>Alert</h3>
`       <p>{paragraph}</p>
       <button type="submit" className='modal-send'>close</button>
    </div>
    </>
  )
}

export default ModalBox