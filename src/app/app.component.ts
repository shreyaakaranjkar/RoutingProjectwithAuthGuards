import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'routing';
  isloggedIn ! : boolean;
  constructor(private _authservice : AuthService){}

  ngOnInit(): void {
    
    this._authservice.logInstatusAsObs$
      .subscribe(res =>{
        console.log(res);
        
        this.isloggedIn = res
      })
       
        
        
  }
}
