import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SocketComponent } from './socket/socket.component';
import { PortfolioTilesComponent } from './portfolio-tiles/portfolio-tiles.component';
import { PortfolioPagesComponent } from './portfolio-pages/portfolio-pages.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { ReturnHomeComponent } from './return-home/return-home.component';
import { MarkdownModule } from "ngx-markdown";
import { FormatTagPipe } from './pipes/tag-format.pipe';

const routes: Routes = [
  {
    path: '',
    component: PortfolioTilesComponent,
  },
  {
    path: ":id", component: PortfolioPagesComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SocketComponent,
    PortfolioTilesComponent,
    SocialIconsComponent,
    ReturnHomeComponent,
    PortfolioPagesComponent,
    FormatTagPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    GraphQLModule,
    HttpClientModule,
    LazyLoadImageModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }