import { Component, OnInit } from '@angular/core';
import * as strapiData from '../../assets/strapi-build.json';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-portfolio-single-page',
  templateUrl: './portfolio-single-page.component.html',
  styleUrls: ['./portfolio-single-page.component.css']
})
export class PortfolioSinglePageComponent implements OnInit {

  strapi: any = strapiData;
  item: any = {};
  slug: String = "";

  private singlePage: Subscription = new Subscription;

  constructor(private route: ActivatedRoute) {}
  
  toggleModal(index: string) {
    let modalId = 'modal' + index;
    let modal = document.getElementById(modalId);

    if(modal) {
      modal.classList.toggle("is-active");
    }
  }

  ngOnInit(): void {
    this.singlePage = this.route.params.subscribe(params => {
      this.slug = params['slug']; // (+) converts string 'id' to a number

      this.strapi.data.portfolioItems.forEach((item: { slug: String; }) => {
          if(item.slug === this.slug) {
            this.item = item;
          }
      });
   });
  }

  ngOnDestroy() {
    this.singlePage.unsubscribe();
  }
}
