import { NgModule,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

const routes: Routes = [
  { path: '', component: ExchangeComponent,pathMatch:"full" },
  { path: 'bitcoin', component: BitcoinComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    BitcoinComponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
