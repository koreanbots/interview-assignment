import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
`;

export const Response = styled.p`
    color: ${({ theme }) => theme.colors.dark};
`;