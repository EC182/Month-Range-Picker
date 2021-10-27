import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OnChangeRangeEvent } from '../types';
import { Preset } from "../types";
import { add } from "date-fns";

@Component({
  selector: 'presets',
  templateUrl: './presets.component.html',
  styleUrls: ['./presets.component.less']
})
export class PresetsComponent {

  constructor() { }

  @Input() public presets: Preset[] = [];
  @Output() public readonly presetSelected: EventEmitter<OnChangeRangeEvent> = new EventEmitter();
  
  public presetSelection(preset: Preset){
  // If it's a custom preset...
    if (typeof preset === 'object') {
      this.presetSelected.emit(preset.onClick());
      return;
    }

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const thisMonth = { 
      from: { month: currentMonth, year: currentYear },
      to: { month: currentMonth, year: currentYear },
    };
    const nextMonth = add(today, { months: 1 });
  
    let selectedPreset: OnChangeRangeEvent;

    switch (preset) {
      case 'lastMonth': {
        const lastMonth = add(today, { months: -1 });
        selectedPreset = {
          from: { month: lastMonth.getMonth(), year: lastMonth.getFullYear() },
          to: { month: lastMonth.getMonth(), year: lastMonth.getFullYear() },
        };
      }
      break;

      case 'last3Months': {
        const boundary = add(today, { months: -2 });
        selectedPreset = {
          from: { month: boundary.getMonth(), year: boundary.getFullYear() },
          to: thisMonth.to,
        };
      }
      break;

      case 'last6Months': {
        const boundary = add(today, { months: -5 });
        selectedPreset = {
          from: { month: boundary.getMonth(), year: boundary.getFullYear() },
          to: thisMonth.to,
        };
      }
      break;

      case 'last9Months': {
        const boundary = add(today, { months: -8 });
        selectedPreset = {
          from: { month: boundary.getMonth(), year: boundary.getFullYear() },
          to: thisMonth.to,
        };
      }
      break;

      case 'last12Months': {
        const boundary = add(today, { months: -11 });
        selectedPreset = {
          from: { month: boundary.getMonth(), year: boundary.getFullYear() },
          to: thisMonth.to,
        };
      }
      break;

      case 'nextMonth':
        selectedPreset = {
          from: { month: nextMonth.getMonth(), year: nextMonth.getFullYear() },
          to: { month: nextMonth.getMonth(), year: nextMonth.getFullYear() },
        };
        break;

      case 'next3Months': {
        const boundary = add(today, { months: 3 });
        selectedPreset = {
          from: { month: nextMonth.getMonth(), year: nextMonth.getFullYear() },
          to: { month: boundary.getMonth(), year: boundary.getFullYear() },
        };
      }
      break;

      case 'next6Months': {
        const boundary = add(today, { months: 6 });
        selectedPreset = {
          from: { month: nextMonth.getMonth(), year: nextMonth.getFullYear() },
          to: { month: boundary.getMonth(), year: boundary.getFullYear() },
        };
      }
      break;

      case 'next6Months': {
        const boundary = add(today, { months: 6 });
        selectedPreset = {
          from: { month: nextMonth.getMonth(), year: nextMonth.getFullYear() },
          to: { month: boundary.getMonth(), year: boundary.getFullYear() },
        };
      }
      break;

      case 'next9Months': {
        const boundary = add(today, { months: 9 });
        selectedPreset = {
          from: { month: nextMonth.getMonth(), year: nextMonth.getFullYear() },
          to: { month: boundary.getMonth(), year: boundary.getFullYear() },
        };
      }
      break;

      case 'next12Months': {
        const boundary = add(today, { months: 12 });
        selectedPreset = {
          from: { month: nextMonth.getMonth(), year: nextMonth.getFullYear() },
          to: { month: boundary.getMonth(), year: boundary.getFullYear() },
        };
      }
      break;
      
      case 'thisMonth':
      default:
        selectedPreset = thisMonth;
        break;      
    }

    this.presetSelected.emit(selectedPreset);
  }
}