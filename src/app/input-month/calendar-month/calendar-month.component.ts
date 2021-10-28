import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { OnChangeEvent, Localization, MonthData, MonthSequence } from "../types";
import { toMonthSequence } from "../utils";

@Component({
  selector: 'calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.less']
})
export class CalendarMonthComponent implements OnInit {


  @Output() public readonly onMonthSelected: EventEmitter<OnChangeEvent> = new EventEmitter();

  public selectedYear: number = this.currentYear;
  public selectedMonth: MonthData;

  private static readonly _currentDate: Date = new Date(); 

  constructor() { }

  ngOnInit() {     
  }

  public changeYear(increment: number){ 
    this.selectedYear += increment;
  }

  public get currentMonth(): number { 
    return CalendarMonthComponent._currentDate.getMonth();
  }
  
  public get currentYear(): number {
    return CalendarMonthComponent._currentDate.getFullYear();
  }


  public months: string[] = Localization.monthAbbreviations;

  public monthSelection(monthAbbreviation: string) {
    const month = this.months.findIndex((abbr) => monthAbbreviation === abbr);    
    const selectedMonth = { month, year: this.selectedYear };
    this.selectedMonth = selectedMonth;
    this.onMonthSelected.emit(selectedMonth);
  }

  public buttonStyleByMonth(monthAbbreviation: string) {
    const month = this.months.findIndex((abbr) => monthAbbreviation === abbr);    
    const monthSequence = toMonthSequence({month, year: this.selectedYear });    
    return { 
      'currentMonth' : this.isCurrentMonth(monthSequence),
      'selectedMonth' : this.isSelectedMonth(monthSequence), 
    };
  }

  private isCurrentMonth(monthSequence: MonthSequence):boolean {
    const { currentMonth: month, currentYear: year } = this;  
    const currentMonthSequence = toMonthSequence({ month, year});
    return  monthSequence === currentMonthSequence;
  }

  private isSelectedMonth(monthSequence: MonthSequence):boolean {
    const { selectedMonth, selectedYear } = this;
    const selectedMonthSequence = selectedMonth && toMonthSequence(selectedMonth);
    return monthSequence === selectedMonthSequence;
  }
}