import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Using render from the react testing library, write a test to see if an App component can render.
test('it renders the app component', () => {
  render(<App />)
})

// Update your test to see if the App component renders a "Counter App" header.
test('App component renders a "Counter App" header', () => {
  render(<App />)
  screen.getByText(/Counter App/)
})

// Write a test that your App displays an initial count of '0'.
test('displays an initial count of 0', () => {
  render(<App />)
  screen.getByText(/0/)
})

// Write a test that your App, when clicking 'increment', displays a count of '1'
test(`when clicking 'increment', displays a count of '1'`, () => {
  render(<App />)

  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton)

  screen.getByText(/1/)
})

// Write a test that your App, when clicking 'decrement', displays a count of '-1'
test(`when clicking 'decrement', displays a count of '-1'`, () => {
  render(<App />)

  const decrementButton = screen.getByText(/decrement/i);
  fireEvent.click(decrementButton);

  screen.getByText(/-1/)
})

// Our requirements have changed a bit - write a test that, given a prop of an initialValue, your app component renders that initial value. Our previous tests should all continue to pass as well after your implementation.
test(`given a prop of an initialValue, your app component renders that initial value`, () => {
  render(<App />)
  
})

// Write a test that, given an initialCount and an 'incrementBy' prop, clicking increment increments our count by the incrementBy value. For example, given an initialCount of 2, and an incrementBy of 3, clicking increment should then display 5.
test.todo(`given an initialCount and an 'incrementBy' prop, clicking increment increments our count by the incrementBy value`)

// Write a test that, given an initialCount and an 'incrementBy' prop, clicking decrement decrements our count by the incrementBy value. For example, given an initialCount of 2, and an incrementBy of 3, clicking increment should then display -1.
test.todo(`given an initialCount and an 'incrementBy' prop, clicking decrement decrements our count by the incrementBy value`)

