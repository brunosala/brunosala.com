import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-elevatedcampaigns',
  templateUrl: './elevatedcampaigns.component.html',
  styleUrls: ['./elevatedcampaigns.component.css']
})
export class ElevatedcampaignsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.open("https://www.elevatedcampaigns.com/");
    this.router.navigate(['/'])
  }

}