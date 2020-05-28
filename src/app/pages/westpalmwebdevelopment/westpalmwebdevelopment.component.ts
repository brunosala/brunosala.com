import { Component, OnInit } from '@angular/core';
  import {Router} from "@angular/router";
@Component({
  selector: 'app-westpalmwebdevelopment',
  templateUrl: './westpalmwebdevelopment.component.html',
  styleUrls: ['./westpalmwebdevelopment.component.css']
})
export class WestpalmwebdevelopmentComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    window.open("http://westpalmwebdev.com/");
    this.router.navigate(['/'])
  }
}
