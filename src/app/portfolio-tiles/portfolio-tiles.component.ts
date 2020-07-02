import { Component, OnInit } from '@angular/core';
import * as strapiData from '../../assets/strapi-build.json';

@Component({
  selector: 'app-portfolio-tiles',
  templateUrl: './portfolio-tiles.component.html',
  styleUrls: ['./portfolio-tiles.component.css']
})
export class PortfolioTilesComponent implements OnInit {

  strapi: any = strapiData;

  constructor() { }

  ngOnInit(): void {
  }

}
