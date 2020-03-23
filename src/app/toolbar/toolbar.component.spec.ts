import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { ToolbarComponent } from "./toolbar.component";

describe("ToolbarComponent", () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [MatButtonToggleModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
