import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Video } from "../../models/video";
import { VideoService } from "../../services/video.service";

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
  public skip: number;
  public limit: number;
  public currentUser:any;
  public video: Video;
  public routehome:boolean;

  constructor(private _videoService: VideoService,
    private _router:Router){
      this.skip=0;
      this.limit= 10;
      this.video= new Video("","","","",[]);
  }


  ngOnInit() {

    if(this._router.url === '/videos'){
      this.routehome= true;
    }
    else{
      this.routehome= false;
    }

    this.loading= true;
    this.currentUser= JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser){
      this.getVideos();
      
    }
      
  }

  onVideo(self){
     var myvideos = document.querySelectorAll('video');
     
          for(var i=0; i<myvideos.length; i++){
            //Is this the one we want to play?
            if(myvideos[i] == self){ myvideos[i].play()};
            //Have we already played it && is it already paused?
            if(myvideos[i].played.length > 0 && !myvideos[i].paused){
            // Then pause it now
              myvideos[i].pause();
            }
          }
      
  }

  //On scroll down function to get more videos
  onScrollDown () {
    this.loading= true;
	    console.log('scrolled down!!')
      this.limit+=10;
      this.getVideos();
	}
  //function to get videos from api using videoService
  getVideos(){
    

        this._videoService.getVideos(this.skip, this.limit).subscribe(
          response =>{
            
            this.videos= response.data;
            console.log(response);   
            if(!this.videos){
              alert("Error: videos where not founded");
            }
            else{

              let $j=0;
              while($j< this.videos.length){
                response.data[$j].rating= Math.round((response.data[$j].ratings.reduce((a, b) => a + b, 0))/response.data[$j].ratings.length)
                response.data[$j].rating= Array(response.data[$j].rating).fill('star');
                response.data[$j].rating= response.data[$j].rating.join(" ");
                $j++;
            }
              this.videos= response.data;
              console.log(this.videos)
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
