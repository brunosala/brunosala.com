import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-myownspade',
  templateUrl: './myownspade.component.html',
  styleUrls: ['./myownspade.component.css']
})
export class MyownspadeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("https://www.myownspade.com/");
    this.router.navigate(['/'])
  }
}