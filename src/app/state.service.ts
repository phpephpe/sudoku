import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StateService {
  private LS_KEY = "SUDOKU";

  hasAnything() {
    return !!localStorage.getItem(this.LS_KEY);
  }

  save<T>(value: T) {
    localStorage.setItem(this.LS_KEY, JSON.stringify(value));
  }

  load<T>(): T {
    return JSON.parse(localStorage.getItem(this.LS_KEY)) as T;
  }
}
