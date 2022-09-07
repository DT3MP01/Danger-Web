import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, LoginComponent } from './header/header.component';

import { RouterModule } from '@angular/router';

import {MatDividerModule} from '@angular/material/divider';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
