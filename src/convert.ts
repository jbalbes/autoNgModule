import { NgModule } from '@angular/core';

interface INgModule {
  declarations?: any[];
  imports?: any[];
  providers?: any[];
  bootstrap?: any[];
  entryComponents?: any[];
  exports?: any[];
  ngExports?: any[];
}

// Programatically create an ngModule from an object
export function convert(x: INgModule) {
  // You can not export something named 'exports' from a Typescript module, so hack around it for now
  x.exports = x.ngExports;
  @NgModule(x)
  class Y { }
  return Y;
}