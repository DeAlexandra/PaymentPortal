import { render } from '@testing-library/react';
import SimpleCard from './SimpleCard';
describe('SimpleCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleCard />);
    expect(baseElement).toBeTruthy();
  });
});
