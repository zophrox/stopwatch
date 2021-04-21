import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { StopwatchService } from '../stopwatch.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{

  time:Date
  flag:boolean = true
constructor(private stopWatchService:StopwatchService) {
    
   }

  ngOnInit() {
    this.stopWatchService.time.subscribe((time)=>{
        this.time = new Date(time)
    })
    this.stopWatchService.flag.subscribe((f)=>{
        this.flag = f
    })


}
}
