import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderHistory } from '../common/order-history';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl = environment.shopApiUrl + '/orders';

  constructor(private httpClient: HttpClient) { }

  getOrderHistory(theEmail: string): Observable<GetReponseOrderHistory> {
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmail?email=${theEmail}`;

    return this.httpClient.get<GetReponseOrderHistory>(orderHistoryUrl);
  }

  
}

interface GetReponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];   
  }
}
