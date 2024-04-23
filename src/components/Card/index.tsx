import * as S from './styles'

type Props = {
  title: string
  text: string
  image: string
  goTo?: string
  onClick?: () => void
}

const Card = ({ text, title, image, onClick, goTo }: Props) => {
  return (
    <S.Card title={goTo} onClick={onClick}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </S.Card>
  )
}

export default Card
