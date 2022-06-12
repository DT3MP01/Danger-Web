import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';

import { game } from '../../shared/game';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ScoreService } from 'src/app/services/score.service';
import { PageEvent } from '@angular/material/paginator';



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

    // MatPaginator Inputs
    length = 85;
    pageSize = 10;
    pageSizeOptions: number[] = [10, 20, 30, 50];

    AllGames:  Array<number>=Array.from({length: this.length}, (_, i) => i + 1);
    numberOfGames: number[]=this.AllGames.slice(0, this.pageSize);
  
    // MatPaginator Output
    pageEvent: PageEvent= new PageEvent();
  
    setPageSizeOptions() {
        this.numberOfGames=this.AllGames.slice(this.pageEvent.pageIndex*this.pageSize, this.pageEvent.pageIndex*this.pageSize+this.pageSize);
    }
}
