import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    width: 100vw;
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
    color: #fadcac;
    background-color: #197163;
    border: none;
    border-radius: 3px;
    padding: 1.2rem 0;
    width: 40%;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover {
        background-color: #229B88;
    }
`;