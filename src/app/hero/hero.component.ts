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
        window.open("assets/docs/Daniel Bruno Sala - Resume - 08122021.pdf");
      }, 400
    );
  }

  openCV() {
    setTimeout(
      function(){ 
        window.open("assets/docs/Daniel Bruno Sala - CV - 08122021.pdf");
      }, 400
    );
  }
}
