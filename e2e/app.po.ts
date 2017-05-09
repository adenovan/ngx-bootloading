import { browser, element, by } from 'protractor';

export class NgxBootloadingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bt-root h1')).getText();
  }
}
