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
  json: string = "";
  
  
  // newGame: game = new game();

  constructor() { }

  getScoreboard(): Observable<game[]> {

    const app = initializeApp(environment.firebaseConfig);

    const database = getDatabase(app);

    const dbRef = ref(database);

      get(child(dbRef, `Games/`)).then((snapshot) => {
        
        if (snapshot.exists()) {
        console.log(snapshot.size);
        snapshot.forEach((childSnapshot) => {
          const stats = childSnapshot.child("Data").child("statsRoom");
          const gamedata = new game(childSnapshot.child("RoomName").val(),childSnapshot.key!,stats.child("windows").val(),childSnapshot.child("Data").child("image").val(), stats.child("meters").val(), stats.child("doors").val(), stats.child("extinguishers").val());
          this.games.push(gamedata);
          console.log(childSnapshot.child("Data").toJSON());
        });
        
        } else {
          console.log("No data available");
        }

      }).catch((error) => {
        console.error(error);
      });
      return of(this.games);
    }

    dowloadJson(idRef:string):Observable<string>  {

      
      const app = initializeApp(environment.firebaseConfig);
  
      const database = getDatabase(app);
  
      const dbRef = ref(database);
     
        get(child(dbRef, `Games/`)).then((snapshot) => {
          
          
          if (snapshot.exists()) {
            this.json =JSON.stringify(snapshot.child(idRef).child("Data").toJSON());
                   
          } else {
            console.log("No data available");
          }
  
        }).catch((error) => {
          console.error(error);
        });
        return of(this.json);
      }

    
}
