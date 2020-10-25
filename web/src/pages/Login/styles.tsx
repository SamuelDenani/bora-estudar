import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    width: 100vw;
`;

export const GoBack = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    left: 50px;
    background-color: #197163;
    border: none;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    outline: none;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:focus {
        box-shadow: 0 0 0 2px #841532;
    }
`;

export const Heading = styled.h1`
    font-size: 3rem;
    color: #197163;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: -3px 3px 5px -1px rgba(0, 0, 0, 0.2);
    height: 65%;
    width: 55%;
    max-width: 900px;
`;

export const Submit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #197163;
    border: none;
    border-radius: 3px;
    margin-bottom: -40px;
    width: 60%;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover {
        background-color: #229B88;
    }
`;

export const Subscribe = styled(Link)`
    color: #5c5c5c;
    font-size: 0.9375rem;
`;