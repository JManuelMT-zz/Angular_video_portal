import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Video } from "../../models/video";
import { VideoService } from "../../services/video.service"

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  providers: [VideoService]
})
export class VideosComponent implements OnInit {

  public loading:boolean;
  public errorMessage;
  public videos:Video[];

  constructor(private _videoService: VideoService,
    private _route: ActivatedRoute,
    private _router:Router){

      this.loading= true;

  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(){
    let currentUser= JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){

        this._videoService.getVideos().subscribe(
          response =>{
            
            this.videos= response.data;
            console.log(response);   
            if(!this.videos){
              alert("Error: videos where not founded");
            }
            else{
              this.loading= false;
              
            }
          },
          error => {
            this.errorMessage= error;

            if(this.errorMessage!=null){
              console.log(this.errorMessage);
              alert("Error in the request to the server");
            }
          }
        )
      }
  }

}
