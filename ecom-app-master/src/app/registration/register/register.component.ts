import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_gK2E8TXAytVwuz3rvvpUd");
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 public registerForm:FormGroup;
 public issub=false;
 public show:boolean =true;
 public register:string='user login'
 public mail:any;
 public num:any;
 public otp:any;
 public info:any;
 public changeData:any;


  constructor(private router:Router,private http:HttpClient ) { }

  ngOnInit(): void {

    this.num=Math.floor(Math.random()*100000+1);

    this.registerForm=new FormGroup({
      'name':new FormControl('',Validators.required),
      'age':new FormControl('',Validators.required),
      'phone':new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'address':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'username':new FormControl('',Validators.required),
      'newpasswrd':new FormControl('',[Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),
      'isverified':new FormControl(false),
      'cart':new FormControl()
      
    }
    );
    this.getdata();

  }

 getdata(){
   this.http.get('http://localhost:3000/users').subscribe(data=>{console.log(data);this.info=data;console.log(this.info)})
 }
 

  check(){
    this.issub=true;
  
    if(this.registerForm.valid){
      this.http.post('http://localhost:3000/users',this.registerForm.value).subscribe(data=>{console.log(data,'61');this.getdata();})
       this.change();
    }
  
  }
  change(){
    this.show=!this.show;
    
    if(this.show){
      this.register="login";
    }
    else{
      this.register="register"
    }
  }
 
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_5daeh0n', 'template_yvvbh9m', e.target as HTMLFormElement, 'user_gK2E8TXAytVwuz3rvvpUd')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  verify(){
    if(this.otp==this.num){
      console.log(this.mail)
      this.http.get('http://localhost:3000/users/').subscribe(data=>{console.log(data)})
      alert(" you are verified now!! now you can  login");
      this.otp="";
       for(let i=0;i<this.info.length;i++){
         if(this.mail===this.info[i].email){
          this.http.get("http://localhost:3000/users/"+`${this.info[i].id}`).subscribe((data)=>
          {
            this.changeData=data;
            this.changeData.isverified=true;
            console.log(this.changeData)
            this.http.put("http://localhost:3000/users/"+`${this.info[i].id}`,this.changeData).subscribe((data)=>
           {
              console.log(data);this.router.navigateByUrl('login');
           })
            
          })
         }
       }
      
    }
    else{
      console.log( "you are not verified")
    }
  }

  login(){
    this.router.navigateByUrl('login');
  }

}
