import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bedbuglawyer',
  templateUrl: './bedbuglawyer.component.html',
  styleUrls: ['./bedbuglawyer.component.css']
})
export class BedbuglawyerComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("https://bedbuglawyer.org/");
    this.router.navigate(['/'])
  }
}
