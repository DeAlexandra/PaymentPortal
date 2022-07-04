import { render } from '@testing-library/react';
import DrawerMenu from './DrawerMenu';
describe('DrawerMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrawerMenu />);
    expect(baseElement).toBeTruthy();
  });
});
