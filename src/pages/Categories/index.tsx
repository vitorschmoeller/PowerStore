import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import product1 from '../../assets/images/Produto1.png'
import Suplement from '../../models/product'
import Navbar from '../../components/Navbar'

import whey3 from '../../assets/images/whey3.png'
import whey1 from '../../assets/suplementos/whey4.webp'
import whey4 from '../../assets/suplementos/whey3.webp'
import creatine1 from '../../assets/suplementos/creatina 1.webp'
import creatine2 from '../../assets/suplementos/cretina2.webp'
import creatine3 from '../../assets/suplementos/creatina3.webp'
import creatine4 from '../../assets/suplementos/creatina4.webp'
import preWorkout1 from '../../assets/suplementos/preTreino1.png'
import preWorkout2 from '../../assets/suplementos/preTreino2.png'
import preWorkout3 from '../../assets/suplementos/preTreino3.png'
import preWorkout4 from '../../assets/suplementos/preTreino4.png'
import peanut1 from '../../assets/suplementos/peanutButter1.png'
import peanut2 from '../../assets/suplementos/peanutButter2.png'
import peanut3 from '../../assets/suplementos/penautButter3.webp'
import peanut4 from '../../assets/suplementos/peanutButter4.png'
import Scrolling from '../../components/Scrolling'
import Hero from '../../components/Hero'
const whey: Suplement[] = [
  {
    id: 1,
    image: whey1,
    price: 99.99,
    review: '(2217 Reviews)',
    subtitle: `900g ~ From `,
    title: 'Whey Protein'
  },
  {
    id: 2,
    image: product1,
    price: 59.5,
    review: '(1617 Reviews)',
    subtitle: '5 x 250g ~ From ',
    title: '5 Variety'
  },
  {
    id: 3,
    image: whey3,
    price: 99.99,
    review: '(1417 Reviews)',
    subtitle: '1.8kg ~ From ',
    title: 'Whey Isolate 100%'
  },
  {
    id: 4,
    image: whey4,
    price: 89.99,
    review: '(1917 Reviews)',
    subtitle: '900g ~ From ',
    title: 'Whey 100%'
  }
]

const cretine: Suplement[] = [
  {
    id: 5,
    image: creatine1,
    price: 89.99,
    review: '(400 Reviews)',
    subtitle: '300g ~ from ',
    title: 'Cretine Max'
  },
  {
    id: 6,
    image: creatine2,
    price: 89.99,
    review: '(1200 Reviews)',
    subtitle: '120g ~ from ',
    title: 'Cretine Endurance'
  },
  {
    id: 7,
    image: creatine3,
    price: 89.99,
    review: '(1517 Reviews)',
    subtitle: '120g ~ from ',
    title: 'Cretine Pure'
  },
  {
    id: 8,
    image: creatine4,
    price: 150.0,
    review: '(1797 Reviews)',
    subtitle: '300g ~ from ',
    title: 'Cretine Monihydrate'
  }
]

const preWorkout: Suplement[] = [
  {
    id: 9,
    image: preWorkout1,
    price: 104.99,
    review: '(1297 Reviews)',
    subtitle: '300g ~ from ',
    title: 'Pre-workout'
  },
  {
    id: 10,
    image: preWorkout2,
    price: 79.99,
    review: '(1997 Reviews)',
    subtitle: '100g ~ from ',
    title: 'Pre-workout'
  },
  {
    id: 11,
    image: preWorkout3,
    price: 104.99,
    review: '(1597 Reviews)',
    subtitle: '300g ~ from ',
    title: 'Pre-workout'
  },
  {
    id: 12,
    image: preWorkout4,
    price: 104.99,
    review: '(1897 Reviews)',
    subtitle: '150g ~ from ',
    title: 'Pre-workout'
  }
]

const peanut: Suplement[] = [
  {
    id: 13,
    image: peanut1,
    price: 60.99,
    review: '(1497 Reviews)',
    subtitle: '500g ~ from ',
    title: 'Penaut Butter'
  },
  {
    id: 14,
    image: peanut2,
    price: 60,
    review: '(1997 Reviews)',
    subtitle: '900g ~ from ',
    title: 'Penaut Butter'
  },
  {
    id: 15,
    image: peanut3,
    price: 44.99,
    review: '(2297 Reviews)',
    subtitle: '900g ~ from ',
    title: 'Penaut Butter'
  },
  {
    id: 16,
    image: peanut4,
    price: 55.99,
    review: '(3897 Reviews)',
    subtitle: '500g ~ from ',
    title: 'Penaut Butter'
  }
]
const Categories = () => (
  <>
    <Header />
    <Navbar />
    <Hero image="product" />
    <ProductList id="whey" background="blue" title="WHEY" suplement={whey} />
    <ProductList
      id="creatina"
      background="purple"
      title="Creatine"
      suplement={cretine}
    />
    <ProductList
      id="treino"
      background="blue"
      title="Pre-workout"
      suplement={preWorkout}
    />
    <ProductList
      id="pasta"
      background="purple"
      title="peanut butter"
      suplement={peanut}
    />
    <Scrolling />
    <Footer />
  </>
)

export default Categories
