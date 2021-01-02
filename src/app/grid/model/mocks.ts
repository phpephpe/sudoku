import { RawGrid } from "./grid";
import { RawGridCell } from "./grid-cell";

export function mockRawCell(override?: Partial<RawGridCell>): RawGridCell {
  return { value: 1, original: false, ...override };
}

export function mockValidRawGrid(): RawGrid {
  return {
    size: 2,
    cells: [
      mockRawCell({ value: 3, original: true }),
      mockRawCell({ value: 4, original: true }),
      mockRawCell({ value: 2, original: true }),
      mockRawCell({ value: 1, original: true }),
      mockRawCell({ value: 1, original: true }),
      mockRawCell({ value: 2, original: true }),
      mockRawCell({ value: 3, original: true }),
      mockRawCell({ value: 4, original: true }),
      mockRawCell({ value: 4 }),
      mockRawCell({ value: 3 }),
      mockRawCell({ value: 1 }),
      mockRawCell({ value: 2 }),
      mockRawCell({ value: 2 }),
      mockRawCell({ value: 1 }),
      mockRawCell({ value: 4 }),
      mockRawCell({ value: 3 }),
    ],
  };
}
