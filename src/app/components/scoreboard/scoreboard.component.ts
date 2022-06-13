import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  


  displayedColumns: string[] = ['username', 'scans', 'time', 'meters'];

  length = 20;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 30, 50];

  dataSource: game[] = new Array<game>();
  pages: number = 1;


  // ,public dialog: MatDialog

  constructor(private ScoreService: ScoreService) { }

  ngOnInit(): void {
  }

ngAfterContentInit() {
    this.ScoreService.getScoreboard().subscribe(
      games => this.dataSource = games
    );
  }

  onDowloadFile(name:string){
    console.log("DOWLOADING....");
    this.ScoreService.dowloadJson(name);

  }


//   openDialog(dataRoom:game): void {
//     const dialogRef = this.dialog.open(DialogOverviewRoom, {
//       width: '250px',
//       data: {dataRoom},
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     });
//   }
// }

// @Component({
//   selector: 'dialog-overview-room',
//   templateUrl: 'dialog-overview-room.html',
// })
// export class DialogOverviewRoom {
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewRoom>,
//     @Inject(MAT_DIALOG_DATA) public data: game,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

}
