import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from '@ngrx/store';
import { increment, decrement, reset } from './store/counter.action';
import {Observable} from 'rxjs';
import {CommonModule} from '@angular/common';
import { counterFeature } from './store/counter.feature';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngrx-store');

  private store = inject(Store);

  protected counter$: Observable<number>;

  constructor() {
    this.counter$ = this.store.select(counterFeature.selectCounterState);
  }

  protected increment() {
    this.store.dispatch(increment());
  }

  protected decrement() {
    this.store.dispatch(decrement());
  }

  protected reset() {
    this.store.dispatch(reset());
  }
}
