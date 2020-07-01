import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitbloq',
  templateUrl: './bitbloq.component.html',
  styleUrls: ['./bitbloq.component.css']
})
export class BitbloqComponent implements OnInit {

  projects = [
    {
      "imgUrl": "bitbloq.io-site.jpg",
      "title": "Bitbloq.io",
      "subtitle": "ICO Site",
    },
    {
      "imgUrl": "bitbloq-app.jpg",
      "title": "Bitbloq.io",
      "subtitle": "App UI",
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
