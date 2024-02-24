import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { customIncrement } from '../../shared/store/counter.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customcounter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent {
  constructor(private store: Store<{counter: CounterModel}>) {

  }

  counterInput!: number;
  actionType = 'add';

  onIncrement() {
    this.store.dispatch(customIncrement({value: +this.counterInput, actionType: this.actionType}))
  }
}
