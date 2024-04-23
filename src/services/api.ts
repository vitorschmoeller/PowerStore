import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document?: string
  }
  delivery: {
    email: string
    phone?: number
  }
  payment: {
    card: {
      active: boolean
      code?: number
      owner?: {
        name?: string
        document?: string
      }
      name?: string
      number?: string
      expires?: {
        month?: number
        year?: number
      }
    }
    installments?: number
  }
}

type PurchaseResponse = {
  orderId: string
}
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body: body
      })
    })
  })
})

export const { usePurchaseMutation } = api
export default api
// const [promocoes, setPromocoes] = useState<Game[]>([])
// useEffect(() => {
//   fetch('https://fake-api-tau.vercel.app/api/eplay').then((res) => res.json()).then((res) => setPromocoes(res))
// },[])
