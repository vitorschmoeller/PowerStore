import * as S from './styles'
import star from '../../assets/images/star.png'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { boolean } from 'yup'

export type Props = {
  image: string
}
const Hero = ({ image }: Props) => {
  const [activeHashLink, setActiveHashLink] = useState<string>('')

  // Função para atualizar o HashLink ativo
  const handleSetActiveLink = (id: string) => {
    setActiveHashLink(id)
  }
  return (
    <>
      {image === 'home' ? (
        <>
          <S.Image image={image}>
            <div className="container">
              <S.Container>
                <div>
                  <S.Star src={star} alt="" />
                  <S.Star src={star} alt="" />
                  <S.Star src={star} alt="" />
                  <S.Star src={star} alt="" />
                  <S.Star src={star} alt="" />
                  <S.Star src={star} alt="" />
                  <S.Span>4.6 stars based on 2850+ REVIEWS</S.Span>
                </div>
                <S.Title>
                  FUEL YOUR DAY <br /> WITH POWER
                </S.Title>
                <S.SubTitle>The BR’s #1 HIGH PROTEIN WHEY</S.SubTitle>
                <S.CircleContainer>
                  <S.Circle>HIGH PROTEIN</S.Circle>
                  <S.Circle>HIGH FIBRE</S.Circle>
                  <S.Circle>LOW SUGAR</S.Circle>
                </S.CircleContainer>
                <Link to="/categories">
                  <S.Button>SHOP NOW</S.Button>
                </Link>
                <small>Join the 25,000+ who made the switch</small>
              </S.Container>
            </div>
          </S.Image>
        </>
      ) : (
        <>
          <S.Image image={image}></S.Image>
          <S.Nav>
            <div className="container">
              <HashLink
                className={activeHashLink === 'whey' ? 'activeLink' : ''}
                onClick={() => handleSetActiveLink('whey')}
                to="#whey"
              >
                Whey
              </HashLink>
              <HashLink
                className={activeHashLink === 'creatina' ? 'activeLink' : ''}
                onClick={() => handleSetActiveLink('creatina')}
                to="#creatina"
              >
                Creatine
              </HashLink>
              <HashLink
                className={activeHashLink === 'treino' ? 'activeLink' : ''}
                onClick={() => handleSetActiveLink('treino')}
                to="#treino"
              >
                Pre-workout
              </HashLink>
              <HashLink
                className={activeHashLink === 'pasta' ? 'activeLink' : ''}
                onClick={() => handleSetActiveLink('pasta')}
                to="#pasta"
              >
                Peanut butter
              </HashLink>
            </div>
          </S.Nav>
        </>
      )}
    </>
  )
}

export default Hero
