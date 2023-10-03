export interface Recipe {
  createdAt: number
  name: string
  ingredients: string[]
  description: string
  url: string
  category: number
  id?: string
  isFavourite?: boolean;
}
