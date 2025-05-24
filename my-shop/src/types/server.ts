export interface ProductType {
    id: string
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: ProductRating
  }
  
  export interface ProductRating {
    rate: number
    count: number
  }

  export interface CartItemType {
    id: number;
    quantity: number;
    price: number
}
  