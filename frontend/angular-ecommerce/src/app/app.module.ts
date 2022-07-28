import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule, Router} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { LoginNeededComponent } from './components/login-needed/login-needed.component';
import { AuthGuardWithForcedLogin } from './services/auth-guard-with-forced-login.service';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { Order } from './common/order';


const routes: Routes = [
  {path: 'order-history', component: OrderHistoryComponent, canActivate : [AuthGuardWithForcedLogin]},
  {path: 'login-needed', component: LoginNeededComponent},
  {path: 'member', component: MembersPageComponent, canActivate : [AuthGuardWithForcedLogin]},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: '', component: ProductListComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginStatusComponent,
    MembersPageComponent,
    LoginNeededComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ReactiveFormsModule,
    OAuthModule.forRoot()
  ],
  providers: [ProductService, AuthGuardWithForcedLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
