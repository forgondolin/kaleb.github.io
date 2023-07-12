import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
	background-color: #141414;
	padding: 20px; 
`;

const Title = styled.h1`
	font-size: 24px;
	color: #bbbbbb;
`;

const Nav = styled.nav`
	ul {
		list-style: none;
		display: flex;
	

	li {
		margin-right: 15px;
	

		a {	
		text-decoration: none;
		color: #bbbbbb;
		font-weight: bold;

			&:hover{
			color:#0f1653;
			}
		}
	}
}
`;

const Header = () => {
    return(
        <HeaderContainer>
            <Title>Meu Portfolio</Title>
            <Nav>
                <ul>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;