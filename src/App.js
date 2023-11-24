import React, { useState, useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import { createCalendar, hatchArray } from './helpers'
import Hatch from './Hatch'
import { StyledApp } from './AppStyles'
import Modal from "./Modal";
import Overlay from './Overlay'

const GlobalStyle = createGlobalStyle`
  body {
    background: url('/img/christmas-bg.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0;
    font: 
  }

  #root {
    position: relative;
  }

  .tiens-christmas-header {
    width: 100%;
    margin: 0 auto;
    background: #fff;


  }

  .tiens-christmas-header__inner {
    margin: 0 40px;
    padding: 20px 0;
  }

  .tiens-christmas-header__logo {
    width: 190px;
    height: 110px;
  }

  #logo {
    width: 170px;
    height: 50px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 5;
    opacity: 0.3;
  }

  .overlayOpen {
    display: block;
  }



`


function App() {
  const [showModal, setShowModal] = useState(true)

  const [hatches, setHatches] = useState([])

  useEffect(() => {
    const calendar = localStorage.calendar ? JSON.parse(localStorage.calendar)
    : createCalendar();

    setHatches(calendar);
  }, [])

  // store calendar in localStorage
  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches])


  const handleFlipHatch = id => {
    const updatedHatches = hatches.map(hatch =>
      hatch.id === id ?  { ...hatch, open: !hatch.open } : hatch 
    );
    setHatches(updatedHatches)
  };


  return (
    <>
      <GlobalStyle />
      <StyledApp>
        {
          hatches.map(hatch => 
            <Hatch 
              key={hatch.id} 
              hatchData={hatch}
              handleClick={handleFlipHatch}
              setShowModal={() => setTimeout(() => setShowModal(false), 280) }
            />
            )  
        }
      </StyledApp>
      <Modal isOpen={showModal} modalCloseBtn={() => setShowModal(true)} />
      <Overlay isOpen={showModal} />
    </>
  );
}



export default App;
