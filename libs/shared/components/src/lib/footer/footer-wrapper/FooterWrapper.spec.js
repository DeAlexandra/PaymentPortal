import { render } from '@testing-library/react';
import FooterWrapper from './FooterWrapper';
describe('FooterWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
