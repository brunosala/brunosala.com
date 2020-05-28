import { Component, OnInit } from '@angular/core';
  import {Router} from "@angular/router";
  
@Component({
  selector: 'app-bigthinkery',
  templateUrl: './bigthinkery.component.html',
  styleUrls: ['./bigthinkery.component.css']
})
export class BigthinkeryComponent implements OnInit {


  constructor(private router: Router) { }
  
  ngOnInit(): void {
    window.open("https://bigthinkery.com/");
    this.router.navigate(['/'])
  }

}
