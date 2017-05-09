import { NgxBootloadingPage } from './app.po';

describe('ngx-bootloading App', () => {
  let page: NgxBootloadingPage;

  beforeEach(() => {
    page = new NgxBootloadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bt works!');
  });
});
