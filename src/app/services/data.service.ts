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



  readonly DB_URL = "https://64b512c9f3dbab5a95c6a4ff.mockapi.io/recipes"

  constructor(private http: HttpClient) {
    this.getAllRecipes()
   }

  // getAllRecipes():Observable<Recipe[]>{
  //   return this.http.get<Recipe[]>(this.DB_URL);
  // }


  getAllRecipes():void{
    this.http.get<Recipe[]>(this.DB_URL).subscribe(recs => {
      this.recipes.next(recs);
      this.allRecipes = recs
    })
  }

  filterRecipes(category:number){
    if(category === -1){
      this.recipes.next(this.allRecipes)
    } else {
      const filteredRecipes = this.allRecipes.filter(
        (recipe) => recipe.category === category
      )
      this.recipes.next(filteredRecipes)
    }
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
    if (this.selectedCategory === '-1') {
      this.recipes.next(this.allRecipes);
    } else {
      const categoryNumber = parseInt(this.selectedCategory)
      this.recipes.next(this.allRecipes.filter(recipe => recipe.category === categoryNumber))
    }
    console.log('categoria cambiata');
    console.log(this.allRecipes);


  }

  hideSelect: boolean = false;

}
