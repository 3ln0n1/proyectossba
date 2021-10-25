import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TerminosComponent } from '../terminos/terminos.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(TerminosComponent);
  }
  
  ngOnInit(): void {
  }

}
