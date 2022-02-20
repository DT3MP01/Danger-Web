import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { InformationComponent } from './components/information/information.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { TestsComponent } from './components/tests/tests.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'information', component: InformationComponent },
  { path: 'score', component: ScoreboardComponent },
  { path: 'tests', component: TestsComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
