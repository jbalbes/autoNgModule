import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { NgModule } from '@angular/core';

// Import the App typescript module
import * as App from './app';
import {convert} from './convert';

// Could also do this for this simple case, then use ngModule Foo
// @NgModule(App)
// class Foo { }

// Convert to ngModule at last second
platformBrowserDynamic().bootstrapModule(convert(App));
