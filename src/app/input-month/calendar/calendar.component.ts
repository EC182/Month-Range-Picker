import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { OnChangeEvent, Localization } from "../types";

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {

  private static readonly _currentDate: Date = new Date(); 
  
  @Output() public readonly onMonthChange: EventEmitter<OnChangeEvent> = new EventEmitter();

  public get currentMonth(): number { 
    return CalendarComponent._currentDate.getMonth();
  }
  
  public get currentYear(): number {
    return CalendarComponent._currentDate.getFullYear();
  }

  public selectedYear: number = this.currentYear;
  public selectedMonth: number = -1;
  public months: string[] = [];

  constructor() { }

  ngOnInit() {
     this.months = Localization.monthAbbreviations;
  }

  public changeYear(increment: number) {
    this.selectedYear += increment;
  }

  public inputYear(value: number) {
    if(Number.isInteger(value)){
      this.selectedYear = Number(value);
    }        
  }
}