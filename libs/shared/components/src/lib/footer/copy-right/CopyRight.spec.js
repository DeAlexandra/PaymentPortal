import { render } from '@testing-library/react';
import CopyRight from './CopyRight';
describe('CopyRight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CopyRight />);
    expect(baseElement).toBeTruthy();
  });
});
