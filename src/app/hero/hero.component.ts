import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  openResume() {
    setTimeout(
      function(){ 
        window.open("assets/doc/Daniel%20Bruno%20Sala%20-%20Resume%20-%20072020.pdf");
      }, 400
    );
  }
}
