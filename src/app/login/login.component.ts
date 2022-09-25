import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 username="";
 password="";
 err="";
  constructor(private auth:AuthService, 
    private rout:Router
    ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username.trim().length === 0){
      this.err="Username is required";
        }
        else if(this.password.trim().length === 0){
          this.err="Password is required";
  }else{
    this.err="";
    let res = this.auth.login(this.username,this.password);
  if(res === 200){
    this.rout.navigate(['home'])
  }
  if(res === 403){
    this.err="Invalid Cradentials"
  }
  }
  
}
}