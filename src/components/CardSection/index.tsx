import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import product from '../../assets/images/SCROOLL/produto1.png'
import card1 from '../../assets/suplementos/card1.jpg'
import card2 from '../../assets/suplementos/card2.jpg'
import card3 from '../../assets/suplementos/card3.png'
import Card from '../Card'
import * as S from './styles'
const CardSection = () => {
  return (
    <S.Container className="">
      <S.TitleContainer>
        <h2>SHOP THE POWER RANGE</h2>
        <p>
          PowerBlendz offers a range of protein supplements to fit your busy
          lifestyle
        </p>
      </S.TitleContainer>

      <S.List>
        <S.Li>
          <HashLink to="/categories#whey">
            <Card
              goTo="Go to Whey category"
              image={card1}
              title="WHEY"
              text="Multi-serve container for every occasion"
            />
          </HashLink>
        </S.Li>
        <S.Li>
          <HashLink to="/categories#creatina">
            <Card
              goTo="Go to Creatine category"
              image={card2}
              title="CREATINE"
              text="Multi-serve container for every occasion"
            />
          </HashLink>
        </S.Li>
        <S.Li>
          <HashLink to="/categories#treino">
            <Card
              goTo="Go to Pre-workout category"
              image={card3}
              title="PRE-WORKOUT"
              text="Multi-serve container for every occasion"
            />
          </HashLink>
        </S.Li>
        <S.Li>
          <HashLink to="/categories#pasta">
            <Card
              image={product}
              title="PENAUT BUTTER"
              text="Multi-serve pouches for every occasion"
            />
          </HashLink>
        </S.Li>
      </S.List>
    </S.Container>
  )
}
export default CardSection
