import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  manualTime: any = 0;

  constructor(private router: Router, private timerService: TimerService) { }

  ngOnInit() {
  }

  navigateToPage(page: any) {
    this.router.navigate([page]);
  }

  setCountdownToBo1() {
    this.timerService.setCountdownToBo1();
  }

  setCountdownToBo3() {
    this.timerService.setCountdownToBo3();
  }

  setCountdownToManual() {
    this.timerService.setCountdownToManual(this.manualTime);
  }
  
  startTimer() {
    this.timerService.startTimer();
  }

  pauseTimer() {
    this.timerService.pauseTimer();
  }

  stopTimer() {
    this.timerService.stopTimer();
  }

  get countdownTime() {
    return this.timerService.countdownTime;
  }

  get timeColor() {
    return this.timerService.timeColor;
  }

  get timerOn() {
    return this.timerService.timerOn;
  }

  get maxTime() {
    return this.timerService.maxTime;
  }

}
