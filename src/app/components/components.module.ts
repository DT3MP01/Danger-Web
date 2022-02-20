import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { InformationComponent } from './information/information.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { TestsComponent } from './tests/tests.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ScoreboardComponent,
    InformationComponent,
    HomepageComponent,
    TestsComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class ComponentsModule {}
