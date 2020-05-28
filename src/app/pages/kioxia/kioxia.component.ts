import { Component, OnInit } from '@angular/core';
  import {Router} from "@angular/router";
@Component({
  selector: 'app-kioxia',
  templateUrl: './kioxia.component.html',
  styleUrls: ['./kioxia.component.css']
})
export class KioxiaComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    window.open("https://kioxia.com/en-us/top.html");
    this.router.navigate(['/'])
  }

}
