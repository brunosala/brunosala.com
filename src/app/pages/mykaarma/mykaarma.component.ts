import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mykaarma',
  templateUrl: './mykaarma.component.html',
  styleUrls: ['./mykaarma.component.css']
})
export class MykaarmaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("https://mykaarma.com/");
    this.router.navigate(['/'])
  }

}