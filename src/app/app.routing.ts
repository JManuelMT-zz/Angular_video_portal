import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { VideosComponent } from "./components/videos/videos.component";
import { VideoDetailComponent } from "./components/video-detail/video-detail.component";

const appRoutes: Routes=[
    {path: '', component: LoginComponent},
    {path: 'videos', component: VideosComponent},
    {path:'video-detail/:id', component: VideoDetailComponent},
    {path: '**', component: LoginComponent}
]


export const AppRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);