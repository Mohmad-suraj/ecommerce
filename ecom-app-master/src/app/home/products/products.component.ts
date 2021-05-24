import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  public user="http://localhost:3000/users"
  public prod="http://localhost:3000/products"
  public id:any;
  public srch:any;
  public searchform:FormGroup;
  public newdata:any;
  public allproducts:any;
  public electro:any=[];
  public cloth:any=[];
  public shoe:any=[];
  public value:any=1;
  public checkcart:any=[];
  constructor(private http:HttpClient,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
     
    this.searchform=new FormGroup({
      'searchname':new FormControl('',Validators.required)
    })

    this.activatedroute.params.subscribe(data=>{this.id=data,console.log(this.id)});

    this.http.get(this.prod).subscribe(data=>{console.log(data);this.allproducts=data;
         console.log(this.allproducts);
    
    for(let i=0;i<this.allproducts.length;i++){
      if(this.allproducts[i].category=="electronics"){
        this.electro.push(this.allproducts[i]); 
      }
    };

    for(let i=0;i<this.allproducts.length;i++){
      if(this.allproducts[i].category=="clothes"){
        this.cloth.push(this.allproducts[i]);
       
      }
    };

    for(let i=0;i<this.allproducts.length;i++){
      if(this.allproducts[i].category=="shoes"){
        this.shoe.push(this.allproducts[i]);
        
      }
    }
  
  });
    
  }

  searchfun(){
   this.srch=this.searchform.value.searchname;
   console.log(this.srch);
    this.value=5;

  }
  

  allprod(){ 
    this.value=1;
  }
  electronics(){
   this.value=2;
    console.log("u entered"); 
  }


  clothes(){
    this.value=3;
    console.log("u entered");
  }
  shoes(){
    this.value=4;
    console.log("u entered");
  }

  back(){
     this.router.navigateByUrl('homepage/'+`${this.id.id}`);
     localStorage.setItem('tokenallowed','allowed');
  }


  sort(val){ 
    if(val==1){
    let newarr=this.allproducts.sort((a,b)=>a.price - b.price);
    this.allproducts=newarr;}
    if(val==2){
      let newarr=this.electro.sort((a,b)=>a.price - b.price);
    this.electro=newarr;
    }
    if(val==3){
      let newarr=this.cloth.sort((a,b)=>a.price - b.price);
    this.cloth=newarr;
    }
    if(val==4){
      let newarr=this.shoe.sort((a,b)=>a.price - b.price);
    this.shoe=newarr;
    }

  }

  sortd(val){ 
    if(val==1){
    let newarr=this.allproducts.sort((a,b)=>b.price - a.price);
    this.allproducts=newarr;}
    if(val==2){
      let newarr=this.electro.sort((a,b)=>b.price - a.price);
    this.electro=newarr;
    }
    if(val==3){
      let newarr=this.cloth.sort((a,b)=>b.price - a.price);
    this.cloth=newarr;
    }
    if(val==4){
      let newarr=this.shoe.sort((a,b)=>b.price - a.price);
    this.shoe=newarr;
    }

  }


  cart(){
    this.http.get(this.user+`/${this.id.id}`).subscribe(data=>{
      this.newdata=data;
      this.newdata.cart=this.checkcart;
      console.log(this.newdata);
      this.http.put(this.user+`/${this.id.id}`,this.newdata).subscribe(data=>{console.log(data);this.router.navigateByUrl('cart/'+`${this.id.id}`);})
    })
    //this.router.navigateByUrl('cart/'+`${this.id.id}`);

  }

  addcart(val){
    
    if(this.checkcart.indexOf(val) !== -1){
      alert("This product already exist in your cart");
  } else{
      this.checkcart.push(val);
      console.log(this.checkcart)
  }
  

  }
  logout(){
   this.router.navigateByUrl('login');
   localStorage.removeItem('product');
  }
  
}
