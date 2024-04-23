import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'title' | 'suplement'>>`
  padding: 32px 0;
  background: ${(props) =>
    props.background === 'blue'
      ? 'linear-gradient(to right, #ff4462, #0451fc)'
      : 'linear-gradient(to right, #0451fc,  #ff4462)'};

  color: ${colors.moreWhite};
  div {
  }

  span {
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 16px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid ${colors.white};
  padding-bottom: 8px;
`
