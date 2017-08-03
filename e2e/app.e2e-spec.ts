import { TaxPage } from './app.po';

describe('tax App', () => {
  let page: TaxPage;

  beforeEach(() => {
    page = new TaxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
