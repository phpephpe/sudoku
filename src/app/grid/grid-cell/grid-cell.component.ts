import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-grid-cell",
  templateUrl: "./grid-cell.component.html",
  styleUrls: ["./grid-cell.component.scss"]
})
export class GridCellComponent {
  @Input()
  set value(value: number) {
    this.intialValue = value;
    this._internalValue = value;
  }
  @Output() valueChange = new EventEmitter<number>();

  @Input() invalid: boolean;
  @Input() valid: boolean;

  @Input() focused: boolean;
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();

  intialValue: number;
  _internalValue: number | null;
  set internalValue(val: number) {
    this.valueChange.emit(val);
  }
  get internalValue(): number {
    return this._internalValue;
  }

  onFocus = () => {
    this._internalValue = null;
    this.focus.emit();
  };

  onBlur = () => {
    this._internalValue = this.intialValue;
    this.blur.emit();
  };
}
