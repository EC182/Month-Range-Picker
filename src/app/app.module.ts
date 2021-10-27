import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PresetsComponent, PresetDisplayPipe, CalendarComponent, CalendarMonthComponent, CalendarRangeComponent } from "./input-month";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CalendarRangeComponent, PresetsComponent, PresetDisplayPipe, CalendarComponent, CalendarMonthComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
