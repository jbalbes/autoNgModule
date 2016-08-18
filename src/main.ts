import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';

import { NgModule } from '@angular/core';
import {AppComponent} from './app/app.component';

// Import the App typescript module
// import * as App from './app';
// import {convert} from './convert';

// import {AppModule} from 'AppModule';

// Could also do this for this simple case, then use ngModule Foo
// @NgModule(App)
// class Foo { }


@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule]
})
class Foo { }

// Convert to ngModule at last second
platformBrowserDynamic().bootstrapModule(Foo);
