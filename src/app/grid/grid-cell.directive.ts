import { Directive, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Directive({
  selector: "[appGridCell]",
})
export class GridCellDirective {
  @Input() min: number;
  @Input() max: number;
  @Input() readonly: boolean;

  @Output() valueChange = new EventEmitter<number>();

  @HostListener("keydown", ["$event"])
  onKeydown(event: KeyboardEvent) {
    event.preventDefault();

    if (this.readonly) {
      return;
    }

    const value = +event.key;

    if (!isNaN(value) && this.min <= value && value <= this.max) {
      this.valueChange.emit(value);
    }
  }
}
