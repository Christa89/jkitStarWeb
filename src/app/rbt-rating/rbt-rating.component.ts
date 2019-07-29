import { Component, OnInit, Input } from '@angular/core';
import {OrderDetails} from  '../Modal/order-details';
import {OrderDetailsService} from '../order-details.service'

declare function  setEyeStyle():any; 

@Component({
  selector: 'app-rbt-rating',
  templateUrl: './rbt-rating.component.html',
  styleUrls: ['./rbt-rating.component.scss']
})
export class RbtRatingComponent implements OnInit {

  _orderDetails = new OrderDetails();
  @Input() orderDetails: OrderDetails;

  ratingInfoPageShow:boolean =true;
  ratingPageShow:boolean =false;
  showThankyouCompo:boolean =false;


  constructor(private orderDetailsService:OrderDetailsService) { }

  ngOnInit() {
  
    setEyeStyle();

    setTimeout(()=>{
      this.ratingInfoPageShow = false;
      this.ratingPageShow =true;
     }
      
     ,5000)
  }


  goToNextPage(val:string){

    this._orderDetails = this.orderDetails;
    this._orderDetails.StarRating = Number(val);


    this.orderDetailsService.RatingPos(this._orderDetails).subscribe(
      res => { 
       this._orderDetails.orderId = res.orderId; 
       this._orderDetails.contactNumber = res.contactNumber;
       this._orderDetails.recipientName = res.recipientName;
       this._orderDetails.roomNumber =res.roomNumber;
       this._orderDetails.orderOtp =res.orderOtp;
       this._orderDetails.isOTPChecked = res.isOTPChecked;

      }  
    );  

    this.ratingPageShow =false;
    this.showThankyouCompo =true;
  }


}
