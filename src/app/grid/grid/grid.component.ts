import { Component } from '@angular/core';
import { MoveEventKey } from '../../../utils/move-event-key.enum';
import { GridService } from '../grid.service';
import { GridCell } from '../model/grid-cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  get grid() {
    return this.gridService.grid;
  }

  constructor(public gridService: GridService) {}

  onCellValueChange(value: number) {
    this.gridService.setCellValue(value);
  }

  onMove(keyboardKey: MoveEventKey) {
    this.gridService.moveFocus(keyboardKey);
  }

  onCellFocus(cell: GridCell) {
    this.gridService.focusCell(cell);
  }

  onCellBlur() {
    this.gridService.blurCell();
  }

  onCellErase() {
    this.gridService.eraseCell();
  }
}
