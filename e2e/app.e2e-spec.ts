import { AutoNgModulePage } from './app.po';

describe('auto-ng-module App', function() {
  let page: AutoNgModulePage;

  beforeEach(() => {
    page = new AutoNgModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
