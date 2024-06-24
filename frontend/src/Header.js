import React, { useState } from "react";
import styled from 'styled-components';
import logo from './image/kepLogo.png';
import { Link , useNavigate} from "react-router-dom";
import { FaUser } from "react-icons/fa";



const StyledHeader = styled.div`
    height: 15vh;
    widht: 100%; 
    background-color: #050509;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-container {
        flex: 0.5;
        img {
            height: 80px;
        }
    }
    .menu-container {
        flex: 2;
    }
    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    .menu span {
        margin-top: 10px;
      }
    .burgerMenu {
        margin-left: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        cursor: pointer;
        position: relative;

    }
    .burger-bar {
        margin: 5px;
        width: 2.5em;
        height: 0.2em;
        background-color: white;
        border-radius: 0.5em;

    }
    .hidden {
        display: none;
    }
    .visible {
        display: block;
    }
    /*clicked*/
    .burger-bar.clicked:nth-child(1) {
        transform: rotate(45deg) translate(0.5em, 0.7em);
        transition: ease-out 0.5s;
    }
    .burger-bar.clicked:nth-child(2) {
        transform: scale(0.1);
        transition: ease-out 0.5s;
    }
    .burger-bar.clicked:nth-child(3) {
        transform: rotate(-45deg) translate(0.5em, -0.7em);
        transition: ease-out 0.5s;
    }
    /*unclicked*/
    .burger-bar.unclicked {
        transform: rotate(0) translate(0);
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    }
    ul {
        list-style: none;
    }
    ul li {
        float: left;
        color: #FFF;
    }
    ul li:not(:first-child) {
        margin-left: 50px;
    }
    nav ul li a {
        display: block;
        text-decoration: none;
        color: white;
        padding: 2rem;
        margin: 0 0.5rem;
        border-radius: 0.5rem;
    }
    nav ul li a:not(.active):hover {
        background-color:#172554 ;
    }
    nav .menu span {
        height: 2rem;
        width: 900%;
        background-color: #111;
        border-radius: 0.2rem;
    }
    .user-icons{
        ${'' /* color: white;
        font-size : 25px;
        position: absolute;
        transform: translateY(-50%);
        right: 150px;
        top : 58px; */}
        color: white;
        font-size: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Header = () => {
    const navigate = useNavigate();
    
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    
    const updateMenu = () => {
        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <StyledHeader>  
            <div className="logo-container">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="menu-container">
                <ul> 
                    <li><Link to="/">Ana Sayfa</Link></li>
                    <li><Link to="/careerquiz">Tercih Robotu</Link></li>
                </ul>
                <div className="user-icons" >
                    {/* <Link to="/login"><FaUser /></Link> */}
                    <button onClick={() => navigate('/login')}><FaUser /></button>
                </div>
                  
                <div className="burgerMenu" onClick={updateMenu}>
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                </div>
                <div className={`menu ${isMenuClicked ? 'visible' : 'hidden'}`}>
                    <div>
                    <button onClick={() => navigate('/universities')}>Üniversiteler</button>
                    </div>
                    <div>
                    <button onClick={() => navigate('/departments')}>Bölümler</button>
                    </div>
                    <div>
                    <button onClick={() => navigate('/programlar')}>Programlar</button>
                    </div>
                </div>
            </nav>
        </StyledHeader>
    );
};

export default Header;