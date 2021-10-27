import { Component, Input, OnInit } from '@angular/core';
import { OnChangeRangeEvent } from '../types';
import { Preset } from "../types";

@Component({
  selector: 'calendar-range',
  templateUrl: './calendar-range.component.html',
  styleUrls: ['./calendar-range.component.less']
})
export class CalendarRangeComponent implements OnInit {

  constructor() { }

  public presets: Preset[] = [];

  ngOnInit() {
    this.presets = [
      "lastMonth",
      "nextMonth",
      {
        name: "The 80s",
        onClick: () => { 
          return {
            from: { month: 0, year: 1980 },
            to: { month: 11, year: 1989 },
          };
        }
      }
    ]
  }
  
  public onPresetSelected(event: OnChangeRangeEvent) {
    console.log(event);
  }
}