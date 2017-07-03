import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  numbers: number[] = [-12, 234, 31.1, 343.22, -2, 0, 43, 0.00, -32.2342344];

  constructor() { }

  ngOnInit() {
  }

}
