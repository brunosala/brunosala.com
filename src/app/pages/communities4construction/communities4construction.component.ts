import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-communities4construction',
  templateUrl: './communities4construction.component.html',
  styleUrls: ['./communities4construction.component.css']
})
export class Communities4constructionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("http://www.communities4construction.com/");
    this.router.navigate(['/'])
  }

}