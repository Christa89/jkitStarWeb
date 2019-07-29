import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RbtHomeComponent } from './rbt-home/rbt-home.component';
import { RbtDeliveryInfoComponent } from './rbt-delivery-info/rbt-delivery-info.component';
import { RbtRecipNameComponent } from './rbt-recip-name/rbt-recip-name.component';
import { RbtContnNoComponent } from './rbt-contn-no/rbt-contn-no.component';
import { RbtLoadDeliveryComponent } from './rbt-load-delivery/rbt-load-delivery.component';
import { RbtRunDeliveryComponent } from './rbt-run-delivery/rbt-run-delivery.component';
import { RbtPassCodeComponent } from './rbt-pass-code/rbt-pass-code.component';
import { RbtClarifyDeliveryComponent } from './rbt-clarify-delivery/rbt-clarify-delivery.component';
import { RbtRatingComponent } from './rbt-rating/rbt-rating.component';
import { RbtThankyouComponent } from './rbt-thankyou/rbt-thankyou.component';



@NgModule({
  declarations: [
    AppComponent,
    RbtHomeComponent,
    RbtDeliveryInfoComponent,
    RbtRecipNameComponent,
    RbtContnNoComponent,
    RbtLoadDeliveryComponent,
    RbtRunDeliveryComponent,
    RbtPassCodeComponent,
    RbtClarifyDeliveryComponent,
    RbtRatingComponent,
    RbtThankyouComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
