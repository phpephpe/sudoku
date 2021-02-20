import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { EraseEventKey } from '../../utils/erase-event-key.enum';
import { MoveEventKey } from '../../utils/move-event-key.enum';

@Directive({
  selector: '[appGridCell]',
})
export class GridCellDirective {
  @Input() min: number;
  @Input() max: number;
  @Input() readonly: boolean;

  @Output() valueChange = new EventEmitter<number>();
  @Output() move = new EventEmitter<MoveEventKey>();
  @Output() erase = new EventEmitter();

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    event.preventDefault();

    if (this.readonly) {
      return;
    }

    const value = +event.key;

    if (!isNaN(value) && this.min <= value && value <= this.max) {
      this.valueChange.emit(value);
    } else if (MoveEventKey[event.key] != null) {
      this.move.emit(MoveEventKey[event.key]);
    } else if (EraseEventKey[event.key] != null) {
      this.erase.emit();
    }
  }
}
