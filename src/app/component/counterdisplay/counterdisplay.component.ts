import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getCounter } from '../../shared/store/counter.selector';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [CommonModule, ButtonModule],
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
    // this.counter$ = this.store.select('counter')
    this.counterSubscribe = this.store.select(getCounter).subscribe(data => {
      this.counterDisplay = data;
      console.log('counter display')
    })
  }

  ngOnDestroy(): void {
    if (this.counterSubscribe) {
      this.counterSubscribe.unsubscribe();
    }
  }
}
