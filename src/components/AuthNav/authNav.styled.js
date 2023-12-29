import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ActivePage = styled(NavLink)`
  padding: 8px 16px;
  display: inline-block;
  text-decoration: none;
  color: #696969;

  &.active {
    color: white;
    background-color: #696969;
  }
`;
