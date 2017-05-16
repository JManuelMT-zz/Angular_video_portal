import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { VideosComponent } from "./components/videos/videos.component";

const appRoutes: Routes=[
    {path: '', component: LoginComponent},
    {path: 'videos', component: VideosComponent},
    {path: '**', component: LoginComponent}
]


export const AppRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);