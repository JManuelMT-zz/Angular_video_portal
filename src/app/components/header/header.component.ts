import {OnInit, Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit{


  public token: any;
  public username: String;
  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router:Router) { 
      
  
  }

  ngOnInit(){
    this.token= JSON.parse(localStorage.getItem('currentUser'));

    if(!this.token){
      alert(" You are not allowed to be here!");
      this._router.navigate(['/']);
    }

  }
  onLogout(){
  
      
       this._userService.logOut(this.token.sessionId).subscribe(
         response =>{
           if(!response){
             alert("Error, please try again");
           }
           else{
             localStorage.removeItem('currentUser');
             this._router.navigate(['/']);
           }
         },
         error =>{

         }
       )
  }
  

}
