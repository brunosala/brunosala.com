import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equiti',
  templateUrl: './equiti.component.html',
  styleUrls: ['./equiti.component.css']
})
export class EquitiComponent implements OnInit {

  projects = [
    {
      "imgUrl": "equiti.io.jpg",
      "title": "Equiti.io",
      "subtitle": "ICO Site",
    },
    {
      "imgUrl": "equiti.io-blog.jpg",
      "title": "Equiti.io",
      "subtitle": "ICO Site Blog",
    }
  ]

  toggleModal(index) {
    let modalId = 'modal' + index;
    let modal = document.getElementById(modalId);
    modal.classList.toggle("is-active");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
