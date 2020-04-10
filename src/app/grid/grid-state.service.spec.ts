import { TestBed } from "@angular/core/testing";
import { GridStateService } from "./grid-state.service";
import { Grid } from "./model/grid";

describe("GridStateService", () => {
  let service: GridStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridStateService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should store and restore a grid state properly", () => {
    const grid = new Grid(2);

    service.saveToLocalStorage(grid);

    const ls = localStorage.getItem("SUDOKU_GRID");
    expect(ls).toEqual(
      JSON.stringify({
        size: grid.size,
        values: grid.cells.map((c) => c.value),
      })
    );

    const lsFromService = service.loadFromLocalStorage();
    expect(lsFromService.size).toBe(grid.size);
    lsFromService.cells.forEach((c, i) =>
      expect(c.value).toBe(grid.cells[i].value)
    );

    service.deleteFromLocalStorage();
    expect(service.loadFromLocalStorage()).toBeUndefined();
  });
});
