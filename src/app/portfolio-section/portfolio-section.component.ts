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
      "subtitle": "Angular, Salesforce",
      "tagline": "Summary"
    },
    {
      "routerLink": "/portfolio/equiti",
      "imgUrl": "assets/img/portfolio-tiles/eq.jpg",
      "title": "Equiti Games",
      "subtitle": "Automation, Wordpress",
      "tagline": "Summary"
    },
    {
      "routerLink": "/portfolio/bitbloq",
      "imgUrl": "assets/img/portfolio-tiles/bb.jpg",
      "title": "BitBloq",
      "subtitle": "API, React",
      "tagline": "Case Study"
    },
    {
      "routerLink": "/portfolio/bedbuglawyer",
      "imgUrl": "assets/img/portfolio-tiles/bbl.jpg",
      "title": "Bed Bug Lawyer",
      "subtitle": "API, Wordpress",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "/portfolio/kioxia",
      "imgUrl": "assets/img/portfolio-tiles/kio.jpg",
      "title": "Kioxia (Toshiba)",
      "subtitle": "JavaScript",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "/portfolio/bigthinkery",
      "imgUrl": "assets/img/portfolio-tiles/bt.jpg",
      "title": "Big Thinkery",
      "subtitle": "Hubspot CRM / CMS / DB",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "/portfolio/jayscustomcreations",
      "imgUrl": "assets/img/portfolio-tiles/jayscustomcreations.jpg",
      "title": "Jay's Custom Creations",
      "subtitle": "DevOps, LAMP",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/amareglobal",
      "imgUrl": "assets/img/portfolio-tiles/ag.jpg",
      "title": "Amare Global",
      "subtitle": "JavaScript",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/allenstewart",
      "imgUrl": "assets/img/portfolio-tiles/as.jpg",
      "title": "Allen Stewart",
      "subtitle": "Hubspot CRM / CMS / DB",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/communities4construction",
      "imgUrl": "assets/img/portfolio-tiles/cec.jpg",
      "title": "Communities 4 Construction",
      "subtitle": "LAMP",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/thefutureofjewelry",
      "imgUrl": "assets/img/portfolio-tiles/tfoj.jpg",
      "title": "The Future Of Jewelry",
      "subtitle": "DevOps, LAMP",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/christiesheldon",
      "imgUrl": "assets/img/portfolio-tiles/cs.jpg",
      "title": "Christie Sheldon",
      "subtitle": "Advertising, Wordpress",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "/portfolio/einsurance",
      "imgUrl": "assets/img/portfolio-tiles/ei.jpg",
      "title": "EInsurance",
      "subtitle": "Laravel, Wordpress",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/mykaarma",
      "imgUrl": "assets/img/portfolio-tiles/mk.jpg",
      "title": "myKaarma",
      "subtitle": "Wordpress",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/thesearchmarketfirm",
      "imgUrl": "assets/img/portfolio-tiles/tsmf.jpg",
      "title": "The Search Market Firm",
      "subtitle": "Android, Java",
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
      "routerLink": "/portfolio/alldigitalsolutions",
      "imgUrl": "assets/img/portfolio-tiles/ads.jpg",
      "title": "All Digital Solutions",
      "subtitle": "Angular, Java",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "/portfolio/unidosmarketing",
      "imgUrl": "assets/img/portfolio-tiles/um.jpg",
      "title": "Unidos Marketing",
      "subtitle": "Advertising, Graphic Design",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/kowy",
      "imgUrl": "assets/img/portfolio-tiles/kw.jpg",
      "title": "Kowy",
      "subtitle": "Shopify, Wordpress",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/elevatedcampaigns",
      "imgUrl": "assets/img/portfolio-tiles/ec.jpg",
      "title": "Elevated Campaigns",
      "subtitle": "Wordpress",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "portfolio/westpalmwebdevelopment",
      "imgUrl": "assets/img/portfolio-tiles/wpd.jpg",
      "title": "West Palm Web Dev",
      "subtitle": "Payment Gateway Integrations",
      "tagline": "Opens New Tab"
    },
    {
      "routerLink": "/",
      "imgUrl": "assets/img/portfolio-tiles/cg.jpg",
      "title": "Cathy Glasson",
      "subtitle": "Wordpress",
      "tagline": ""
    },
    {
      "routerLink": "/",
      "imgUrl": "assets/img/portfolio-tiles/riaa.jpg",
      "title": "Race Inc Auto Auctions",
      "subtitle": "LAMP",
      "tagline": ""
    }
  ];
  constructor() { }
  ngOnInit(): void { }
}
