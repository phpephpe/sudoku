import { Component } from '@angular/core';
import { GridService } from './grid/grid.service';
import { GridSize } from './grid/model/grid-size.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private gridService: GridService) {}

  onNewGrid(gridSize: GridSize) {
    this.gridService.new(gridSize);
  }
}
