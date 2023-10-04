import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { DishType, Recipe } from 'src/app/model/recipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent {

  newRecipe:Recipe = {
    name: '',
    createdAt: 0,
    ingredients: [],
    description: '',
    category: DishType.antipasto,
    url: '',
    rating: 0
  };

  constructor(private dataServ: DataService){}

  submitRecipe(){
    console.log(this.newRecipe)
    this.dataServ.postRecipe(this.newRecipe).subscribe(addedRecipe => console.log(addedRecipe));
  }

}
