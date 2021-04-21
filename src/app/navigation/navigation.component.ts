import { Component, OnInit, ViewChild } from '@angular/core';
import { StopwatchService } from '../stopwatch.service';
import { fromEvent } from 'rxjs';
import { buffer, debounceTime, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  // @ViewChild()
  disabled: boolean = false;

  constructor(private stopWatchService: StopwatchService) {}

  ngOnInit() {
    const waitButton = document.getElementById('wait');
    const clickWait$ = fromEvent(waitButton, 'click');

    const doubleClick$ = clickWait$.pipe(
      buffer(clickWait$.pipe(debounceTime(300))),
      map((list) => {
        return list.length;
      }),
      filter((x) => x === 2)
    );
    doubleClick$.subscribe(() => {
      this.stopWatchService.stopTimer();
      this.disabled = false;
    });
  }

  startTimer() {
    this.stopWatchService.startsTimer();
    this.disabled = true;
  }
  // stopTimer(){
  //   this.stopWatchService.stopTimer()
  //   this.disabled = false
  // }

  resetTimer() {
    this.stopWatchService.resetTimer();
    this.disabled = false;
  }
}
