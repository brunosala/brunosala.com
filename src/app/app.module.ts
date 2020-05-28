import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HeroComponent } from './hero/hero.component';
import { SocketComponent } from './socket/socket.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { ReturnHomeComponent } from './return-home/return-home.component';

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
import { BitbloqComponent } from './pages/bitbloq/bitbloq.component';
import { JayscustomcreationsComponent } from './pages/jayscustomcreations/jayscustomcreations.component';
import { BigthinkeryComponent } from './pages/bigthinkery/bigthinkery.component';
import { KioxiaComponent } from './pages/kioxia/kioxia.component';
import { BedbuglawyerComponent } from './pages/bedbuglawyer/bedbuglawyer.component';
import { WestpalmwebdevelopmentComponent } from './pages/westpalmwebdevelopment/westpalmwebdevelopment.component';
import { UnidosmarketingComponent } from './pages/unidosmarketing/unidosmarketing.component';
import { ThefutureofjewelryComponent } from './pages/thefutureofjewelry/thefutureofjewelry.component';
import { ChristiesheldonComponent } from './pages/christiesheldon/christiesheldon.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioSectionComponent,
  },
  {
    path: 'portfolio/ilta',
    component: IltaComponent,
  },
  {
    path: 'portfolio/equiti',
    component: EquitiComponent,
  },
  {
    path: 'portfolio/bitbloq',
    component: BitbloqComponent,
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
  {
    path: 'portfolio/jayscustomcreations',
    component: JayscustomcreationsComponent,
  },
  {
    path: 'portfolio/bigthinkery',
    component: BigthinkeryComponent,
  },
  {
    path: 'portfolio/kioxia',
    component: KioxiaComponent,
  },
  {
    path: 'portfolio/bedbuglawyer',
    component: BedbuglawyerComponent,
  },
  {
    path: 'portfolio/thefutureofjewelry',
    component: ThefutureofjewelryComponent,
  },
  {
    path: 'portfolio/westpalmwebdevelopment',
    component: WestpalmwebdevelopmentComponent,
  },
  {
    path: 'portfolio/christiesheldon',
    component: ChristiesheldonComponent,
  },
  {
    path: 'portfolio/unidosmarketing',
    component: UnidosmarketingComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SocketComponent,
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
    SocialIconsComponent,
    ReturnHomeComponent,
    BitbloqComponent,
    JayscustomcreationsComponent,
    BigthinkeryComponent,
    KioxiaComponent,
    BedbuglawyerComponent,
    WestpalmwebdevelopmentComponent,
    UnidosmarketingComponent,
    ThefutureofjewelryComponent,
    ChristiesheldonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
