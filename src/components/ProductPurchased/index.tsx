import * as S from './styles'

type Props = {
  title: string
  response: string
}
export const ProductPurchased = ({ title, response }: Props) => {
  return (
    <S.CardPurchase className="container">
      <h3>{title}</h3>
      <p>
        We are pleased to inform you that we have successfully received your
        order! Below are the details of your purchase: Order Number: {response}
      </p>
      <br />
      <p>
        If you have chosen to pay via bank transfer, please remember that
        confirmation may take up to 3 business days. After the payment is
        approved, we will send you an email containing the shipping details of
        your supplements.
      </p>
      <br />
      <p>
        If you opted for credit card payment, the release of the shipping
        information will occur after the transaction is approved by the card
        operator. You will receive the details in the email registered in our
        store.
      </p>
      <br />
      <p>
        We kindly ask you to check your inbox and spam folder to ensure that you
        receive our communication. If you have any questions or need further
        information, please contact us through our customer service channels.
      </p>
      <br /> <br />
      <p>
        Thank you for choosing Suplementos, and we hope you enjoy your
        supplements! <br /> <br />
        Best regards, The Suplementos Team
      </p>
    </S.CardPurchase>
  )
}

export default ProductPurchased
