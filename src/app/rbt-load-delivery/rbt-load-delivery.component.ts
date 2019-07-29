import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {OrderDetails} from  '../Modal/order-details';
import {OrderDetailsService} from '../order-details.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-rbt-load-delivery',
  templateUrl: './rbt-load-delivery.component.html',
  styleUrls: ['./rbt-load-delivery.component.scss']
})
export class RbtLoadDeliveryComponent implements OnInit {

  orderDetails = new OrderDetails();
  _orderDetails = new OrderDetails();

  @Output() goToPrePage: EventEmitter<any> = new EventEmitter();
  @Input() receptionstName: string;
  @Input() roomNumber : string;
  @Input() contactNo : string;

  showRunDelivery : boolean =false;
  showLoadDelivery:boolean =true;

  constructor(private orderDetailsService:OrderDetailsService) { }

  ngOnInit() {
  }


  goToPreviousPage(){
    this.goToPrePage.emit(null);
  }

  goToNextPage(){

    this.orderDetails.contactNumber = this.contactNo;
    this.orderDetails.roomNumber = this.roomNumber;
    this.orderDetails.recipientName = this.receptionstName;
    this.showLoadDelivery =false;
    this.showRunDelivery =true;
  }

}
