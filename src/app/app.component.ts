import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { TooltipDirective } from "@progress/kendo-angular-tooltip";
import styleToCss from 'style-object-to-css-string';
import * as styles from "./input-month/styles";
import { MonthRangeData, OnChangeRangeEvent, Preset } from "./input-month/types";
import { format } from "date-fns";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  moduleStyles = [];
  showPopup: boolean = false;
  selectedRange: MonthRangeData; 
  rangeString: string = "test";
  presets: Preset[];

  public ngOnInit(){ 
    for(let style in styles){ 
      const obj = styles[style];
      this.moduleStyles.push({
        name: style,
        css: styleToCss(obj)
      });
    }

    this.presets = ["lastMonth", "nextMonth", "next12Months",
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

  public togglePopup(){
     this.showPopup = !this.showPopup;
  }

  public debug(event: OnChangeRangeEvent) {
    this.showPopup = false;
    
    const fromDate = new Date(event.from.year, event.from.month, 1);
    const toDate = new Date(event.to.year, event.to.month, 1);

    this.selectedRange = event;
    this.rangeString = `${format(fromDate, "MMMM yyyy")} - ${format(toDate, "MMMM yyyy")}`;

    console.log(event);
  }
}
 