import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import{AppRoutingProviders, routing} from './app.routing';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VideosComponent } from './components/videos/videos.component';
import { HeaderComponent } from './components/header/header.component';
import { TextLimitDirective } from './text-limit.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideosComponent,
    HeaderComponent,
    TextLimitDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    MaterializeModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
