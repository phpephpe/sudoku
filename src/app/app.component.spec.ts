import { Component } from "@angular/core";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, MockAppGrid, MockAppToolbar],
      }).compileComponents();
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

@Component({ selector: "app-grid" })
class MockAppGrid {}

@Component({ selector: "app-toolbar" })
class MockAppToolbar {}
