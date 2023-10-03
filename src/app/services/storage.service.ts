import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  favouritesSubject = new BehaviorSubject<Recipe[]>([])
  
  constructor() {
    if (localStorage.getItem('favourites')) {
      this.favouritesSubject.next(JSON.parse(localStorage.getItem('favourites')!))
    }
  }


  saveRecipe(recipe: Recipe) {
    recipe.isFavourite = true
    const actualArray = this.favouritesSubject.value;
    const newArray = [...actualArray, recipe]
    this.favouritesSubject.next(newArray);
    localStorage.setItem('favourites', JSON.stringify(newArray));
  }

  removeRecipe(recipe: Recipe) {
    recipe.isFavourite = false
    const actualArray = this.favouritesSubject.value;
    const newArray = actualArray.filter((r) => r.id !== recipe.id)
    this.favouritesSubject.next(newArray)
    localStorage.setItem('favourites', JSON.stringify(newArray))
  }

  toggleFavourites(recipe: Recipe) {
    if (this.isFavourite(recipe)) {
      this.removeRecipe(recipe)

    }else{
      this.saveRecipe(recipe)
    }
  }

  isFavourite(recipe: Recipe):boolean {
    console.log('TATSUMAKI SENPUKYAKU');
    return this.favouritesSubject.value.some(r => r.id === recipe.id)

  }

}
