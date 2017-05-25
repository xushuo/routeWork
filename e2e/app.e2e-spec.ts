import { RouteWorkPage } from './app.po';

describe('route-work App', () => {
  let page: RouteWorkPage;

  beforeEach(() => {
    page = new RouteWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
