import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './registration/register/register.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisModule } from './registration/regis/regis.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
;
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RegisModule,FormsModule,ReactiveFormsModule,HttpClientModule,HomeModule, BrowserAnimationsModule,MatButtonModule,MatCardModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
