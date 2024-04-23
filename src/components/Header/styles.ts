import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  background: linear-gradient(to right, #dc5aa3, #8683df);
  color: ${colors.moreWhite};
  padding: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
  }
  h3 {
    font-size: 14px;
    font-weight: bold;
    margin: 0 88px 0 88px;
    border-bottom: 2px solid ${colors.moreWhite};

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
      text-align: center;
    }
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  img {
    width: 8px;
    heigth: 8px;
  }

  .reversed-img {
    transform: scale(-1);
  }
`
