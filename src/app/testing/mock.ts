import {Observable} from 'rxjs';

export class showUserService {
    logOut(id:String){
        return Observable.of({"status":"success"})
    }
}

export class RouterMock{
    navigate(commands: any[]){}
}

export class ActivatedRouterMock{
    
}