import { Component, OnInit } from '@angular/core';
  import {Router} from "@angular/router";
@Component({
  selector: 'app-alldigitalsolutions',
  templateUrl: './alldigitalsolutions.component.html',
  styleUrls: ['./alldigitalsolutions.component.css']
})
export class AlldigitalsolutionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("http://www.alldigitalsolutions.com/");
    this.router.navigate(['/'])
  }

}
