import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute, Params } from '@angular/router';

import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

/* md5 is declaring as any to be ignored by typescript but reconigzed as variable
because we are including the library in the index.html file */
declare var md5: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user:User;
  public pass:string;
  public errorMessage: any;

  constructor(
    private _userService:UserService,
    private _router:Router
  ) { }

  ngOnInit() {
    this.user = new User("","","");
    
  }

  //function of user authentification with api using userService
  onSubmit(){
    this.user.password= md5(this.pass);
    this._userService.authUser(this.user).subscribe(
      response=> {
        if(!response){
           alert("Username or password is incorrect");
           console.log(response)
           this._router.navigate(['/']);
        }
        else{
          console.log("correct access")
          this._router.navigate(['/videos']);
        }
         
      },
      error=>{
        this.errorMessage= <any>error;
        if(this.errorMessage!=null){
          console.log(this.errorMessage);
          alert("Error in the request to the server");
        }
      }
    )
  }
}
