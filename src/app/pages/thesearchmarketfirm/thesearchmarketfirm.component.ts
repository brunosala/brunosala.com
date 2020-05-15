import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-thesearchmarketfirm',
  templateUrl: './thesearchmarketfirm.component.html',
  styleUrls: ['./thesearchmarketfirm.component.css']
})
export class ThesearchmarketfirmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("https://www.thesearchmarketfirm.com/");
    this.router.navigate(['/'])
  }

}