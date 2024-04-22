import { Injectable } from '@angular/core';
import { LocalNotifications, Schedule, ScheduleOptions } from '@capacitor/local-notifications';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  countdownTime: number = 0;
  maxTime: number = 0;
  bo1Time: number = 120000;
  bo3Time: number = 3000000;
  timeColor: string = "primary";
  timer: any;
  pause: boolean = false;
  timerOn: boolean = false;
  notification!: ScheduleOptions;
  startTime: any;
  endTime: any;
  remainingTime: any;

  constructor(private vibration: Vibration) { }

  /**
   * Set the countdown time to Bo1 game, which means 20 minutes
   */
  setCountdownToBo1() {
    this.countdownTime = this.bo1Time;
    this.maxTime = this.bo1Time;
  }

  /**
   * Set the countdown time to Bo1 game, which means 50 minutes
   */
  setCountdownToBo3() {
    this.countdownTime = this.bo3Time;
    this.maxTime = this.bo3Time;
  }

  setCountdownToManual(manualTime: any) {
    this.countdownTime = manualTime * 60000;
    this.maxTime = manualTime * 60000;
  }

  startTimer() {
    if(!this.timerOn) {
      this.startTime = Date.now();
      this.endTime = this.startTime + this.countdownTime;
      // Schedule a single notification
      var schedule: Schedule = {
        at: new Date(this.startTime + this.countdownTime),
      };
      this.notification = {
        notifications: [{
          title: 'Timer',
          id: 1,
          body: 'Time is up!',
          schedule: schedule
        }]
      }
      LocalNotifications.schedule(this.notification);
      this.timer = setInterval(() => {
        if(!this.pause) {
          this.countdownTime = this.endTime - Date.now();
          console.log(this.countdownTime);
        if(this.countdownTime > 600000) {
          this.timeColor = "primary";
        } else
        if(this.countdownTime <= 600000) {
          this.timeColor = "warning";
        } else if(this.countdownTime <= 300000) {
          this.timeColor = "danger";
        }
        if(this.countdownTime < 0) {
          // Vibrate 2 seconds
          // Pause for 1 second
          // Vibrate for 2 seconds
          // Patterns work on Android and Windows only
          this.countdownTime = 0;
          this.vibration.vibrate(2000);
          this.timerOn = false;
          clearInterval(this.timer);
        }
        }
        
      }, 500);
      this.timerOn = true;
    } else {
      clearInterval(this.timer);
      this.timerOn = false;
    }
  }

  stopTimer() {
    LocalNotifications.cancel(this.notification);
    clearInterval(this.timer);
    this.countdownTime = 0;
  }

  pauseTimer() {
    LocalNotifications.cancel(this.notification);
    clearInterval(this.timer);
  }
}
