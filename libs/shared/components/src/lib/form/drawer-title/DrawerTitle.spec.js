import { render } from '@testing-library/react';
import DrawerTitle from './DrawerTitle';
describe('DrawerTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrawerTitle />);
    expect(baseElement).toBeTruthy();
  });
});
