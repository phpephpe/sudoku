import { GridCell } from './grid-cell';
import { GridCellGroup } from './grid-cell-group';

describe('GridCellGroup', () => {
  it('should create an instance', () => {
    expect(new GridCellGroup()).toBeDefined();
  });

  it('should return group values correctly', () => {
    const group = new GridCellGroup([
      new GridCell({ value: 1 }),
      new GridCell({ value: 2 }),
      new GridCell(),
      new GridCell(),
      new GridCell(),
      new GridCell(),
      new GridCell(),
      new GridCell(),
      new GridCell(),
    ]);

    expect(group.values()).toEqual([1, 2]);
  });

  it('should check the group validity correctly', () => {
    const group1 = new GridCellGroup([
      new GridCell({ value: 1 }),
      new GridCell({ value: 2 }),
      new GridCell(),
    ]);
    expect(group1.isValid()).toBeFalse();

    const group2 = new GridCellGroup([new GridCell({ value: 1 }), new GridCell({ value: 2 })]);
    expect(group2.isValid()).toBeTrue();

    const group3 = new GridCellGroup([
      new GridCell({ value: 1 }),
      new GridCell({ value: 2 }),
      new GridCell({ value: 2 }),
    ]);
    expect(group3.isValid()).toBeFalse();
  });

  it('should check the group invalidity correctly', () => {
    const group1 = new GridCellGroup([
      new GridCell({ value: 1 }),
      new GridCell({ value: 2 }),
      new GridCell(),
    ]);
    expect(group1.isInvalid()).toBeFalse();

    const group2 = new GridCellGroup([
      new GridCell({ value: 1 }),
      new GridCell({ value: 2 }),
      new GridCell({ value: 3 }),
    ]);
    expect(group2.isInvalid()).toBeFalse();

    const group3 = new GridCellGroup([
      new GridCell({ value: 1 }),
      new GridCell({ value: 2 }),
      new GridCell({ value: 2 }),
    ]);
    expect(group3.isInvalid()).toBeTrue();
  });
});
