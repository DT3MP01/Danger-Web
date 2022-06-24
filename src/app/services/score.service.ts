import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { collection,doc,  query, where, getDocs, getFirestore, limit } from "firebase/firestore";
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
        link.href = url;
        link.download = roomName;
        link.click();
        link.remove();
      }).catch((error) => {
          console.error(error);
        });
      }

      getQuizzes(): Observable<quizz[]> {
        const quizzes = new Array<quizz>();
        const app = initializeApp(environment.firebaseConfig);
        const database = getFirestore(app);
        const storage = getStorage(app);
        const key =doc(collection(database, "Quizzes"));
        console.log(key.id);
        getDocs(query(collection(database, "Quizzes"),limit(5)/*,where('random',"<=",key.id)*/)).then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log( doc.data());
            const docReference = doc.data();
            const data = new quizz(docReference.correct, docReference.optionA, docReference.optionB, docReference.optionC, docReference.question,docReference.topic,docReference.explanation);
            quizzes.push(data);
            });
          }).catch((error) => {
            console.error(error);
          });
            return of(quizzes);
        }

}
