import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { OnChangeEvent, Localization, MonthData } from "../types";

@Component({
  selector: 'calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.less']
})
export class CalendarMonthComponent implements OnInit {

  @Output() public readonly onMonthSelected: EventEmitter<OnChangeEvent> = new EventEmitter();

  public selectedYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {     
  }

  public monthSelection(event: OnChangeEvent) {
    this.onMonthSelected.emit(event);
  }

  public changeYear(increment: number){ 
    this.selectedYear += increment;
  }

}