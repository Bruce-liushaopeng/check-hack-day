import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent {
  constructor(private store:Store<{counter: CounterModel}>) {}

  counterDisplay!: number
  channelName=''
  counterSubscribe !: Subscription
  counter$ !: Observable<CounterModel>

  ngOnInit(): void {
    this.counter$ = this.store.select('counter')
  }

  ngOnDestroy(): void {
  }
}
