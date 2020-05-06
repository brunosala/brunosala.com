import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HeroComponent } from './hero/hero.component';
import { SocketComponent } from './socket/socket.component';
import { PortfolioTileComponent } from './portfolio-tile/portfolio-tile.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';

import { IltaComponent } from './pages/ilta/ilta.component';
import { EquitiComponent } from './pages/equiti/equiti.component';
import { EinsuranceComponent } from './pages/einsurance/einsurance.component';
import { ClearpathgpsComponent } from './pages/clearpathgps/clearpathgps.component';
import { RaceincautoauctionsComponent } from './pages/raceincautoauctions/raceincautoauctions.component';
import { Communities4constructionComponent } from './pages/communities4construction/communities4construction.component';
import { ThesearchmarketfirmComponent } from './pages/thesearchmarketfirm/thesearchmarketfirm.component';
import { AlldigitalsolutionsComponent } from './pages/alldigitalsolutions/alldigitalsolutions.component';
import { CathyglassonComponent } from './pages/cathyglasson/cathyglasson.component';
import { AmareglobalComponent } from './pages/amareglobal/amareglobal.component';
import { KowyComponent } from './pages/kowy/kowy.component';
import { MykaarmaComponent } from './pages/mykaarma/mykaarma.component';
import { MyownspadeComponent } from './pages/myownspade/myownspade.component';
import { AllenstewartComponent } from './pages/allenstewart/allenstewart.component';
import { ElevatedcampaignsComponent } from './pages/elevatedcampaigns/elevatedcampaigns.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioSectionComponent,
    data: {animation: '*'},
  },
  {
    path: 'portfolio/ilta',
    component: IltaComponent,
    data: {animation: '*'},
  },
  {
    path: 'portfolio/equiti',
    component: EquitiComponent,
    data: {animation: '*'},
  },
  {
    path: 'portfolio/einsurance',
    component: EinsuranceComponent,
  },
  {
    path: 'portfolio/clearpathgps',
    component: ClearpathgpsComponent,
  },
  {
    path: 'portfolio/raceincautoauctions',
    component: RaceincautoauctionsComponent,
  },
  {
    path: 'portfolio/communities4construction',
    component: Communities4constructionComponent,
  },
  {
    path: 'portfolio/thesearchmarketfirm',
    component: ThesearchmarketfirmComponent,
  },
  {
    path: 'portfolio/alldigitalsolutions',
    component: AlldigitalsolutionsComponent,
  },
  {
    path: 'portfolio/cathyglasson',
    component: CathyglassonComponent,
  },
  {
    path: 'portfolio/amareglobal',
    component: AmareglobalComponent,
  },
  {
    path: 'portfolio/kowy',
    component: KowyComponent,
  },
  {
    path: 'portfolio/mykaarma',
    component: MykaarmaComponent,
  },
  {
    path: 'portfolio/myownspade',
    component: MyownspadeComponent,
  },
  {
    path: 'portfolio/allenstewart',
    component: AllenstewartComponent,
  },
  {
    path: 'portfolio/elevatedcampaigns',
    component: ElevatedcampaignsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SocketComponent,
    PortfolioTileComponent,
    ImgSliderComponent,
    IltaComponent,
    EquitiComponent,
    EinsuranceComponent,
    ClearpathgpsComponent,
    RaceincautoauctionsComponent,
    Communities4constructionComponent,
    ThesearchmarketfirmComponent,
    AlldigitalsolutionsComponent,
    CathyglassonComponent,
    AmareglobalComponent,
    KowyComponent,
    MykaarmaComponent,
    MyownspadeComponent,
    PortfolioSectionComponent,
    AllenstewartComponent,
    ElevatedcampaignsComponent,
    SocialIconsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
