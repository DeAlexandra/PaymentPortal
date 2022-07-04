import { render } from '@testing-library/react';
import Payouts from './Payouts';
describe('Payouts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Payouts />);
    expect(baseElement).toBeTruthy();
  });
});
