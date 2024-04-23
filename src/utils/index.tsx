import Suplement from '../models/product'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Suplement[]) => {
  return items.reduce((accumulator, currentPrice) => {
    return (accumulator += currentPrice.price)
  }, 0)
}
