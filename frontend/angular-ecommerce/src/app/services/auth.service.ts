import { Injectable } from '@angular/core';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { Subject, Observable, of } from 'rxjs';
import { authCodeFlowConfig } from '../config/auth-config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  events: Observable<OAuthEvent> = this.oauth.events;
  isAuthenticated: Observable<boolean> = of(false);
  isAuthenticatedChange: Subject<boolean> = new Subject<boolean>();
  userFullName: String = '';
  constructor(private oauth: OAuthService) {
    this.oauth.configure(authCodeFlowConfig);
    this.oauth.loadDiscoveryDocumentAndTryLogin();
    this.oauth.setupAutomaticSilentRefresh();
  }

   login() {
     this.oauth.initLoginFlow();
  }

   hasValidAccessToken(){
    return this.oauth.hasValidAccessToken();
    
  }

  logout(){
    this.oauth.logOut();
  }
}
