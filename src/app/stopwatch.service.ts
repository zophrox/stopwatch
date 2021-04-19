import { Injectable } from '@angular/core';
import { interval, Subject,  Subscription } from 'rxjs';


@Injectable()
export class StopwatchService {
    time = new Subject<number>()
    flag = new Subject<boolean>()

startStop:boolean = false
passedTime:number
startTime:number
subscriptionStart:Subscription
  constructor() {
    
   }

  ngOnInit() {
   
}

startsTimer(){
    this.flag.next(false) 
    this.startStop=!this.startStop
    if(this.startStop){
        this.startTime = Date.now()
        this.subscriptionStart = interval(100).subscribe(()=>{
        this.passedTime =  Date.now() - this.startTime - 3600000*3
            this.time.next(this.passedTime)
        })} else{
            this.subscriptionStart.unsubscribe()
        }
}


stopTimer(){
    this.startStop=false
    this.subscriptionStart.unsubscribe()

}
resetTimer(){
    this.startStop=false
    this.subscriptionStart.unsubscribe()
    this.time.next(-3600000*3)
}
}
