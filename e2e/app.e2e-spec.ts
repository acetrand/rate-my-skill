import { AppPage } from './app.po';

describe('rate-my-skill App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Rate my skills');
  });
});
