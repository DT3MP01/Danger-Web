import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ScoreboardComponent,
    InformationComponent,
    HomepageComponent,
    TestsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSelectModule,
    MatSlideToggleModule,
    NgxPaginationModule,
  ],
})
export class ComponentsModule {}
