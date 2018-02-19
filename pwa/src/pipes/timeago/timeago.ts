import { OnDestroy, ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import getTime from 'date-fns/get_time';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import isFuture from 'date-fns/is_future';


// time ago pipe based on date-fns distance function
// because rapropos said on Ionic Forum that i18n dates were less reliable
// also based on timeAgo pipe by Johannes Rudolph posted at: https://gist.github.com/JohannesRudolph/8e6de056d9e33353f940d9da9e6ffd82

@Pipe({name: 'ago', pure: false})

// expected input is a time (number, string or Date)
// output is a string expressing distance from that time to now, plus the suffix 'ago'
// output refreshes at dynamic intervals, with refresh rate slowing down as the input time gets further away from now
// pipe returns empty string if the input is incorrect type, or is a time in the future

export class TimeAgoPipe implements PipeTransform, OnDestroy {
  
	private readonly async: AsyncPipe;

	private isDestroyed = false;
	private agoExpression: Observable<string>;

	constructor(private ref: ChangeDetectorRef) {
    	this.async = new AsyncPipe(ref);
	}

	ngOnDestroy() {
		this.isDestroyed = true; // pipe will stop executing after next iteration
	}

	transform(time: number | string | Date): string {
		// error trapping - return empty string if input is a problem
		if (!time) { return '' }
		if (!(typeof time === 'number' || typeof time === 'string' || time instanceof Date)) {
			return '';
		}
		if (isFuture(time)) {
			return ''
		}
		// main transform
		// convert the input to milliseconds, set the pipe to the Observable if not yet done, and return an async pipe
		let milliseconds = getTime(time);
		if (!this.agoExpression) {
			this.agoExpression = this.timeAgo(milliseconds)
		}
		return this.async.transform(this.agoExpression);
	}

	// main text stream
	// inner Observable emits the value TRUE forever
	// each true is mapped to a timeago string, which returns to the template
	// repeat emission of true forever, delayed by newly computed backoff, as long as the destroyed flag is not set
	// once pipe destroyed, Observable completes
	// each time backoff is updated, pipe is marked to be checked by Angular's change detector
	private timeAgo(milliseconds: number): Observable<string> {
		let nextBackoff = 0;
		return Observable.from([true])
		                 .repeatWhen(emitTrue => emitTrue.delay(nextBackoff))
		                 .takeWhile(_ => !this.isDestroyed)
		                 .map(_ => distanceInWordsToNow(milliseconds) + ' ago')
		                 .do(_ => {
		                 	       nextBackoff = this.backoff(milliseconds);
		                 	       this.ref.markForCheck(); // this line can probably be removed if you are using default Angular change detection
		                 	                                // but it's needed if you're using OnPush change detection
		                 	      });
	}

	// function that calculates how much time to delay before next emission of TRUE
	// input: time (in milliseconds) that is being transformed by the pipe
	// output: number of milliseconds to backoff
	// note: it is impossible for the input to be a time in the future, because of the error trapping in the transform method
	private backoff(milliseconds: number): number {
		let minutesElapsed = differenceInMinutes(new Date(), milliseconds); // this will always be positive
		let backoffAmountInSeconds: number;
		if (minutesElapsed < 2) {
			backoffAmountInSeconds = 5;
		}
		else if (minutesElapsed >= 2 && minutesElapsed < 5) {
			backoffAmountInSeconds = 15;
		}
		else if (minutesElapsed >=5 && minutesElapsed < 60) {
			backoffAmountInSeconds = 30;
		}
		else if (minutesElapsed >= 60) {
			backoffAmountInSeconds = 300; // 5 minutes
		}
		return backoffAmountInSeconds * 1000;
	}
}