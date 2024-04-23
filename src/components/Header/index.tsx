import React, { useState } from 'react'
import arrow from '../../assets/images/arrowIcon.png'

import * as S from './styles'

const Header = () => {
  const texts = [
    'FREE POWER SUPPLEMENT on orders R$200+',
    'Free Shipping',
    'Delivery free for all country'
  ]

  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const changeText = () => {
    //quando currentIndex for igual ao ultimo elemento da array texts o operador módulo % faz com que ele volte a ser 0 pois 3 % 3 = 0
    const nextIndex = (currentTextIndex + 1) % texts.length
    setCurrentTextIndex(nextIndex)
  }

  return (
    <S.Container>
      <div className="container">
        <button type="button" onClick={changeText}>
          <img className="reversed-img" src={arrow} alt="arrow" />
        </button>
        <h3>{texts[currentTextIndex]}</h3>
        <button type="button" onClick={changeText}>
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </S.Container>
  )
}

export default Header
