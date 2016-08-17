# AutoNgModule

This project was created to illustrate a mechanical way to make Typescript/ES6 modules work almost interchangabley with ngModules.

The core idea is that an ngModule is primarily defined by the configuration object that is passed to the decorator.
Typescript/ES6 modules can be imported as objects, which means that they can be used to define ngModules in a 1-to-1 way.

IMO, this pattern renders the ngModule decorator (not necessarily the concept of an Angular module) redundant. I would be happy to be proven wrong though.

The key files to look at are src/main.ts, src/convert.ts, src/app/index.ts and src/app/feature1/index.ts

Comments and suggestions are welcome.