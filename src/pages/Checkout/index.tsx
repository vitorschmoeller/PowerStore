import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import CheckoutHeader from '../../components/CheckoutHeader'
import Gpay from '../../assets/images/meiosdepagamento/Group.png'
import amazonpay from '../../assets/images/meiosdepagamento/SVG.png'
import paypal from '../../assets/images/meiosdepagamento/image fill.png'
import shoppay from '../../assets/images/meiosdepagamento/shoppay.png'
import ProductPurchased from '../../components/ProductPurchased'
import { usePurchaseMutation } from '../../services/api'
import { clear } from '../../store/reducers/cart'
import * as S from './styles'
import { parseToBrl, getTotalPrice } from '../../utils'

//Possível erro está na forma que estou renderizando a forma de pagamento

type Installments = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [creditCard, setCreditCard] = useState(true)
  const [installments, setInstallments] = useState<Installments[]>([])
  const totalPrice = getTotalPrice(items)
  const [discountedTotal, setDiscountedTotal] = useState(totalPrice)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const form = useFormik({
    initialValues: {
      email: '',
      check: '',
      fullName: '',
      adress: '',
      city: '',
      CEP: '',
      phone: '',
      cardNumber: '',
      expirationDate: '',
      code: '',
      cardOwner: '',
      installments: 1,
      discount: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail invalid')
        .required('o campo é obrigatório'),
      check: Yup.string(),
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      CEP: Yup.string()
        .matches(/^\d{5}-\d{3}$/)
        .required('O campo é obrigatório'),
      phone: Yup.string()
        .matches(/^\d{5}-\d{4}$/)
        .required('O campo é obrigatório'),

      //payment
      cardNumber: Yup.string()
        .matches(/^\d{4} \d{4} \d{4} \d{4}/)
        .when((values, schema) =>
          creditCard ? schema.required('O campo é obrigatório') : schema
        ),
      expirationDate: Yup.string()
        .matches(
          /^(0[1-9]|1[0-2])\/\d{2}$/,
          'Formato inválido. Use o formato MM/AA, por exemplo, 12/22'
        )
        .when((values, schema) =>
          creditCard ? schema.required('O Campo é obrigatório') : schema
        ),
      code: Yup.string()
        .matches(/^\d{3}/, 'Número incorreto')
        .when((values, schema) =>
          creditCard ? schema.required('O campo é obrigatório') : schema
        ),
      cardOwner: Yup.string().when((values, schema) =>
        creditCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.number().when((values, schema) =>
        creditCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.email,
          phone: Number(values.phone)
        },
        payment: {
          installments: Number(values.installments),
          card: {
            active: creditCard,
            code: Number(values.code),
            name: values.cardOwner,
            number: values.cardNumber,
            expires: {
              month: Number(values.expirationDate),
              year: Number(values.expirationDate)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.price
        }))
      })
    }
  })

  useEffect(() => {
    if (form.values.discount === 'discount') {
      setDiscountedTotal(totalPrice * 0.5)
    } else {
      setDiscountedTotal(totalPrice)
    }
  }, [form.values.discount, totalPrice])

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installments[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: parseToBrl(totalPrice / i)
        })
      }
      return installmentsArray
    }
    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])
  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && isSuccess === false) {
    return <Navigate to="/" />
  }
  return (
    <>
      <CheckoutHeader />
      {isSuccess && data ? (
        <>
          <ProductPurchased
            title="Dear valued customer,"
            response={data.orderId}
          />
        </>
      ) : (
        <S.Container>
          <S.divCont className="container">
            <S.FormContainer onSubmit={form.handleSubmit}>
              <S.ButtonContainer>
                <S.PaymentOptions type="button" color="purple">
                  <img src={shoppay} alt="" />
                </S.PaymentOptions>
                <S.PaymentOptions color="yellow" type="button">
                  <img src={paypal} alt="" />
                </S.PaymentOptions>
                <S.PaymentOptions color="darkYellow" type="button">
                  <img src={amazonpay} alt="" />
                </S.PaymentOptions>
                <S.PaymentOptions type="button">
                  <img src={Gpay} alt="" />
                </S.PaymentOptions>
              </S.ButtonContainer>
              <S.ContactContainer>
                <h4>Contact</h4>
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('email') ? 'error' : ''}
                />

                <S.CheckContainer>
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    value={form.values.check}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <label htmlFor="checkbox">
                    Email me for improved delivery updates, news and offers
                  </label>
                </S.CheckContainer>
                <div>
                  <h4>Delivery</h4>
                  <input
                    type="name"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />

                  <input
                    type="text"
                    id="adress"
                    name="adress"
                    placeholder="Adress"
                    value={form.values.adress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('adress') ? 'error' : ''}
                  />

                  <S.City>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />

                    <InputMask
                      mask="99999-999"
                      type="text"
                      id="CEP"
                      name="CEP"
                      placeholder="CEP"
                      value={form.values.CEP}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('CEP') ? 'error' : ''}
                    />
                  </S.City>
                  <InputMask
                    mask="99999-9999"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="phone"
                    value={form.values.phone}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('phone') ? 'error' : ''}
                  />
                </div>
                <div>
                  <h4>Payment</h4>
                  <S.PaymentOptionContainer>
                    <S.OptionButton
                      isActive={creditCard}
                      type="button"
                      color="green"
                      onClick={() => setCreditCard(true)}
                    >
                      Credit card
                    </S.OptionButton>
                    <S.OptionButton
                      color="black"
                      type="button"
                      onClick={() => setCreditCard(false)}
                      isActive={!creditCard}
                    >
                      Bank slip
                    </S.OptionButton>
                  </S.PaymentOptionContainer>

                  <S.PaymentContainer
                    className={creditCard === true ? 'is-visible' : ''}
                  >
                    <InputMask
                      mask="9999 9999 9999 9999"
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="Card number"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                    />

                    <S.ExpirationContainer>
                      <InputMask
                        mask="99/99"
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                        placeholder="Expiration date (MM / YY)"
                        value={form.values.expirationDate}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expirationDate') ? 'error' : ''
                        }
                      />

                      <InputMask
                        mask="999"
                        type="text"
                        id="code"
                        name="code"
                        placeholder="Security code"
                        value={form.values.code}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('code') ? 'error' : ''}
                      />
                    </S.ExpirationContainer>
                    <input
                      type="text"
                      id="cardOwner"
                      name="cardOwner"
                      placeholder="Name on card"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardOwner') ? 'error' : ''}
                    />

                    <select
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('installments') ? 'error' : ''
                      }
                    >
                      {installments.map((installments) => (
                        <option
                          value={installments.quantity}
                          key={installments.quantity}
                        >
                          {installments.quantity}x de{' '}
                          {installments.formattedAmount}
                        </option>
                      ))}
                    </select>
                  </S.PaymentContainer>
                  <S.PaymentContainer
                    className={creditCard === false ? 'is-visible' : ''}
                  >
                    <p>
                      When opting for this payment method, it is important to
                      remember that confirmation can take up to 3 business days,
                      due to the deadlines established by financial
                      institutions. Therefore, the release of the activation
                      code for the purchased game will only occur after the
                      payment of the boleto has been approved.
                    </p>
                  </S.PaymentContainer>
                  <S.PaymentButton
                    type="submit"
                    title="Click here to finish your purchase"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Finalizing purchase...' : 'Pay now'}
                  </S.PaymentButton>
                </div>
              </S.ContactContainer>
            </S.FormContainer>
            <S.Aside>
              <div>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.image} alt="" />
                      <h4>{item.title}</h4>
                      <span>{parseToBrl(item.price)}</span>
                    </S.CartItem>
                  ))}
                </ul>
              </div>
              <S.DiscountContainer>
                <input
                  type="text"
                  id="discount"
                  name="discount"
                  placeholder="Discount: discount"
                  value={form.values.discount}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.DiscountContainer>
              <S.PriceContainer>
                <span>Subtotal</span>
                <span>{parseToBrl(discountedTotal)}</span>
              </S.PriceContainer>
              <S.PriceContainer>
                <span>Total </span>
                <span>{parseToBrl(discountedTotal)}</span>
              </S.PriceContainer>
            </S.Aside>
          </S.divCont>
        </S.Container>
      )}
    </>
  )
}

export default Checkout
