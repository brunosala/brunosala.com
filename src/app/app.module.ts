import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';

import { HeroComponent } from './hero/hero.component';
import { SocketComponent } from './socket/socket.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { ReturnHomeComponent } from './return-home/return-home.component';

import { FormatTagPipe } from './pipes/format-tag.pipe';
import { PortfolioTilesComponent } from './portfolio-tiles/portfolio-tiles.component';
import { PortfolioSinglePageComponent } from './portfolio-single-page/portfolio-single-page.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioTilesComponent,
  }, 
  {
    path: ':slug', 
    component: PortfolioSinglePageComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SocketComponent,
    SocialIconsComponent,
    ReturnHomeComponent,

    FormatTagPipe,

    PortfolioTilesComponent,

    PortfolioSinglePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    MarkdownModule.forRoot(),
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
