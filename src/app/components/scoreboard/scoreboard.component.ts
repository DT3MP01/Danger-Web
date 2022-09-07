import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { game } from '../../shared/game';
import { ScoreService } from 'src/app/services/score.service';
import { Console, debug } from 'console';


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

  constructor(private ScoreService: ScoreService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ScoreService.getScoreboard().subscribe((data: game[]) => {
      this.dataSource = data;
      console.log(this.dataSource);
    }
    );
  }
  ngOnDestroy(): void {
    console.log("DESTROYING....");
  }

  ngAfterContentInit() {
    

  }

  onDowloadFile(reference:string,roomName:string){
    this.ScoreService.dowloadJson(reference,roomName);

  }


  openDialog(gameStat:game): void {
    console.log(gameStat);
    const dialogRef = this.dialog.open(DialogOverviewRoom, {
      width: '600px',
      data: gameStat,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-room',
  templateUrl: './dialog-overview-room.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class DialogOverviewRoom {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewRoom>,
    @Inject(MAT_DIALOG_DATA) public data: game,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
