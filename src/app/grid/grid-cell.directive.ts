import { Directive, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { KeyboardEventKey } from "../../utils/keyboard-event-key.enum";

@Directive({
  selector: "[appGridCell]",
})
export class GridCellDirective {
  @Input() min: number;
  @Input() max: number;
  @Input() readonly: boolean;

  @Output() valueChange = new EventEmitter<number>();
  @Output() move = new EventEmitter<KeyboardEventKey>();

  @HostListener("keydown", ["$event"])
  onKeydown(event: KeyboardEvent) {
    event.preventDefault();

    if (this.readonly) {
      return;
    }

    const value = +event.key;

    if (!isNaN(value) && this.min <= value && value <= this.max) {
      this.valueChange.emit(value);
    } else if (KeyboardEventKey[event.key] != null) {
      this.move.emit(KeyboardEventKey[event.key]);
    }
  }
}
