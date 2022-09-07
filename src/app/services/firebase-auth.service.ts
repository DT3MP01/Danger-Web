import { DebugElement, Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private angularFireAuth: AngularFireAuth) {
  }
  

  async login(email: string, password: string) {
    console.log(email, password);
    try{
        return await this.angularFireAuth.signInWithEmailAndPassword(email, password);

    }
    catch(error){
      console.log("error Login" ,error);
      return null;
    }
  } 
  async register(email: string, password: string) {
    console.log(email, password);
    try{
        return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
    }
    catch(error){
      console.log("error Register" ,error);
      return null;
    }
  }
  checkLogin(){
    return this.angularFireAuth.authState;
  }
  logout(){
    this.angularFireAuth.signOut();
  }

  
}


