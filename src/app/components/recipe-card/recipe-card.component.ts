import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Recipe } from 'src/app/model/recipe';
import { RouterModule } from '@angular/router';
import { CategoryToStringPipe } from 'src/app/pipes/category-to-string.pipe';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule, CategoryToStringPipe],
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent{

@Input() recipe?: Recipe



}
