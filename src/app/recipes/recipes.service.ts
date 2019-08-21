import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = 
  [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Ketupat.jpg',
      ingredients: ['Nasi', 'Air']
    },
    {
      id: 'r3',
      title: 'Pizza Margherita',
      imageUrl: 'https://imgp2.schaer.com/sites/default/files/2017-09/HeaderProducts_Pizza%20Margherita.jpg',
      ingredients: ['Tepung', 'Daun Basil', 'Saus Margherita']
    }

  ];

  copy_of_recipe: Recipe[] = [];

  constructor() { }

  copyRecipe()
  {
    for (let i = 0; i < this.recipes.length; i++)
    {
      this.copy_of_recipe.push(this.recipes[i]);
    }

    return this.copy_of_recipe;
  }

  getAllRecipes()
  {
    //return [...this.copy_of_recipe];

    return this.copyRecipe();
  }

  getRecipe(recipeId: string)
  {
    for (let i = 0; i < this.copy_of_recipe.length; i++)
    {
      if(recipeId === this.copy_of_recipe[i].id)
      {
        console.log(this.copy_of_recipe[i]);
        break;
      }
      else
      {
        continue;
      }
    }
  }

  deleteRecipe(recipeId: string)
  {
    for (let i = 0; i < this.copy_of_recipe.length; i++)
    {
      if(recipeId === this.copy_of_recipe[i].id)
      {
        this.copy_of_recipe.splice(i, 1);
        break;
      }
      else
      {
        continue;
      }
    }
  }


}
