import { Injectable } from '@angular/core';
import { DishType, Recipe } from '../model/recipe';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allRecipes: Recipe[] = []
  recipes = new BehaviorSubject<Recipe[]>([])

  selectedCategory: string = '-1';
  categories = Object.entries(DishType).slice(Object.entries(DishType).length/2)

  readonly DB_URL = "https://64b512c9f3dbab5a95c6a4ff.mockapi.io/recipes"

  constructor(private http: HttpClient) { }

  getAllRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.DB_URL);
  }

  getRecipe(recipeId: string):Observable<Recipe>{
    return this.http.get<Recipe>(this.DB_URL + '/' + recipeId);
  }

  postRecipe(newRecipe: Recipe):Observable<Recipe>{
    return this.http.post<Recipe>(this.DB_URL, newRecipe, {headers: {'content-type':'application/json'}})
  }

  deleteRecipe(id: string) {
    return this.http.delete<Recipe>(this.DB_URL + '/' + id)
  }

  categoryChanged(){
    // if (this.selectedCategory === '-1') {
    //   this.recipes = this.allRecipes;
    // } else {
    //   const categoryNumber = parseInt(this.selectedCategory)
    //   this.recipes = this.allRecipes.filter(recipe => recipe.category === categoryNumber)
    // }
    console.log('CULO');


  }

}
