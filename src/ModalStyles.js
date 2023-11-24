import styled from 'styled-components'

export const StyledModal = styled.div`
.modal {
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 870px;
  height: 581px;
  background-color: #fff;
  border-radius: 10px;
  padding: 14px;

}

.modal__inner {
  position: relative;
  height: 85%;
  padding: 45px 60px 40px;
  border: 1px solid #b096c4;
  border-radius: 10px;

  .modal-close-ico {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }

  #modal-stars-bg {
    position: absolute;
    top: 10px;
    left: 10px;
    pointer-events: none;
  }

  #modal-toy-bg {
    position: absolute;
    bottom: 0;
    right: 0;
    pointer-events: none;
  }

  .modal__title {
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    color: #3a3171;
    text-align: center;
  }

  .modal__txt {
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin: 15px 0;
    margin-bottom: 80px;
    text-align: center;
  }

  .modal__submit {
    text-align: center;
  }

  .modal__submit {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
  }

  .modal__btn {
    font-family: 'Raleway', sans-serif;
    width: 234px;
    height: 51px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    background-color: #c94451;
    padding: 15px 25px;
    margin-top: 10px;
    color: #fff;
    font-weight: 700;
    line-height: 21px;
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    transition: .12s ease;
  }
  .modal__btn:hover {
    background-color: #dd3947;
  }
}


.modalOpen {
  display: block;
}

.modalClosed {
  display: none;
}

.modal__inner {

}`