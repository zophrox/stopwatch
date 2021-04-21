import { Injectable } from '@angular/core';
import { interval, Subject,  Subscription } from 'rxjs';


@Injectable()
export class StopwatchService {
    time = new Subject<number>()
    flag = new Subject<boolean>()

startStop:boolean = false

subscriptionStart:Subscription
  constructor() {
    
   }

  ngOnInit() {
   
}

startsTimer(){
    this.flag.next(false) 
    this.startStop=true
    
    
    let startTime = Date.now()
    
    this.subscriptionStart = interval(100).subscribe(()=>{
        let passedTime =  Date.now() - startTime - 3600000*3
            this.time.next(passedTime)
        }) 
}
// startsTimer(){
//     this.flag.next(false) 
//     this.startStop=!this.startStop
//     if(this.startStop){
//         let startTime = Date.now()
//         this.subscriptionStart = interval(100).subscribe(()=>{
//         let passedTime =  Date.now() - startTime - 3600000*3
//             this.time.next(passedTime)
//         })} else{
//             this.subscriptionStart.unsubscribe()
//         }
// }


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
