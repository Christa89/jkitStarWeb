import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

declare function NumberPad():any;

@Component({
  selector: 'app-rbt-recip-name',
  templateUrl: './rbt-recip-name.component.html',
  styleUrls: ['./rbt-recip-name.component.scss']
})
export class RbtRecipNameComponent implements OnInit {

  showContactNoCompo:boolean= false;
  showRecepNameCompo:boolean =true;
  @Output() goToPrePage: EventEmitter<any> = new EventEmitter();
  @Input() roomNumber : string;

  strReceptionstName:string ="";

  constructor() { }

  ngOnInit() {

    NumberPad();
  }

  goToNextPage(val: string){

    var x = this.roomNumber;
    this.strReceptionstName = val;
    this.showRecepNameCompo =false
    this.showContactNoCompo =true;
  }

  goToPreviousPage(){
    this.goToPrePage.emit(null);
  }

  LoadPage(){
    NumberPad();
    this.showRecepNameCompo =true
    this.showContactNoCompo =false;
  }

}
