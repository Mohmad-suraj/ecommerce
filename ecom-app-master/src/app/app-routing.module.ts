import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGuardGuard } from './guard/my-guard.guard';
import { CartComponent } from './home/cart/cart.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProductsComponent } from './home/products/products.component';


import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';

const routes: Routes = [
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"",component:RegisterComponent
  },
  {
   path:"login",component:LoginComponent
  },
  {
    path:"homepage/:id",component:HomePageComponent,canActivate:[MyGuardGuard]
  },
  {
    path:"products/:id",component:ProductsComponent,canActivate:[MyGuardGuard]
  },
  {
    path:"cart/:id",component:CartComponent
  }
  
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

