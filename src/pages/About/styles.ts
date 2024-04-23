import styled from 'styled-components'

type Props = {
  marginRight?: string
  marginLeft?: string
}

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding-top: 32px;
`

export const Article = styled.article`
  display: flex;
  margin-bottom: 64px;

  img {
    width: 500px;
    height: 300px;
  }

  h2 {
    font-weight: bold;
    font-size: 32px;

    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    text-align: center;
  }
`
export const TextContainer = styled.div<Props>`
  display: block;

  margin-left: ${(props) => {
    if (props.marginLeft) {
      return props.marginLeft
    } else {
      return ''
    }
  }};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '')};
`
