import { render } from '@testing-library/react';
import LoadingWheel from './IsLoading';
describe('LoadingWheel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingWheel />);
    expect(baseElement).toBeTruthy();
  });
});
