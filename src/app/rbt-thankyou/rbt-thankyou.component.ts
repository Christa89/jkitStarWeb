import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rbt-thankyou',
  templateUrl: './rbt-thankyou.component.html',
  styleUrls: ['./rbt-thankyou.component.scss']
})
export class RbtThankyouComponent implements OnInit {

  showThankCompo:boolean =true;
  showGreetingCompo:boolean =false;

  showThankyouCompo:boolean =false;
  showRatingCompo :boolean =true;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.showThankCompo =false;   
      this.showGreetingCompo =true

      setTimeout(() => {
        location.reload();
      }, 5000);
      
    }, 5000);
  }
}
