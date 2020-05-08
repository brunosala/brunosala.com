import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cathyglasson',
  templateUrl: './cathyglasson.component.html',
  styleUrls: ['./cathyglasson.component.css']
})
export class CathyglassonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("http://www.cathyglasson.com/");
    this.router.navigate(['/'])
  }

}