import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { UserService } from "../../services/user.service";
import {Router} from "@angular/router";
import { showUserService, RouterMock, ActivatedRouterMock } from "../../testing/mock";
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  
   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [ HeaderComponent ],
       providers: [
         {provide: UserService, useValue: showUserService},
         {provide: Router, useClass: RouterMock}
       ]
     })
     .compileComponents();
   }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
