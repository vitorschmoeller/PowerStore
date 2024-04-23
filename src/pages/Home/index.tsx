import CardSection from '../../components/CardSection'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'

import Scrolling from '../../components/Scrolling'
import Section from '../../components/Section'

import { Container } from '../../styles'

// const whey: Suplement[] = [
//   {
//     id: 1,
//     image: product1,
//     price: 80,
//     review: '(1717 Reviews)',
//     subtitle: '5 x 250g ~ From £27.20',
//     title: '5 Variety'
//   },
//   {
//     id: 2,
//     image: product1,
//     price: 80,
//     review: '(1717 Reviews)',
//     subtitle: '5 x 250g ~ From £27.20',
//     title: '5 Variety'
//   },
//   {
//     id: 3,
//     image: product1,
//     price: 80,
//     review: '(1717 Reviews)',
//     subtitle: '5 x 250g ~ From £27.20',
//     title: '5 Variety'
//   },
//   {
//     id: 4,
//     image: product1,
//     price: 80,
//     review: '(1717 Reviews)',
//     subtitle: '5 x 250g ~ From £27.20',
//     title: '5 Variety'
//   }
// ]

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container></Container>
      <Hero image="home" />
      <Scrolling />
      <CardSection />
      <Section />
      <Gallery />
      <Footer />
    </>
  )
}

export default Home
