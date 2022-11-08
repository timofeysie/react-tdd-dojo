import { useState } from "react";

export function useAnagrams(input: any) {
  const [anagram, setState] = useState(input);

  const updateAnagram = (input: string) => {
    const newVal = input; // <-- custom anagram logic will go here
    setState('ab ba');
  };
  return [anagram, updateAnagram];
}
