import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from "rxjs";
import { MonthData, MonthRangeData, OnChangeEvent, OnChangeRangeEvent } from '../types';
import { Preset } from "../types";

@Component({
  selector: 'calendar-range',
  templateUrl: './calendar-range.component.html',  
  styleUrls: ['./calendar-range.component.less']
})
export class CalendarRangeComponent implements OnInit {

  @Output() public readonly onRangeSelected: EventEmitter<OnChangeRangeEvent> = new EventEmitter();

  constructor() { }

  public presets: Preset[] = [];

  public selectedYear: number = new Date().getFullYear();

  public selectedRange: MonthRangeData;

  private lastSelectedMonth: MonthData;

  ngOnInit() {
    this.presets = ["lastMonth", "nextMonth",
      {
        name: "The 80s",
        onClick: () => { 
          return {
            from: { month: 0, year: 1980 },
            to: { month: 11, year: 1989 },
          };
        }
      }
    ];

    
  }
  
  public onPresetSelected(event: OnChangeRangeEvent) {    
    this.selectedRange = event;
    this.onRangeSelected.emit(event);
  }

  public monthSelected(event: OnChangeEvent) {
    if(!this.lastSelectedMonth){
      this.lastSelectedMonth = event;
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
}