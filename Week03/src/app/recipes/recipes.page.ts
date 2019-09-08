import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  getRecipe(recipeId : string)
  {
    this.recipesService.getRecipe(recipeId);
  }

  deleteRecipe(recipeId : string)
  {
    this.recipesService.deleteRecipe(recipeId);
  }

}
