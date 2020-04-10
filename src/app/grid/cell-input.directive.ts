import { Directive, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appCellInput]",
})
export class CellInputDirective {
  @Input() min: number | undefined;
  @Input() max: number | undefined;

  wantedKeyRegex = /[1-9(Backspace)]/;

  @HostListener("keydown", ["$event"])
  filterUnwantedKey(event: KeyboardEvent) {
    if (!this.wantedKeyRegex.test(event.key)) {
      event.preventDefault();
    } else if (!isNaN(+event.key)) {
      const newValue = +((event.target as HTMLInputElement).value + event.key);
      if (newValue < this.min || this.max < newValue) {
        event.preventDefault();
      }
    }
  }
}
