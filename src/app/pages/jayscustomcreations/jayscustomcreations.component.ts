import { Component, OnInit } from '@angular/core';
  import {Router} from "@angular/router";
@Component({
  selector: 'app-jayscustomcreations',
  templateUrl: './jayscustomcreations.component.html',
  styleUrls: ['./jayscustomcreations.component.css']
})
export class JayscustomcreationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("http://www.jayscustomcreations.com/");
    this.router.navigate(['/'])
  }

}
