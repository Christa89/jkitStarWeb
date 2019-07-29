import { Component, OnInit, Input } from '@angular/core';
import { OrderDetails } from '../Modal/order-details';

declare function NumberPad():any;

@Component({
  selector: 'app-rbt-pass-code',
  templateUrl: './rbt-pass-code.component.html',
  styleUrls: ['./rbt-pass-code.component.scss']
})
export class RbtPassCodeComponent implements OnInit {

  
 _orderDetails = new OrderDetails();
 @Input() orderDetails: OrderDetails;

  showClarifyDeliveryCompo :boolean =false;
  showPassCodeCompo : boolean =true;

  constructor() { }

  ngOnInit() {
    NumberPad();

    this._orderDetails = this.orderDetails;
  }

  goToNextPage(val:string){

    if(val == this._orderDetails.orderOtp){
      this.showPassCodeCompo =false;
      this.showClarifyDeliveryCompo = true;
    }
    else{
    alert("OTP code is error..");
    }  
  }

}
