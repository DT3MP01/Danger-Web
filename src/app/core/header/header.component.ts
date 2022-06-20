import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { game } from '../../shared/game';
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
    //this.fireBaseAuthS.login('albertoalvaza@gmail.com','123456');
  }


}
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./header.component.scss']
})
export class AuthComponent {
  constructor(
    public dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: game,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}