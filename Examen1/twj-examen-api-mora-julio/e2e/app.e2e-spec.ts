import { TwjExamenApiMoraJulioPage } from './app.po';

describe('twj-examen-api-mora-julio App', () => {
  let page: TwjExamenApiMoraJulioPage;

  beforeEach(() => {
    page = new TwjExamenApiMoraJulioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
