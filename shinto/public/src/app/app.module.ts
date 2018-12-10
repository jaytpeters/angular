import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShintoServiceService } from './shinto-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { FormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    BuyComponent,
    SellComponent,
    LedgerComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShintoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
