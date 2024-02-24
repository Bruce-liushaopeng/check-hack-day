import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CounterdisplayComponent,
    CounterbuttonComponent,
    CustomcounterComponent
  ] as any,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learnngrx';
}
