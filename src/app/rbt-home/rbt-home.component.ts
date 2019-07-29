import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rbt-home',
  templateUrl: './rbt-home.component.html',
  styleUrls: ['./rbt-home.component.scss'],
 
})
export class RbtHomeComponent implements OnInit {

  showDeliveryInfoCompo :boolean =false;
  showHomeCompo :boolean = true;
  constructor() { }

  ngOnInit() {
  }

  goToNextPage($event){

    this.showHomeCompo = false;
    this.showDeliveryInfoCompo = true;

  }

  LoadHome(){

    this.showHomeCompo = true;
    this.showDeliveryInfoCompo = false;

  }

}
