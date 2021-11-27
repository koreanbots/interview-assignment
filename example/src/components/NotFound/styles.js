import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;

    resize: both; 
    overflow: auto;
`;

export const TextAlert = styled.h1`
    color: ${({ theme }) => theme.colors.title};
    text-align: center;
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.secondary};
    background: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
`;
