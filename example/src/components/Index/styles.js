import styled from 'styled-components';

import { Link as WouterLink } from 'wouter';

export const Container = styled.div`
    padding: 0 12vw 0 12vw;
`;

export const TitleWrapper = styled.div`
    display: grid;
    place-items: center;
`;

export const ReviewWrapper = styled.div`
    margin-top: 34px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.title};
    font-size: 32px;
    margin-bottom: 0;
`;

export const SubTitle = styled.h2`
    color: ${({ theme }) => theme.colors.subtitle};
    font-size: 18px;
`;

export const ReviewTitle = styled(SubTitle)`
    margin-left: 14px;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Link = styled(WouterLink)`
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;

    margin-top: 2px;
`;
