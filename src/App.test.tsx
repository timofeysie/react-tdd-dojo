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

it("should display anagrams of given input", () => {
  const { getByText, getByLabelText } = render(<App />);
  const nameInput = getByLabelText(/Enter text/i);
  fireEvent.change(nameInput, { target: { value: "biro" } });
  fireEvent.click(getByText(/submit/i));
  const expectedAnagrams = [
    "biro",
    "bior",
    "brio",
    "broi",
    "boir",
    "bori",
    "ibro",
    "ibor",
    "irbo",
    "irob",
    "iobr",
    "iorb",
    "rbio",
    "rboi",
    "ribo",
    "riob",
    "roib",
    "robi",
    "obir",
    "obri",
    "oibr",
    "oirb",
    "orbi",
    "orib",
  ];
  expectedAnagrams.forEach((anagram) => {
    expect(document.body.innerHTML).toMatch(anagram);
  });
});
