import { Component } from '@angular/core';

@Component({
  selector: 'app-customcounter',
  standalone: true,
  imports: [],
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent {
  constructor() {

  }

  counterInput!: number;

  onIncrement() {

  }
}
