import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from "@testing-library/react";
import App, { strikeHandler } from './App';

afterEach(cleanup)

describe("<App />", () => {

  it('renders without crashing using ReactDOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    render(<App />)

  })

  it("renders titles and buttons", () => {
    const app = render(<App />);

    app.getByText(/strikes/i);
    app.getByText(/balls/i);
    app.getByText('Strike');
    app.getByText('Ball');
    app.getByText(/foul/i);
    app.getByText(/hit/i);
  });

  // describe('strikeHandler()', () => {

  //   it('should increase strikes by 1 unless strikes is at 2', () => {
  //     expect(strikeHandler()).toBe(strikes === strikes + 1)
  //   })

  // })
  

})
