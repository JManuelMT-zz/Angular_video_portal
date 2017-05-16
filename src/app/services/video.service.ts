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
   
    constructor(private _http:Http){
        this.url = 'http://localhost:3000/';
    }

    getVideos(){
        let headers = new Headers({'Content-Type':'application/json'});
        let currentUser= JSON.parse(localStorage.getItem('currentUser'));
        let id = currentUser.sessionId;

            return this._http.get(this.url+'videos?sessionId='+id)
                            .map(res=>res.json());
    
        
    }
  
    
}

