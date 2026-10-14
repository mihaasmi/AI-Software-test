import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the first web app intro and GitHub link', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /this is my first web app/i })
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole('link', { name: /github|explore the project/i })[0]
  ).toHaveAttribute('href', 'https://github.com/mihaasmi/AI-Software-test');
});
