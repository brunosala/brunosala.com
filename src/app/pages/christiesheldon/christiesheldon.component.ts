import { Component, OnInit } from '@angular/core';
  import {Router} from "@angular/router";
  
@Component({
  selector: 'app-christiesheldon',
  templateUrl: './christiesheldon.component.html',
  styleUrls: ['./christiesheldon.component.css']
})
export class ChristiesheldonComponent implements OnInit {


  constructor(private router: Router) { }
  
  ngOnInit(): void {
    window.open("https://www.mindvalley.com/christie-marie-sheldon/love-or-above/?utm_source=google");
    this.router.navigate(['/'])
  }
}
