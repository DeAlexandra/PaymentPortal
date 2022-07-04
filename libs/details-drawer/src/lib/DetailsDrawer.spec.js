import { render } from '@testing-library/react';
import DetailsDrawer from './DetailsDrawer';
describe('DetailsDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailsDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
