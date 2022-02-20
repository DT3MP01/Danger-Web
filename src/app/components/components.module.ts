import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { InformationComponent } from './information/information.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { TestsComponent } from './tests/tests.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    ScoreboardComponent,
    InformationComponent,
    HomepageComponent,
    TestsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
  ],
})
export class ComponentsModule {}
