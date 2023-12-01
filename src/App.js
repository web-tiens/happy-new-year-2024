import React, { useState, useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import { createCalendar } from './helpers'
import Hatch from './Hatch'
import { StyledApp } from './AppStyles'
import Modal from "./Modal";
import Overlay from './Overlay'

const GlobalStyle = createGlobalStyle`
  html { 
    overflow-x: hidden;   

  }

  body {
    background-size: 100%;
    background-repeat: no-repeat;
    scroll-behavior: smooth;
    overflow-x: hidden;
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
    top: 76px; left: 156px;
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
    padding-top: 320px;
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
    bottom: -600px;
    right: 120px;
  }
  .snowman {
    width: 374px;
    position: absolute;
    z-index: 8;
    bottom: -600px;
    left: 226px;
  }
  .elka {
    z-index: 5;
    position: absolute;
    bottom: -400px;
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
    list-style-type: none;
  }

  .snow-bottom-info-list__item {
    margin-bottom: 30px;
  }
  .snow-bottom-info-list__item:last-child {
    margin-bottom: 0;
  }

  .snow-bottom-social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./img/share-bg.jpg');
    background-repeat: no-repeat;
    bakground-size: 100% 100%;
    position: absolute;
    bottom: -400px;
    width: 100%;
    height: 120px;
  }

  @media only screen and (max-width: 430px) {
    .snow-bottom-social-media {
      bottom: -900px;
    }
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
      margin: 0 auto;

    }
  }
  @media only screen and (max-width: 1024.9px) {
    .tiens-christmas-container {
      width: 100%;
    }
    .tiens-christmas-main {
      height: 70vh;
    }

    
    .santa {bottom: -1220px;}
    .snowman { bottom: -1220px; }
    .elka { display: none; } 

  }
  @media only screen and (max-width: 1024px) {
    .santa {
      display: block;
    }
    .snowman {
      display: block;
    }
    .elka { display: none; } 
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

    .tiens-christmas-main {
      margin-bottom: 1430px;
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
      bottom: -518px;
    }
    .tiens-subtitle-main {
      width: 100%;
    }
    .tiens-christmas-hero__desc {
      width: 100%;
    }
    .social-media__txt { width: 100%; }
  }
  @media only screen and (max-width: 600px) {
    .door {
      right: 25px;
    }
    .grid-wrapper-color-filler {
      height: 3000px;
      bottom: -498px;
    }
  }

  @media only screen and (max-width: 380px) {
    .tiens-christmas-hero__inner {
      padding-left: 16px;
      padding-right: 16px;
    }
    .snow-bottom-social-media { bottom: -380px; }
  }
  @media only screen and (min-width: 428px) {
    .snow-bottom-white-block {
      padding-top: 600px;
    }

  // Min-width properties
  @media only screen and (min-width: 768px) {
    .tiens-christmas-main {
      margin-bottom: 960px;
    }
  }
  @media only screen and (min-width: 768px) {
    .snow-bottom-white-block {
      padding-top: 438px;
    }
  }
  @media only screen and (min-width: 1024px) {
    .tiens-christmas-main {
      margin-bottom: 70px;
    }
    .snow-bottom-white-block {
      padding-top: 798px;
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
      padding-top: 560px;
    }
  }

`
const cardText = [
  { text: "Поздравляем с Новым годом! Пусть старый год заберет все невзгоды и печали, а новый ― будет наполнен достижениями, богатством, любовью и здоровьем! Желаем мира, благополучия и счастья Вам, пусть в Новом Году всё получится, и задуманное сбудется!" },
  { text: "Поздравляем с Новым годом! Желаем, чтобы каждая минута приносила только радость, каждое событие было приятным и долгожданным, а каждая задумка заканчивалась успешным результатом!" },
  { text: "С Новым годом! Желаем успешно и красиво вступить в Новый 2024 год! Пусть все поставленные цели будут достигнуты, все желания исполнены и здоровье на максимуме! Пусть этот год будет таким, чтобы хотелось повторить!"},
  { text: "Новый год — самый волшебный день в году, когда могут случаться настоящие чудеса. Желаем воплощения всех тайных желаний. Пускай теплая семейная атмосфера в кругу самых близких сердцу людей зарядит яркими эмоциями. Пускай не пугают новые жизненные приключения, а удача идет следом! С Новым годом!" },
  { text: "С Новым годом! Желаем, чтобы 2024 год был полон профессиональных успехов и замечательных личных событий. Пусть в новом году даже самый обычный день приносит маленький приятный сюрприз, любой гнев перерастает в улыбки, грусть ― в надежду, а любовь и мир сопутствуют всем, кто тебя окружает. Счастливого Нового года!" },
  { text: "Пусть Новый год станет для Вас успешным и богатым хорошими событиями и знакомствами, желаниями и возможностями. Желаем, чтобы Вы могли разделить радостные моменты с близкими людьми, а также здоровья, мира, удачи и благополучия. Пусть Новый год принесет радость, счастье и перемены в лучшую сторону!" },
  { text: "Желаем Вам удачи, дорогие и близкие, друзья и просто знакомые. Добра и исполняющихся надежд, мира и взаимопонимания, твёрдой почвы под ногами, денег и благополучия. Продолжайте хранить свои жизненные ценности, будьте отзывчивы и любите друг друга, несмотря ни на что. Пусть все горести и беды останутся в уходящем году. Пусть новый год принесёт только положительные эмоции и много светлых радостных дней." },
  { text: "Как говорят, под Новый год случаются чудеса, сбываются желания. Верьте в невозможное всем сердцем, и оно случится. Мечтайте свободно, стремитесь к своим мечтам, и они обязательно сбудутся. С любовью и улыбкой смотрите на мир вокруг, и он обязательно ответит вам тем же." },
  { text: "Каждая минута наступающего года пусть приносит в дом тепло, счастье и вдохновение. Пусть все планы и задумки реализуются легко, а окружают вас пусть объятия, поцелуи и нежные слова близких людей. Желаю, чтобы процветание царило в любой сфере вашей жизни, удачи и позитива!"},
  { text: "Найди время путешествиям! «Иногда один день, проведенный в других местах, дает больше, чем десять лет жизни дома»." },
  { text: "Поздравляем Вас с Новым годом! Пусть новый год принесёт всё, о чём вы мечтаете, и немного больше. Пусть уходит всё плохое с последним ударом курантов. Новый год — это старт для новых начинаний и возможностей." },
  { text: "Поздравляем Вас с Новым годом! Пусть сбудутся все мечты, все ваши желания, пусть волшебство окутает Вас! Побольше везения Вам, здоровья, богатства и душевного спокойствия!"},
  { text: "С Новым годом! Желаем Вам провести незабываемый год, который будет полон прекрасных, запоминающихся моментов и успехов в любых начинаниях. Все мечты обязательно исполнятся, главное — верьте в себя. Пусть Вас окружают лишь любящие и преданные люди, которые смогут наполнить этот год яркими красками!" },
  { text: "Встречай трудности с улыбкой – они не выдерживают позитивного настроя!" },
  { text: "С Новым годом! Пусть этот год не тянется и не мчится. Пусть он уверенно выстраивается из череды приятных событий, из хороших дней. Желаем сюрпризов и счастья. Желаем любви и добра. Желаю здоровья и богатства. Желаем домашнего уюта и радостных встреч с дорогими людьми!" },
  { text: "Желаем, чтобы новогодняя сказка подарила Вам много чудесных мгновений и исполнение всех желаний! Улыбайтесь и получайте наслаждение от жизни! Пусть Ваше сердце всегда будет наполнено любовью, счастьем и добром!" },
  { text: "С Новым годом! Пусть этот год принесет Вам только все самое лучшее. Пусть Вам сопутствует удача, успех и везенье. Желаем всем крепкого здоровья, настоящего счастья и хорошего настроения. Пусть Вас всегда окружают любимые люди." },
  { text: "Новый год – как страница в книге. Пусть твоя история будет полна незабываемых моментов." },
  { text: "Поздравляем Вас с Новым годом! Пусть этот год будет наполнен радостными событиями. Желаем осуществления самых грандиозных планов, карьерного роста и достижения новых вершин. Отмечайте этот праздник в кругу самых близких и родных людей. Пусть этот год будет лучше предыдущего и станет особенным." },
  { text: "Искренне поздравляем Вас с Новым годом! Желаем Вам в грядущем году быть в окружении исключительно положительных и доброжелательных людей, переживать только приятные эмоции, радоваться каждому прожитому дню, дарить радость и улыбки окружающим. И пусть этот Новый год станет для Вас особенным." },
  { text: "Поздравляем с Новым годом! Желаем, чтобы наступающий год принес всем нам как можно больше лучезарных и позитивных моментов! Новых Вам свершений и небывалых высот! Пусть каждый день будет наполнен оптимизмом, улыбками близких и прекрасным самочувствием!" },
  { text: "Пусть огни зажгутся не только на вашей ёлке, но и в вашей душе, пусть счастье будет не только в сказке, но и в вашей жизни. Желаем волшебной ночи и сбывшейся мечты, светлой надежды и курса по ветру счастья. С Новым годом!" },
  { text: "Пусть светлый новогодний праздник войдёт в Вашу жизнь, принеся с собой достаток, тепло семейного очага, здоровье и приятные сюрпризы, радостные встречи и улыбки! Желаем ежедневно находить повод для улыбки и всегда чувствовать себя влюблёнными в жизнь!" },
  { text: "Пускай этот волшебный Новый год будет полон радости, прекрасных чудес и замечательного настроения! Желаем искренней любви, преданной дружбы и много новых успехов в 2024 году! Пусть счастье, здоровье и достаток только приумножаются!" },
  { text: "С праздником! Пусть время станет сказочным и чудесным, когда мечты исполняются, желания сбываются. Пусть зима не будет холодной, а в морозы согревают теплые и родные объятия самых любимых и близких людей."},
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
