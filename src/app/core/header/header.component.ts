import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { game } from '../../shared/game';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private fireBaseAuthS:FirebaseAuthService,public dialog: MatDialog) { }
  userLogged= this.fireBaseAuthS.checkLogin();
  ngOnInit(): void {
  // this.fireBaseAuthS.login('albertoalvaza@gmail.com','123456');
  }
  ngAfterContentInit() {
    //this.fireBaseAuthS.login('albertoalvaza@gmail.com','123456');
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./header.component.scss']
})
export class LoginComponent {
  constructor(private fireBaseAuthS:FirebaseAuthService,public dialogRef: MatDialogRef<LoginComponent>) {}

  usuario={
    email:'',
    password:'',
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  Login(){
    this.fireBaseAuthS.login(this.usuario.email,this.usuario.password).then(()=>{
      console.log('Usuario logueado');
    }).catch(()=>{
      console.log('Usuario no logueado');
    }
    );
   ;
  }
  Register(){
    this.fireBaseAuthS.register(this.usuario.email,this.usuario.password).then(()=>{
      console.log('Usuario registrado');
    });
    console.log(this.usuario);
  }
  CheckLogin(){
    this.fireBaseAuthS.checkLogin().subscribe(res=>{
      console.log(res?.email);
  });
  }
  Logout(){
    this.fireBaseAuthS.logout();
  }

}