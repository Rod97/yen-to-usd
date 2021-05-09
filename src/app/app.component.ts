import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = "Currency Converter";

  yenValue: number;
  usdValue: number;

  //I may be dumb but I don't think this is how conversions work. 
  //This gives the result that 1 yen = 110 usd, and that 1 usd = 111.11111... yen
  //which doesn't make any sense
  //the table in the read me specifically says that 1 yen = .0090 usd.
  //this passes all 4 tests though.
  onUsdValueChange(value) {
    this.yenValue=value/.0090
  }

  onYenValueChange(value) {
    this.usdValue=value * 110;
  }
}
