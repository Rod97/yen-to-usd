import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "yen-value",
  templateUrl: "./yenValue.component.html",
  styleUrls: ["./yenValue.component.scss"]
})
export class YenValue implements OnInit, OnChanges {
  @Output() onYenValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() yenValue: string;

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.yenValue=="0"){
      this.yenValue="";
    }
  }

  send(){
    this.onYenValueChange.emit(this.yenValue);
  }
}
