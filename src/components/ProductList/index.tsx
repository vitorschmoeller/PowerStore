import Product from '../Product'

import * as S from './styles'
import Suplement from '../../models/product'
export type Props = {
  title: string
  background: 'blue' | 'purple'
  suplement: Suplement[]
  id?: string
}

const ProductList = ({ background, title, suplement, id }: Props) => {
  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>

        <S.List>
          {suplement.map((suplement) => (
            <Product
              id={suplement.id}
              key={suplement.id}
              image={suplement.image}
              review={suplement.review}
              title={suplement.title}
              subtitle={suplement.subtitle}
              to="/categories"
              price={suplement.price}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList
