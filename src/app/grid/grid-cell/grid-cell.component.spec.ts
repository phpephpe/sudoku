import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { GridCellComponent } from "./grid-cell.component";

describe("GridCellComponent", () => {
  let component: GridCellComponent;
  let fixture: ComponentFixture<GridCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridCellComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize itself correctly", () => {
    component.value = 1;
    expect(component.intialValue).toEqual(1);
    expect(component._internalValue).toEqual(1);
  });

  it("should emit the new value", () => {
    spyOn(component.valueChange, "emit");

    const input: HTMLInputElement = fixture.debugElement.query(By.css("input"))
      .nativeElement;

    input.value = "2";
    input.dispatchEvent(new Event("input"));

    expect(component.valueChange.emit).toHaveBeenCalledWith(2);
  });

  it("should delete the value on input's focus event and reset it on blur event", () => {
    component.value = 2;
    expect(component._internalValue).toEqual(2);

    const input = fixture.debugElement.query(By.css("input"));

    spyOn(component.focus, "emit");
    input.triggerEventHandler("focus", {});
    expect(component._internalValue).toBeNull();
    expect(component.focus.emit).toHaveBeenCalled();

    spyOn(component.blur, "emit");
    input.triggerEventHandler("blur", {});
    expect(component._internalValue).toEqual(2);
    expect(component.blur.emit).toHaveBeenCalled();
  });
});
