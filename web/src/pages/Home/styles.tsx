import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100vh;
    background: linear-gradient(135deg, #fadcac 60%, #F7C87C 95%);
`;

export const ContentWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 550px;
`;

export const Heading = styled.h1`
    color: #158467;
    font-size: 7rem;
    margin-bottom: 5vh;
`;

export const Paragraph = styled.p`
    color: #158467;
    font-size: 1.375rem;
    font-weight: 600;
    margin-bottom: 25vh;
`;

export const Image = styled.img`
    height: auto;
    max-width: 38%;
    object-fit: contain;
`;

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 25vh;
    right: 10%;
    color: #fff;
    font-size: 1.125rem;
    font-weight: 600;
    text-decoration: none;
    background-color: #197163;
    border: none;
    border-radius: 7px;
    padding: 0.6rem 1.125rem;
    width: 140px;
    outline: none;
    transition: 0.25s ease;
    cursor: pointer;
    &:hover {
        background-color: #158467;
        svg {
            animation: arrow 0.4s ease infinite alternate;
        }
    }
    &:focus {
        box-shadow: 0 0 0 2px #841532;
    }

    @keyframes arrow {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(6px);
        }
    }
`;