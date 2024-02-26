import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ClockComponent } from './app/clock/clock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockComponent],
  template: `
    <app-clock [time]="time" [showMsec]="false" (stop)="onStop()"> 
      <img src="assets/clock1.svg" />
    </app-clock>

    <app-clock [time]="time" (stop)="onStop()"> 
      <img src="assets/clock2.svg" />
    </app-clock>
  `
})
export class App {
  private intervalId: ReturnType<typeof setInterval>;
  time = new Date();

  constructor() {
    this.intervalId = setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    this.time = new Date();
  }

  onStop() {
    clearInterval(this.intervalId);
  }
}

bootstrapApplication(App);
