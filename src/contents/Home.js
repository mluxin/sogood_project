import React from 'react';
import styled from 'styled-components';
import firstMag from '../img/home/hand_mag.png';
import introMag from '../img/home/intro_mag.png';

const Container = styled.div`
  width: 100%;
  display: flex;
`

const Square = styled.div`
  background-color: #F7F1DC;
  margin-left: 5%;
  margin-top: 60px;
  height: 621px;
  width: 60%;
  z-index: 0;
  position: relative;
`

const Mag = styled.img`
  background: transparent;
  width: 100%;
`

const BlueSquare = styled.div`
  background-color: #48A09F;
  width: 30%;
  height: 300px;
  z-index: 1;
  position: absolute;
  right: 8%;
  margin-top: 14%;
  padding: 35px;
  color: white;

  h1 {
    background-color: #48A09F;
    line-height: 1.4em;
  }

  p {
    background-color: #48A09F;
    margin-top: 25px;
    font-size: 1rem;
  }

  .more {
    font-style: italic;
  }

`

const Carousel = styled.div`
  height: 550px;
  width: 100%;
`

const StoryTelling = styled.div`
  background-color: #F7F1DC;
  height: 680px;
  width: 100%;
  display: flex;
`

const Left = styled.div`
  background-color: #F7F1DC;
  margin: auto 0;
  max-width: 44%;
`

const IntroMag = styled.img`
  background: transparent;
`

const StoryContent = styled.div`
  background-color: #F7F1DC;
  margin: auto 0;

  h2 {
    background-color: #F7F1DC;
    margin-bottom: 22px;
    font-size: 32px;
  }

  p {
    background-color: #F7F1DC;
    padding-right: 10%;
    line-height: 25px;
    font-size: 15px;
  }
`

const Subscribe = styled.button`
  background-color: #DB4631;
  color: white;
  border: none;
  padding: 14px;
  width: 243px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
`

const Engage = styled.button`
  background-color: #F7F1DC;
  color: #DB4631;
  border: none;
  padding: 15px;
  width: 243px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
`

const Home = () => {
  return (
      <div>
        <Container>
          <Square>
            <Mag src={firstMag} alt="mag"/>
          </Square>
          <BlueSquare>
            <h1>Des milliers de sujets. Histoire, humour, et humain</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor magna viverra ultricies vitae. Vitae et, arcu augue mauris sit nisl id.</p>
            <p className="more">+ En savoir plus sur l’esprit so good</p>
          </BlueSquare>
        </Container>

        <Carousel></Carousel>

        <StoryTelling>
          <Left>
            <IntroMag src={introMag} alt="mag"/>
          </Left>
          <StoryContent>
            <h2>Pourquoi so good stories?</h2>
            <p>Paul, Greta, Boyan, Malala... Célèbres ou inconnu(e)s, ils/elles se battent pour un monde plus juste, une société plus respectueuse de notre environnement ; ils/elles passent leur vie à défendre les intérêts de minorités opprimées, œuvrent au quotidien pour plus d’égalité...</p>
            <br/>
            <p>Activistes, philosophes, bénévoles, citoyen(ne)s, entrepreneuses, entrepreneurs, ces femmes et ces hommes ont décidé de faire avancer le monde. So good entend raconter leurs histoires. Simplement, avec humanité, en passant du temps à leurs côtés, en ayant toujours le souci de retranscrire avec justesse leurs combats, leurs causes, leurs réussites parfois, leurs échecs aussi.</p>
            <Subscribe>S’abonner au magazine</Subscribe>
            <Engage>Engager mon entreprise</Engage>
          </StoryContent>
        </StoryTelling>
      </div>
    )
  }

export default Home;