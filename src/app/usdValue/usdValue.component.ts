import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "usd-value",
  templateUrl: "./usdValue.component.html",
  styleUrls: ["./usdValue.component.scss"]
})
export class UsdValue implements OnInit, OnChanges {
  @Output() onUsdValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() usdValue: string;

  constructor() {
  }
 
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.usdValue=="0"){
      this.usdValue="";
    }
  }
  
  send(){
    this.onUsdValueChange.emit(this.usdValue);
  }
}
