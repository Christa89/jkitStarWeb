import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

declare function NumberPad():any;

@Component({
  selector: 'app-rbt-contn-no',
  templateUrl: './rbt-contn-no.component.html',
  styleUrls: ['./rbt-contn-no.component.scss']
})
export class RbtContnNoComponent implements OnInit {

  @Output() goToPrePage: EventEmitter<any> = new EventEmitter();
  @Input() receptionstName: string;
  @Input() roomNumber : string;

  showContactNoCompo :boolean = true;
  showLoadDelivery :boolean =false;
  strContactNo:string ="";

  constructor() { }

  ngOnInit() {
    NumberPad();
  }

  goToPreviousPage(){
    this.goToPrePage.emit(null);
  }

  goToNextPage(val:string){
    
    var y = this.receptionstName;
    var x =this.roomNumber;
    this.strContactNo = val; 
    this.showContactNoCompo =false;
    this.showLoadDelivery =true;
  }

  LoadPage(){
    NumberPad();
    this.showLoadDelivery =false;
    this.showContactNoCompo =true;
  }



}
