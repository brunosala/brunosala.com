import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-allenstewart',
  templateUrl: './allenstewart.component.html',
  styleUrls: ['./allenstewart.component.css']
})
export class AllenstewartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("https://www.allenstewart.com/");
    this.router.navigate(['/'])
  }

}