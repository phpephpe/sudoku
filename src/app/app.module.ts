import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridCellComponent } from "./grid/grid-cell/grid-cell.component";
import { GridComponent } from "./grid/grid/grid.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
@NgModule({
  declarations: [
    AppComponent,
    GridCellComponent,
    GridComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
