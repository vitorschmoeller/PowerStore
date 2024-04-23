import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  padding: 72px 0;
`
export const TitleContainer = styled.div`
  display: block;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 32px;
    color: ${colors.moreBlack};
  }
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    max-width: 360px;

    li {
      margin-right: 0;
      margin-left: 16px;
      margin-bottom: 16px;
    }
  }
`

export const Li = styled.li`
  list-style-type: none;

  margin-right: 16px;

  a {
    text-decoration: none;
    color: ${colors.black};
  }
  @media (max-width: ${breakpoints.tablet}) {
  }
`
