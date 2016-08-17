import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {convert} from '../convert';
// Import the Feature1 typescript module, this is just an object
import * as Feature1 from './feature1';

// Set up exports for ready conversion to ngModule,
// on the other side of the exports, we will get an
// object that is trivially converted to an ngModule
// see src/main.ts for the other side of this conversion
export const declarations = [AppComponent];
export const imports = [
    BrowserModule,
    CommonModule,
    FormsModule,
    // Convert to an ngModule at the last second
    convert(Feature1)
  ];
export const entryComponents =  [AppComponent];
export const bootstrap = [AppComponent];
