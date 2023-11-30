import React from 'react'
import { StyledModal } from './ModalStyles'
import { CloseOutline } from 'react-ionicons'

export default function Modal({ hatchData: { disabledModal }, isOpen, modalCloseBtn, text }) {
  return (
    <StyledModal>

      <div className={ isOpen ? "modalClosed" : "modal modalOpen" }>
        <div className="modal__inner">
          <div className="modal__logo">
            <img width="100%" src="./img/logo.png" alt="Logo inside the Modal" />
          </div>
          <CloseOutline className="modal-close-ico" onClick={ modalCloseBtn } color={'#333'} width="45px" height="45px" beat />
          <img id="modal-stars-bg" src="./img/stars-bg.png" alt="stars bg modal" />
          <img id="modal-toy-bg" src="./img/toy-bg.png" alt="toy bg modal" />

          <h1 className="modal__title">Пожелание дня</h1>
          <div className="modal__txt">
            <p>{ text }</p>
          </div>
          {/* <h1 className="modal__title">Предложение дня</h1>
          <div className="modal__txt">
            <p>{ text }</p>
          </div> */}
          {/* <div className="modal__submit">
            <a href="" className="modal__btn">Воспользоваться</a>
          </div> */}
          
        </div>

        {/* <button onClick={modalCloseBtn}>Close</button> */}
      </div>
    </StyledModal>
  )
}
