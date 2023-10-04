export interface Recipe {
  createdAt: number
  name: string
  ingredients: string[]
  description: string
  url: string
  category: DishType
  id?: string
  isFavourite?: boolean;
  rating: number;
}

export enum DishType{
  antipasto,
  primo,
  secondo,
  contorno,
  dessert,
  cocktail
}
