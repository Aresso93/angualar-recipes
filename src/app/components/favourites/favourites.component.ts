import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { StorageService } from 'src/app/services/storage.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [
    CommonModule,
    RecipeCardComponent,
    RouterModule
  ],
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites: Recipe[] = []

  constructor(public storage: StorageService){}

  ngOnInit(): void {
    this.storage.favouritesSubject.subscribe(arrayOfFavourites => {
      this.favourites = arrayOfFavourites;
      console.log(this.favourites);

    })
  }


}
