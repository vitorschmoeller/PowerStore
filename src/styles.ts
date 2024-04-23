import { createGlobalStyle, styled } from 'styled-components'

export const colors = {
  white: '#F5F5F5',
  black: '#2C3A45',
  moreBlack: '#000000',
  moreWhite: '#ffffff',
  red: '#FF4462',
  gray: '#F6F6F7',
  checkoutBack: '#F2F0ED'
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}
export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  body {
    background-color:  ${colors.moreWhite};
    color: ${colors.black};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 80%;
    }
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
