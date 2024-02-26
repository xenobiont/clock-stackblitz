import { Component } from '@angular/core';

@Component({
	selector: 'app-clock',
	standalone: true,
	template: `<p>{{ hour }}:{{ min }}:{{ sec }}</p>`,
})
export class ClockComponent {
	hour = 0;
	min = 0;
	sec = 0;

	constructor() {
		setInterval(() => this.updateTime(), 1000);
	}

	updateTime() {
		const time = new Date();

		this.hour = time.getHours();
		this.min = time.getMinutes();
		this.sec = time.getSeconds();
	}
}