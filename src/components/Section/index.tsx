import { useState } from 'react'
import Product from '../Product'
import product1 from '../../assets/images/Produto1.png'
import product2 from '../../assets/images/Produto2.png'
import creatine1 from '../../assets/suplementos/creatina 1.webp'
import creatine2 from '../../assets/suplementos/cretina2.webp'
import creatine3 from '../../assets/suplementos/creatina3.webp'
import creatine4 from '../../assets/suplementos/creatina4.webp'
import preWorkout1 from '../../assets/suplementos/preTreino1.png'
import preWorkout2 from '../../assets/suplementos/preTreino2.png'
import preWorkout3 from '../../assets/suplementos/preTreino3.png'
import preWorkout4 from '../../assets/suplementos/preTreino4.png'
import * as S from './styles'

// type Props = {
//   children: JSX.Element
// }

function Section() {
  const [select, setSelect] = useState(true)
  return (
    <S.Container className="container">
      <S.CardContainer>
        <S.CardButton
          className={select ? 'border' : ''}
          onClick={() => setSelect(true)}
        >
          <h3>Pre-workout</h3>
          <p>Large multi-serve container for any occasion.</p>
        </S.CardButton>
        <S.CardButton
          className={!select ? 'border' : ''}
          onClick={() => setSelect(false)}
        >
          <h3>Creatine</h3>
          <p>Pots & Container together for wherever you are!</p>
        </S.CardButton>
      </S.CardContainer>
      {select ? (
        <>
          <S.List>
            <li>
              <Product
                id={9}
                image={preWorkout1}
                review="(1297 Reviews)"
                title="Pre-workout"
                subtitle="300g ~ from "
                price={104.99}
              />
            </li>
            <li>
              <Product
                id={10}
                image={preWorkout2}
                review="(1997 Reviews)"
                title="Pre-workout Before"
                subtitle="100g ~ from "
                price={79.99}
              />
            </li>
            <li>
              <Product
                id={11}
                image={preWorkout3}
                review="(1597 Reviews)"
                title="Pre-workout Insanity"
                subtitle="300g ~ from "
                price={104.99}
              />
            </li>
            <li>
              <Product
                id={12}
                image={preWorkout4}
                review="(1897 Reviews)"
                title="Pre-workout Max"
                subtitle="150g ~ from "
                price={104.99}
              />
            </li>
          </S.List>
        </>
      ) : (
        <>
          <S.List>
            <li>
              <Product
                id={5}
                image={creatine1}
                review="(400 Reviews)"
                title="Cretine Max"
                subtitle="300g ~ from"
                price={89.99}
              />
            </li>
            <li>
              <Product
                id={6}
                image={creatine2}
                review="(1200 Reviews)"
                title="Cretine Endurance'"
                subtitle="120g ~ from "
                price={89.99}
              />
            </li>
            <li>
              <Product
                id={7}
                image={creatine3}
                review="(1517 Reviews)"
                title="Cretine Pure"
                subtitle="120g ~ from "
                price={89.99}
              />
            </li>
            <li>
              <Product
                id={8}
                image={creatine4}
                review="(1797 Reviews)"
                title="Cretine Monihydrate"
                subtitle="300g ~ from "
                price={150}
              />
            </li>
          </S.List>
        </>
      )}
    </S.Container>
  )
}

export default Section
