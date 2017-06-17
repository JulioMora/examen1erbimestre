import { TwjExamenMoraJulioPage } from './app.po';

describe('twj-examen-mora-julio App', () => {
  let page: TwjExamenMoraJulioPage;

  beforeEach(() => {
    page = new TwjExamenMoraJulioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
