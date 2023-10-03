import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Recipe } from 'src/app/model/recipe';
import { RouterModule } from '@angular/router';
import { CategoryToStringPipe } from 'src/app/pipes/category-to-string.pipe';
import { StorageService } from 'src/app/services/storage.service';

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule, CategoryToStringPipe],
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent{

@Input() recipe?: Recipe
@Input() isFavourite: boolean = false;

constructor(public storage:StorageService ){}


}
