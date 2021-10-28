import { Component, VERSION } from '@angular/core';
import styleToCss from 'style-object-to-css-string';
import * as styles from "./input-month/styles";
import { Preset } from "./input-month/types";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  moduleStyles = [];

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

  public debug(event: any) {
    console.log(event);
  }
}
