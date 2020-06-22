import React from 'react';
import styled from 'styled-components';
import firstMag from '../img/home/hand_mag.png';

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
      </div>
    )
  }

export default Home;