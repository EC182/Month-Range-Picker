import { Component, OnInit, Output, EventEmitter, HostBinding, Input } from '@angular/core';
import { OnChangeEvent, Localization, MonthData, MonthRangeData, MonthSequence } from "../types";
import { toMonthSequence } from "../utils";

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent {

  private static readonly _currentDate: Date = new Date(); 
  
  @Input() public year: number = this.currentYear;
  
  @Input() public highlightRange: MonthRangeData;

  @Output() public readonly onMonthSelected: EventEmitter<OnChangeEvent> = new EventEmitter();

  public get currentMonth(): number { 
    return CalendarComponent._currentDate.getMonth();
  }
  
  public get currentYear(): number {
    return CalendarComponent._currentDate.getFullYear();
  }

  public selectedMonth: MonthData;

  public months: string[] = Localization.monthAbbreviations;

  public monthSelection(monthAbbreviation: string) {
    const month = this.months.findIndex((abbr) => monthAbbreviation === abbr);    
    const selectedMonth = { month, year: this.year };
    this.selectedMonth = selectedMonth;
    this.onMonthSelected.emit(selectedMonth);
  }

  public buttonStyleByMonth(monthAbbreviation: string) {
    const month = this.months.findIndex((abbr) => monthAbbreviation === abbr);    
    const monthSequence = toMonthSequence({month, year: this.year });
    const { isStart, isEnd, isInRange } = this.isMonthInRange(monthSequence);
    return { 
      'currentMonth' : this.isCurrentMonth(monthSequence),
      'selectedMonth' : this.isSelectedMonth(monthSequence),
      'selectedMonthRangeStart' : isStart,
      'selectedMonthRangeEnd' : isEnd,
      'monthInRange' : isInRange
    };
  }

  public isCurrentMonth(monthSequence: MonthSequence):boolean {
    const { currentMonth: month, currentYear: year } = this;  
    const currentMonthSequence = toMonthSequence({ month, year});
    return  monthSequence === currentMonthSequence;
  }

  public isSelectedMonth(monthSequence: MonthSequence):boolean {
    const { selectedMonth, year } = this;
    const selectedMonthSequence = selectedMonth && toMonthSequence(selectedMonth);
    return monthSequence === selectedMonthSequence;
  }

  public isMonthInRange(currentMonthSequence: MonthSequence): { isStart: boolean, isEnd:boolean, isInRange: boolean} {    
    const defaultValues = { isStart: false, isEnd: false, isInRange: false };
    const { highlightRange } = this;  

    if(!highlightRange) {
      return defaultValues;
    }

    const { to, from } = highlightRange;
    if(!(to && from)){
      return defaultValues;
    }
    
    const fromMonthSequence = toMonthSequence(from);
    const toMs = toMonthSequence(to);

    const isStart = fromMonthSequence === currentMonthSequence;
    const isEnd = toMs === currentMonthSequence;  
    const isInRange = fromMonthSequence < currentMonthSequence && currentMonthSequence < toMs;

    return {
      isStart, isEnd, isInRange
    }
  }
}