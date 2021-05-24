import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SearchPipe } from '../myPipes/search.pipe';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';





@NgModule({
  declarations: [
    HomePageComponent,SearchPipe,ProductsComponent, CartComponent
  ],
  imports: [
    CommonModule,MatCardModule,MatButtonModule,FormsModule,ReactiveFormsModule
  ]
})
export class HomeModule { }
