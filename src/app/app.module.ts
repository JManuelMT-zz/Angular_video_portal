import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import{AppRoutingProviders, routing} from './app.routing';


import 'materialize-css/js/toasts';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VideosComponent } from './components/videos/videos.component';
import { HeaderComponent } from './components/header/header.component';
import { TextLimitPipe } from './pipes/text-limit.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideosComponent,
    HeaderComponent,
    TextLimitPipe,
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    MaterializeModule,
    InfiniteScrollModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }



