import { render } from '@testing-library/react';
import DrawerForm from './DrawerForm';
describe('DrawerForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrawerForm />);
    expect(baseElement).toBeTruthy();
  });
});
