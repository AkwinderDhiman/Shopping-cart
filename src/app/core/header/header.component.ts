import { Component, OnInit } from '@angular/core';
import {  HttpResponse } from '@angular/common/http';
import { Recipe } from '../../recipes/recipe.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent{
      constructor( private dataStorageService:DataStorageService,private authService:AuthService) {
  }

  onAddData(){
    this.dataStorageService.addRecipes().
    subscribe((httpresponse:HttpResponse<Recipe[]>) =>{
      console.log(httpresponse)}
    );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }

  onAuth(){
   return this.authService.isAuthenticated()
  }

   authLogOut(){
     this.authService.logOut()
   }
}
