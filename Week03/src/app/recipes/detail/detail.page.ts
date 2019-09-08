import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  loadedRecipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute, private recipesSvc:RecipesService, private router: Router, private alertController:AlertController, private toastController: ToastController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('recipeId')) {return;}
        this.loadedRecipe = this.recipesSvc.getRecipe(paramMap.get('recipeId'));
      });
  }

  deleteRecipe()
  {
    this.recipesSvc.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
  }

  async DeleteAlert()
  {
    const alert = await this.alertController.create({
      header: 'Delete Recipe',
      message: 'Are you sure that you want to delete this recipe?',
      buttons:
      [
        {
          text: 'YES',
          handler: () => {
            this.deleteRecipe(),
            this.ToastAlert()
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

  async ToastAlert()
  {
    const toast = await this.toastController.create({
      message: 'Recipe has been deleted',
      duration: 2000
    });

    await toast.present();
  }


  //buat function delete, jangan lupa direload (this THIS THIS) sebelum diredirect ke halaman tersebut. 
}
