import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe("Chole Bhature",
    "Chole Bhature also known as Chana Bhatura is one of the most popular Punjabi dish liked almost all over India.",
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/06/chole-bhature-recipe32-1.jpg"),
    new Recipe("Dal Makhani",
    "This Dal Makhani recipe is a restaurant style version with subtle smoky flavors and creaminess of the lentils.",
    "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/dal-makhani-recipe-restaurant-style.jpg"),
    new Recipe("Pav Bhaji",
    "Pav Bhaji is a hearty, delightsome, flavorful meal of mashed vegetable gravy with fluffy soft buttery dinner rolls served with a side of crunchy piquant onions, tangy lemon and herby coriander.",
    "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/pav-bhaji-1-1111x1536.jpg")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
