import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-return-home',
  templateUrl: './return-home.component.html',
  styleUrls: ['./return-home.component.css']
})
export class ReturnHomeComponent implements OnInit {

  constructor(private router: Router) {}

  returnHome() {
    setTimeout(() => { 
      this.router.navigate(['']) 
    }, 
    400
    );
  }

  ngOnInit(): void {
  }

}
