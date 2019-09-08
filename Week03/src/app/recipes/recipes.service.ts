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

  constructor() { }

  getAllRecipes()
  {
    return [...this.recipes];
    //... -> All
  }

  getRecipe(recipeId: string)
  {
    //typescript .find for shortcut

    return{
      ...this.recipes.find(recipe =>{
          return recipe.id === recipeId;
      })
    };
    
    //this.recipes = this.recipes.filter(recipe=>{return recipe.id !== recipeId;});
    //"buat sebuah array dengan anggota yang sama dengan array sebelumnya TANPA (!==) anggota yang memenuhi syarat berikut"
  }

  deleteRecipe(recipeId: string)
  {
    //typescript .filter for shortcut

    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id !== recipeId;
    });
  }


}
