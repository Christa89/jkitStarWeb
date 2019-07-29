import { Component, OnInit, Input } from '@angular/core';
import {OrderDetails} from  '../Modal/order-details';
import {OrderDetailsService} from '../order-details.service'
import { from } from 'rxjs';

declare function  setEyeStyle():any; 


@Component({
  selector: 'app-rbt-run-delivery',
  templateUrl: './rbt-run-delivery.component.html',
  styleUrls: ['./rbt-run-delivery.component.scss']
})
export class RbtRunDeliveryComponent implements OnInit {

 _orderDetails = new OrderDetails();
  @Input() orderDetails: OrderDetails;

  deliveryCompoOne: boolean =true;
  deliveryCompoTwo:boolean = false;
  deliveryCompoThree:boolean =false;
  deliveryCompoFour:boolean =false;

  showRunDelvryCompo:boolean =true;
  showPassCodeCompo:boolean =false;



  constructor(private orderDetailsService:OrderDetailsService) { }

  ngOnInit() {


         setEyeStyle();
         setTimeout(()=>{
         
          this.deliveryCompoOne  = false;
          this.deliveryCompoTwo = true;
          setTimeout(()=>{
            this.deliveryCompoTwo = false;
            this.deliveryCompoThree = true;

            setTimeout(()=>{
              this.deliveryCompoThree = false;
              this.deliveryCompoFour =true;
             }
              
             ,5000)
           }
            
           ,5000)
         }
          
         ,5000)

         
    this.orderDetailsService.MakeOrder(this.orderDetails).subscribe(
      res => { 
       this._orderDetails.orderId = res.orderId; 
       this._orderDetails.contactNumber = res.contactNumber;
       this._orderDetails.recipientName = res.recipientName;
       this._orderDetails.roomNumber =res.roomNumber;
       this._orderDetails.orderOtp =res.orderOtp;
       this._orderDetails.isOTPChecked = res.isOTPChecked;

      }  
    );  
  }

  goToNextPage(){
    
    this.showRunDelvryCompo =false;
    this.showPassCodeCompo =true;

  }
} 