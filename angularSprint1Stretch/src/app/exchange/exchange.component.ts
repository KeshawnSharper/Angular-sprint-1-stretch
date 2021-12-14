import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
const getSymbolFromCurrency = require('currency-symbol-map')

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  conversions = []
  date = ""
  firstInput = ""
  secondInput = ""
  amount = 0
  symbol = ""
  multiplier = 0
  totalAmount = ""
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json').subscribe(data => {
        console.log(data)
        this.date = data.date
        this.conversions = data.btc
    })  
  }
  onSubmit(): void{
    if (isNaN(this.multiplier)){
      alert("Please Enter A Valid Number")
    }
    else{
    this.http.get<any>(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${this.firstInput}/${this.secondInput}.json`).subscribe(data => {
        this.amount = Number(data[`${this.secondInput}`])
        this.amount *= Number(this.multiplier)
        this.totalAmount = this.amount.toFixed(2)
        this.symbol = getSymbolFromCurrency(this.secondInput)
    })
  }   
  }

  

}
