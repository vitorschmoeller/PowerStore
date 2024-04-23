import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import productHero from '../../assets/images/productHero.png'
import { Props } from '.'
import banner from '../../assets/suplementos/banner4.png'
export const Image = styled.div<Props>`
  height: ${(props) => (props.image === 'home' ? '560px' : '400px')};
  display block;
  max-width: 100vw;

  background-image: url(${(props) =>
    props.image === 'home' ? banner : productHero});

    @media(max-width: ${breakpoints.tablet}){

    }

`
export const Container = styled.div`
  max-width: 350px;

  small {
    display: block;
    text-align: center;
  }
  @media (max-width: ${breakpoints.tablet}) {
    > div {
      img {
        margin-top: 40px;
      }
    }
  }
`

export const Span = styled.span`
  border-bottom: 1px solid ${colors.black};
  font-size: 14px;
  font-weight: bold;
`
export const Title = styled.h2`
  font-size: 48px;
  font-weight: 900;

  margin: 16px 0;
`
export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${colors.black};
  font-weight: BOLD;
  font-size: 18px;
  margin: 36px 6px 16px 6px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 24px 6px 16px 6px;
  }
  span {
  }
`
export const CircleContainer = styled.div`
  display: flex;
  margin-right: 12px;
`
export const Star = styled.img`
  height: 14px;
  width: 14px;
  margin-right: 6px;
  margin-top: 80px;
`
export const SubTitle = styled.span`
  display: block;
  font-size: 21px;
  line-height: 22px;
  font-family: 'Roboto', 'sans-serif';
  font-weight: 400;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`
export const Button = styled.button`
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 16px;
  font-weight: bold;
  border: none;
  width: 100%;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 8px;
  }
`

export const Nav = styled.nav`
  background-color: ${colors.black};
  padding: 16px 0;
  a {
    text-decoration: none;
    color: ${colors.moreWhite};
    font-size: 18px;
    font-weight: 900;
    padding: 2px 4px;

    &:hover {
      background-color: ${colors.red};
    }
  }
  div {
    display: flex;
    justify-content: space-between;
  }

  .activeLink {
    background-color: ${colors.red};
  }
`
