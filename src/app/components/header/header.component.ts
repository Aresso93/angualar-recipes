import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StorageService } from 'src/app/services/storage.service';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { RecipeCardComponent } from "../recipe-card/recipe-card.component";
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { DishType } from 'src/app/model/recipe';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        RouterModule,
        MatSelectModule,
        MatFormFieldModule,
        MatGridListModule,
        RecipeCardComponent,
    ]
})
export class HeaderComponent{

  categories = Object.entries(DishType).slice(Object.entries(DishType).length/2)

  selectedCategory: string = '-1'
  constructor(public storage:StorageService, public dataServ: DataService, private router: Router){}

  categoryChanged(){
    const categoryNumber = parseInt(this.selectedCategory)
    this.dataServ.filterRecipes(categoryNumber);
  }

  }



