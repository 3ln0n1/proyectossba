import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  folders: Section[] = [
    {
      name: 'Líquidos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Abonos',
      updated: new Date('1/17/16'),
    },
    {
      name: 'VARIOS',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Inventario',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Cartera Clientes',
      updated: new Date('1/18/16'),
    }
  ];

}
