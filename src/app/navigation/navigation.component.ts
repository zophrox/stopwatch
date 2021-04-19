import { Component, OnInit } from '@angular/core';
import { StopwatchService } from '../stopwatch.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  

  constructor(private stopWatchService:StopwatchService) { }

  ngOnInit() {
  }
  startTimer(){
      this.stopWatchService.startsTimer()
  }
  stopTimer(){
    this.stopWatchService.stopTimer()
  }
  resetTimer(){
    this.stopWatchService.resetTimer()
  }

}
