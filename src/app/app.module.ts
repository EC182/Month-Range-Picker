import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopupModule } from "@progress/kendo-angular-popup";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PresetsComponent, PresetDisplayPipe, CalendarMonthComponent, CalendarRangeComponent } from "./input-month";

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, PopupModule ],
  declarations: [ AppComponent, CalendarRangeComponent, PresetsComponent, PresetDisplayPipe, CalendarMonthComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
