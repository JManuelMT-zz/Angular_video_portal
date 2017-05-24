import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../environments/environment";

//My video model
import {Video} from '../models/video';

@Injectable()
export class VideoService{
    public url:string;
    public currentUser:any;
    public id:string;
    constructor(private _http:Http){
        environment.production==false? this.url = 'http://localhost:3000':this.url='https://api-node-videos.herokuapp.com/';
        
    }
    //Getting videos from api
    getVideos(skip: number, limit: number){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser)
        let id= currentUser.sessionId;
        let headers = new Headers({'Content-Type':'application/json'});
            return this._http.get(this.url+'videos?sessionId='+id+'&skip='+skip+'&limit='+limit)
                            .map(res=>res.json());
    
        
    }

    //Get a single video form api
    getVideo(idVideo:string){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let id= currentUser.sessionId;
         return this._http.get(this.url+'video?sessionId='+id+'&videoId='+idVideo)
                            .map(res=>res.json());
    }

    postVote(vote:number, idVideo:string){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let id= currentUser.sessionId;
        let params ={
            'rating': vote,
            'videoId': idVideo
        }

        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'video/ratings?sessionId='+id, params, {headers: headers})
                            .map(res=>res.json());

    }
    
  
    
}

