import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dateVal: Date = new Date();
  jsonVal: Object = { moo: 'foo', goo: { too: 'new' }}

  constructor() {

  }

  ngOnInit() {
  }
}
