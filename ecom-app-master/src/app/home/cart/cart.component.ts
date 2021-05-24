import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public id:any;
  public Recieveddata:any;
  public cartdata:any;
  public user="http://localhost:3000/users"
  constructor(private activaterouter:ActivatedRoute,private http:HttpClient) { 
    this.activaterouter.params.subscribe(data=>{console.log(data);this.id=data});
  }

  ngOnInit(): void {
 
    this.http.get(this.user + `/${this.id.id}`).subscribe(data=>{console.log(data);
    this.Recieveddata=data;
    this.cartdata=this.Recieveddata.cart;
    console.log(this.cartdata);

     });
    
  }
}
