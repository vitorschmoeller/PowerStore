import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'
export type Props = {
  margin?: 'marginRight' | ''
}

export const ALink = styled(Link)<Props>`
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 6px 10px;
  color: ${colors.black};
  margin-right: ${(props) => (props.margin === 'marginRight' ? '24px' : '')};

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
    display: block;
  }

  & > img:first-child {
    margin-right: 16px;
    margin-left: 36px;
  }

  img {
    width: 16px;
  }

  &.active {
    background-color: ${colors.red};
    color: ${colors.moreWhite};
  }
`
export const Header = styled.header`
  padding-bottom: 24px;
  padding-top: 24px;
  h1 {
    color: ${colors.black};
    text-decoration: none;
    font-weight: 900;
  }
  a {
    text-decoration: none;
  }
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
  }
  .dropdownContent {
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdownContent a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdownContent a:hover {
    background-color: ${colors.red};
  }

  ${ALink} {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`
export const CardButton = styled.span`
  cursor: pointer;

  img {
    height: 16px;
    margin-left: 38px;
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.moreBlack};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const navPhone = styled.nav`
  display: none;
  &.is-open {
    display: block;
  }
  @media (max-width: ${breakpoints.tablet}) {
    a {
      padding: 8px 0;
      &:hover {
        background-color: ${colors.red};
        color: ${colors.moreWhite};
      }
    }
  }
`
