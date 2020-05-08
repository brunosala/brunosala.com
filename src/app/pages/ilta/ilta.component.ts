import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ilta',
  templateUrl: './ilta.component.html',
  styleUrls: ['./ilta.component.css']
})
export class IltaComponent implements OnInit {

  projects = [
    {
      "imgUrl": "europe.jpg",
      "title": "ILTACON Europe",
      "subtitle": "Event Site",
    },
    {
      "imgUrl": "iltanet.jpg",
      "title": "ILTAnet",
      "subtitle": "Main Site",
    },
    {
      "imgUrl": "iltavation.jpg",
      "title": "ILTAVATION",
      "subtitle": "Event Site",
    },
    {
      "imgUrl": "iltacon.jpg",
      "title": "ILTACON",
      "subtitle": "Event Site",
    },
    {
      "imgUrl": "mobile01.jpg",
      "title": "ILTA Mobile - 01",
      "subtitle": "Mobile Community App",
    },
    {
      "imgUrl": "mobile02.jpg",
      "title": "ILTA Mobile - 02",
      "subtitle": "Mobile Community App",
    },
    {
      "imgUrl": "mobile03.jpg",
      "title": "ILTA Mobile - 03",
      "subtitle": "Mobile Community App",
    },
    {
      "imgUrl": "mobile04.jpg",
      "title": "ILTA Mobile - 04",
      "subtitle": "Mobile Community App",
    },
  ]

  toggleModal(index) {
    let modalId = 'modal' + index;
    let modal = document.getElementById(modalId);
    modal.classList.toggle("is-active");
  }

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
