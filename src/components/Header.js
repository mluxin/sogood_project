import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';


const Navigation = styled.nav`
  margin: 0 auto;

  width: 90%;
`
const Logo = styled.img`
  float: left;
  margin-top: 30px;
`

const List = styled.ul`
  width: 100%;
  display: inline-block;
  border-bottom: black 1px dotted;
  list-style-type: none;
  font-size: 1.2rem;
`

const Cell = styled.li`
  float: right;
  margin: 30px 20px 20px 20px;

  @import url(//db.onlinewebfonts.com/c/e72c0eb1cda129ffd8c114c6feeae712?family=Rational+TW);

  a {
    color: black;
    font-weight: lighter;
    text-decoration: none;
    font-family: 'Rational TW';
  }
`

const Button = styled.span`
  background-color: #DB4631;
  padding: 10px;
  color: white;
`


const Header = () => {
  return (
      <header>
        <Navigation>
          <List>
            <Logo src={logo} alt="mini-resume"/>
            <Cell><Link to="/subscribe"><Button>S'abonnez au magazine</Button></Link></Cell>
            <Cell><Link to="/contact">Contactez-nous</Link></Cell>
            <Cell><Link to="/partnership">Devenir partenaire</Link></Cell>
            <Cell><Link to="/worldsView">Vue sur le monde</Link></Cell>
            <Cell><Link to="/">Accueil</Link></Cell>
          </List>
        </Navigation>
      </header>
    )
  }

export default Header;
