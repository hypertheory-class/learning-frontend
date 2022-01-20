import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectCounterCurrent,
  selectShouldCounterResetBeDisabled,
} from 'src/app/reducers';
import * as actions from '../../actions/counter-component.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  current$ = this.store.select(selectCounterCurrent);
  resetDisabled$ = this.store.select(selectShouldCounterResetBeDisabled);
  constructor(private store: Store) {}

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(actions.countIncremented());
  }

  decrement() {
    this.store.dispatch(actions.countDecremented());
  }

  reset() {
    this.store.dispatch(actions.countReset());
  }
}
