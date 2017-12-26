// @flow
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const H1 = styled.h1`
  font-size: 1.5em;
`;

const P = styled.p`
  font-size: large;
`;

const Component = () => (
  <Wrapper>
    <Header>
      <Img src={logo} alt="logo" />
      <H1>Welcome to React</H1>
    </Header>
    <P>
      To get started, edit <code>src/App.js</code> and save to reload.
    </P>
  </Wrapper>
);

export const App = styled(Component)``;
