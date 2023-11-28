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
    background: #B6D2F7;
    margin: 0;
  }

  h1 { font-size: 50px; }
  h2 { font-size: 25px; }



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
    z-index: 20;
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


  .tiens-subtitle-main {
    text-transform: uppercase;
    font-weight: 800;
    display: flex;
    justify-content: center;
    color: #fff;
    margin: 0 0 45px;
  }

  .tiens-christmas-hero__desc {
    display: flex;
    flex-direction: column;
    font-size: 19px;
    color: #fff;
    margin-bottom: 40px;
  }


  .tiens-christmas-hero__desc p {
    text-align: center;
    margin: 4px;
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



  .tiens-christmas-hero__moon-img img {
    width: 215px;

  }

  .tiens-christmas-main {
    width: 100%;
    height: 124vh;
    background: linear-gradient(#A9DCFB 80%, #aaddfc);
    position: relative;
    border: none;
    margin-bottom: 2765px;
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
    height: 950px;
    background: #74636B;
    z-index: 7;
    display: none;
  }
  @media only screen and (max-width: 850px) {
    .grid-wrapper-color-filler {
      height: 1400px;
      display: block;
    }

    .snowman {
      bottom: -860px;
      left: 170px;
    }
  }




  .door {
    position: absolute;
    right: 60px;
    bottom: 0;
    width: 205px;
    height: 270px;
  }



  .bg-img {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .snow-bottom-white-block {
    position: relative;
    font-family: 'Nunito', sans-serif;
    padding-top: 285px;
    width: 100%;
    height: 100vh;
    background: linear-gradient(#B6D2F7, #fff 100%);
    position: relative;
    top: -70px;
    z-index: 4;
  }


  .santa {
    width: 500px;
    position: absolute;
    z-index: 8;
    bottom: -216px;
    right: 0;
  }


  .snowman {
    width: 374px;
    position: absolute;
    z-index: 8;
    bottom: -198px;
    left: 136px;
  }

  .elka {
    z-index: 3;
    position: absolute;
    bottom: -30px;
    left: -114px;
  }

  .snowballs {
    position: absolute;
    z-index: 7;
    bottom: -60px;
    left: 420px;
  }

  .snow-banner-right {
    position: absolute;
    bottom: -60px;
    right: 360px;
    z-index: 7;
  }


  .snow-bottom-white-block__inner-title {
    color: #2e2759;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    margin-bottom: 64px;
    font-size: 28px;
    font-weight: 800;
    text-align: center;
  }

  .snow-bottom-info {
    background-image: url('./img/banner-bg.jpg');
    background-repeat: repeat;

    width: 1050px;
    margin: 0 auto;
    padding: 15px;
    border-radius: 10px;
  }

  .snow-bottom-info__inner {
    background-color: #fff;
    padding: 9px;
    border-radius: 10px;
    margin: 9px;
  }

  .snow-bottom-info-dotted {
    border-width: 3px;
    border-radius: 6px;
    border-style: dotted;
    border-color: #2E2759;
    padding: 9px;
  }

  .snow-bottom-info-solid {
    border: 1px solid #edc26e;
    border-radius: 6px;
    padding: 10px 15px;

  }

  .snow-bottom-info-list {
    font-size: 22px;
    color: #000;
  }

  .snow-bottom-info-list__item {
    margin-bottom: 30px;
  }
  .snow-bottom-info-list__item:last-child {
    margin-bottom: 0;
  }

  .snow-bottom-social-media {
    background-image: url('./img/share-bg.jpg');
    background-repeat: no-repeat;
    bakground-size: 100% 100%;
    position: absolute;
    bottom: -120px;
    width: 100%;
    height: 120px;
  }

  .social-media__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  
  .social-media__txt {
    font-size: 24px;
    color: #222927;
    text-align: left;

  }

  .social-media__icons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 13px;
  }

  .social-ico {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    font-size: 16px;
  }

  .social-ico.instagram {
    background: linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    color: #fff;
  }

  .social-ico.fb {
    background: rgb(24, 119, 242);
    color: #fff;
  }

  .social-ico.whatsapp {
    background: #09776a;
    color: #fff;
  }

  .social-ico.telegram {
    background: #28A4E3;
    color: #fff;
  }


  @media only screen and (max-width: 1640px) {

    .tiens-christmas-hero__moon-img {
      left: 72px;
    }

    .santa { bottom: -720px; right: -90px; }
    .snowman { bottom: -720px; left: -110px; }
    .elka { bottom: -280px; }
  }




  @media only screen and (max-width: 1412px) {
    .santa {
      right: -150px;
    }


    // .snowman {
    //   display: none;
    // }
  }






  // @media only screen and (max-width: 1330px) {
  //   .santa {
  //     display: none;
  //   }
  // }

  @media only screen and (max-width: 1279px) {
    .snow-bottom-info {
      width: auto;
    }
  }





  @media only screen and (max-width: 1024.9px) {
    .tiens-christmas-container {
      width: 100%;
    }
    .tiens-christmas-main {
      height: 70vh;
    }

  }



  @media only screen and (max-width: 1024px) {
    .santa {
      display: none;
    }
    .snowman {
      display: none;
    }
  }
  @media only screen and (max-width: 993px) {
    h1 { font-size: 32px; }
    h2 { font-size: 18px; }

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
    .tiens-christmas-hero__inner {
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 224px;
    }

    .tiens-christmas-hero__moon-img {
      left: auto;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .tiens-title-main {
      justify-content: left;
      line-height: 38px;
    }

    .tiens-christmas-hero__desc {
      justify-content: left;
      text-align: left;
      font-size: 16px;
    }

    .tiens-subtitle-main {
      font-size: 20px;
      justify-content: left;
      width: 100%;
      margin-bottom: 24px;
    }

    .tiens-christmas-hero__desc p {
      justify-content: left;
      text-align: left;
    }
  }

  @media only screen and (max-width: 850px) {
    .santa {
      display: none;
    }
    .grid-wrapper-color-filler {
      height: 1400px;
      display: block;
    }

    .snowman {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .grid-wrapper-color-filler {
      height: 1000px;
      bottom: -360px;
    }
  }
  @media only screen and (max-width: 600px) {
    .door {
      right: 25px;
    }
    .grid-wrapper-color-filler {
      height: 3000px;
    }
  }

  
  // @media only screen and (max-width: 1940px)  {
  //   .snow-bottom-white-block { padding-top: 342px; }
  // }

  // @media only screen and (max-width: 1560px)  {
  //   .snow-bottom-white-block { padding-top: 524px; }
  // }

  // @media only screen and (max-width: 1366px) and (min-width: 1024px) {
  //   .snow-bottom-white-block { padding-top: 248px; }
  // }

  // @media only screen and (max-width: 1280px)  {
  //   .snow-bottom-white-block { padding-top: 678px; }
  // }

  // @media only screen and (max-width: 1024px) and {
  //   .snow-bottom-white-block { padding-top: 470px; }
  // }


  @media only screen and (max-width: 380px) {
    .tiens-christmas-hero__inner {
      padding-left: 20px;
      padding-right: 20px;
    }
  }



  @media only screen and (min-width: 428px) {
    .snow-bottom-white-block {
      padding-top: 218px;
    }
  }


  // Min-width properties
  @media only screen and (min-width: 768px) {
    .tiens-christmas-main {
      margin-bottom: 865px;
    }
  }

  @media only screen and (min-width: 768px) {
    .snow-bottom-white-block {
      padding-top: 438px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .tiens-christmas-main {
      margin-bottom: 80px;
    }
    .snow-bottom-white-block {
      padding-top: 896px;
    }
  }

  @media only screen and (min-width: 1280px) {

    .snow-bottom-white-block {
      padding-top: 698px;
    }
  }

  @media only screen and (min-width: 1440px) {

    .snow-bottom-white-block {
      padding-top: 660px;
    }
  }

  
  @media only screen and (min-width: 1900px) {

    .snow-bottom-white-block {
      padding-top: 279px;
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
