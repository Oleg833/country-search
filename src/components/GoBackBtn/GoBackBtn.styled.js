import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const GoBackButton = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.06em;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px 18px;
  width: 150px;
  transition: background-color ${({ theme }) => theme.animations.cubicBezier};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.imageBackground};
  }
`;
