import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import getSymbolFromCurrency from 'currency-symbol-map'


@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  date = ""
  conversions = {}
  symbol = ""
  options: any;
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {
   
    this.http.get<any>('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json').subscribe(data => {
      console.log(data)
      this.date = data.date
      this.conversions = data.btc
      console.log(data.btc)
      
  })        

    // for (let i = 0; i < this.conversions.length; i++) {
    //   let conversion = this.conversions[i]
    //   xAxisData.push(conversion);
    //   data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      
    // }
  // console.log(this.conversions)
  //   for (const [key, value] of Object.entries(this.conversions)) {
  //     console.log("hello",key,value)
      
      
  //   }
    // console.log(xAxisData)
 
  
}
  

}
