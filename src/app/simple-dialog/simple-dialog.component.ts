import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { SubmitComponent } from '../submit/submit.component';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss']
})
export class SimpleDialogComponent   {
  
  constructor(public dialog: MatDialog) {}

generate(): void {
  const dialogRef = this.dialog.open(SubmitComponent, {
    width: '42%',height:'20%'
  });}

  // constructor(public dialogRef: MatDialogRef<SubmitComponent>) { }
 
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  // ngOnInit(): void {
  // }

}
