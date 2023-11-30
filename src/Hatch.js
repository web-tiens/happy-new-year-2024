import React from 'react'
import { StyledHatch } from './HatchStyles'

const Hatch = ({ hatchData: { id, nr, text, img, open, disabled }, handleClick, setShowModal, shuffleCards }) => (


  <StyledHatch background={img} onClick={() =>  { handleClick(id); setShowModal(id); shuffleCards(id) }}>
    <div className={ disabled ? "front open" : "front" }>
      <p>{nr}</p>
    </div>
    <div className={ disabled ? "back open" : "back" } onClick={handleClick}>
      <p>{text}</p>
    </div>
  </StyledHatch>
)

export default Hatch;