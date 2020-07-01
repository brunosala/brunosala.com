import { Component, OnInit } from '@angular/core';
  import {Router} from "@angular/router";
@Component({
  selector: 'app-unidosmarketing',
  templateUrl: './unidosmarketing.component.html',
  styleUrls: ['./unidosmarketing.component.css']
})
export class UnidosmarketingComponent implements OnInit {


  constructor(private router: Router) { }
  
  ngOnInit(): void {
    window.open("https://unidosmarketing.com/");
    this.router.navigate(['/'])
  }

}
