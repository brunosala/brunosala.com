import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import PORTFOLIO_PAGES_QUERY from "../apollo/queries/portfolio-items/portfolio-pages.js";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-portfolio-pages',
  templateUrl: './portfolio-pages.component.html',
  styleUrls: ['./portfolio-pages.component.css']
})

export class PortfolioPagesComponent implements OnInit {

  data: any = {};
  loading = true;
  errors: any;

  private queryPages: Subscription;

  toggleModal(index) {
    let modalId = 'modal' + index;
    let modal = document.getElementById(modalId);
    modal.classList.toggle("is-active");
  }

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {

    this.queryPages = this.apollo
      .watchQuery({
        query: PORTFOLIO_PAGES_QUERY,
        variables: {
          id: this.route.snapshot.paramMap.get("id")
        }
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy() {
    this.queryPages.unsubscribe();
  }
}
