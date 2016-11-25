import { BOUGYBRIOISPage } from './app.po';

describe('bougy-briois App', function() {
  let page: BOUGYBRIOISPage;

  beforeEach(() => {
    page = new BOUGYBRIOISPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('abbb works!');
  });
});
