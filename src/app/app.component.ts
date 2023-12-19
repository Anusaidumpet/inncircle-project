import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { SubmitComponent } from './submit/submit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

// secret = 'YESRUNFUNCTION';

constructor(public dialog: MatDialog) {}

generate(): void {
  const dialogRef = this.dialog.open(SimpleDialogComponent, {
    width: '525px',height:'98%'
  });

  // dialogRef.afterClosed().subscribe(password => {
  //   const isPwdValid = password === this.secret;
  //   console.log(isPwdValid);
  //   if (isPwdValid) {
  //     // run code for correct password 
  //   } else {
  //     // run code for wrong password
  //   }
  // });
}
 
}
