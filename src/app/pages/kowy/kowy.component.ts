import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-kowy',
  templateUrl: './kowy.component.html',
  styleUrls: ['./kowy.component.css']
})
export class KowyComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("https://kowy.co/");
    this.router.navigate(['/'])
  }

}