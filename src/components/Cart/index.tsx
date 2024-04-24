import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/checkout')
    dispatch(close())
  }
  return (
    <S.CartContainer
      className={`${isOpen ? 'is-open' : ''}
  `}
    >
      <S.Overlay onClick={() => dispatch(close())}></S.Overlay>
      <S.Sidebar className="Sidebar">
        {items.length > 0 ? (
          <>
            <S.Title>
              Your Cart ({items.length}){' '}
              <button type="button" onClick={() => dispatch(close())}>
                close
              </button>
            </S.Title>
            <S.ProductContainer>
              <ul>
                {items.map((item, index) => (
                  <S.CartItem key={`${item.id}-${index}`}>
                    <img src={item.image} alt="" />
                    <div>
                      <h3>{item.title}</h3>
                      <span>{parseToBrl(item.price)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => dispatch(remove(item.id))}
                    ></button>
                  </S.CartItem>
                ))}
              </ul>
              <S.Quantity>{items.length} suplemento(s) no carrinho</S.Quantity>
              <S.Prices>
                Total de {parseToBrl(getTotalPrice(items))}{' '}
                <span>Em até 6x sem juros</span>
              </S.Prices>
              <div>
                <S.ButtonCheckout type="button" onClick={goToCheckout}>
                  Continuar com a compra
                </S.ButtonCheckout>
              </div>
            </S.ProductContainer>
          </>
        ) : (
          <p className="empty-text">
            Your cart is empty. Please add at least one product to proceed with
            the purchase.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
