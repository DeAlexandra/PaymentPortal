import { render } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';
describe('LanguageSwitcher', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LanguageSwitcher />);
    expect(baseElement).toBeTruthy();
  });
});
