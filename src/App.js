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
    scroll-behavior: smooth;
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
    position: fixed;
    z-index: 60;
  }

  .tiens-christmas-header__inner {
    margin: 0 40px;
    padding: 12px 0;
  }


  .tiens-christmas-header__logo {
    width: 190px;
    height: 110px;
  }

  #logo {
    width: 135px;
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
    padding-block-end: 260px;
    position: relative;
    font-family: 'Nunito', sans-serif;
    width: 100%;
    height: 100vh;
    background: linear-gradient(#2e2759, #5B649A, #aaddfc);
  }
  .tiens-christmas-hero__inner {
    padding: 172px 0 20px;
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
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    display: flex;
    justify-content: center;
    color: #fff;
    margin: 0 0 45px;
  }
  .tiens-christmas-hero__desc {
    width: 610px;
    margin: 0 auto;
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
    top: 54px; left: 156px;
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

  @media only screen and (max-width: 430px) {
    .snow-bottom-social-media {
      bottom: -430px;
    }
  }


  .social-media__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  
  .social-media__txt {
    width: 590px;
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
  @media only screen and (max-width: 1160px) {
    .social-media__inner {
      flex-direction: column;
      display: flex;
      justify-content: center;
    }
    .social-media__txt {
      text-align: center;

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
      display: block;
    }
    .snowman {
      display: block;
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
      padding-top: 312px;
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
      margin: 0;
      margin-bottom: 48px;
    }
    .tiens-subtitle-main {
      font-size: 18px;
      justify-content: left;
      width: 660px;
      margin-bottom: 24px;
      text-align: left;
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
    .tiens-subtitle-main {
      width: 100%;
    }
    .tiens-christmas-hero__desc {
      width: 100%;
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

  @media only screen and (max-width: 380px) {
    .tiens-christmas-hero__inner {
      padding-left: 20px;
      padding-right: 20px;
    }
    .snow-bottom-social-media { bottom: -380px; }
  }
  @media only screen and (min-width: 428px) {
    .snow-bottom-white-block {
      padding-top: 218px;
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
  { text: "Наша команда Тяньши поздравляет вас с наступающим Новым годом! Мы желаем вам много счастья, любви и процветания!" },
  { text: "Приобретите продукцию Тяньши и вы будете благоухать в Новом Году!" },
  { text: "Не ограничивайте себя ни в чем! Помните предстоящий год - ваша новая возможность, сделать то о чем мечтали в прошлом году!" },
  { text: "Сделайте близким подарок, купив наборы Тяньши. " },
  { text: "Любите близких своих. Тяньши сделает вашу жизнь ярче и прекраснее!" },
  { text: "Пусть улыбка сияет на вашем лице каждый день в Новом Году!" },
  { text: "Мы поздравляем вас с наступающим Новым Годом! Желаем вам осществления вашей мечти и много радости!" },
  { text: "На Деда Мороза надейся, но и сам не плошай" },
  { text: "Мы уверены что вас ждет большое счастье в Новом Году!" },
  { text: "Больше путешествуйте, заводите новые знакомства и не забывайте про своих близких в Новом Году!" },
  { text: "Будьте смелы в принимаемых вами решениях, мы уверены, вы обязательно достигните то чего пожелаете в Новом Году!" },
  { text: "Верьте в себя и в свои силы. Вы всегда сможете найти поддержку от нашей команды. Помните TIENS всегда с вами!" },
  { text: "Мы желаем Вам найти свою вторую половинку в 2024 году" },
  { text: "Пусть невзгоды обойдут вас стороной в Новом Году, желаем вам крепчайшего здоровья и долголетия!" },
  { text: "Заварите себе чай Тяньши, и встретьте Новый Год в окружении близких" },
  { text: "Помните, что таблетки Тяньши делают вас крепче и сильнее! Желаем вам в 2024 году исполнения ваших желаний и крепкого здоровья!" },
  { text: "Кризис – это всегда новые возможности. С Тяньши вы найдете в себе второе дыхание, новый источник сил и превзойдете самих себя в Новом Году! Помните, мы - в это верим!" },
  { text: "Пусть пополнится ваш гардероб красивыми вещами! Мы желаем вам оставайться такими же женственными и прекрасными в Новом Году! " },
  { text: "Тяньши желаем вам много счастья в Новом Году! Встретьте его красочными фейерверками, теплыми поздравлениями и килограммами мандаринов!" },
  { text: "Ваше счастье - наше счастье. Ведь мы по-настоящему хотим войти в каждый дом, в каждое сердце. Тяньши поздравляет вас с наступающим Новым Годом, и желает вам прилива сил и семейного счастья!" },
  { text: "Словите драйв новогоднего праздника, Тяньши искренне верит, вы добьетесь всего чего пожелаете в Новом Году!" },
  { text: "Подарите себе капельку любви в новогоднюю ночь, растворив пакетик чая Тяньши! Он придаст вам бодрости, сил и прекрасное настроение! " },
  { text: "Говорите громко, о чем мечтаете в 2024 году. Ведь только, даря друг другу любовь и заботу, мы способны быть людьми. Тяньши воплотит ваши просьбы в реальность!" },
  { text: "Наша большая дружная семья Тяньши искренне желает вам много большого счастья в Новом Году и семейного благополуия!" },
  { text: "Тяньши поздравляет вас с наступающим Новым Годом! Наша команда желает вам много счастья, терпения и сил в Новом 2024 году!" },
  { text: "Сделайте свою жизнь ярче с Тяньши! Подарите себе набор косметики Тяньши, ведь с Тяньши вы выглядите красивее и моложе!" },
  { text: "Оставайтесь такими какие вы есть! Млодыми и красивыми!" },
  { text: "Пусть Бог сопутствует вам во всех ваших делах, пусть неудачи обойдут вас стороной, а ваша жизнь наполнилась изобилием блаженства! Тяньши всегда рядом, помните об этом!" },
  { text: "Пусть новогодняя ночь превратится в прекрасную зимнюю сказку! Помните, вы - главный герой этого торжества" },
  { text: "тяньши желает вам исполнения всех ваших желаний! Делайте то, о чем мечтаете, говорите громко, чтобы мы могли вас услышать! Мы уверены, с Тяньши вы добьетесь любых результатов!" },
  { text: "Пусть счастье обложит вас со всех сторон в Новом Году! Покупайте БАДы Тяньши, становитесь сильнее. Ваше здоровье - в наших руках!" }
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
      hatch.id === id ?  { ...hatch, disabled: true, disabledModal: true } : hatch

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
                setShowModal={(hatch) => { setTimeout(() => setShowModal(false), 280) }}
                shuffleCards = { shuffleCards }
              />
              )  
          }
        </StyledApp>
      </div>
        {
          cards.map((card) => (
            <Modal 
              key={card.id}
              hatchData={card}
              isOpen={showModal} 
              modalCloseBtn={() => setShowModal(true)} 
              text = { card.text } 
            />
          ))
        }
      {/* <Overlay isOpen={showModal} /> */}
    </>
  );
}



export default App;
