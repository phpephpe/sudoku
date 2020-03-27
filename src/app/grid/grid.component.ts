import { Component, DoCheck, Input } from "@angular/core";
import { StateService } from "../state.service";
import { Grid } from "./model/grid";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent implements DoCheck {
  @Input() grid: Grid;

  constructor(private stateService: StateService) {}

  ngDoCheck() {
    this.stateService.save(this.grid.toRawGrid());
  }
}
