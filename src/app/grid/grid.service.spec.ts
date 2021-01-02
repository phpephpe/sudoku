import { TestBed } from "@angular/core/testing";
import { GridService } from "./grid.service";
import { Grid } from "./model/grid";
import { mockValidRawGrid } from "./model/mocks";

describe("GridService", () => {
  let service: GridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should check if a cell is invalid", () => {
    const cells = mockValidRawGrid().cells;
    cells[cells.length - 1].value = null;
    service.grid = new Grid(2, cells);
    const lastCell = service.grid.cells[service.grid.cells.length - 1];

    expect(service.isCellInvalid(lastCell)).toBeFalse();

    lastCell.value = 4;

    expect(service.isCellInvalid(lastCell)).toBeTrue();
  });

  it("should check if a cell is valid", () => {
    const cells = mockValidRawGrid().cells;
    cells[cells.length - 1].value = null;
    service.grid = new Grid(2, cells);
    const lastCell = service.grid.cells[service.grid.cells.length - 1];

    expect(service.isCellValid(lastCell)).toBeFalse();

    lastCell.value = 4;

    expect(service.isCellValid(lastCell)).toBeFalse();

    lastCell.value = 3;

    expect(service.isCellValid(lastCell)).toBeTrue();
  });
});
