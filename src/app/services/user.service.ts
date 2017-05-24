import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { environment } from "../../environments/environment";

//My user model
import {User} from '../models/user';

@Injectable()
export class UserService{
    public url:string;
    public token: string;
    constructor(private _http:Http){
        environment.production==false? this.url = 'http://localhost:3000':this.url='https://api-node-videos.herokuapp.com/';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser;
    }
    //Authentification with api
    authUser(user:User){
        let json= JSON.stringify(user);
        let params= json;
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'user/auth', params, {headers: headers})
                            .map(res=>{
                                let token = res.json() && res.json().token;
                                let response=res.json();
                                localStorage.setItem('currentUser', JSON.stringify({ username: response.username, sessionId: response.sessionId }));
                               
                               
                                return response;
                            });
                
    }
    //Logout with api
    logOut(id:String){
        return this._http.get(this.url+'user/logout?sessionId='+id)
                            .map(res=>{
                                console.log(res)
                                let response = res.json();
                                console.log(response)
                                localStorage.removeItem('currentUser');
                                return response;
                            });
    }
  
    
}

