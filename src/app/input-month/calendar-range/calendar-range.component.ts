import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Localization, MonthData, MonthRangeData, MonthSequence, OnChangeEvent, OnChangeRangeEvent, Preset } from '../types';
import { toMonthSequence } from "../utils";

@Component({
  selector: 'calendar-range',
  templateUrl: './calendar-range.component.html',  
  styleUrls: ['./calendar-range.component.less']
})
export class CalendarRangeComponent {

  @Input() public selectedRange: MonthRangeData;
  @Input() public presets: Preset[] = [];
  @Output() public readonly onRangeSelected: EventEmitter<OnChangeRangeEvent> = new EventEmitter();

  constructor() { }

  public months: string[] = Localization.monthAbbreviations;

  public selectedYear: number = new Date().getFullYear();

  
  public get currentMonth(): number { 
    return CalendarRangeComponent._currentDate.getMonth();
  }
  
  public get currentYear(): number {
    return CalendarRangeComponent._currentDate.getFullYear();
  }

  private static readonly _currentDate: Date = new Date(); 
  private lastSelectedMonth: MonthData;
  
  public onPresetSelected(event: OnChangeRangeEvent) {    
    this.selectedYear = event.from.year;
    this.selectedRange = event;
    this.onRangeSelected.emit(event);
  }

  public monthSelected(monthAbbreviation: string, year: number) {
    const month = this.months.findIndex((abbr) => monthAbbreviation === abbr);    
    const event = { month, year };

    if(!this.lastSelectedMonth){
      this.lastSelectedMonth = event;
      this.selectedRange = { from: event, to: undefined };
      return;
    }

    const d1 = this.lastSelectedMonth;
    const d2 = event;

    if (d2.year > d1.year || (d2.year === d1.year && d2.month >= d1.month)) {
      this.selectedRange = { from: d1, to: d2 };
    } else {
      this.selectedRange = { from: d2, to: d1 };
    }    

    this.onRangeSelected.emit(this.selectedRange);
    this.lastSelectedMonth = undefined;
  }
  
  public changeYear(increment: number) {
    this.selectedYear += increment;
  }

  public buttonStyleByMonth(monthAbbreviation: string, year: number) {
    const monthSequence = this.convertToMonthSequence(monthAbbreviation, year);
    const { isStart, isEnd, isInRange } = this.isMonthInRange(monthSequence);
    return { 
      'currentMonth' : this.isCurrentMonth(monthSequence),
      'selectedMonth' : this.isSelectedMonth(monthSequence), 
      'selectedMonthRangeStart' : isStart,
      'selectedMonthRangeEnd' : isEnd,
      'monthInRange' : isInRange 
    };
  }

  private isCurrentMonth(monthSequence: MonthSequence):boolean {
    const { currentMonth: month, currentYear: year } = this;  
    const currentMonthSequence = toMonthSequence({ month, year });
    return  monthSequence === currentMonthSequence;
  }

  private isSelectedMonth(monthSequence: MonthSequence):boolean {
    if(!this.selectedRange) {
      return false;
    }
    const { to, from } = this.selectedRange;
    const startMonthSequence = from && toMonthSequence(from);
    const endMonthSequence = to && toMonthSequence(to);
    return monthSequence === startMonthSequence || monthSequence === endMonthSequence;
  }

  private isMonthInRange(currentMonthSequence: MonthSequence): { isStart: boolean, isEnd:boolean, isInRange: boolean} {    
    const defaultValues = { isStart: false, isEnd: false, isInRange: false };
    const { selectedRange } = this;  

    if(!selectedRange) {
      return defaultValues;
    }

    const { to, from } = selectedRange;
    if(!(to && from)){
      return defaultValues;
    }

    const startMonthSequence = toMonthSequence(from);
    const endMonthSequence = toMonthSequence(to);

    console.log(startMonthSequence);

    const startAndEndAreEqual = startMonthSequence === endMonthSequence;
    const isStart = startMonthSequence === currentMonthSequence && !startAndEndAreEqual;
    const isEnd = endMonthSequence === currentMonthSequence && !startAndEndAreEqual;  
    const isInRange = startMonthSequence < currentMonthSequence && currentMonthSequence < endMonthSequence;

    return {
      isStart, isEnd, isInRange
    }
  }

  private convertToMonthSequence(monthAbbreviation: string, year: number): number {
    const month = this.months.findIndex((abbr) => monthAbbreviation === abbr);    
    return toMonthSequence({month, year });    
  }
}