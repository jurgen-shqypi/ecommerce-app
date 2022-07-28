import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of, from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: String = '';

  storage: Storage = sessionStorage;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.auth.events.subscribe(e => {
      console.log(e)
      this.isAuthenticated=  this.auth.hasValidAccessToken();
      if (this.isAuthenticated){
        this.userFullName = JSON.parse(sessionStorage.getItem('id_token_claims_obj')!).nickname;
        const theEmail = JSON.parse(sessionStorage.getItem('id_token_claims_obj')!).email;
        this.storage.setItem('userEmail', JSON.stringify(theEmail))
      }
    });
  }

  logout(): void {
    this.auth.logout();
  }

  login() {
    this.auth.login();
  }

}

