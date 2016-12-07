import { InsuranceMarketplaceNewPage } from './app.po';

describe('insurance-marketplace-new App', function() {
  let page: InsuranceMarketplaceNewPage;

  beforeEach(() => {
    page = new InsuranceMarketplaceNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
