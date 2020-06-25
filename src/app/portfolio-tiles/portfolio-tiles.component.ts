import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import PORTFOLIO_TILES_QUERY from "../apollo/queries/portfolio-items/portfolio-tiles.js";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-portfolio-tiles',
  templateUrl: './portfolio-tiles.component.html',
  styleUrls: ['./portfolio-tiles.component.css']
})

export class PortfolioTilesComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;

  private queryTiles: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.queryTiles = this.apollo
      .watchQuery({
        query: PORTFOLIO_TILES_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
  ngOnDestroy() {
    this.queryTiles.unsubscribe();
  }
}