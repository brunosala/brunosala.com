import { Component, OnInit } from '@angular/core';
  import {Router} from "@angular/router";
@Component({
  selector: 'app-thefutureofjewelry',
  templateUrl: './thefutureofjewelry.component.html',
  styleUrls: ['./thefutureofjewelry.component.css']
})
export class ThefutureofjewelryComponent implements OnInit {


  constructor(private router: Router) { }
  
  ngOnInit(): void {
    window.open("https://thefutureofjewelry.com/");
    this.router.navigate(['/'])
  }

}
