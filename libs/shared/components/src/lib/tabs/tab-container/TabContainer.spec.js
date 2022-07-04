import { render } from '@testing-library/react';
import TabContainer from './TabContainer';
describe('TabContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabContainer />);
    expect(baseElement).toBeTruthy();
  });
});
