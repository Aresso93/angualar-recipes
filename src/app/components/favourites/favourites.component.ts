import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-favourites',
  
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites: Recipe[] = []

  constructor(public storage: StorageService){}

  ngOnInit(): void {
    this.storage.favouritesSubject.subscribe(arrayOfFavourites => {
      this.favourites = arrayOfFavourites;
      console.log('HADOKEN', this.favourites);
      
    })
  }

  @Input() recipe?: Recipe

}
