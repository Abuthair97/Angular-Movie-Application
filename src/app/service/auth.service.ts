import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(uname:string,pword:string){
       if(uname === 'Abuthair' && pword ==='123'){
        return 200;
       }
       else{
        return 403
       }
  }
}
