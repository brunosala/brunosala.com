import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-home',
  templateUrl: './return-home.component.html',
  styleUrls: ['./return-home.component.css']
})
export class ReturnHomeComponent implements OnInit {

  returnHome() {
    setTimeout(
      function(){ 
        window.location.href = "/";
      }, 400
    );
  }

  constructor() { }

  ngOnInit(): void {
  }

}
