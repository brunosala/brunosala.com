import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {

  caseStudies = [
    {
      "routerLink": "portfolio/ilta",
      "imgUrl": "assets/img/ilta.jpg",
      "title": "ILTA",
      "subtitle": "Angular, Salesforce Development"
    },
    {
      "routerLink": "portfolio/bitbloq",
      "imgUrl": "assets/img/bb.jpg",
      "title": "BitBloq",
      "subtitle": "React, Ethereum Development"
    },
    {
      "routerLink": "portfolio/einsurance",
      "imgUrl": "assets/img/ei.jpg",
      "title": "EInsurance",
      "subtitle": "Laravel, Wordpress Development"
    },
  ]

  portfolioItems = [
    {
      "routerLink": "portfolio/equiti",
      "imgUrl": "assets/img/eq.jpg",
      "title": "Equiti Games",
      "subtitle": "Wordpress Development, Marketing"
    },
    {
      "routerLink": "portfolio/alldigitalsolutions",
      "imgUrl": "assets/img/ads.jpg",
      "title": "All Digital Solutions",
      "subtitle": "Angular, Java Development"
    },
    {
      "routerLink": "portfolio/amareglobal",
      "imgUrl": "assets/img/ag.jpg",
      "title": "Amare Global",
      "subtitle": "Bootstrap Development"
    },
    {
      "routerLink": "portfolio/allenstewart",
      "imgUrl": "assets/img/as.jpg",
      "title": "Allen Stewart",
      "subtitle": "Hubspot CRM Development"
    },
    {
      "routerLink": "portfolio/communities4construction",
      "imgUrl": "assets/img/cec.jpg",
      "title": "Communities 4 Construction",
      "subtitle": "LAMP Development"
    },
    {
      "routerLink": "portfolio/thesearchmarketfirm",
      "imgUrl": "assets/img/tsmf.jpg",
      "title": "The Search Market Firm",
      "subtitle": "Android, Java Development"
    },
    {
      "routerLink": "portfolio/cathyglasson",
      "imgUrl": "assets/img/cg.jpg",
      "title": "Cathy Glasson",
      "subtitle": "Wordpress Development"
    },
    {
      "routerLink": "portfolio/mykaarma",
      "imgUrl": "assets/img/mk.jpg",
      "title": "myKaarma",
      "subtitle": "Wordpress Development"
    },
    {
      "routerLink": "portfolio/myownspade",
      "imgUrl": "assets/img/mos.jpg",
      "title": "My Own Spade",
      "subtitle": "Marketing Automation"
    },
    {
      "routerLink": "portfolio/kowy",
      "imgUrl": "assets/img/kw.jpg",
      "title": "Kowy",
      "subtitle": "Wordpress, Shopify Development"
    },
    {
      "routerLink": "portfolio/elevatedcampaigns",
      "imgUrl": "assets/img/ec.jpg",
      "title": "Elevated Campaigns",
      "subtitle": "Wordpress Development"
    },
    {
      "routerLink": "portfolio/raceincautoauctions",
      "imgUrl": "assets/img/riaa.jpg",
      "title": "Race Inc Auto Auctions",
      "subtitle": "LAMP Development"
    },
  ];

  constructor() { }

  ngOnInit(): void { }

}
