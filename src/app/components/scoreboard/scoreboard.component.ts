import { Component, OnInit } from '@angular/core';

import { game } from '../../shared/game';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ScoreService } from 'src/app/services/score.service';



@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})

export class ScoreboardComponent implements OnInit {

  dataSource = new MatTableDataSource<game>();
  displayedColumns: string[] = ['username', 'scans', 'time', 'meters'];

  constructor(private ScoreService: ScoreService) { }

  ngOnInit(): void {
  }

ngAfterContentInit() {
    this.ScoreService.getScoreboard().subscribe(
      games => this.dataSource.data = games
    );
  }
}
