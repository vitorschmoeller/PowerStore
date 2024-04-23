import * as S from './styles'
import purchasecart from '../../assets/images/logo compras.png'
const CheckoutHeader = () => {
  return (
    <S.Header>
      <div className="container">
        <img src={purchasecart} alt="" />
        <h1>POWER</h1>
      </div>
    </S.Header>
  )
}

export default CheckoutHeader
