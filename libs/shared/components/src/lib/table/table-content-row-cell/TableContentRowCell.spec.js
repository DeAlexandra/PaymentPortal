import { render } from '@testing-library/react';
import TableContentRowCell from './TableContentRowCell';
describe('TableContentRowCell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableContentRowCell />);
    expect(baseElement).toBeTruthy();
  });
});
