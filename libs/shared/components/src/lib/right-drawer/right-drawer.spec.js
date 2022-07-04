import { render } from '@testing-library/react';
import RightDrawer from './RightDrawer';
describe('RightDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RightDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
