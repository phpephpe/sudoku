import { TestBed } from "@angular/core/testing";
import { GridStorageService } from "./grid-storage.service";
import { Grid } from "./model/grid";

describe("GridStateService", () => {
  let service: GridStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridStorageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should store and restore a grid state properly", () => {
    const grid = new Grid(2);

    service.saveToLocalStorage(grid);

    const gridFromLocalStorage = localStorage.getItem("SUDOKU_GRID");

    expect(gridFromLocalStorage).toEqual(
      JSON.stringify({
        size: grid.size,
        cells: grid.cells.map((c) => ({ value: c.value, original: c.original })),
      })
    );

    const gridFromService = service.loadFromLocalStorage();
    expect(gridFromService.size).toBe(grid.size);
    gridFromService.cells.forEach((c, i) => {
      expect(c.value).toBe(grid.cells[i].value);
    });

    service.deleteFromLocalStorage();
    expect(service.loadFromLocalStorage()).toBeUndefined();
  });
});
