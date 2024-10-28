import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg'; // Make sure the path to your logo is correct
import { Link } from 'react-router-dom';
const Button = () => {
    return (
        <Link to="/chatpage">
            <StyledWrapper>
                <a className="playstore-button" href="#">
                    <img width={30} src={logo} alt="" />
                    <span className="texts">
                        <span className="text-1">Lets go</span>
                        <span className="text-2">Get started</span>
                    </span>
                </a>
            </StyledWrapper>
        </Link>
    );
}

const StyledWrapper = styled.div`
  .playstore-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
    border-radius: 9999px;
    background-color:#231b40;
    padding: 0.625rem 1.5rem;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    outline: 0;
    transition: all  .2s ease;
    text-decoration: none;
    }
    
    .playstore-button:hover {
        background-color: transparent;
        color:#FFFFFF;
        background-color:#180a2e;
        border: 2px solid #FFFFFF;
  }

  .icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .texts {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1;
  }

  .text-1 {
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .text-2 {
    font-weight: 600;
  }`;

export default Button;
