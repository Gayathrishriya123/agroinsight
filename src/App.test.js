import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome to react', () => {
  //render the component
  render(<App />);
  //find element from rendered component
  const linkElement = screen.getByText('Welcome to react!');
  //assert
  expect(linkElement).toBeInTheDocument();
});

test('rendered learn react',()=>{
    //render the component
    render(<App />);
    //find element from rendered component
    let element = screen.getByRole('heading');
    //assert
    expect(element).toBeInTheDocument();

})
