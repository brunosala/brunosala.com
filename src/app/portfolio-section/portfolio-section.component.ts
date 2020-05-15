import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {
  portfolioItems = [
    {
      "routerLink": "/portfolio/ilta",
      "imgUrl": "assets/img/portfolio-tiles/ilta.jpg",
      "title": "ILTA",
      "subtitle": "Angular, Salesforce Development",
      "tagline": "Summary"
    },
    {
      "routerLink": "/portfolio/equiti",
      "imgUrl": "assets/img/portfolio-tiles/eq.jpg",
      "title": "Equiti Games",
      "subtitle": "Wordpress Development, Automation",
      "tagline": "Summary"
    },
    {
      "routerLink": "/portfolio/bitbloq",
      "imgUrl": "assets/img/portfolio-tiles/bb.jpg",
      "title": "BitBloq",
      "subtitle": "React, API Development",
      "tagline": "Case Study"
    },
    {
      "routerLink": "/portfolio/jayscustomcreations",
      "imgUrl": "assets/img/portfolio-tiles/jayscustomcreations.jpg",
      "title": "Jay's Custom Creations",
      "subtitle": "DevOps, Back End Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "/portfolio/einsurance",
      "imgUrl": "assets/img/portfolio-tiles/ei.jpg",
      "title": "EInsurance",
      "subtitle": "Laravel, Wordpress Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "/portfolio/alldigitalsolutions",
      "imgUrl": "assets/img/portfolio-tiles/ads.jpg",
      "title": "All Digital Solutions",
      "subtitle": "Angular, Java Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/amareglobal",
      "imgUrl": "assets/img/portfolio-tiles/ag.jpg",
      "title": "Amare Global",
      "subtitle": "Front End Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/allenstewart",
      "imgUrl": "assets/img/portfolio-tiles/as.jpg",
      "title": "Allen Stewart",
      "subtitle": "Hubspot CRM Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/communities4construction",
      "imgUrl": "assets/img/portfolio-tiles/cec.jpg",
      "title": "Communities 4 Construction",
      "subtitle": "LAMP Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/thesearchmarketfirm",
      "imgUrl": "assets/img/portfolio-tiles/tsmf.jpg",
      "title": "The Search Market Firm",
      "subtitle": "Android, Java Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/cathyglasson",
      "imgUrl": "assets/img/portfolio-tiles/cg.jpg",
      "title": "Cathy Glasson",
      "subtitle": "Wordpress Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/mykaarma",
      "imgUrl": "assets/img/portfolio-tiles/mk.jpg",
      "title": "myKaarma",
      "subtitle": "Wordpress Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/myownspade",
      "imgUrl": "assets/img/portfolio-tiles/mos.jpg",
      "title": "My Own Spade",
      "subtitle": "Marketing Automation",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/kowy",
      "imgUrl": "assets/img/portfolio-tiles/kw.jpg",
      "title": "Kowy",
      "subtitle": "Wordpress, Shopify Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/elevatedcampaigns",
      "imgUrl": "assets/img/portfolio-tiles/ec.jpg",
      "title": "Elevated Campaigns",
      "subtitle": "Wordpress Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "/",
      "imgUrl": "assets/img/portfolio-tiles/riaa.jpg",
      "title": "Race Inc Auto Auctions",
      "subtitle": "LAMP Development",
      "tagline": ""
    },
  ];
  constructor() { }
  ngOnInit(): void { }
}
