import React from 'react'
import './QRCodeCard.css'

import QR_CODE from '../../assets/images/image-qr-code.png'

function QRCodeCard() {
  return (
    <div className='qr-code-container'>
      <img src={QR_CODE} alt='qr code' width={288} height={288} />
      <div className='qr-code-subcontainer'>
        <h3>Improve your front-end skills by building projects</h3>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default QRCodeCard
