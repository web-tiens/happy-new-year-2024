import styled from 'styled-components'
import hatchBackdrop from './img/window-opened.png'

export const StyledHatch = styled.div`
padding-top: 100%;
position: relative;
cursor: pointer;

.front {
  background: center / cover url(${props => props.background});
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  p {
    width: 30px;
    height: 30px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Dancing Script", cursive;
    color: #008E45;
    padding: 20px;
    border-radius: 50%;
    background: rgba(250, 250, 250, 0.88);
    font-weight: 700;
    font-size: 2.2rem;
  }

  &.open {
    transform: rotateY(180deg);
  }
}

.back {
  position: absolute;
  background: center / cover url(${hatchBackdrop});
  top: 0px;
  left: 0px;
  z-index: 1;
  transform: rotateY(180deg);

  p {
    font-family: "Dancing Script", cursive;
    color: #fff;
    padding: 10px;
    font-size: 1.4rem;
    text-align: center;
  }

  &.open {
    z-index: 2;
    transform: rotateY(0deg);
  }
}

> div {
  width: 104px;
  height: 136px;
  display: flex;
  align-items: center;

  justify-content: center;
  transition: all 0.5s;
  transform-style: preserve-3d;
  box-sizing: border-box;
}

`;