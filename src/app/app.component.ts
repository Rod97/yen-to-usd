import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  title = "Currency Converter";

  yenValue: number = null;
  usdValue: number = null;

  onUsdValueChange(value) {
    this.yenValue=value*110;
  }

  onYenValueChange(value) {
    console.log("change received in main");
    this.usdValue=value * .0090;
    console.log("usd value is " + this.usdValue)
  }
}
