import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app"
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interface/user';

const firebaseApp = initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class AutService {

   public isLoged : any = false;
   auth: Auth;

  constructor() {
    this.auth = getAuth(firebaseApp);
    onAuthStateChanged(this.auth, user => {
      if(user!= undefined || user != null){
        this.isLoged = user;
      }
    });
  }

  getStateAuth(){
   return this.auth;
  }
    //login
 onLogin(user: User): Promise<any>{
     return signInWithEmailAndPassword(this.auth, user.email, user.password);
 }
  //register
  onRegister(user: User): Promise<any>{
     return  createUserWithEmailAndPassword(this.auth, user.email, user.password);
 }
}
