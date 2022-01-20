import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterCountBy } from 'src/app/reducers';
import * as actions from '../../actions/counter-component.actions';
@Component({
  selector: 'app-counter-count-by',
  templateUrl: './counter-count-by.component.html',
  styleUrls: ['./counter-count-by.component.css'],
})
export class CounterCountByComponent implements OnInit {
  countingBy$ = this.store.select(selectCounterCountBy);
  constructor(private store: Store) {}

  ngOnInit(): void {}

  setCountBy(by: number) {
    this.store.dispatch(actions.countBySet({ by }));
  }
}
