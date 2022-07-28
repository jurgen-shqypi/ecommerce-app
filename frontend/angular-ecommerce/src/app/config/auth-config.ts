import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const authCodeFlowConfig: AuthConfig = {
    // URL of identity provider. https://<YOUR_DOMAIN>.auth0.com
    issuer: environment.issuerUrl,
    redirectUri: window.location.origin,
    clientId: environment.clientId,
    responseType: 'code',
    scope: 'openid profile email customer',
    showDebugInformation: true,
    silentRefreshRedirectUri: window.location.origin,
    useSilentRefresh: true,
    customQueryParams: {
      /**
       * replace with your API-Audience
       * This is very important to retrieve a valid access_token for our API
       * */
      audience: environment.audience,
    },
  };
