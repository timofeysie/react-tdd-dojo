import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import App from './App';

it('should display anagrams of given input', () => {
  const {getByText, getByLabelText} = render(<App/>);
  const nameInput = getByLabelText(/Enter text/i);
  fireEvent.change(nameInput, {target: {value: "ab"}});
  fireEvent.click(getByText(/submit/i));  
  const expectedAnagrams = [
    'ab', 'ba'
  ];
  expectedAnagrams.forEach((anagram) => {
    expect(document.body.innerHTML).toMatch(anagram);
  });
});
