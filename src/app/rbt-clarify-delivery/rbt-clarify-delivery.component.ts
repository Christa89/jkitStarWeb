import { Component, OnInit, Input } from '@angular/core';
import { OrderDetails } from '../Modal/order-details';

declare function  setEyeStyle():any; 

@Component({
  selector: 'app-rbt-clarify-delivery',
  templateUrl: './rbt-clarify-delivery.component.html',
  styleUrls: ['./rbt-clarify-delivery.component.scss']
})
export class RbtClarifyDeliveryComponent implements OnInit {

    
 _orderDetails = new OrderDetails();
 @Input() orderDetails: OrderDetails;

  showClarifyDeliveryCompo:boolean =true;
  showRatingCompo:boolean =false;

  constructor() { }

  ngOnInit() {

    setEyeStyle();
    this._orderDetails = this.orderDetails;
  }

  goToNextPage(){
    this.showClarifyDeliveryCompo =false;
    this.showRatingCompo =true;
  }

}
