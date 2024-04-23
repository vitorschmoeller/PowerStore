class Suplement {
  title: string
  subtitle: string
  image: string
  review: string
  price: number
  id: number
  constructor(
    title: string,
    subtitle: string,
    image: string,
    review: string,
    price: number,
    id: number
  ) {
    this.title = title
    this.subtitle = subtitle
    this.image = image
    this.review = review
    this.price = price
    this.id = id
  }
}

export default Suplement

// Exemplo const suplemento = new Suplement('whey', 'isolado', 'url', '4.5', 199.99, 1)
// console.log(suplemento)
