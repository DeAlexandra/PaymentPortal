import { render } from '@testing-library/react';
import ToastAlert from './ToastAlert';
describe('ToastAlert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToastAlert />);
    expect(baseElement).toBeTruthy();
  });
});
