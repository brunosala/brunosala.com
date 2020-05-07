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
        window.open("assets/doc/Bruno%20Sala%20-%20Resume.pdf");
      }, 400
    );
  }

  returnHome() {
    setTimeout(
      function(){ 
        window.location.href = "/";
      }, 400
    );
  }

  isHomeRoute() {
    return this.router.url !== '/';
  }
}
