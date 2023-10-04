import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

}
