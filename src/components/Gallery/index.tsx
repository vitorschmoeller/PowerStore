import * as S from './styles'
import copo from '../../assets/images/copo.png'
import cereal from '../../assets/images/cereal.png'
import card1 from '../../assets/suplementos/card1.jpg'
import card2 from '../../assets/suplementos/card2.jpg'
import card3 from '../../assets/suplementos/card3.png'
const Gallery = () => {
  type GalleryItem = {
    type?: 'image'
    url: string
  }

  const mock: GalleryItem[] = [
    {
      type: 'image',
      url: card2
    },
    {
      type: 'image',
      url: copo
    },
    {
      type: 'image',
      url: card3
    },
    {
      type: 'image',
      url: cereal
    }
  ]

  return (
    <>
      <S.Container>
        <h3>GIVE US A STALK @POWERBLENDZ</h3>
        <ul className="container">
          {mock.map((media, index) => (
            <li key={index}>
              <img src={media.url} alt={`Mídia ${index} da galeria`} />
            </li>
          ))}
        </ul>
      </S.Container>
    </>
  )
}

export default Gallery
