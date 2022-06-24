import { render } from '@testing-library/react';
import BoxContainer from './BoxContainer';
describe('BoxContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoxContainer />);
    expect(baseElement).toBeTruthy();
  });
});
