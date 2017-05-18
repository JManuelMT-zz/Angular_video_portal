import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Video } from "../../models/video";
import { VideoService } from "../../services/video.service";

declare var Materialize: any;
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
  providers: [ VideoService ]
})
export class VideoDetailComponent implements OnInit {
  
  public loading:boolean;
  public errorMessage;
  public video: any;
  public rating:number;
  public vote:any;
  public stars:any;
  public token: any;


  constructor(private _videoService: VideoService,
    private _route: ActivatedRoute,
    private _router:Router) { 
      this.video= new Video("","","","",[]);
      
    }

  ngOnInit() {
    this.token= JSON.parse(localStorage.getItem('currentUser'));

    if(this.token){
     this.getVideo();
    }

  }
  //function to send vote to api rest using videoService
  postVote(value, idVideo){
    this._videoService.postVote(value, idVideo).subscribe(
      response=> {
        this.vote = response.data;
        if(!this.vote){
          alert("Error, votes where not encountred");
        }
        else{
          console.log(response)
          Materialize.toast('Thanks for your vote!', 1000, 'rounded')
          this.getVideo();
        }
      },
      error=>{
        console.log(error)
        alert("An error has ocurred, please try again in a moment")
      }
      
    );
  }
  //function to get single video from api rest using VideoService
  getVideo(){
    this._route.params.forEach((params: Params)=>{
      let id= params['id'];

      this._videoService.getVideo(id).subscribe(
        response =>{
          this.video= response.data;
          console.log(response);
          if(!this.video){
              alert("Error loading video")
              this._router.navigate(['/']);
          }
          else{
            //rating is an average of ratings array saved in mongo db
            this.rating=Math.round((this.video.ratings.reduce((a, b) => a + b, 0))/this.video.ratings.length);
            this.stars= Array(this.rating).fill('star');
            this.stars= this.stars.join(" ");
          }
        },
        error => {
        this.errorMessage = error;
        console.log(this.errorMessage)
         alert("Error in the request to the server");


        }
     ) 
    });
  }
}
