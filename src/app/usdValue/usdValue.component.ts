import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "usd-value",
  templateUrl: "./usdValue.component.html",
  styleUrls: ["./usdValue.component.scss"]
})
export class UsdValue implements OnInit, OnChanges {
  @Output() onUsdValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() usdValue: string;
  usdInput: any;

  constructor() {
  }
 
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change detected in usd")
    console.log("new usd value is " + this.usdValue);
    if(this.usdValue=="0"){
      this.usdValue="";
    }
  }
  
  send(){
    console.log("send triggered in usd")
    this.onUsdValueChange.emit(this.usdInput);
  }
}
