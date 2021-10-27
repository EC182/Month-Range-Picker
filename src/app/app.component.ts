import { Component, VERSION } from '@angular/core';
import styleToCss from 'style-object-to-css-string';
import * as styles from "./input-month/styles";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  moduleStyles = [];

  public ngOnInit(){ 
    for(let style in styles){ 
      const obj = styles[style];
      this.moduleStyles.push({
        name: style,
        css: styleToCss(obj)
      });
    }
  }
}
