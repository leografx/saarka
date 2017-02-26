import { AnniesAppPage } from './app.po';

describe('annies-app App', function() {
  let page: AnniesAppPage;

  beforeEach(() => {
    page = new AnniesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
