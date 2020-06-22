import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';


const Navigation = styled.nav`

`
const Logo = styled.img`
`

const List = styled.ul`
  font-size: 1.6rem;
  list-style-type: none;
`

const Cell = styled.li`
  margin:40px;

  a {
    text-decoration: none;

    &:hover {
      font-weight: 700;
    }
  }
`

const Button = styled.button`
`

const Header = () => {
  return (
      <header>
        <Navigation>
          <List>
            <Cell><Logo src={logo} alt="mini-resume"/></Cell>
            <Cell><Link to="/">Accueil</Link></Cell>
            <Cell><Link to="/worldsView">Vue sur le monde</Link></Cell>
            <Cell><Link to="/partnership">Devenir partenaire</Link></Cell>
            <Cell><Link to="/contact">Contactez-nous</Link></Cell>
            <Button><Link to="/subscribe">S'abonnez au magazine</Link></Button>
          </List>
        </Navigation>
      </header>
    )
  }

export default Header;
