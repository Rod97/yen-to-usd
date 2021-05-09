import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "yen-value",
  templateUrl: "./yenValue.component.html",
  styleUrls: ["./yenValue.component.scss"]
})
export class YenValue implements OnInit{
  @Output() onYenValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() yenValue: string;

  constructor() {}

  ngOnInit() {
  }
}
