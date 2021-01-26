import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: ${(props) => props.theme.colors.text.primary};
`;

export const Home = () => {
    return <Title>Menu Test</Title>;
};
