import { Component, OnInit, Output, EventEmitter } from '@angular/core';


declare function NumberPad():any;
declare function clearDisplay():any;

@Component({
  selector: 'app-rbt-delivery-info',
  templateUrl: './rbt-delivery-info.component.html',
  styleUrls: ['./rbt-delivery-info.component.scss']
})
export class RbtDeliveryInfoComponent implements OnInit {

  showRecepName : boolean = false;
  showDeliveryInfoCompo :boolean =true;
  strRoomNo:string ="";

  @Output() goToHomePage: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

    NumberPad();
  }

   clearText(){
    clearDisplay();
  }

  goToNextPage(val: string){

    this.strRoomNo =val;
    this.showDeliveryInfoCompo = false;
    this.showRecepName = true;
  }

  goToPreviousPage(){
   this.goToHomePage.emit(null);
  }

  LoadPage(){
    NumberPad();
    this.showDeliveryInfoCompo = true;
    this.showRecepName = false;
  }

}
