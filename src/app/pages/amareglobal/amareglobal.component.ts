import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-amareglobal',
  templateUrl: './amareglobal.component.html',
  styleUrls: ['./amareglobal.component.css']
})
export class AmareglobalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("https://www.amareglobal.com/corporate/en-US/");
    this.router.navigate(['/'])
  }
}
