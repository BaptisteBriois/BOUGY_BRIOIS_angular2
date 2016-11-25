import { browser, element, by } from 'protractor';

export class BOUGYBRIOISPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('abbb-root h1')).getText();
  }
}
