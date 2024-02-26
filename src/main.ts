import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ClockComponent } from './app/clock/clock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockComponent],
  template: `
    <app-clock/>
  `,
})
export class App {

}

bootstrapApplication(App);
