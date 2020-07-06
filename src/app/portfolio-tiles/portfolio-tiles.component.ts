import { Component, OnInit } from '@angular/core';
import * as strapiData from '../../assets/strapi-build.json';

@Component({
  selector: 'app-portfolio-tiles',
  templateUrl: './portfolio-tiles.component.html',
  styleUrls: ['./portfolio-tiles.component.css']
})
export class PortfolioTilesComponent implements OnInit {

  strapiJSON:any = strapiData;
  strapi:any;

  constructor() { }

  ngOnInit(): void {
    const items = Object.entries(this.strapiJSON.data.portfolioItems);
    let stripped:any = [];
    
    for (var item of items) {
      stripped.push(item[1]);
    }

    const sorted = stripped.sort(function(a: { tag: any; },b: { tag: any; }):any {
      const stringA = a.tag;
      const stringB = b.tag;

      return stringA > stringB ? -1 : stringA < stringB ? 1 : 0;
    });

    console.log(items);
    console.log(stripped);
    console.log(sorted);

    this.strapi = sorted; 
  }
}
