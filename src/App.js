import React, { useState, useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import { createCalendar } from './helpers'
import Hatch from './Hatch'
import { StyledApp } from './AppStyles'
import Modal from "./Modal";
import Overlay from './Overlay'

const GlobalStyle = createGlobalStyle`
  html { overflow-x: hidden; }

  body {
    background-size: 100%;
    background-repeat: no-repeat;
    overflow-x: hidden;
    margin: 0;
  }

  h1 { font-size: 50px; }
  h2 { font-size: 25px; }
  @media only screen and (max-width: 993px) {
    h1 { font-size: 32px; }
    h2 { font-size: 18px; }
  }


  #root {
    position: relative;
  }

  .btn-primary {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 700;
    width: max-content;
    height: 52px;
    border-radius: 50px;
    text-decoration: none;
    background-color: #e6a100;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    column-gap: 0;
    align-items: center;
    padding: 5px 18px;
    box-shadow: 0 10px 20px 2px rgb(247, 174, 0, .32); 
    transition: 0.25s ease; 
  }
  .btn-primary:hover {
    padding: 8px 21px;
    font-size: 17px
  }

  .tiens-christmas-hero__btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 993px) {
    .btn-primary {
      font-size: 14px;
      padding: 5px 13px;
    }
    .btn-primary:hover {
      padding: 5px 13px;
      font-size: 14px;
    }

    .tiens-christmas-hero__btn {
      justify-content: left;
    }
  }
  

  .btn-primary__arrow {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-primary__arrow ion-icon {
    font-size: 18px;
    color: #fff;

  }

  .tiens-christmas-header {
    width: 100%;
    margin: 0 auto;
    background: #fff;
    position: relative;
    z-index: 20;
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

  .tiens-christmas-container {
    width: 1050px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }
  @media only screen and (max-width: 1024.9px) {
    .tiens-christmas-container {
      width: 100%;
    }
  }
  
  .tiens-christmas-hero {
    position: relative;
    font-family: 'Nunito', sans-serif;
    width: 100%;
    height: 100vh;
    background: linear-gradient(#2e2759, #5B649A, #aaddfc);
  }

  .tiens-christmas-hero__inner {
    padding: 112px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (max-width: 993px) {
    .tiens-christmas-hero__inner {
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 224px;
    }
  }
  @media only screen and (max-width: 380px) {
    .tiens-christmas-hero__inner {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .tiens-title-main {
    line-height: 54px; 
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
    margin-bottom: 28px;
    align-text: center;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 993px) {
    .tiens-title-main {
      justify-content: left;
      line-height: 38px;
    }
  }


  .tiens-subtitle-main {
    text-transform: uppercase;
    font-weight: 800;
    display: flex;
    justify-content: center;
    color: #fff;
    margin: 0 0 45px;
  }
  @media only screen and (max-width: 993px) {
    .tiens-subtitle-main {
      font-size: 20px;
      justify-content: left;
      width: 100%;
      margin-bottom: 24px;
    }
  }

  .tiens-christmas-hero__desc {
    display: flex;
    flex-direction: column;
    font-size: 19px;
    color: #fff;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 993px) {
    .tiens-christmas-hero__desc {
      justify-content: left;
      text-align: left;
      font-size: 16px;
    }
  }

  .tiens-christmas-hero__desc p {
    text-align: center;
    margin: 4px;
  }
  @media only screen and (max-width: 993px) {
    .tiens-christmas-hero__desc p {
      justify-content: left;
      text-align: left;
    }
  }

  .tiens-christmas-hero__sky-stars-wrapper {
    width: 100%;
    height: 350px;
    background-image: url('./img/stars.png');
    background-repeat: repeat;
    position: absolute;
    top: 0; left: 0;
    z-index: 5;
  }

  .tiens-christmas-hero__moon-img {
    position: absolute;
    top: 24px; left: 156px;
    position: absolute;
    z-index: 5;
  }

  @media only screen and (max-width: 1640px) {
    .tiens-christmas-hero__moon-img {
      left: 72px;
    }
  }
  @media only screen and (max-width: 993px) {
    .tiens-christmas-hero__moon-img {
      left: auto;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }


  .tiens-christmas-hero__moon-img img {
    width: 215px;

  }

  .tiens-christmas-main {
    width: 100%;
    height: 127vh;
    background: linear-gradient(#A9DCFB 80%, #aaddfc);
    position: relative;
    border: none;
  }

  #house-main {
    position: absolute;
    z-index: 6;
    left: 50%;
    transform: translateX(-50%);
  }

  .grid-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 240px;
  }

  .grid-wrapper-color-filler {
    position: absolute;
    width: 100%;
    height: 450px;
    background: #74636B;
    display: none;
  }
  @media only screen and (max-width: 850px) {
    .grid-wrapper-color-filler {
      height: 1000px;
      z-index: 7;
      display: block;
      bottom: -250px;
    }
  }
  @media only screen and (max-width: 768px) {
    .grid-wrapper-color-filler {
      height: 1000px;
      bottom: -360px;
    }
  }
  @media only screen and (max-width: 600px) {
    .grid-wrapper-color-filler {
      height: 3000px;
    }
  }

  .door {
    position: absolute;
    right: 60px;
    bottom: 0;
    width: 205px;
    height: 270px;
  }

  @media only screen and (max-width: 600px) {
    .door {
      right: 25px;
    }
  }

  .bg-img {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .snow-bottom-white-block {
    width: 100%;
    height: 100vh;
    background: linear-gradient(#B6D2F7, #fff 100%);
    position: relative;
    top: -70px;
  }

  @media only screen and (max-width: 1640px) {
    .snow-bottom-white-block {
      top: 0;
    }
  }


`
const cardText = [
  { text: "Поздравляем с новым годом! Желаем крепкого здоровья!" },
  { text: "Семейного счастья, любви и благополучия!" },
  { text: "Будьте сильны, остры и крепки!" },
  { text: "Любовь пусть сопутствует вам с каждым днем!" },
  { text: "Снег счасться да обрушится на вашу голову" },
  { text: "Пусть Аллах пребудет с вами в новом году!" },
  { text: "Мы любив вас и желаем ват добра и терпения!" },
  { text: "Никогда не опускайте руки!" },
  { text: "Мы всегда рядом с вами! Помните об этом" },
  { text: "Не болейте в новом году, пусть ваше здоровье только крепчает!" },
  { text: "Мы любим вас и ваших детей!" },
  { text: "Побольше денег, богатства и семейного счастья" },
  { text: "Пусть радость будет вам наградой в следующем году" },
  { text: "Побольше солнечных дней и ярких лучей вам в жизни!" },
  { text: "Любви все возрасты покорны! Желаем найти свою второю половинку в новом году" },
  { text: "Не теряйте друзей и близких, храните в своих сердцах и усопших!" },
  { text: "Пусть наши подарки сделают вашу жизнь лучше" },
  { text: "Цените каждое мгновение" },
  { text: "Не забывайте, что самая главное - это вы" },
  { text: "Любовь стоит того чтобы ждать" },
  { text: "Да благославится ваш дом!" },
  { text: "Терпения, терпения и только терпения..." },
  { text: "Храните чистоту в сердцах ваших" },
  { text: "С Новым Годом 2024!" },
  { text: "Разнообразьте жизнь с Тиенс" },
  { text: "Поделитесь нашей косметикой с вашими близкими и друзьями" },
  { text: "Оставаятесь такими какие вы есть!" },
  { text: "Не бойтесь ничего и никаких преград в следующем году" },
  { text: "Ваша жизнь - руках Аллаха" },
  { text: "Вы сильны и прекрасны" },
  { text: "Удачи вам и счастья!" }
]


function App() {
  
  const [showModal, setShowModal] = useState(true)
  const [hatches, setHatches] = useState([])
  const [cards, setCards] = useState([])
  
  const shuffleCards = () => {
    const shuffledCards = [ ...cardText ]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
  }


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
      <div className="grid-wrapper">
        <div className="grid-wrapper-color-filler">
          <img className="door" src="./img/door.png" alt="The Entrance Door" />
        </div>

        {/* <div className="grid-wrapper__bg-img">
          <img src="./img/bg-img.png" alt="Background Image" />
        </div> */}
        <StyledApp>
          {
            hatches.map(hatch => 
              <Hatch 
                key={hatch.id} 
                hatchData={hatch}
                handleClick={handleFlipHatch}
                setShowModal={() => setTimeout(() => setShowModal(false), 280) }
                shuffleCards = { shuffleCards}
              />
              )  
          }
        </StyledApp>
      </div>
        {
          cards.map((card) => (
            <Modal 
              key={card.id}
              isOpen={showModal} 
              modalCloseBtn={() => setShowModal(true)} 
              text = { card.text } 
            />
          ))
        }
      <Overlay isOpen={showModal} />
    </>
  );
}



export default App;
