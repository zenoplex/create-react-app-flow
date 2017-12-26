// @flow
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

export type ViewProps = {};
export type ActionProps = {
  onHomeClick: Function,
  onAboutClick: Function,
};
type Props = ViewProps & ActionProps;

const StyledHeader = styled.header`
  height: 150px;
  padding: 20px;
  background-color: #222;
  color: white;
  text-align: center;
`;

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Img = styled.img`
  height: 80px;
  animation: ${rotate360} infinite 20s linear;
`;

const H1 = styled.h1`
  font-size: 1.5em;
`;

export const Header = ({ onHomeClick, onAboutClick }: Props) => (
  <StyledHeader>
    <Img src={logo} alt="logo" />
    <H1>Welcome to React</H1>
    <button onClick={onHomeClick}>home</button>
    <button onClick={onAboutClick}>about</button>
  </StyledHeader>
);

// Note: not exporting styled-component due to
// https://github.com/styled-components/styled-components/issues/1350
