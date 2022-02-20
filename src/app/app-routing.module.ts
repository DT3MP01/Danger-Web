import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformationComponent } from './components/information/information.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

const routes: Routes = [
  {path: '', component: InformationComponent},
  {path: 'games', component: ScoreboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
