import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import photo1 from '../../assets/suplementos/photo1.jpg'
import photo2 from '../../assets/suplementos/photo2.jpg'
import * as S from './styles'
const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <S.Container>
          <S.Article>
            <img src={photo1} alt="Whey Protein Varieties" />
            <S.TextContainer marginLeft={'32px'}>
              <h2>Supplement Innovation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, cum dolorum? Esse facilis deleniti ad modi excepturi
                sit a hic id quasi dignissimos ipsa accusamus, reiciendis optio
                provident? Sed, veniam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Officiis facilis in voluptatem est enim sunt
                doloribus quidem dolorem repudiandae libero sapiente natus quam
                suscipit, incidunt repellat error, corporis consectetur at.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                eligendi exercitationem ab quod in ducimus obcaecati error
                quibusdam dolorem, veritatis voluptatibus eum distinctio
                expedita fugit aperiam commodi, pariatur mollitia magnam. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                fugiat a ducimus voluptate vitae, excepturi, itaque
                necessitatibus at sint doloribus aspernatur in dolorem
                veritatis, numquam porro iure voluptatibus reprehenderit est!
              </p>
            </S.TextContainer>
          </S.Article>
          <S.Article>
            <S.TextContainer marginRight="32px">
              <h2>LIVE WELL. TRAIN WELL.</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur corporis voluptas quos quas nemo eius quia
                accusantium id, rerum ad vel voluptatibus neque dolores quo
                commodi. Numquam, minus corrupti. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quo voluptate quam earum vitae
                magni ipsum veritatis laboriosam impedit reprehenderit pariatur
                repellat eius fugit molestiae blanditiis dolorem quibusdam
                placeat, rerum doloribus! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Vitae fugiat suscipit vero
                perferendis asperiores cumque quidem corrupti laborum magnam,
                voluptatum, iure omnis illo culpa quaerat placeat maiores nihil
                quibusdam commodi.
              </p>
            </S.TextContainer>
            <img src={photo2} alt="Creatine and Pre-Workout Supplements" />
          </S.Article>
        </S.Container>
      </div>
      <Footer />
    </>
  )
}

export default About
