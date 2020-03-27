import { Component, OnInit } from "@angular/core";
import { GridSize } from "./grid/grid-size.enum";
import { Grid } from "./grid/model/grid";
import { StateService } from "./state.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  grid?: Grid;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    // TODO : NE MARCHE PAS
    this.grid = this.stateService.hasAnything()
      ? Grid.fromRawGrid(this.stateService.load())
      : new Grid(GridSize.Three);
  }
}
