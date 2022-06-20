import { DebugElement, Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  app: any;
  auth: any;
  constructor() {
    this.app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(this.app);
  }
  

  login(email: string, password: string) {
    console.log(email, password);
      signInWithEmailAndPassword(this.auth, email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  } 
  logout() {
      this.auth.signOut();
  }

}


