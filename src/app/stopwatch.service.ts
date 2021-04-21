import { Injectable } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';

@Injectable()
export class StopwatchService {
  time = new Subject<number>();
  flag = new Subject<boolean>();

  memoryTime: number = 0;
  passedTime: number;

  subscriptionStart$: Subscription;
  constructor() {}

  ngOnInit() {}

  startsTimer() {
    this.flag.next(false);

    let startTime = Date.now();

    this.subscriptionStart$ = interval(100).subscribe(() => {
      this.passedTime =
        this.memoryTime + (Date.now() - startTime - 3600000 * 3);
      this.time.next(this.passedTime);
    });
  }

  stopTimer() {
    this.memoryTime = this.passedTime + 3600000 * 3;
    this.subscriptionStart$.unsubscribe();
  }
  resetTimer() {
    this.subscriptionStart$.unsubscribe();
    this.time.next(-3600000 * 3);
    this.memoryTime=0
  }
}
