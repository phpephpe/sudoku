import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { GridCellComponent } from "./grid/grid-cell/grid-cell.component";
import { GridComponent } from "./grid/grid.component";

@NgModule({
  declarations: [AppComponent, GridCellComponent, GridComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
