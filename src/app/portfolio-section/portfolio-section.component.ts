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
      "imgUrl": "assets/img/ilta.jpg",
      "title": "ILTA",
      "subtitle": "Angular, Salesforce Development",
      "tagline": "Summary"
    },
    {
      "routerLink": "/portfolio/equiti",
      "imgUrl": "assets/img/eq.jpg",
      "title": "Equiti Games",
      "subtitle": "Wordpress Development, Marketing",
      "tagline": "Summary"
    },
    {
      "routerLink": "/portfolio/bitbloq",
      "imgUrl": "assets/img/bb.jpg",
      "title": "BitBloq",
      "subtitle": "React, Ethereum Development",
      "tagline": "Summary"
    },
    {
      "routerLink": "/portfolio/einsurance",
      "imgUrl": "assets/img/ei.jpg",
      "title": "EInsurance",
      "subtitle": "Laravel, Wordpress Development",
      "tagline": "Summary"
    },
    {
      "routerLink": "/portfolio/alldigitalsolutions",
      "imgUrl": "assets/img/ads.jpg",
      "title": "All Digital Solutions",
      "subtitle": "Angular, Java Development",
      "tagline": "Summary"
    },
    {
      "routerLink": "portfolio/amareglobal",
      "imgUrl": "assets/img/ag.jpg",
      "title": "Amare Global",
      "subtitle": "Bootstrap Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/allenstewart",
      "imgUrl": "assets/img/as.jpg",
      "title": "Allen Stewart",
      "subtitle": "Hubspot CRM Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/communities4construction",
      "imgUrl": "assets/img/cec.jpg",
      "title": "Communities 4 Construction",
      "subtitle": "LAMP Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/thesearchmarketfirm",
      "imgUrl": "assets/img/tsmf.jpg",
      "title": "The Search Market Firm",
      "subtitle": "Android, Java Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/cathyglasson",
      "imgUrl": "assets/img/cg.jpg",
      "title": "Cathy Glasson",
      "subtitle": "Wordpress Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/mykaarma",
      "imgUrl": "assets/img/mk.jpg",
      "title": "myKaarma",
      "subtitle": "Wordpress Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/myownspade",
      "imgUrl": "assets/img/mos.jpg",
      "title": "My Own Spade",
      "subtitle": "Marketing Automation",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/kowy",
      "imgUrl": "assets/img/kw.jpg",
      "title": "Kowy",
      "subtitle": "Wordpress, Shopify Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/elevatedcampaigns",
      "imgUrl": "assets/img/ec.jpg",
      "title": "Elevated Campaigns",
      "subtitle": "Wordpress Development",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "/",
      "imgUrl": "assets/img/riaa.jpg",
      "title": "Race Inc Auto Auctions",
      "subtitle": "LAMP Development",
      "tagline": ""
    },
  ];

  constructor() { }

  ngOnInit(): void { }

}
