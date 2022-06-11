import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { game } from '../shared/game';
import { Observable, of } from 'rxjs';
import { gamesData } from '../shared/mock-games';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  games: game[] = new Array<game>();
  newGame: game = new game();

  constructor() { }

  getScoreboard(): Observable<game[]> {

    const app = initializeApp(environment.firebaseConfig);

    const database = getDatabase(app);

    const dbRef = ref(database);

      get(child(dbRef, `User/`)).then((snapshot) => {
        console.log(snapshot.key);
        this.games = new Array<game>();
        
        // if (snapshot.exists()) {
        //   const gamedw = new game();
        //   gamedw.id = 2;

        //   snapshot.forEach(childSnapshot => {
            
            
        //   });
          
        // } else {
        //   console.log("No data available");
        // }
      }).catch((error) => {
        console.error(error);
      });
      return of(this.games);
    }
}
