import {FeatureOneComponent} from './feature1Component';

// Set up for easy conversion to ngModule, we can't export a
// var named exports, so we will convert as part of the convert function
// see src/app/index.ts for the other side of this conversion
export const ngExports = [FeatureOneComponent];
export const declarations = [FeatureOneComponent];
