import { render } from '@testing-library/react';
import FormButtons from './FormButtons';
describe('FormButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormButtons />);
    expect(baseElement).toBeTruthy();
  });
});
