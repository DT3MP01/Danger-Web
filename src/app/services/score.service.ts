import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { collection,doc,  query, where, getDocs, getFirestore, limit, orderBy } from "firebase/firestore";
import { environment } from 'src/environments/environment';
import { getBytes ,getDownloadURL,getStorage,ref} from "firebase/storage";


import { getAnalytics } from "firebase/analytics";
import { game ,quizz } from '../shared/game';
import { Observable, of } from 'rxjs';
import { gamesData } from '../shared/mock-games';

@Injectable({
  providedIn: 'root'
})

export class ScoreService {

  json: string = "";
  
  // newGame: game = new game();

  constructor() { }

  getScoreboard(): Observable<game[]> {
    const games = new Array<game>()
    const app = initializeApp(environment.firebaseConfig);
    
    const database = getFirestore(app);
    const storage = getStorage(app);
    
     getDocs(collection(database, "GameInfo")).then((snapshot) => {
        
      snapshot.forEach((doc) => {
        console.log( doc.data());
        getDownloadURL(ref(storage,doc.data().Image)).then((url) => {
        const docReference = doc.data();
        console.log(url);
        const data = new game(docReference.RoomName, docReference.PlayerName, docReference.Extinguishers, url, docReference.Meters, docReference.Doors, docReference.Windows,docReference.Reference);
        games.push(data);

      }).catch((error) => {
          console.error(error);
        });
      });

      }).catch((error) => {
        console.error(error);
      });

    return of(games);
     }
    

    dowloadJson(docRef:string,roomName:string)  {
      const app = initializeApp(environment.firebaseConfig);
      const storage = getStorage(app);

      getDownloadURL(ref(storage,docRef)).then((url) => {
        const link = document.createElement("a");
        console.log(roomName);
        link.download="json.json";
        link.href = url;
        link.click();
        link.remove();
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

      }).catch((error) => {
          console.error(error);
        });
      }

      getQuizzes(): Observable<quizz[]> {
        var quizzes = new Array<quizz>();
        const app = initializeApp(environment.firebaseConfig);
        const database = getFirestore(app);
        const storage = getStorage(app);
        getDocs(query(collection(database, "Quizzes"))).then((snapshot) => {
          snapshot.forEach((doc) => {
            // console.log( doc.data());
            const docReference = doc.data();
            const data = new quizz(docReference.correct, docReference.optionA, docReference.optionB, docReference.optionC, docReference.question,docReference.topic,docReference.explanation);
            var random = Math.floor(Math.random() * (quizzes.length + 1));
            quizzes.splice(random,0,data);
            });
          }).catch((error) => {
            console.error(error);
          });
            return of(quizzes);
        }

}
