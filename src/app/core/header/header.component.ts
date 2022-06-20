import { Component, OnInit } from '@angular/core';
import { signInAnonymously } from 'firebase/auth';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private fireBaseAuthS:FirebaseAuthService) { }

  ngOnInit(): void {
  // this.fireBaseAuthS.login('albertoalvaza@gmail.com','123456');
  }
  ngAfterContentInit() {
    this.fireBaseAuthS.login('albertoalvaza@gmail.com','123456');
  }




}
