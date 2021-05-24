import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 public id:any;
  constructor(private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data=>{console.log(data),this.id=data,console.log(this.id)});
    localStorage.removeItem('tokenallowed')
   
  }
  
  product(){
    console.log(this.id.id)
    this.router.navigateByUrl('products/'+`${this.id.id}`)
    localStorage.setItem('product','allowed')
  }

  logout(){
    this.router.navigateByUrl('login')
 
   }
}
