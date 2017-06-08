import { TestStartPage } from './app.po';

describe('test-start App', () => {
  let page: TestStartPage;

  beforeEach(() => {
    page = new TestStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
