import { Saaadel.Github.IoPage } from './app.po';

describe('saaadel.github.io App', () => {
  let page: Saaadel.Github.IoPage;

  beforeEach(() => {
    page = new Saaadel.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
