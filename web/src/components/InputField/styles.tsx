import styled from 'styled-components';

export const Fieldset = styled.fieldset`
    position: relative;
    border: none;
    border-bottom: 2px solid #3d3d3d;
    width: 60%;
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        background-color: #158467;
        height: 2px;
        width: 0;
        z-index: 1;
        transition: 0.35s ease-out;
    }
    &:focus-within {
        &::after {
            width: 100%;
        }
    }
`;

export const Label = styled.label`
    position: absolute;
    left: 0;
    color: #3d3d3d;
    font-size: 1.125rem;
    width: 100%;
    pointer-events: none;
    transition: 0.3s ease-out;
`;

export const Input = styled.input`
    font-size: 1.125rem;
    border: none;
    outline: none;
    width: 100%;
    &:focus, &:valid {
        + Label {
            transform: translateY(-115%);
            color: #158467;
            font-size: 0.75rem;
        }
    }
`;
