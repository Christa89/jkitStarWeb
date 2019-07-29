import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { OrderDetails } from './Modal/order-details'; 

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  url = "http://jkit-staar-api.azurewebsites.net/";  
  //url="https://localhost:44316/";
  constructor(private http: HttpClient) { } 
  
  
  MakeOrder(orderDetails: OrderDetails): Observable<OrderDetails> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<OrderDetails>(this.url + 'api/OrderDetails',  
    orderDetails, httpOptions);  
  } 
  RatingPos(orderDetails: OrderDetails):Observable<OrderDetails>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<OrderDetails>(this.url + 'api/OrderDetails/Rating/'+orderDetails.orderId,  
    orderDetails, httpOptions);
  }
  

}
