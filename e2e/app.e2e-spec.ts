import { CrossoverFrontPage } from './app.po';

describe('crossover-front App', () => {
  let page: CrossoverFrontPage;

  beforeEach(() => {
    page = new CrossoverFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
