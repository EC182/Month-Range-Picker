import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalendarRangeComponent, PresetsComponent, PresetDisplayPipe, CalendarComponent, MonthPickerComponent, MonthRangePickerComponent } from "./input-month";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CalendarRangeComponent, PresetsComponent, PresetDisplayPipe, CalendarComponent, MonthPickerComponent, MonthRangePickerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
