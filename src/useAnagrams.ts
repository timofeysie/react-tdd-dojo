import { useState } from "react";

/**
 * Question: "Please create a javascript function that creates all anagrams for input text."
 * ChatGPT: This function uses recursion to generate all the possible anagrams of the input string.
 * It works by taking a string and then iterating over each character in the string,
 * removing it from the string, and generating all the anagrams of the remaining string. 
 * It then appends the removed character to the beginning of each anagram and adds it to the anagrams array. 
 * When the length of the input string is 1, the function returns the string as an array, 
 * since there is only 1 anagram of a string with 1 character.
 * @param input string to create anagrams from
 * @returns array of strings representing all anagrams of the input
 */
function generateAnagrams(input: string) {
  if (input.length === 1) {
    return [input];
  }

  const anagrams: string[] = [];
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const remainingChars = input.slice(0, i) + input.slice(i + 1);
    if (remainingChars.length > 0) {
      const subAnagrams = generateAnagrams(remainingChars);
      subAnagrams.forEach((sub) => {
        anagrams.push(char + sub);
      });
    }
  }
  return anagrams;
}

export function useAnagrams(input: any) {
  const [anagram, setState] = useState(input);

  const updateAnagram = (input: string) => {
    const newVal = generateAnagrams(input);
    setState(newVal.join(" "));
  };

  return [anagram, updateAnagram];
}
