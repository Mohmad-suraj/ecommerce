import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginUser:FormGroup;
  public info:any;
  public issub=false;
  url="http://localhost:3000/users"
  constructor(private http:HttpClient,private router:Router,private myserice:MyServiceService) { }

  ngOnInit(): void {
   
    this.loginUser=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'username':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    });
    this.getdata();
  }

  getdata(){
    this.http.get(this.url).subscribe((data)=>{console.log(data);this.info=data;})
  }
  public login(){
    this.issub=true;
    this.http.get(this.url).subscribe((data)=>{console.log(data);this.info=data});
    
    for(let i=0;i<this.info.length;i++){
      
       if(this.loginUser.value.email===this.info[i].email && this.loginUser.value.password===this.info[i].newpasswrd &&  this.loginUser.value.username===this.info[i].username ) {
           if( this.info[i].isverified==true){
               
             localStorage.setItem('tokenallowed','allowed');
             this.router.navigateByUrl('homepage/'+`${this.info[i].id}`)
             console.log('you are logged in');
           }
           else{
             alert('you are not verified or check your credentials');
           }
   }
   
   }
   
  }
}
