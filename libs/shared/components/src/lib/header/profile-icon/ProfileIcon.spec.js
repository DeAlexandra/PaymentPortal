import { render } from '@testing-library/react';
import ProfileIcon from './ProfileIcon';
describe('ProfileIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileIcon />);
    expect(baseElement).toBeTruthy();
  });
});
