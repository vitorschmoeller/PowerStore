import { useDispatch } from 'react-redux'
import star from '../../assets/images/starCustom.svg'
import Suplement from '../../models/product'
import * as S from './styles'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

export type Props = {
  title: string
  subtitle: string
  image: string
  review: string
  to?: string
  price: number
  id: number
}

const Product = ({ image, review, subtitle, title, to, price, id }: Props) => {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    const itemToAdd: Suplement = {
      id,
      image: image,
      price: price,
      review: review,
      subtitle: subtitle,
      title: title
    }
    dispatch(add(itemToAdd))
    dispatch(open())
  }
  return (
    <S.Container>
      <S.Product>
        <S.Image src={image} alt="" />
        <S.Title>{title}</S.Title>
        <span>
          {subtitle} {parseToBrl(price)}
        </span>
        <S.Button to={to as string} onClick={handleAddToCart}>
          SHOP NOW
        </S.Button>
        <S.SmallContaier>
          <S.Star src={star} alt="" />
          <S.Star src={star} alt="" />
          <S.Star src={star} alt="" />
          <S.Star src={star} alt="" />
          <S.Star src={star} alt="" />
          <small>{review}</small>
        </S.SmallContaier>
      </S.Product>
    </S.Container>
  )
}

export default Product
