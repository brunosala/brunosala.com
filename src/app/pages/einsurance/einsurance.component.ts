import { Component, OnInit } from '@angular/core';
  import {Router} from "@angular/router";
@Component({
  selector: 'app-einsurance',
  templateUrl: './einsurance.component.html',
  styleUrls: ['./einsurance.component.css']
})
export class EinsuranceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("http://www.einsurance.com/");
    this.router.navigate(['/'])
  }

}
