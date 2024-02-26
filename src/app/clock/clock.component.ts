import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-clock',
  	standalone: true,
	imports: [NgIf],
	template: `
		<p>
			<span>{{ hour }}:{{ min }}:{{ sec }}</span>
			<ng-content/>
			<span *ngIf="showMsec">:{{ msec }}</span>

			<button (click)="onStop()"> stop </button>
		</p>
	`,
})
export class ClockComponent {
	@Input() showMsec = true;

	private _time!: Date;

	get time(): Date {
		return this._time;
	}

	@Input({ required: true})
	set time(time: typeof this._time) {
		this._time = time;
		this.updateTime();
	}

	hour: number = 0;
	min: number = 0;
	sec: number = 0;
	msec: number = 0;

	@Output() stop = new EventEmitter();

	onStop() {
		this.stop.emit();
	}

	updateTime() {
		this.hour = this.time.getHours();
		this.min = this.time.getMinutes();
		this.sec = this.time.getSeconds();
		this.msec = this.time.getMilliseconds();
	}
}